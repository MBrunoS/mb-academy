// src/rastreador.ts
import { Gasto, Categoria } from "./tipos";

export class RastreadorDeGastos {
  private gastos: Gasto[] = [];
  private proximoId: number = 1;

  // TODO(você): implemente este método.
  //
  // Critério de aceite: os testes em rastreador.test.ts passam no CI.
  // - valida o valor (<= 0 deve lançar erro);
  // - monta um Gasto seguindo o tipo, usando `proximoId` para o id;
  // - empurra para a lista.
  //
  // 💬 "Falhar cedo é elegante: escreva o throw antes da lógica. — A."
  adicionarGasto(descricao: string, valor: number, categoria: Categoria): void {
    throw new Error("Ainda não implementado");
  }

  listar(): Gasto[] {
    return this.gastos;
  }
}
