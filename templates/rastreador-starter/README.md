# Rastreador de Gastos — Systema Corp

> **Template de projeto** (piloto da camada narrativa — ver `docs/narrativa.md`).
> No produto real, este vira um repositório próprio com o botão **"Use this template"**.
> Cada aluno trabalha na cópia da própria conta, então o CI roda nos minutos
> gratuitos de Actions dele — custo zero pra escalar.

Bem-vindo ao time. Você herdou este sistema de **A.** (o Antecessor). A fundação
está pronta; alguns métodos estão por implementar, marcados com `TODO(você)`.

## Setup

```bash
npm install
npm test        # roda os testes (vão falhar até você implementar)
npm run typecheck
```

## Sua primeira task

> **Issue #1 — Permitir registrar um gasto** · `nível:estágio` · `dificuldade:1`
>
> Implemente `adicionarGasto` em `src/rastreador.ts`. Um gasto válido entra na
> lista com um `id` sequencial; valor `<= 0` é rejeitado com `throw`.
>
> **Critério de aceite:** os testes em `src/rastreador.test.ts` passam no CI.

## O fluxo

1. `git checkout -b feat/adicionar-gasto`
2. Implemente o método.
3. `npm test` até ficar verde.
4. Commit, push e abra um **Pull Request**.
5. A esteira (GitHub Actions) roda `typecheck` + testes. Vermelho = PR reprovado.
6. A. revisa seu PR (revisão automática sobre o seu diff).
7. Merge → a próxima Issue é destrancada.

> 💬 *"Defini os tipos antes da lógica, de propósito. Os tipos já te dizem o
> formato do `Gasto` — siga-os e o método se escreve quase sozinho. — A."*
