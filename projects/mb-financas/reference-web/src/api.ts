export type TransactionType = "income" | "expense";
export type Category = "salary" | "freelance" | "food" | "housing" | "transport" | "health" | "leisure" | "education" | "other";

export interface User { id: string; name: string; email: string }
export interface Transaction {
  id: string;
  type: TransactionType;
  description: string;
  amountInCents: number;
  category: Category;
  occurredAt: string;
  createdAt: string;
}
export type TransactionInput = Omit<Transaction, "id" | "createdAt">;
export interface Summary {
  incomeInCents: number;
  expenseInCents: number;
  balanceInCents: number;
  byCategory: Array<{ category: Category; amountInCents: number }>;
}
export interface ApiErrorBody {
  statusCode: number;
  code: string;
  message: string;
  fieldErrors?: Record<string, string[]>;
}

const baseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3333";

async function request<T>(path: string, init: RequestInit = {}, token?: string): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      ...(init.body ? { "content-type": "application/json" } : {}),
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...init.headers,
    },
  });
  if (!response.ok) {
    const error = await response.json() as ApiErrorBody;
    throw new Error(error.message);
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const api = {
  register: (name: string, email: string, password: string) => request<{ user: User; accessToken: string }>("/auth/register", {
    method: "POST", body: JSON.stringify({ name, email, password }),
  }),
  login: (email: string, password: string) => request<{ user: User; accessToken: string }>("/auth/login", {
    method: "POST", body: JSON.stringify({ email, password }),
  }),
  list: (token: string, query = "") => request<{ data: Transaction[]; meta: { page: number; limit: number; total: number; totalPages: number } }>(`/transactions${query}`, {}, token),
  summary: (token: string, query = "") => request<Summary>(`/summary${query}`, {}, token),
  create: (token: string, input: TransactionInput) => request<Transaction>("/transactions", { method: "POST", body: JSON.stringify(input) }, token),
  update: (token: string, id: string, input: Partial<TransactionInput>) => request<Transaction>(`/transactions/${id}`, { method: "PATCH", body: JSON.stringify(input) }, token),
  remove: (token: string, id: string) => request<void>(`/transactions/${id}`, { method: "DELETE" }, token),
};
