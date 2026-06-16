// src/tipos.ts — deixado pronto por A. (o Antecessor)
//
// Os tipos vêm primeiro, de propósito: eles definem o contrato do sistema.
// Com eles certos, o compilador vira seu copiloto.

export type Categoria =
  | "alimentação"
  | "transporte"
  | "moradia"
  | "lazer"
  | "saúde"
  | "outros";

export interface Gasto {
  id: number;
  descricao: string;
  valor: number;
  categoria: Categoria;
  data: string;
}
