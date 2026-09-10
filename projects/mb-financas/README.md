# MB Finanças — kit de integração

Este diretório contém a fronteira compartilhada pelos projetos Júnior Front-end
e Júnior Back-end. Cada trilha continua em um repositório próprio; o que conecta
as duas é o contrato HTTP em `contract/openapi.yaml`.

## Para quem cursa Front-end

Use a API de referência durante a Sprint 4:

```bash
pnpm reference:api
```

Ela inicia em `http://localhost:3333`, reinicia os dados sempre que o processo é
reiniciado e aceita a conta de demonstração:

- e-mail: `ana@mbacademy.dev`
- senha: `senha123`

Antes da integração, use MSW no próprio projeto. No deploy independente, mantenha
o modo demonstração; quando houver uma API publicada, configure `VITE_API_URL`.

## Para quem cursa Back-end

Inicie sua API e execute a suíte externa contra ela:

```bash
API_BASE_URL=http://localhost:3000 pnpm contract:test
```

Depois, rode o cliente de referência e aponte-o para sua API:

```bash
cd reference-web
pnpm install
VITE_API_URL=http://localhost:3000 pnpm dev
```

## Comandos do kit

```bash
pnpm reference:api  # API HTTP local na porta 3333
pnpm contract:test  # testa a URL de API definida em API_BASE_URL
```

As implementações oficiais são ferramentas de integração, não soluções que o
aluno deve copiar. Os critérios e as releases de materiais de cada sprint ficam
nas páginas dos cursos e nos manifestos em `checkpoints/`.
