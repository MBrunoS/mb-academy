import { createServer } from "node:http";
import { randomUUID, scryptSync, timingSafeEqual } from "node:crypto";
import { readFileSync } from "node:fs";

const PORT = Number(process.env.PORT ?? 3333);
const seed = JSON.parse(
  readFileSync(new URL("../fixtures/seed.json", import.meta.url), "utf8"),
);
const TYPES = new Set(["income", "expense"]);
const CATEGORIES = new Set([
  "salary", "freelance", "food", "housing", "transport", "health",
  "leisure", "education", "other",
]);

const hashPassword = (password) => scryptSync(password, "mb-academy-reference", 32);
const publicUser = ({ passwordHash: _passwordHash, ...user }) => user;
const demoUser = {
  id: randomUUID(),
  name: seed.user.name,
  email: seed.user.email,
  passwordHash: hashPassword(seed.user.password),
};
const users = [demoUser];
const tokens = new Map();
const transactions = seed.transactions.map((transaction) => ({
  ...transaction,
  id: randomUUID(),
  userId: demoUser.id,
  createdAt: new Date().toISOString(),
}));

function send(response, statusCode, body) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  if (statusCode === 204) return response.end();
  response.end(JSON.stringify(body));
}

function error(response, statusCode, code, message, fieldErrors) {
  send(response, statusCode, {
    statusCode,
    code,
    message,
    ...(fieldErrors ? { fieldErrors } : {}),
  });
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function authenticate(request, response) {
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, "");
  const userId = token && tokens.get(token);
  const user = users.find((candidate) => candidate.id === userId);
  if (!user) {
    error(response, 401, "UNAUTHORIZED", "Autenticação ausente ou inválida.");
    return null;
  }
  return user;
}

function validateTransaction(input, partial = false) {
  const errors = {};
  const required = ["type", "description", "amountInCents", "category", "occurredAt"];
  for (const field of Object.keys(input)) {
    if (!required.includes(field)) errors[field] = ["Campo desconhecido."];
  }
  if (!partial) {
    for (const field of required) {
      if (input[field] === undefined) errors[field] = ["Campo obrigatório."];
    }
  }
  if (input.type !== undefined && !TYPES.has(input.type)) errors.type = ["Tipo inválido."];
  if (input.description !== undefined && (typeof input.description !== "string" || input.description.trim().length < 1 || input.description.length > 120)) {
    errors.description = ["Use uma descrição entre 1 e 120 caracteres."];
  }
  if (input.amountInCents !== undefined && (!Number.isInteger(input.amountInCents) || input.amountInCents < 1)) {
    errors.amountInCents = ["Informe um inteiro maior que zero."];
  }
  if (input.category !== undefined && !CATEGORIES.has(input.category)) errors.category = ["Categoria inválida."];
  if (input.occurredAt !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(input.occurredAt)) {
    errors.occurredAt = ["Use uma data no formato YYYY-MM-DD."];
  }
  return errors;
}

function validateFilters(searchParams) {
  const errors = {};
  const type = searchParams.get("type");
  const category = searchParams.get("category");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  if (type && !TYPES.has(type)) errors.type = ["Tipo inválido."];
  if (category && !CATEGORIES.has(category)) errors.category = ["Categoria inválida."];
  if (from && !/^\d{4}-\d{2}-\d{2}$/.test(from)) errors.from = ["Use uma data no formato YYYY-MM-DD."];
  if (to && !/^\d{4}-\d{2}-\d{2}$/.test(to)) errors.to = ["Use uma data no formato YYYY-MM-DD."];
  if (from && to && from > to) errors.period = ["A data inicial deve ser anterior ou igual à final."];
  return errors;
}

function ownTransactions(userId) {
  return transactions.filter((transaction) => transaction.userId === userId);
}

function serializeTransaction({ userId: _userId, ...transaction }) {
  return transaction;
}

function filterTransactions(items, searchParams) {
  const type = searchParams.get("type");
  const category = searchParams.get("category");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  return items.filter((item) =>
    (!type || item.type === type)
    && (!category || item.category === category)
    && (!from || item.occurredAt >= from)
    && (!to || item.occurredAt <= to),
  );
}

const server = createServer(async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", request.headers.origin ?? "*");
  response.setHeader("Vary", "Origin");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

  if (request.method === "OPTIONS") return send(response, 204);

  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  const transactionMatch = url.pathname.match(/^\/transactions\/([^/]+)$/);

  try {
    if (request.method === "GET" && url.pathname === "/health") {
      return send(response, 200, { status: "ok" });
    }

    if (request.method === "POST" && url.pathname === "/auth/register") {
      const input = await readBody(request);
      const fieldErrors = {};
      for (const field of Object.keys(input)) {
        if (!["name", "email", "password"].includes(field)) fieldErrors[field] = ["Campo desconhecido."];
      }
      if (typeof input.name !== "string" || input.name.trim().length < 2) fieldErrors.name = ["Informe pelo menos 2 caracteres."];
      if (typeof input.email !== "string" || !/^\S+@\S+\.\S+$/.test(input.email)) fieldErrors.email = ["Informe um e-mail válido."];
      if (typeof input.password !== "string" || input.password.length < 8) fieldErrors.password = ["Use pelo menos 8 caracteres."];
      if (Object.keys(fieldErrors).length) return error(response, 400, "VALIDATION_ERROR", "Revise os campos informados.", fieldErrors);
      const email = input.email.toLowerCase();
      if (users.some((user) => user.email === email)) return error(response, 409, "EMAIL_ALREADY_EXISTS", "Já existe uma conta com este e-mail.");
      const user = { id: randomUUID(), name: input.name.trim(), email, passwordHash: hashPassword(input.password) };
      users.push(user);
      const accessToken = randomUUID();
      tokens.set(accessToken, user.id);
      return send(response, 201, { user: publicUser(user), accessToken });
    }

    if (request.method === "POST" && url.pathname === "/auth/login") {
      const input = await readBody(request);
      const user = users.find((candidate) => candidate.email === String(input.email).toLowerCase());
      const candidateHash = typeof input.password === "string" ? hashPassword(input.password) : Buffer.alloc(32);
      if (!user || !timingSafeEqual(user.passwordHash, candidateHash)) return error(response, 401, "INVALID_CREDENTIALS", "E-mail ou senha incorretos.");
      const accessToken = randomUUID();
      tokens.set(accessToken, user.id);
      return send(response, 200, { user: publicUser(user), accessToken });
    }

    if (request.method === "GET" && url.pathname === "/me") {
      const user = authenticate(request, response);
      if (!user) return;
      return send(response, 200, publicUser(user));
    }

    if (request.method === "GET" && url.pathname === "/transactions") {
      const user = authenticate(request, response);
      if (!user) return;
      const page = Number(url.searchParams.get("page") ?? 1);
      const limit = Number(url.searchParams.get("limit") ?? 10);
      if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1 || limit > 100) {
        return error(response, 400, "VALIDATION_ERROR", "Paginação inválida.");
      }
      const fieldErrors = validateFilters(url.searchParams);
      if (Object.keys(fieldErrors).length) return error(response, 400, "VALIDATION_ERROR", "Revise os filtros informados.", fieldErrors);
      const filtered = filterTransactions(ownTransactions(user.id), url.searchParams)
        .sort((a, b) => b.occurredAt.localeCompare(a.occurredAt));
      const start = (page - 1) * limit;
      return send(response, 200, {
        data: filtered.slice(start, start + limit).map(serializeTransaction),
        meta: { page, limit, total: filtered.length, totalPages: Math.ceil(filtered.length / limit) },
      });
    }

    if (request.method === "POST" && url.pathname === "/transactions") {
      const user = authenticate(request, response);
      if (!user) return;
      const input = await readBody(request);
      const fieldErrors = validateTransaction(input);
      if (Object.keys(fieldErrors).length) return error(response, 400, "VALIDATION_ERROR", "Revise os campos informados.", fieldErrors);
      const transaction = {
        id: randomUUID(), userId: user.id, type: input.type,
        description: input.description.trim(), amountInCents: input.amountInCents,
        category: input.category, occurredAt: input.occurredAt,
        createdAt: new Date().toISOString(),
      };
      transactions.push(transaction);
      return send(response, 201, serializeTransaction(transaction));
    }

    if (transactionMatch && ["GET", "PATCH", "DELETE"].includes(request.method)) {
      const user = authenticate(request, response);
      if (!user) return;
      const index = transactions.findIndex((item) => item.id === transactionMatch[1] && item.userId === user.id);
      if (index === -1) return error(response, 404, "TRANSACTION_NOT_FOUND", "Transação não encontrada.");
      if (request.method === "GET") return send(response, 200, serializeTransaction(transactions[index]));
      if (request.method === "DELETE") {
        transactions.splice(index, 1);
        return send(response, 204);
      }
      const input = await readBody(request);
      const fieldErrors = validateTransaction(input, true);
      if (Object.keys(input).length === 0) fieldErrors.body = ["Informe pelo menos um campo."];
      if (Object.keys(fieldErrors).length) return error(response, 400, "VALIDATION_ERROR", "Revise os campos informados.", fieldErrors);
      const allowed = Object.fromEntries(Object.entries(input).filter(([key]) => ["type", "description", "amountInCents", "category", "occurredAt"].includes(key)));
      transactions[index] = { ...transactions[index], ...allowed };
      return send(response, 200, serializeTransaction(transactions[index]));
    }

    if (request.method === "GET" && url.pathname === "/summary") {
      const user = authenticate(request, response);
      if (!user) return;
      const fieldErrors = validateFilters(url.searchParams);
      if (Object.keys(fieldErrors).length) return error(response, 400, "VALIDATION_ERROR", "Revise os filtros informados.", fieldErrors);
      const items = filterTransactions(ownTransactions(user.id), url.searchParams);
      const incomeInCents = items.filter((item) => item.type === "income").reduce((sum, item) => sum + item.amountInCents, 0);
      const expenseItems = items.filter((item) => item.type === "expense");
      const expenseInCents = expenseItems.reduce((sum, item) => sum + item.amountInCents, 0);
      const totals = new Map();
      for (const item of expenseItems) totals.set(item.category, (totals.get(item.category) ?? 0) + item.amountInCents);
      return send(response, 200, {
        incomeInCents,
        expenseInCents,
        balanceInCents: incomeInCents - expenseInCents,
        byCategory: [...totals].map(([category, amountInCents]) => ({ category, amountInCents })),
      });
    }

    return error(response, 404, "ROUTE_NOT_FOUND", "Rota não encontrada.");
  } catch (caught) {
    if (caught instanceof SyntaxError) return error(response, 400, "INVALID_JSON", "O corpo da requisição não contém JSON válido.");
    console.error(caught);
    return error(response, 500, "INTERNAL_ERROR", "Erro interno na API de referência.");
  }
});

server.listen(PORT, () => {
  console.log(`MB Finanças reference API: http://localhost:${PORT}`);
  console.log("Demo: ana@mbacademy.dev / senha123");
});
