import { test } from "node:test";
import assert from "node:assert/strict";

const baseUrl = process.env.API_BASE_URL ?? "http://localhost:3333";

async function request(path, { token, ...init } = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      ...(init.body ? { "content-type": "application/json" } : {}),
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...init.headers,
    },
  });
  const body = response.status === 204 ? null : await response.json();
  return { response, body };
}

async function register(label) {
  const email = `${label}-${Date.now()}-${Math.random().toString(16).slice(2)}@example.com`;
  const result = await request("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name: `Aluno ${label}`, email, password: "senha-segura" }),
  });
  assert.equal(result.response.status, 201);
  assert.equal(result.body.user.email, email);
  assert.ok(result.body.accessToken);
  return result.body;
}

test("health check", async () => {
  const { response, body } = await request("/health");
  assert.equal(response.status, 200);
  assert.deepEqual(body, { status: "ok" });
});

test("preflight CORS e login da conta de demonstração", async () => {
  const preflight = await fetch(`${baseUrl}/transactions`, {
    method: "OPTIONS",
    headers: { origin: "http://localhost:5173" },
  });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get("access-control-allow-origin"), "http://localhost:5173");

  const login = await request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email: "ana@mbacademy.dev", password: "senha123" }),
  });
  assert.equal(login.response.status, 200);
  const me = await request("/me", { token: login.body.accessToken });
  assert.equal(me.response.status, 200);
  assert.equal(me.body.email, "ana@mbacademy.dev");
  assert.equal(me.body.password, undefined);
});

test("rotas privadas exigem autenticação e seguem o formato de erro", async () => {
  const { response, body } = await request("/transactions");
  assert.equal(response.status, 401);
  assert.equal(body.statusCode, 401);
  assert.equal(body.code, "UNAUTHORIZED");
  assert.equal(typeof body.message, "string");
});

test("cadastro rejeita e-mail duplicado", async () => {
  const email = `duplicado-${Date.now()}@example.com`;
  const payload = { name: "Conta Duplicada", email, password: "senha-segura" };
  assert.equal((await request("/auth/register", { method: "POST", body: JSON.stringify(payload) })).response.status, 201);
  const duplicate = await request("/auth/register", { method: "POST", body: JSON.stringify(payload) });
  assert.equal(duplicate.response.status, 409);
  assert.equal(duplicate.body.code, "EMAIL_ALREADY_EXISTS");
});

test("fluxo completo de transação, filtros, resumo e remoção", async () => {
  const { accessToken } = await register("crud");
  const transaction = {
    type: "expense",
    description: "Curso de TypeScript",
    amountInCents: 12990,
    category: "education",
    occurredAt: "2026-09-09",
  };

  const created = await request("/transactions", {
    token: accessToken,
    method: "POST",
    body: JSON.stringify(transaction),
  });
  assert.equal(created.response.status, 201);
  assert.match(created.body.id, /^[0-9a-f-]{36}$/i);

  const income = await request("/transactions", {
    token: accessToken,
    method: "POST",
    body: JSON.stringify({
      type: "income",
      description: "Freelance",
      amountInCents: 50000,
      category: "freelance",
      occurredAt: "2026-09-10",
    }),
  });
  assert.equal(income.response.status, 201);

  const found = await request(`/transactions/${created.body.id}`, { token: accessToken });
  assert.equal(found.response.status, 200);
  assert.equal(found.body.description, transaction.description);

  const page = await request("/transactions?type=expense&category=education&page=1&limit=5", { token: accessToken });
  assert.equal(page.response.status, 200);
  assert.equal(page.body.meta.total, 1);
  assert.equal(page.body.data[0].amountInCents, 12990);

  const paginated = await request("/transactions?page=1&limit=1", { token: accessToken });
  assert.equal(paginated.body.meta.total, 2);
  assert.equal(paginated.body.meta.totalPages, 2);
  assert.equal(paginated.body.data.length, 1);

  const updated = await request(`/transactions/${created.body.id}`, {
    token: accessToken,
    method: "PATCH",
    body: JSON.stringify({ amountInCents: 14990 }),
  });
  assert.equal(updated.response.status, 200);
  assert.equal(updated.body.amountInCents, 14990);

  const summary = await request("/summary?from=2026-09-01&to=2026-09-30", { token: accessToken });
  assert.equal(summary.response.status, 200);
  assert.equal(summary.body.incomeInCents, 50000);
  assert.equal(summary.body.expenseInCents, 14990);
  assert.equal(summary.body.balanceInCents, 35010);
  assert.deepEqual(summary.body.byCategory, [{ category: "education", amountInCents: 14990 }]);

  assert.equal((await request(`/transactions/${created.body.id}`, { token: accessToken, method: "DELETE" })).response.status, 204);
  assert.equal((await request(`/transactions/${created.body.id}`, { token: accessToken })).response.status, 404);
});

test("uma conta não acessa transações de outra", async () => {
  const owner = await register("owner");
  const stranger = await register("stranger");
  const created = await request("/transactions", {
    token: owner.accessToken,
    method: "POST",
    body: JSON.stringify({
      type: "income",
      description: "Freelance",
      amountInCents: 80000,
      category: "freelance",
      occurredAt: "2026-09-09",
    }),
  });

  const hidden = await request(`/transactions/${created.body.id}`, { token: stranger.accessToken });
  assert.equal(hidden.response.status, 404);
});

test("valida dados e devolve erros por campo", async () => {
  const { accessToken } = await register("validation");
  const invalid = await request("/transactions", {
    token: accessToken,
    method: "POST",
    body: JSON.stringify({ type: "expense", description: "", amountInCents: 0, category: "invalid", occurredAt: "hoje" }),
  });
  assert.equal(invalid.response.status, 400);
  assert.equal(invalid.body.code, "VALIDATION_ERROR");
  assert.ok(invalid.body.fieldErrors.description);
  assert.ok(invalid.body.fieldErrors.amountInCents);
  assert.ok(invalid.body.fieldErrors.category);
  assert.ok(invalid.body.fieldErrors.occurredAt);

  const filters = await request("/transactions?type=unknown&from=2026-10-01&to=2026-09-01", { token: accessToken });
  assert.equal(filters.response.status, 400);
  assert.ok(filters.body.fieldErrors.type);
  assert.ok(filters.body.fieldErrors.period);
});
