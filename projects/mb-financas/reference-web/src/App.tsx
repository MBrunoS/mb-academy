import { FormEvent, useCallback, useEffect, useState } from "react";
import { api, Category, Summary, Transaction, TransactionInput, TransactionType, User } from "./api";

const categories: Array<{ value: Category; label: string }> = [
  { value: "salary", label: "Salário" }, { value: "freelance", label: "Freelance" },
  { value: "food", label: "Alimentação" }, { value: "housing", label: "Moradia" },
  { value: "transport", label: "Transporte" }, { value: "health", label: "Saúde" },
  { value: "leisure", label: "Lazer" }, { value: "education", label: "Educação" },
  { value: "other", label: "Outros" },
];
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function toCents(value: string) { return Math.round(Number(value.replace(",", ".")) * 100); }

export function App() {
  const [session, setSession] = useState<{ user: User; token: string } | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [fromFilter, setFromFilter] = useState("");
  const [toFilter, setToFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const load = useCallback(async () => {
    if (!session) return;
    setStatus("loading");
    setMessage("");
    try {
      const params = new URLSearchParams({ page: String(page), limit: "5" });
      if (typeFilter) params.set("type", typeFilter);
      if (categoryFilter) params.set("category", categoryFilter);
      if (fromFilter) params.set("from", fromFilter);
      if (toFilter) params.set("to", toFilter);
      const query = `?${params}`;
      const summaryParams = new URLSearchParams();
      if (fromFilter) summaryParams.set("from", fromFilter);
      if (toFilter) summaryParams.set("to", toFilter);
      const summaryQuery = summaryParams.size ? `?${summaryParams}` : "";
      const [pageResult, totals] = await Promise.all([api.list(session.token, query), api.summary(session.token, summaryQuery)]);
      setTransactions(pageResult.data);
      setTotalPages(Math.max(pageResult.meta.totalPages, 1));
      setSummary(totals);
      setStatus("idle");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Não foi possível carregar os dados.");
      setStatus("error");
    }
  }, [session, typeFilter, categoryFilter, fromFilter, toFilter, page]);

  useEffect(() => { void load(); }, [load]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const data = new FormData(event.currentTarget);
    try {
      const email = String(data.get("email"));
      const password = String(data.get("password"));
      const result = authMode === "register"
        ? await api.register(String(data.get("name")), email, password)
        : await api.login(email, password);
      setSession({ user: result.user, token: result.accessToken });
      setStatus("idle");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Falha no login.");
      setStatus("error");
    }
  }

  async function createTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!session) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const input: TransactionInput = {
      type: String(data.get("type")) as TransactionType,
      description: String(data.get("description")),
      amountInCents: toCents(String(data.get("amount"))),
      category: String(data.get("category")) as Category,
      occurredAt: String(data.get("occurredAt")),
    };
    try {
      await api.create(session.token, input);
      form.reset();
      await load();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Falha ao salvar."); }
  }

  async function removeTransaction(id: string) {
    if (!session || !confirm("Remover esta transação?")) return;
    await api.remove(session.token, id);
    await load();
  }

  async function editTransaction(transaction: Transaction) {
    if (!session) return;
    const description = prompt("Nova descrição", transaction.description)?.trim();
    if (!description || description === transaction.description) return;
    await api.update(session.token, transaction.id, { description });
    await load();
  }

  if (!session) return (
    <main className="login-shell">
      <form className="panel login" onSubmit={login}>
        <p className="eyebrow">Cliente de referência</p>
        <h1>MB Finanças</h1>
        <p>Use este cliente para validar sua API contra um navegador real.</p>
        {authMode === "register" && <label>Nome<input name="name" minLength={2} required /></label>}
        <label>E-mail<input name="email" type="email" defaultValue="ana@mbacademy.dev" required /></label>
        <label>Senha<input name="password" type="password" defaultValue="senha123" required /></label>
        {message && <p role="alert" className="error">{message}</p>}
        <button disabled={status === "loading"}>{status === "loading" ? "Enviando…" : authMode === "login" ? "Entrar" : "Criar conta"}</button>
        <button type="button" className="secondary" onClick={() => setAuthMode(authMode === "login" ? "register" : "login")}>{authMode === "login" ? "Criar uma conta" : "Já tenho conta"}</button>
      </form>
    </main>
  );

  return (
    <main className="shell">
      <header><div><p className="eyebrow">Visão geral</p><h1>Olá, {session.user.name}</h1></div><button className="secondary" onClick={() => setSession(null)}>Sair</button></header>
      {message && <p role="alert" className="error">{message}</p>}
      <section className="cards" aria-label="Resumo financeiro">
        <article><span>Receitas</span><strong>{currency.format((summary?.incomeInCents ?? 0) / 100)}</strong></article>
        <article><span>Despesas</span><strong>{currency.format((summary?.expenseInCents ?? 0) / 100)}</strong></article>
        <article><span>Saldo</span><strong>{currency.format((summary?.balanceInCents ?? 0) / 100)}</strong></article>
      </section>
      <section className="grid">
        <form className="panel" onSubmit={createTransaction}>
          <h2>Nova transação</h2>
          <label>Tipo<select name="type"><option value="expense">Despesa</option><option value="income">Receita</option></select></label>
          <label>Descrição<input name="description" required maxLength={120} /></label>
          <label>Valor<input name="amount" inputMode="decimal" placeholder="0,00" required /></label>
          <label>Categoria<select name="category">{categories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
          <label>Data<input name="occurredAt" type="date" defaultValue={new Date().toISOString().slice(0, 10)} required /></label>
          <button>Salvar transação</button>
        </form>
        <section className="panel list">
          <div className="list-header"><h2>Transações</h2><label>Tipo<select value={typeFilter} onChange={(event) => { setTypeFilter(event.target.value); setPage(1); }}><option value="">Todos</option><option value="income">Receitas</option><option value="expense">Despesas</option></select></label></div>
          <div className="filters">
            <label>Categoria<select value={categoryFilter} onChange={(event) => { setCategoryFilter(event.target.value); setPage(1); }}><option value="">Todas</option>{categories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
            <label>De<input type="date" value={fromFilter} onChange={(event) => { setFromFilter(event.target.value); setPage(1); }} /></label>
            <label>Até<input type="date" value={toFilter} onChange={(event) => { setToFilter(event.target.value); setPage(1); }} /></label>
          </div>
          {status === "loading" && <p role="status">Carregando…</p>}
          {status !== "loading" && transactions.length === 0 && <p>Nenhuma transação encontrada.</p>}
          <ul>{transactions.map((item) => <li key={item.id}><div><strong>{item.description}</strong><span>{item.occurredAt} · {categories.find((category) => category.value === item.category)?.label}</span></div><div><b className={item.type}>{item.type === "expense" ? "−" : "+"}{currency.format(item.amountInCents / 100)}</b><span className="actions"><button className="secondary" onClick={() => void editTransaction(item)}>Editar</button><button className="danger" onClick={() => void removeTransaction(item.id)}>Remover</button></span></div></li>)}</ul>
          <nav className="pagination" aria-label="Paginação"><button className="secondary" disabled={page === 1} onClick={() => setPage((value) => value - 1)}>Anterior</button><span>Página {page} de {totalPages}</span><button className="secondary" disabled={page === totalPages} onClick={() => setPage((value) => value + 1)}>Próxima</button></nav>
        </section>
      </section>
    </main>
  );
}
