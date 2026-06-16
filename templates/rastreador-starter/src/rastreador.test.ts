import { describe, it, expect } from "vitest";
import { RastreadorDeGastos } from "./rastreador";

describe("adicionarGasto", () => {
  it("adiciona um gasto válido à lista", () => {
    const rastreador = new RastreadorDeGastos();
    rastreador.adicionarGasto("Café", 12.5, "alimentação");

    const gastos = rastreador.listar();
    expect(gastos).toHaveLength(1);
    expect(gastos[0]).toMatchObject({
      id: 1,
      descricao: "Café",
      valor: 12.5,
      categoria: "alimentação",
    });
  });

  it("gera ids sequenciais", () => {
    const rastreador = new RastreadorDeGastos();
    rastreador.adicionarGasto("Café", 12.5, "alimentação");
    rastreador.adicionarGasto("Ônibus", 4.4, "transporte");

    expect(rastreador.listar().map((g) => g.id)).toEqual([1, 2]);
  });

  it("rejeita valor menor ou igual a zero", () => {
    const rastreador = new RastreadorDeGastos();
    expect(() => rastreador.adicionarGasto("Inválido", 0, "outros")).toThrow();
    expect(() => rastreador.adicionarGasto("Inválido", -5, "outros")).toThrow();
  });
});
