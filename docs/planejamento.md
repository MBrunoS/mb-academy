# Planejamento de Cursos — Forja Academy

> Documento de especificação em alto nível. Serve como referência para manter coesão entre cursos desenvolvidos em momentos diferentes. Atualizar sempre que decisões estruturais mudarem.

---

## 1. Visão e Filosofia da Plataforma

**Forja Academy** é uma plataforma de ensino de programação em português, focada em uma progressão clara e coesa do zero até o nível sênior.

### Princípios que guiam todas as decisões de conteúdo

- **TypeScript em todos os níveis.** Não há regressão para JavaScript puro. O aluno aprende TS desde o Starter e aprofunda o sistema de tipos progressivamente. Onde o navegador exige JS (APIs nativas do DOM), isso é explicado *dentro* do contexto TypeScript, não como um retorno à linguagem anterior.

- **Currículo em espiral.** Os temas não são ensinados uma vez e abandonados. Cada nível revisita temas anteriores com maior profundidade: testes aparecem no Júnior (introdução), no Pleno (TDD, testes de integração) e no Sênior (qualidade em escala, CI/CD, load testing). Isso consolida conhecimento e evita "conteúdo orfão".

- **Projeto incremental por capítulo.** O aluno não aprende conceitos isolados e aplica no final. Cada capítulo adiciona uma camada ao projeto em construção. Checkpoints de código inicial são fornecidos por capítulo para que um bloqueio num capítulo anterior não impeça o progresso.

- **Trilha dupla: principal (75%) + complementar (25%).** A trilha principal é técnica e obrigatória. A trilha complementar cobre design, soft skills, metodologias, preparação para entrevistas e IA — conteúdo diversificado que forma o desenvolvedor completo, não apenas o programador. As duas trilhas são independentes em timing; alinhamento visual não implica sincronização.

- **IA como fio condutor, não como apêndice.** IA aparece em todos os níveis, escalando com a maturidade do aluno: ferramenta de aprendizado (Starter) → ferramenta de trabalho (Júnior) → integração em produto (Pleno) → arquitetura e workflows avançados (Sênior). Nunca é opcional nem ignorada.

- **Trilhas espelhadas em todos os níveis.** Front-end e back-end são trilhas paralelas e independentes do Júnior ao Sênior. Um sênior front-end e um sênior back-end compartilham um núcleo de conhecimento comum, mas têm especializações distintas e igualmente profundas. Não existe um "ponto de convergência obrigatório" — o aluno aprofunda sua especialidade em todos os níveis, com liberdade de transitar entre trilhas se quiser.

---

## 2. Estrutura de Trilhas

```
Legenda:
  ██  Obrigatório (trilha principal)
  ░░  Complementar — soft skills, IA, carreira (25%, feito no próprio ritmo)
  ··  Opcional — aluno da outra trilha pode cursar se quiser


                    ┌─────────────────────────────┐
                    │           STARTER            │
                    │  ██ TypeScript, lógica, OOP  │
                    │  ██ Rastreador de Gastos CLI  │
                    │  ░░ Mindset, soft skills      │
                    │  ██ IA: API Anthropic         │
                    │          ✅ Pronto            │
                    └──────────────┬───────────────┘
                                   │
                            [Escolha da trilha]
                                   │
              ┌────────────────────┴────────────────────┐
              │                                         │
   ┌──────────▼──────────┐               ┌─────────────▼──────────┐
   │    JÚNIOR FRONT     │               │    JÚNIOR BACK         │
   │  ██ HTML/CSS        │               │  ██ Servidores/HTTP    │
   │  ██ React + TS      │               │  ██ NestJS + TS        │
   │  ██ APIs, Auth      │               │  ██ PostgreSQL/Prisma  │
   │  ██ Testes I        │               │  ██ Auth, REST, Testes │
   │  ██ Deploy (Vercel) │               │  ██ Deploy (Railway)   │
   │  ░░ Design, Carreira│  · opcional · │  ░░ Docs, Carreira     │
   │  ░░ IA júnior       │◄ ─ ─ ─ ─ ─ ►│  ░░ IA júnior          │
   └──────────┬──────────┘               └─────────────┬──────────┘
              │                                         │
              └─────────────────┬───────────────────────┘
                                │
                   ┌────────────▼────────────┐
                   │      NÚCLEO PLENO        │
                   │  (obrigatório para ambas │
                   │   as trilhas antes de    │
                   │   entrar no Pleno)        │
                   │                          │
                   │  ██ TypeScript Avançado  │
                   │  ██ JS aprofundado       │
                   │  ██ Git — branching      │
                   │  ██ Algoritmos & Big O   │
                   │  ██ Docker               │
                   │  ░░ IA Aplicada em prod. │
                   └────────────┬────────────┘
                                │
              ┌─────────────────┴─────────────────┐
              │                                   │
   ┌──────────▼──────────┐           ┌────────────▼──────────┐
   │    PLENO FRONT      │           │    PLENO BACK         │
   │  ██ TS em React     │           │  ██ NestJS Avançado   │
   │  ██ React avançado  │           │  ██ DB Avançado       │
   │  ██ Next.js         │           │  ██ Mensageria/Cache  │
   │  ██ Testes II       │           │  ██ Testes II         │
   │  ░░ Design System   │ ·opcional·│  ░░ Arquitetura APIs  │
   │  ░░ Coding challs.  │◄─ ─ ─ ─ ►│  ░░ Coding challs.   │
   └──────────┬──────────┘           └────────────┬──────────┘
              │                                   │
              └─────────────────┬─────────────────┘
                                │
                   ┌────────────▼────────────┐
                   │      NÚCLEO SÊNIOR       │
                   │  (obrigatório para ambas │
                   │   as trilhas antes de    │
                   │   entrar no Sênior)       │
                   │                          │
                   │  ██ System Design        │
                   │  ██ Segurança fundamentos│
                   │  ██ Observabilidade      │
                   │  ░░ Comunicação Efetiva  │
                   └────────────┬────────────┘
                                │
              ┌─────────────────┴─────────────────┐
              │                                   │
   ┌──────────▼──────────┐           ┌────────────▼──────────┐
   │    SÊNIOR FRONT     │           │    SÊNIOR BACK        │
   │  ██ Arq. escalável  │           │  ██ Sist. distribuídos│
   │  ██ Performance     │           │  ██ Performance back  │
   │  ██ Testes e CI/CD  │           │  ██ Testes e CI/CD    │
   │  ██ Segurança front │           │  ██ Segurança back    │
   │  ░░ Acessibilidade  │ ·opcional·│  ██ Infraestrutura    │
   │  ░░ DX & IA avançada│◄─ ─ ─ ─ ►│  ░░ DX & IA avançada │
   └─────────────────────┘           └───────────────────────┘
```

> **Núcleo:** módulo escrito uma única vez, consumido por alunos de ambas as trilhas. A especialização (Pleno Front, Pleno Back, etc.) só começa após o núcleo do respectivo nível.
>
> **Opcional cross-track:** um aluno do Júnior Front pode opcionalmente cursar módulos do Júnior Back para ampliar a visão — e vice-versa. Não é pré-requisito para avançar.

---

## 3. Starter ✅ (Pronto)

> **Objetivo:** Zero → consegue pensar como programador e escrever TypeScript funcional.

### Trilha Principal
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

> **Projeto incremental:** Dashboard web de finanças pessoais em React, evoluindo o tema do Starter para a web. Consome uma API pública. Ao final, é publicado no Vercel com URL real.

### Trilha Principal (75%)

| Módulo | Conteúdo-chave |
|---|---|
| Criação de Páginas Web | Anatomia de uma página (blueprint), HTML semântico e acessível, tags/atributos/formulários, CSS (propriedades, cascata, box model, flexbox, responsividade), bibliotecas CSS (Bootstrap, Tailwind) |
| JavaScript no Navegador | Eventos, manipulação do DOM, fetch, callbacks e promises — ensinado *como o navegador funciona*, não como regressão de TypeScript |
| Frameworks Front-end | O que são e por que usar; diferenças entre os principais; **React com TypeScript**: componentes, props, condicionais, listas, estado, efeitos, hooks (memo, callback, custom hooks, refs), Context, noções de Redux/Zustand |
| APIs e Autenticação | O que são APIs e tipos, consumindo APIs (métodos, tratamento de erros, axios), CORS, autenticação (formulários, JWT básico), segurança (vulnerabilidades, boas práticas) |
| Introdução a Testes | Pirâmide de testes, diferenças entre ferramentas (Jest, Vitest, Cypress, Playwright), estrutura dos testes, o que testar/não testar |
| Deploy | GitHub Pages, Vercel, domínio e DNS |

### Trilha Complementar (25%)

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

> **Projeto incremental:** API REST de finanças pessoais em NestJS + PostgreSQL, espelhando o tema do projeto front-end. Ao final, é publicada no Railway com URL real e documentação Swagger.

### Trilha Principal (75%)

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

### Trilha Complementar (25%)

| Módulo | Conteúdo-chave |
|---|---|
| Princípios de Código Eficiente | DRY, KISS, YAGNI (espelhado com front, aplicado ao back) |
| Documentação de API | Swagger/OpenAPI na prática, boas práticas de documentação |
| Metodologias Ágeis | Mesmo conteúdo do Júnior Front (módulo compartilhável) |
| IA no Desenvolvimento Júnior | IA para entender erros de banco de dados e NestJS, gerar migrações com supervisão, depurar queries |
| Preparação para Entrevistas | Mesmo conteúdo do Júnior Front (módulo compartilhável) |

---

## 6. Pleno

O Pleno mantém as duas trilhas paralelas. Existe um **núcleo compartilhado** — módulos que qualquer desenvolvedor pleno deve dominar independente de especialização — e uma **especialização** por trilha.

> **Pré-requisito:** Júnior Front-end (para trilha front) ou Júnior Back-end (para trilha back).

### 6a. Núcleo Compartilhado Pleno

Estes módulos são os mesmos nas duas trilhas. Podem ser um curso único consumido por alunos de ambas as trilhas.

| Módulo | Conteúdo-chave |
|---|---|
| TypeScript Avançado | Configuração avançada, inferência, type alias, union, intersection, narrowing e type guards, any/unknown/never, generics, classes, tipos avançados (indexed, conditional, template literal) |
| Aprofundando em JavaScript | Higher Order Functions, closures, `this` e `new`, event loop e macro/microtask queues, assincronismo por baixo dos panos, iteradores, funções geradoras |
| Git — Branching e Convenções | Branches, merge, rebase, git flow, conventional commits |
| Estruturas de Dados e Algoritmos | Análise assintótica (Big O), algoritmos (busca binária, ordenação, listas encadeadas), pilhas e filas, hashmap, árvores |
| Docker | Introdução prática: containers, imagens, volumes, compose para dev local |
| IA Aplicada em Produto | Integração de LLMs em features reais (streaming, function calling básico), custo e latência, avaliando qualidade de respostas |

### 6b. Pleno Front-end

> **Projeto incremental:** Dashboard de finanças em Next.js com autenticação, banco de dados, design system próprio e testes. Evolução direta do projeto do Júnior Front.

#### Trilha Principal (75%)

| Módulo | Conteúdo-chave |
|---|---|
| TypeScript em React | TS aplicado em componentes, hooks tipados, generic components, discriminated unions em props |
| Dominando React | Gerenciamento de estado (Redux), formulários e validações (Zod, RHF), fetch de dados (React Query), composição, re-renderização e otimizações, HOC |
| Construindo Apps com Next.js | Estrutura (layout, page), shadcn/ui, server e client components, static vs SSR vs CSR, server actions, autenticação (NextAuth, middleware), streaming (loading, Suspense), tratando erros |
| Testes II (Front) | Testando componentes (Testing Library, jest-dom), Storybook, TDD, visual regression |

#### Trilha Complementar (25%)

| Módulo | Conteúdo-chave |
|---|---|
| Design System | O que é e benefícios, estrutura (componentes, estilos, tokens), bibliotecas e padrões |
| Coding Challenges | Leetcode: padrões de questões para entrevistas técnicas |

### 6c. Pleno Back-end

> **Projeto incremental:** API de finanças em NestJS evoluída, com autenticação completa, banco de dados otimizado, cache e testes abrangentes. Evolução direta do projeto do Júnior Back.

#### Trilha Principal (75%)

| Módulo | Conteúdo-chave |
|---|---|
| NestJS Avançado | Guards, interceptors e pipes avançados, módulos dinâmicos, websockets, noções de microservices com NestJS |
| Bancos de Dados Avançados | Queries complexas, índices e performance, relacionamentos avançados, transactions, connection pooling |
| Mensageria e Cache | Redis (cache, sessions, filas), introdução a message queues (BullMQ ou similar) |
| Testes II (Back) | Testes de integração com banco real, e2e de API, mocking de dependências externas, TDD no back |

#### Trilha Complementar (25%)

| Módulo | Conteúdo-chave |
|---|---|
| Arquitetura de APIs | Versionamento, backwards compatibility, rate limiting, API gateway básico |
| Coding Challenges | Leetcode: padrões de questões para entrevistas técnicas (mesmo conteúdo do front) |

---

## 7. Sênior

O Sênior mantém as trilhas paralelas com **núcleo compartilhado** e **especialização** por trilha.

> **Nota pedagógica:** O que é aprendível (arquitetura, performance, segurança, system design) está na trilha principal. O que é construído com experiência (comunicação, autoridade, julgamento) está na trilha complementar — o curso sinaliza o caminho, não finge entregar a senioridade em si.

> **Pré-requisito:** Pleno Front-end (para trilha front) ou Pleno Back-end (para trilha back).

### 7a. Núcleo Compartilhado Sênior

| Módulo | Conteúdo-chave |
|---|---|
| System Design | Princípios de design de sistemas: escalabilidade, disponibilidade, consistência; CAP theorem; trade-offs de arquitetura |
| Segurança — Fundamentos | OWASP Top 10, autenticação e autorização em escala, princípio do menor privilégio, threat modeling básico |
| Observabilidade | Monitoramento, logging estruturado, distributed tracing, alertas, SLOs/SLAs |
| Comunicação Efetiva | Modelos mentais claros, feedbacks assertivos, "pelo que vale a pena brigar", construindo autoridade técnica, liderança sem cargo |

### 7b. Sênior Front-end

> **Projeto:** Evolução do dashboard para arquitetura escalável — micro-frontends ou feature-sliced, CI/CD completo, auditoria de acessibilidade, análise de Web Vitals.

#### Trilha Principal (75%)

| Módulo | Conteúdo-chave |
|---|---|
| Arquitetando Aplicações Front Escaláveis | Monorepo vs multi-repo, micro-frontends, Modular/Feature-Sliced Design, clean architecture no front, padrões de renderização |
| Análise de Performance Front | Web Vitals, Core Web Vitals, profiler, lazy load, tree-shaking, CDN, bundle analysis |
| Testes e Qualidade Front | Configuração de projeto, Playwright e2e, visual regression, lefthook, MSW, CI/CD front |
| Segurança Front | XSS e CSP, CSRF no cliente, sanitização de inputs, sub-resource integrity |

#### Trilha Complementar (25%)

| Módulo | Conteúdo-chave |
|---|---|
| Acessibilidade | Avaliando acessibilidade, WCAG, ferramentas (axe, Lighthouse), testes de acessibilidade automatizados |
| Developer Experience & IA Avançada | Setup produtivo (dotfiles, snippets, automações), RAG e agents em produto front, workflows de dev assistido por IA |

### 7c. Sênior Back-end

> **Projeto:** Evolução da API para sistema distribuído — decomposição em serviços, mensageria, observabilidade completa, load testing.

#### Trilha Principal (75%)

| Módulo | Conteúdo-chave |
|---|---|
| Arquitetando Sistemas Distribuídos | Microservices vs monolito (trade-offs reais), event-driven architecture, CQRS e Event Sourcing básico, saga pattern |
| Performance Back-end | Query optimization (EXPLAIN, índices avançados), caching strategies (CDN, Redis, cache invalidation), connection pooling, profiling |
| Testes e Qualidade Back | Load testing (k6 ou similar), chaos engineering básico, contract testing, CI/CD back, pipelines de qualidade |
| Segurança Back | SQL injection e mitigações, rate limiting e throttling, proteção de endpoints, auditoria e compliance básico |
| Infraestrutura | Docker avançado, Kubernetes introdução, provedores cloud (AWS/GCP/Azure básico), IaC introdução |

#### Trilha Complementar (25%)

| Módulo | Conteúdo-chave |
|---|---|
| Developer Experience & IA Avançada | RAG e agents em produto back-end, LLMs em pipelines de dados, workflows de dev assistido por IA no back |
| Documentação e Evangelismo Técnico | RFCs, ADRs, comunicação de decisões arquiteturais, documentação que dura |

---

## 8. O Fio de IA ao Longo da Plataforma

A IA escala com a maturidade do aluno em ambas as trilhas:

| Nível | Front-end | Back-end | Trilha |
|---|---|---|---|
| **Starter** | Como LLMs funcionam, uso responsável, integração com API da Anthropic no projeto CLI | ← mesmo conteúdo | Principal |
| **Júnior** | Entender erros de CSS/React, Copilot com responsabilidade | Entender erros de DB/NestJS, gerar migrações com supervisão | Complementar |
| **Pleno** | Streaming de respostas LLM em UI, function calling em componentes | Function calling em APIs, custo/latência, avaliação de qualidade | Complementar (núcleo compartilhado) |
| **Sênior** | RAG em produto front, agents, workflows de dev | LLMs em pipelines de dados, agents no back, decisões arquiteturais envolvendo IA | Complementar |

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
Júnior Front   → Dashboard web do Rastreador (React, consome API pública)
Júnior Back    → API REST do Rastreador (NestJS, PostgreSQL)
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

### A construir (ordem sugerida)
1. **Júnior Front-end** — maior impacto imediato, público mais amplo, feedback visual motiva mais rápido
2. **Júnior Back-end** — espelho do front, aproveita o TypeScript já ensinado, NestJS como progressão natural do OOP do Starter
3. **Núcleo Pleno** (TypeScript avançado, JS aprofundado, Git, Algoritmos, Docker, IA) — módulo compartilhado, escrito uma vez
4. **Pleno Front-end** e **Pleno Back-end** — em paralelo ou sequencialmente
5. **Núcleo Sênior** (System Design, Segurança fundamentos, Observabilidade, Comunicação)
6. **Sênior Front-end** e **Sênior Back-end**

### Decisões abertas (a resolver antes de cada curso)
- Como os **módulos do núcleo compartilhado** são entregues na plataforma: como um curso separado que ambas as trilhas apontam, ou como seções duplicadas dentro de cada curso
- Qual projeto incremental específico para cada nível (o arco do Rastreador é sugestão, não obrigação)
- Se os módulos complementares compartilháveis (Metodologias Ágeis, Preparação para Entrevistas) são cursos próprios ou duplicados
- Estratégia de avaliação/certificação (se houver)
- Modelo de acesso (gratuito, pago, freemium)
