# Planejamento de Cursos — MB Academy

> Documento de especificação em alto nível. Serve como referência para manter coesão entre cursos desenvolvidos em momentos diferentes. Atualizar sempre que decisões estruturais mudarem.

---

## 1. Visão e Filosofia da Plataforma

**MB Academy** é uma plataforma de ensino de programação em português, focada em uma progressão clara e coesa do zero até o nível sênior.

### Princípios que guiam todas as decisões de conteúdo

- **TypeScript em todos os níveis.** Não há regressão para JavaScript puro. O aluno aprende TS desde o Starter e aprofunda o sistema de tipos progressivamente. Onde o navegador exige JS (APIs nativas do DOM), isso é explicado *dentro* do contexto TypeScript, não como um retorno à linguagem anterior.

- **Currículo em espiral.** Os temas não são ensinados uma vez e abandonados. Cada nível revisita temas anteriores com maior profundidade: testes aparecem no Júnior (introdução), no Pleno (TDD, testes de integração) e no Sênior (qualidade em escala, CI/CD, load testing). Isso consolida conhecimento e evita "conteúdo orfão".

- **Projeto incremental por capítulo.** O aluno não aprende conceitos isolados e aplica no final. Cada capítulo termina com uma sprint do mesmo produto. Toda sprint possui história de usuário, critérios de aceite, testes, verificação manual, starter e uma release imutável de materiais. Soluções progressivas só são publicadas quando a respectiva aula estiver completa e validada.

- **Integração por contrato, não por dependência.** Front-end e back-end compartilham OpenAPI, fixtures e cenários de conformidade. Cada trilha recebe localmente uma implementação oficial da contraparte; assim, os projetos integram sistemas reais sem exigir que o aluno curse as duas trilhas ou espere outra pessoa.

- **Trilha dupla: obrigatória (≈75%) + opcional (≈25%).** A trilha **obrigatória** é o núcleo técnico que o aluno precisa dominar. A trilha **opcional** (também chamada *complementar*) cobre design, soft skills, metodologias, preparação para entrevistas e aprofundamentos de IA — conteúdo que forma o desenvolvedor completo, não apenas o programador. "Opcional" significa que não bloqueia a progressão de nível, não que seja descartável. Cada curso rotula seus módulos como **Obrigatório** ou **Opcional**.

- **IA como fio condutor, não como apêndice.** IA aparece em todos os níveis, escalando com a maturidade do aluno: ferramenta de aprendizado (Starter) → ferramenta de trabalho (Júnior) → integração em produto (Pleno) → arquitetura e workflows avançados (Sênior). Está sempre presente e nunca é ignorada — obrigatória onde é estrutural (capítulo de IA do Starter) e na trilha opcional nos aprofundamentos dos níveis seguintes.

- **Trilhas espelhadas em todos os níveis.** Front-end e back-end são trilhas paralelas e independentes do Júnior ao Sênior. Um sênior front-end e um sênior back-end compartilham um núcleo de conhecimento comum, mas têm especializações distintas e igualmente profundas. Não existe um "ponto de convergência obrigatório" — o aluno aprofunda sua especialidade em todos os níveis, com liberdade de transitar entre trilhas se quiser.

---

## 2. Estrutura de Trilhas

```
Legenda:
  ██  Obrigatório
  ░░  Opcional (complementar: soft skills, IA, carreira, deep-dives)
  (c) Módulo compartilhado entre as duas trilhas — escrito uma vez, cursado por ambas


                    ┌──────────────────────────────┐
                    │            STARTER            │
                    │  ██ TypeScript, lógica, POO   │
                    │  ██ Projeto: Rastreador (CLI) │
                    │  ██ IA: API da Anthropic      │
                    │  ░░ Mindset, soft skills      │
                    │           ✅ Pronto           │
                    └───────────────┬──────────────┘
                                    │
                            [Escolha da trilha]
                                    │
            ┌───────────────────────┴───────────────────────┐
            │                                               │
 ┌──────────▼───────────┐                       ┌───────────▼──────────┐
 │     JÚNIOR FRONT     │                       │     JÚNIOR BACK      │
 │ ██ HTML/CSS          │                       │ ██ Servidores/HTTP   │
 │ ██ React + TS        │                       │ ██ NestJS + TS       │
 │ ██ APIs, Auth        │                       │ ██ PostgreSQL/Prisma │
 │ ██ Testes I, Deploy  │                       │ ██ Auth, REST, Deploy│
 │ ░░ Design, IA, Carr. │◄── opcional cursar ──►│ ░░ Docs, IA, Carreira│
 └──────────┬───────────┘    a outra trilha     └───────────┬──────────┘
            │                                               │
 ┌──────────▼───────────┐                       ┌───────────▼──────────┐
 │     PLENO FRONT      │                       │     PLENO BACK      │
 │ ██ TS avançado   (c) │                       │ ██ TS avançado   (c) │
 │ ██ JS aprofundado(c) │                       │ ██ JS aprofundado(c) │
 │ ██ Git branching (c) │                       │ ██ Git branching (c) │
 │ ██ Algoritmos    (c) │                       │ ██ Algoritmos    (c) │
 │ ██ Docker        (c) │                       │ ██ Docker        (c) │
 │ ██ React avç./Next   │                       │ ██ NestJS avançado   │
 │ ██ Testes II (front) │                       │ ██ DB avç., Mensag.  │
 │ ░░ IA aplicada   (c) │                       │ ░░ IA aplicada   (c) │
 │ ░░ Design System     │                       │ ░░ Arquitetura APIs  │
 │ ░░ Coding challenges │                       │ ░░ Coding challenges │
 └──────────┬───────────┘                       └───────────┬──────────┘
            │                                               │
 ┌──────────▼───────────┐                       ┌───────────▼──────────┐
 │     SÊNIOR FRONT     │                       │     SÊNIOR BACK     │
 │ ██ System Design (c) │                       │ ██ System Design (c) │
 │ ██ Segurança fnd.(c) │                       │ ██ Segurança fnd.(c) │
 │ ██ Observabilid. (c) │                       │ ██ Observabilid. (c) │
 │ ██ Arq. escalável    │                       │ ██ Sist. distribuídos│
 │ ██ Performance       │                       │ ██ Performance back  │
 │ ██ Testes/CI, Seg.   │                       │ ██ Testes/CI, Seg.   │
 │                      │                       │ ██ Infraestrutura    │
 │ ░░ Comunicação ef.(c)│                       │ ░░ Comunicação ef.(c)│
 │ ░░ Acessibilidade    │                       │ ░░ Documentação/RFCs │
 │ ░░ DX & IA avançada  │                       │ ░░ DX & IA avançada  │
 └──────────────────────┘                       └──────────────────────┘
```

> **Compartilhado `(c)`:** módulo idêntico nas duas trilhas, escrito uma única vez. A marcação é independente de ser Obrigatório (██) ou Opcional (░░) — um módulo pode ser compartilhado *e* obrigatório (ex.: TypeScript Avançado) ou compartilhado *e* opcional (ex.: IA Aplicada).
>
> **Cursar a outra trilha é opcional:** um aluno do Júnior Front pode cursar módulos do Júnior Back para ampliar a visão — e vice-versa. Nunca é pré-requisito para avançar de nível.

---

## 3. Starter ✅ (Pronto)

> **Objetivo:** Zero → consegue pensar como programador e escrever TypeScript funcional.

> O Starter é trilha única (ainda sem divisão front/back). Quase tudo é obrigatório; apenas a recursão é marcada como opcional.

### Conteúdo do Curso
| Módulo | Conteúdo |
|---|---|
| Mercado Dev | Por que programar, áreas, tendências, mindset, soft skills, oportunidades, senioridade. Inclui seção sobre declarações sensacionalistas de IA ("código está resolvido") com análise honesta e contextualizada. |
| Noções de Computação | Hardware/software, sistemas operacionais, redes e protocolos |
| Fundamentos Parte 1 | Lógica, algoritmos, variáveis e tipos, controle de fluxo, **tratamento de erros (try/catch)**, loops |
| Fundamentos Parte 2 | Funções, **recursão (opcional)**, estruturas de dados, POO |
| Ambiente de Desenvolvimento | Setup, IDEs, **debugging**, Node.js, npm, versionamento, package.json, tsconfig, **módulos (import/export)**, **async/await** |
| Primeiro Projeto Prático | **Rastreador de Gastos Pessoais** (CLI com múltiplos arquivos, TypeScript, classes, array methods, tratamento de erros, `console.table`) — projeto cresce capítulo a capítulo |
| IA no Desenvolvimento | Como LLMs funcionam, uso responsável sem criar dependência, projeto de integração com API da Anthropic (análise financeira do Rastreador de Gastos) |

### Projeto do Starter
**Rastreador de Gastos Pessoais** — CLI em TypeScript com 3 arquivos (`tipos.ts`, `rastreador.ts`, `index.ts`). No Capítulo 7, o aluno adiciona análise financeira via API de IA. Extensões sugeridas: persistência em JSON, orçamento mensal, análise por período.

---

## 4. Júnior Front-end

> **Objetivo:** Construir interfaces web reais com React + TypeScript, consumir APIs, fazer deploy, e estar pronto para uma vaga júnior front-end.

> **Pré-requisito:** Starter completo.

> **Projeto incremental:** **MB Finanças Web**, evolução do CLI do Starter para um cliente React completo. O projeto cresce em seis sprints, consome uma API local compatível com o contrato compartilhado e pode ser publicado em modo demonstração ou integrado.

### Sprints do projeto

| Sprint | Entrega |
|---|---|
| 1 — Interface | Dashboard semântico, responsivo e acessível com dados fixos |
| 2 — Navegador | CRUD em memória com DOM, TypeScript, filtros e `localStorage` |
| 3 — React | Reconstrução em componentes, estado, hooks e rotas simuladas |
| 4 — Integração | Cadastro/login, JWT, CRUD, paginação e resumo via API |
| 5 — Qualidade | Regras, componentes e fluxos testados com Vitest, Testing Library e MSW |
| 6 — Entrega | Auditoria, dois modos de execução, README e deploy |

O escopo obrigatório inclui receitas e despesas, CRUD completo, dados por usuário, filtros, paginação, resumo financeiro e estados de interface. Conversão de moedas deixa de ser o eixo do projeto e vira extensão opcional.

### Obrigatório

| Módulo | Conteúdo-chave |
|---|---|
| Criação de Páginas Web | Anatomia de uma página (blueprint), HTML semântico e acessível, tags/atributos/formulários, CSS (propriedades, cascata, box model, flexbox, responsividade), bibliotecas CSS (Bootstrap, Tailwind) |
| JavaScript no Navegador | Eventos, manipulação do DOM, fetch, callbacks e promises — ensinado *como o navegador funciona*, não como regressão de TypeScript |
| Frameworks Front-end | O que são e por que usar; diferenças entre os principais; **React com TypeScript**: componentes, props, condicionais, listas, estado, efeitos, hooks (memo, callback, custom hooks, refs), Context, noções de Redux/Zustand |
| APIs e Autenticação | O que são APIs e tipos, consumindo APIs (métodos, tratamento de erros, axios), CORS, autenticação (formulários, JWT básico), segurança (vulnerabilidades, boas práticas) |
| Introdução a Testes | Pirâmide de testes, diferenças entre ferramentas (Jest, Vitest, Cypress, Playwright), estrutura dos testes, o que testar/não testar |
| Deploy | GitHub Pages, Vercel, domínio e DNS |

### Opcional (complementar)

| Módulo | Conteúdo-chave |
|---|---|
| Princípios de Código Eficiente | DRY, KISS, YAGNI |
| Noções de Design | Contraste, alinhamento, repetição, espaçamento; usabilidade; Figma básico; inspirações para portfólio |
| Metodologias Ágeis | Terminologias (Scrum, Kanban, Sprint, Backlog, Tickets), ferramentas (Jira/Trello/ClickUp/GH Projects), transformar requisitos em código |
| IA no Desenvolvimento Júnior | IA para entender erros de CSS e React, depurar componentes com auxílio de IA, usar Copilot com responsabilidade em código que você entende |
| Preparação para Entrevistas | LinkedIn e currículo, networking, detalhar experiências, projetos pessoais, vagas e canais, rastreando aplicações, tipos de entrevistas |

---

## 5. Júnior Back-end

> **Objetivo:** Construir APIs REST funcionais com NestJS + TypeScript, integrar banco de dados, implementar autenticação, e estar pronto para uma vaga júnior back-end.

> **Pré-requisito:** Starter completo.

> **Projeto incremental:** **MB Finanças API**, implementação NestJS/PostgreSQL do contrato consumido pelo front. Testes de contrato e um cliente React local permitem concluir e demonstrar o projeto sem cursar Front-end.

### Sprints do projeto

| Sprint | Entrega |
|---|---|
| 1 — HTTP | NestJS, health check e CRUD por repositório em memória |
| 2 — Persistência | PostgreSQL, Prisma, migrations, índices e seed |
| 3 — Identidade | Cadastro/login, JWT, hash de senha e isolamento por usuário |
| 4 — Contrato | Filtros, paginação, resumo, erros, CORS e Swagger |
| 5 — Qualidade | Testes unitários, integração, e2e e suíte externa de contrato |
| 6 — Entrega | Integração com front oficial local, README e deploy |

### Contrato comum dos projetos Júnior

- Dinheiro usa centavos inteiros (`amountInCents`); datas de transação usam `YYYY-MM-DD`.
- O núcleo é `/auth/register`, `/auth/login`, `/me`, CRUD em `/transactions`, `/summary` e `/health`.
- Autenticação usa JWT de acesso; refresh token, OAuth e papéis ficam fora do obrigatório.
- Paginação responde `{ data, meta }`; erros respondem `{ statusCode, code, message, fieldErrors? }`.
- Cada aluno mantém um repositório de portfólio por trilha. A integração entre projetos próprios é um desafio final opcional.

### Obrigatório

| Módulo | Conteúdo-chave |
|---|---|
| Servidores e HTTP | O que é um servidor, request/response, headers, status codes, REST vs outros paradigmas |
| Node.js Aprofundado | Módulos nativos (fs, path, http), streams, event loop básico, CommonJS vs ESModules |
| Frameworks Back-end | O que são e por que usar; **NestJS com TypeScript** (progressão natural do OOP do Starter): módulos, controllers, services, providers, decorators, pipes, guards |
| Bancos de Dados Relacionais | Conceitos (tabelas, índices, chaves, relacionamentos), SQL, PostgreSQL, ORMs (Prisma ou TypeORM), migrations |
| APIs REST | Design de endpoints, validação (class-validator, Zod), tratamento de erros, paginação, documentação (Swagger/OpenAPI) |
| Autenticação e Autorização | JWT, sessions/cookies, refresh tokens, OAuth básico, controle de acesso por roles |
| Introdução a Testes Back-end | Testes unitários (Jest), testes de integração, testando endpoints, mocks e stubs |
| Deploy | Railway, Render ou similar; variáveis de ambiente em produção; Docker básico |

### Opcional (complementar)

| Módulo | Conteúdo-chave |
|---|---|
| Princípios de Código Eficiente | DRY, KISS, YAGNI (espelhado com front, aplicado ao back) |
| Documentação de API | Swagger/OpenAPI na prática, boas práticas de documentação |
| Metodologias Ágeis | Mesmo conteúdo do Júnior Front (módulo compartilhável) |
| IA no Desenvolvimento Júnior | IA para entender erros de banco de dados e NestJS, gerar migrações com supervisão, depurar queries |
| Preparação para Entrevistas | Mesmo conteúdo do Júnior Front (módulo compartilhável) |

---

## 6. Pleno

O Pleno mantém as duas trilhas paralelas. Cada trilha tem seus módulos **Obrigatórios** e **Opcionais**. Alguns módulos são **compartilhados** entre as duas trilhas (marcados com *(compartilhado)*) — são escritos uma única vez e cursados por alunos de ambas.

> **Pré-requisito:** Júnior Front-end (para trilha front) ou Júnior Back-end (para trilha back).

### 6a. Pleno Front-end

> **Projeto incremental:** Dashboard de finanças em Next.js com autenticação, banco de dados, design system próprio e testes. Evolução direta do projeto do Júnior Front.

#### Obrigatório

| Módulo | Conteúdo-chave |
|---|---|
| TypeScript Avançado *(compartilhado)* | Configuração avançada, inferência, type alias, union, intersection, narrowing e type guards, any/unknown/never, generics, classes, tipos avançados (indexed, conditional, template literal) |
| Aprofundando em JavaScript *(compartilhado)* | Higher Order Functions, closures, `this` e `new`, event loop e macro/microtask queues, assincronismo por baixo dos panos, iteradores, funções geradoras |
| Git — Branching e Convenções *(compartilhado)* | Branches, merge, rebase, git flow, conventional commits |
| Estruturas de Dados e Algoritmos *(compartilhado)* | Análise assintótica (Big O), algoritmos (busca binária, ordenação, listas encadeadas), pilhas e filas, hashmap, árvores |
| Docker *(compartilhado)* | Introdução prática: containers, imagens, volumes, compose para dev local |
| TypeScript em React | TS aplicado em componentes, hooks tipados, generic components, discriminated unions em props |
| Dominando React | Gerenciamento de estado (Redux), formulários e validações (Zod, RHF), fetch de dados (React Query), composição, re-renderização e otimizações, HOC |
| Construindo Apps com Next.js | Estrutura (layout, page), shadcn/ui, server e client components, static vs SSR vs CSR, server actions, autenticação (NextAuth, middleware), streaming (loading, Suspense), tratando erros |
| Testes II (Front) | Testando componentes (Testing Library, jest-dom), Storybook, TDD, visual regression |

#### Opcional (complementar)

| Módulo | Conteúdo-chave |
|---|---|
| IA Aplicada em Produto *(compartilhado)* | Integração de LLMs em features reais (streaming, function calling básico), custo e latência, avaliando qualidade de respostas |
| Design System | O que é e benefícios, estrutura (componentes, estilos, tokens), bibliotecas e padrões |
| Coding Challenges | Leetcode: padrões de questões para entrevistas técnicas |

### 6b. Pleno Back-end

> **Projeto incremental:** API de finanças em NestJS evoluída, com autenticação completa, banco de dados otimizado, cache e testes abrangentes. Evolução direta do projeto do Júnior Back.

#### Obrigatório

| Módulo | Conteúdo-chave |
|---|---|
| TypeScript Avançado *(compartilhado)* | Mesmo módulo do Pleno Front — inferência, generics, narrowing, tipos avançados |
| Aprofundando em JavaScript *(compartilhado)* | Mesmo módulo do Pleno Front — closures, event loop, assincronismo, geradores |
| Git — Branching e Convenções *(compartilhado)* | Branches, merge, rebase, git flow, conventional commits |
| Estruturas de Dados e Algoritmos *(compartilhado)* | Big O, algoritmos, estruturas de dados |
| Docker *(compartilhado)* | Containers, imagens, volumes, compose para dev local |
| NestJS Avançado | Guards, interceptors e pipes avançados, módulos dinâmicos, websockets, noções de microservices com NestJS |
| Bancos de Dados Avançados | Queries complexas, índices e performance, relacionamentos avançados, transactions, connection pooling |
| Mensageria e Cache | Redis (cache, sessions, filas), introdução a message queues (BullMQ ou similar) |
| Testes II (Back) | Testes de integração com banco real, e2e de API, mocking de dependências externas, TDD no back |

#### Opcional (complementar)

| Módulo | Conteúdo-chave |
|---|---|
| IA Aplicada em Produto *(compartilhado)* | Function calling em APIs, custo e latência, avaliando qualidade de respostas |
| Arquitetura de APIs | Versionamento, backwards compatibility, rate limiting, API gateway básico |
| Coding Challenges | Leetcode: padrões de questões para entrevistas técnicas (mesmo conteúdo do front) |

---

## 7. Sênior

O Sênior mantém as trilhas paralelas, cada uma com módulos **Obrigatórios** e **Opcionais**. Módulos *(compartilhados)* são escritos uma vez e cursados pelas duas trilhas.

> **Nota pedagógica:** O que é aprendível (arquitetura, performance, segurança, system design) está no Obrigatório. O que é construído com experiência (comunicação, autoridade, julgamento) está no Opcional — o curso sinaliza o caminho, não finge entregar a senioridade em si.

> **Pré-requisito:** Pleno Front-end (para trilha front) ou Pleno Back-end (para trilha back).

### 7a. Sênior Front-end

> **Projeto:** Evolução do dashboard para arquitetura escalável — micro-frontends ou feature-sliced, CI/CD completo, auditoria de acessibilidade, análise de Web Vitals.

#### Obrigatório

| Módulo | Conteúdo-chave |
|---|---|
| System Design *(compartilhado)* | Princípios de design de sistemas: escalabilidade, disponibilidade, consistência; CAP theorem; trade-offs de arquitetura |
| Segurança — Fundamentos *(compartilhado)* | OWASP Top 10, autenticação e autorização em escala, princípio do menor privilégio, threat modeling básico |
| Observabilidade *(compartilhado)* | Monitoramento, logging estruturado, distributed tracing, alertas, SLOs/SLAs |
| Arquitetando Aplicações Front Escaláveis | Monorepo vs multi-repo, micro-frontends, Modular/Feature-Sliced Design, clean architecture no front, padrões de renderização |
| Análise de Performance Front | Web Vitals, Core Web Vitals, profiler, lazy load, tree-shaking, CDN, bundle analysis |
| Testes e Qualidade Front | Configuração de projeto, Playwright e2e, visual regression, lefthook, MSW, CI/CD front |
| Segurança Front | XSS e CSP, CSRF no cliente, sanitização de inputs, sub-resource integrity |

#### Opcional (complementar)

| Módulo | Conteúdo-chave |
|---|---|
| Comunicação Efetiva *(compartilhado)* | Modelos mentais claros, feedbacks assertivos, "pelo que vale a pena brigar", construindo autoridade técnica, liderança sem cargo |
| Acessibilidade | Avaliando acessibilidade, WCAG, ferramentas (axe, Lighthouse), testes de acessibilidade automatizados |
| Developer Experience & IA Avançada | Setup produtivo (dotfiles, snippets, automações), RAG e agents em produto front, workflows de dev assistido por IA |

### 7b. Sênior Back-end

> **Projeto:** Evolução da API para sistema distribuído — decomposição em serviços, mensageria, observabilidade completa, load testing.

#### Obrigatório

| Módulo | Conteúdo-chave |
|---|---|
| System Design *(compartilhado)* | Mesmo módulo do Sênior Front — escalabilidade, CAP, trade-offs de arquitetura |
| Segurança — Fundamentos *(compartilhado)* | OWASP Top 10, autenticação e autorização em escala, menor privilégio, threat modeling |
| Observabilidade *(compartilhado)* | Monitoramento, logging estruturado, distributed tracing, alertas, SLOs/SLAs |
| Arquitetando Sistemas Distribuídos | Microservices vs monolito (trade-offs reais), event-driven architecture, CQRS e Event Sourcing básico, saga pattern |
| Performance Back-end | Query optimization (EXPLAIN, índices avançados), caching strategies (CDN, Redis, cache invalidation), connection pooling, profiling |
| Testes e Qualidade Back | Load testing (k6 ou similar), chaos engineering básico, contract testing, CI/CD back, pipelines de qualidade |
| Segurança Back | SQL injection e mitigações, rate limiting e throttling, proteção de endpoints, auditoria e compliance básico |
| Infraestrutura | Docker avançado, Kubernetes introdução, provedores cloud (AWS/GCP/Azure básico), IaC introdução |

#### Opcional (complementar)

| Módulo | Conteúdo-chave |
|---|---|
| Comunicação Efetiva *(compartilhado)* | Mesmo módulo do Sênior Front — feedbacks, autoridade técnica, liderança sem cargo |
| Developer Experience & IA Avançada | RAG e agents em produto back-end, LLMs em pipelines de dados, workflows de dev assistido por IA no back |
| Documentação e Evangelismo Técnico | RFCs, ADRs, comunicação de decisões arquiteturais, documentação que dura |

---

## 8. O Fio de IA ao Longo da Plataforma

A IA escala com a maturidade do aluno em ambas as trilhas:

| Nível | Front-end | Back-end | Trilha |
|---|---|---|---|
| **Starter** | Como LLMs funcionam, uso responsável, integração com API da Anthropic no projeto CLI | ← mesmo conteúdo | Obrigatório |
| **Júnior** | Entender erros de CSS/React, Copilot com responsabilidade | Entender erros de DB/NestJS, gerar migrações com supervisão | Opcional |
| **Pleno** | Streaming de respostas LLM em UI, function calling em componentes | Function calling em APIs, custo/latência, avaliação de qualidade | Opcional (compartilhado) |
| **Sênior** | RAG em produto front, agents, workflows de dev | LLMs em pipelines de dados, agents no back, decisões arquiteturais envolvendo IA | Opcional |

---

## 9. Decisões Técnicas da Plataforma

| Decisão | Escolha | Razão |
|---|---|---|
| Framework do site | Next.js 15 | Flexibilidade e performance |
| Sistema de conteúdo | Fumadocs + MDX | Navegação automática por `meta.json`, suporte a componentes React no conteúdo |
| Linguagem ensinada | TypeScript (desde o Starter, todos os níveis) | Consistência, segurança de tipos, preparação real para o mercado |
| Framework back-end ensinado | NestJS | Progressão natural do OOP e decorators de TypeScript ensinados no Starter |
| Framework front-end ensinado | React | Maior demanda no mercado BR, forte suporte a TypeScript |
| Meta-framework | Next.js | Cobre SSR/SSG/Server Actions no Pleno Front, alinhado com o stack da plataforma |
| Estrutura de cursos | `content/courses/<slug>/` com `meta.json` | Um diretório por curso, navegação independente |
| Módulos compartilhados | A definir — podem ser cursos separados ou seções dentro de cada curso | A decidir antes do Pleno |

---

## 10. Padrão de Projeto Incremental

Cada curso deve seguir este padrão:

1. **O projeto é definido antes de escrever qualquer aula.** O arco completo (o que o aluno vai ter ao final) é conhecido desde o capítulo 1.
2. **Cada capítulo entrega uma camada funcional do projeto**, não apenas exercícios isolados.
3. **Checkpoints de código são fornecidos no início de cada capítulo** — o estado do projeto como deveria estar ao final do capítulo anterior. Isso garante que um bloqueio não vire abandono.
4. **O projeto final é publicável no GitHub** — com README, instruções de setup e pelo menos uma URL pública (Vercel, Railway, etc.).
5. **Desafios de extensão** no final de cada projeto, para quem quer ir além sem ser obrigado.

### Arco narrativo sugerido (mesmo produto, crescendo por nível)

```
Starter        → Rastreador de Gastos (CLI, TypeScript puro)
               │
Júnior Front   → MB Finanças Web (React, mocks + API por contrato)
Júnior Back    → MB Finanças API (NestJS + PostgreSQL + contrato)
               │
Pleno Front    → Dashboard avançado (Next.js, auth, design system, testes)
Pleno Back     → API avançada (NestJS, cache Redis, mensageria, testes)
               │
Sênior Front   → Dashboard em escala (micro-frontends, Web Vitals, a11y, CI/CD)
Sênior Back    → Sistema distribuído (microservices, observabilidade, infra)
```

O aluno carrega o *mesmo produto* ao longo de toda a plataforma, vendo-o crescer junto com suas habilidades. As duas trilhas do Pleno e Sênior podem ser conectadas (o front-end Pleno consome a API do back-end Pleno), mas isso é opcional — cada curso é completo por si só.

---

## 11. Estado Atual e Próximos Passos

### Pronto ✅
- **Starter** — completo, com todos os módulos, projeto do Rastreador de Gastos, Capítulo 7 de IA, tratamento de erros, módulos, async/await, debugging, recursão opcional.
- **Júnior Front-end — projeto** — seis sprints, integração por contrato, auditoria e deploy reestruturados. As aulas teóricas permanecem disponíveis.
- **Kit MB Finanças** — OpenAPI, fixtures, API e front locais de referência, coleção HTTP, suíte de contrato e manifestos de checkpoints.

### A construir (ordem sugerida)
1. **Júnior Back-end — aulas teóricas** — o projeto e suas seis sprints já estão especificados; falta escrever a progressão conceitual de HTTP, NestJS, PostgreSQL, autenticação e testes
2. **Repositórios distribuíveis dos projetos Júnior** — extrair os materiais do kit, produzir os snapshots de código e publicar as tags `start`/`solution` descritas nos manifestos
3. **Módulos compartilhados do Pleno** (TypeScript avançado, JS aprofundado, Git, Algoritmos, Docker, IA aplicada) — escritos uma vez, reutilizados nas duas trilhas Pleno
4. **Pleno Front-end** e **Pleno Back-end** — em paralelo ou sequencialmente, reaproveitando os módulos compartilhados
5. **Módulos compartilhados do Sênior** (System Design, Segurança fundamentos, Observabilidade, Comunicação Efetiva)
6. **Sênior Front-end** e **Sênior Back-end**

### Decisões abertas (a resolver antes de cada curso)
- Como os **módulos do núcleo compartilhado** são entregues na plataforma: como um curso separado que ambas as trilhas apontam, ou como seções duplicadas dentro de cada curso
- Qual projeto incremental específico para os níveis ainda não escritos (Starter e Júnior já adotam o arco MB Finanças)
- Se os módulos complementares compartilháveis (Metodologias Ágeis, Preparação para Entrevistas) são cursos próprios ou duplicados
- Estratégia de avaliação/certificação (se houver)
- Modelo de acesso (gratuito, pago, freemium)
