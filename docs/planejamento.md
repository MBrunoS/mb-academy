# Planejamento de Cursos — Forja Academy

> Documento de especificação em alto nível. Serve como referência para manter coesão entre cursos desenvolvidos em momentos diferentes. Atualizar sempre que decisões estruturais mudarem.

---

## 1. Visão e Filosofia da Plataforma

**Forja Academy** é uma plataforma de ensino de programação em português, focada em uma progressão clara e coesa do zero até o nível sênior.

### Princípios que guiam todas as decisões de conteúdo

- **TypeScript em todos os níveis.** Não há regressão para JavaScript puro. O aluno aprende TS desde o Starter e aprofunda o sistema de tipos progressivamente. Onde o navegador exige JS (APIs nativas do DOM), isso é explicado *dentro* do contexto TypeScript, não como um retorno à linguagem anterior.

- **Currículo em espiral.** Os temas não são ensinados uma vez e abandonados. Cada nível revisita temas anteriores com maior profundidade: testes aparecem no Júnior (introdução), no Pleno (TDD, Testing Library) e no Sênior (qualidade de código, CI/CD). Isso consolida conhecimento e evita "conteúdo orfão".

- **Projeto incremental por capítulo.** O aluno não aprende conceitos isolados e aplica no final. Cada capítulo adiciona uma camada ao projeto em construção. Checkpoints de código inicial são fornecidos por capítulo para que um bloqueio num capítulo anterior não impeça o progresso.

- **Trilha dupla: principal (75%) + complementar (25%).** A trilha principal é técnica e obrigatória. A trilha complementar cobre design, soft skills, metodologias, preparação para entrevistas e IA — conteúdo diversificado que forma o desenvolvedor completo, não apenas o programador. As duas trilhas são independentes em timing; alinhamento visual não implica sincronização.

- **IA como fio condutor, não como apêndice.** IA aparece em todos os níveis, escalando com a maturidade do aluno: ferramenta de aprendizado (Starter) → ferramenta de trabalho (Júnior) → integração em produto (Pleno) → arquitetura e workflows avançados (Sênior). Nunca é opcional nem ignorada.

- **Sem full-stack prematuro.** O aluno escolhe front-end *ou* back-end no Júnior. As duas trilhas convergem no Pleno, quando o aluno já tem profundidade suficiente em um lado para entender o outro com contexto.

---

## 2. Estrutura de Trilhas

```
                    ┌─────────────────────────────┐
                    │         STARTER              │
                    │   (TypeScript, lógica,       │
                    │   primeiro projeto CLI)       │
                    │         ✅ Pronto             │
                    └──────────────┬──────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    │         Escolha da trilha    │
                    └──────┬───────────────────────┘
                           │
           ┌───────────────┴───────────────┐
           │                               │
  ┌────────▼─────────┐           ┌────────▼─────────┐
  │  JÚNIOR FRONT    │           │  JÚNIOR BACK      │
  │  HTML/CSS, React │           │  Node, NestJS,    │
  │  APIs, Deploy    │           │  DB, Auth, APIs   │
  └────────┬─────────┘           └────────┬──────────┘
           │                               │
           └───────────────┬───────────────┘
                           │
                  ┌────────▼─────────┐
                  │      PLENO        │
                  │  Next.js full-   │
                  │  stack, TS avç., │
                  │  testes, DB adv. │
                  └────────┬─────────┘
                           │
                  ┌────────▼─────────┐
                  │      SÊNIOR       │
                  │  Arquitetura,    │
                  │  performance,    │
                  │  segurança,      │
                  │  system design   │
                  └──────────────────┘
```

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

> **Projeto incremental:** Uma aplicação web completa construída capítulo a capítulo (sugestão: dashboard de finanças pessoais que consome uma API pública, evoluindo o tema do Starter para a web).

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
| **IA no Desenvolvimento Júnior** | IA para entender erros de CSS e React, depurar componentes com auxílio de IA, usar Copilot com responsabilidade em código que você entende |
| Preparação para Entrevistas | LinkedIn e currículo, networking, detalhar experiências, projetos pessoais, vagas e canais, rastreando aplicações, tipos de entrevistas |

---

## 5. Júnior Back-end

> **Objetivo:** Construir APIs REST funcionais com NestJS + TypeScript, integrar banco de dados, implementar autenticação, e estar pronto para uma vaga júnior back-end.

> **Pré-requisito:** Starter completo.

> **Projeto incremental:** Uma API REST completa construída capítulo a capítulo (sugestão: API de finanças pessoais — backend da mesma aplicação que o Júnior Front-end consumirá no Pleno, criando o gancho para a convergência).

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
| Metodologias Ágeis | Igual ao Júnior Front (conteúdo compartilhável) |
| **IA no Desenvolvimento Júnior** | IA para entender erros de banco de dados e NestJS, gerar migrações com supervisão, depurar queries |
| Preparação para Entrevistas | Igual ao Júnior Front (conteúdo compartilhável) |

---

## 6. Pleno

> **Objetivo:** Unir front e back num projeto full-stack real. Aprofundar TypeScript, testes, banco de dados e JavaScript. Estar pronto para assumir features de ponta a ponta com autonomia.

> **Pré-requisito:** Júnior Front-end **ou** Júnior Back-end (ambos levam aqui).

> **Projeto incremental:** Aplicação full-stack completa — sugestão: uma versão web do Rastreador de Gastos com autenticação, banco de dados real, API própria e interface React. Conecta o projeto do Starter com a web, criando uma narrativa de produto coerente ao longo de toda a plataforma.

### Trilha Principal (75%)

| Módulo | Conteúdo-chave |
|---|---|
| TypeScript Avançado | Configuração avançada, inferência, arrays, objetos, type alias, union, intersection, interface, narrowing e type guards, any/unknown/never, generics, classes, tipos avançados (indexed, conditional, template literal), TS em React |
| Dominando React | Gerenciamento de estado (Redux), formulários e validações (Zod, RHF), fetch de dados (React Query), composição, re-renderização e otimizações, HOC |
| Construindo Apps com Next.js | Estrutura (layout, page), shadcn/ui, server e client components, static vs SSR vs CSR, server actions, autenticação (NextAuth, middleware), streaming (loading, Suspense), tratando erros |
| Bancos de Dados Avançados | Tipos de bancos, conceitos avançados (índices, chaves, relacionamentos), ORMs e ferramentas |
| Testes II | Testando componentes (Testing Library, jest-dom, Storybook), TDD |
| Aprofundando em JavaScript | Higher Order Functions, closures, `this` e `new`, event loop e macro/microtask queues, assincronismo por baixo dos panos, iteradores, funções geradoras |

### Trilha Complementar (25%)

| Módulo | Conteúdo-chave |
|---|---|
| Git — Branching e Convenções | Branches, merge, rebase, git flow, conventional commits |
| Design System | O que é e benefícios, estrutura (componentes, estilos, tokens), bibliotecas e padrões |
| Estruturas de Dados e Algoritmos | Análise assintótica (Big O), algoritmos (busca binária, ordenação, listas encadeadas), pilhas e filas, hashmap, árvores |
| **IA Aplicada em Produto** | Integração de LLMs em features reais (streaming de respostas, function calling básico), custo e latência, avaliando qualidade de respostas |
| Docker | Introdução prática para desenvolvimento local e deploy |
| Coding Challenges | Leetcode: padrões de questões para entrevistas técnicas |

---

## 7. Sênior

> **Objetivo:** Tomar decisões arquiteturais, garantir qualidade e performance em escala, comunicar com autoridade e liderar tecnicamente.

> **Nota pedagógica:** O que é aprendível (arquitetura, performance, segurança, system design) está na trilha principal. O que é construído com experiência (comunicação, autoridade, julgamento) está na trilha complementar — o curso sinaliza o caminho, não finge entregar a senioridade em si.

### Trilha Principal (75%)

| Módulo | Conteúdo-chave |
|---|---|
| Arquitetando Aplicações Escaláveis | Padrões (o que são, tipos, padrões de renderização), arquiteturas (o que é/não é arquitetura, monorepo vs multi-repo, micro-frontends), Modular/Feature-Sliced Design, noções de clean architecture aplicada ao front |
| Análise de Performance | Profiler, Web Vitals, técnicas (lazy load, tree-shaking, CDN) |
| Testes e Qualidade de Código | Configurando projeto, Vitest, Playwright, lefthook, MSW, CI/CD |
| Segurança | Cookies e sessão, CSRF, CORS, XSS e mitigações |
| Observabilidade | Monitoramento, logging, rastreamento de erros em produção |
| System Design | Princípios de design de sistemas distribuídos aplicados ao front-end |

### Trilha Complementar (25%)

| Módulo | Conteúdo-chave |
|---|---|
| Comunicação Efetiva | Modelos mentais claros, feedbacks assertivos, "pelo que vale a pena brigar", construindo autoridade técnica |
| Acessibilidade | Avaliando acessibilidade, WCAG, ferramentas |
| **Developer Experience & IA Avançada** | Configuração de setup (dotfiles, snippets, automações), RAG e agents para uso em produto, workflows de desenvolvimento assistido por IA — resolve o "Produtividade (?)" do roadmap original |

---

## 8. O Fio de IA ao Longo da Plataforma

A IA escala com a maturidade do aluno. A tabela abaixo mostra a progressão do mesmo tema em profundidade crescente:

| Nível | Como IA aparece | Trilha |
|---|---|---|
| **Starter** | Como LLMs funcionam e suas limitações; uso responsável sem criar dependência; regra "explica cada linha"; integração com API da Anthropic no projeto final | Principal (Capítulo 7) |
| **Júnior** | IA para entender erros e depurar; usar Copilot com responsabilidade em código que você entende; IA não substitui entender o framework | Complementar |
| **Pleno** | Integração de LLMs em features reais: streaming, function calling, custo/latência; avaliando qualidade de output | Complementar |
| **Sênior** | RAG, agents, workflows de dev assistido por IA, configuração de ambiente produtivo com IA, decisões arquiteturais envolvendo LLMs | Complementar |

---

## 9. Decisões Técnicas da Plataforma

| Decisão | Escolha | Razão |
|---|---|---|
| Framework do site | Next.js 15 | Flexibilidade e performance |
| Sistema de conteúdo | Fumadocs + MDX | Navegação automática por `meta.json`, suporte a componentes React no conteúdo |
| Linguagem ensinada | TypeScript (desde o Starter) | Consistência, segurança de tipos, preparação real para o mercado |
| Framework back-end ensinado | NestJS | Progressão natural do OOP e decorators de TypeScript ensinados no Starter |
| Framework front-end ensinado | React | Maior demanda no mercado BR, forte suporte a TypeScript |
| Meta-framework full-stack | Next.js | Unifica front e back no Pleno, alinhado com o stack da plataforma |
| Estrutura de cursos | `content/courses/<slug>/` com `meta.json` | Um diretório por curso, navegação independente |

---

## 10. Padrão de Projeto Incremental

Cada curso deve seguir este padrão:

1. **O projeto é definido antes de escrever qualquer aula.** O arco completo (o que o aluno vai ter ao final) é conhecido desde o capítulo 1.
2. **Cada capítulo entrega uma camada funcional do projeto**, não apenas exercícios isolados.
3. **Checkpoints de código são fornecidos no início de cada capítulo** — o estado do projeto como deveria estar ao final do capítulo anterior. Isso garante que um bloqueio não vire abandono.
4. **O projeto final é publicável no GitHub** — com README, instruções de setup e pelo menos uma URL pública (Vercel, Railway, etc.).
5. **Desafios de extensão** no final de cada projeto, para quem quer ir além sem ser obrigado.

### Arco de projeto sugerido entre os níveis

```
Starter → Rastreador de Gastos (CLI)
Júnior Front → Dashboard web do Rastreador (React, consome API pública)
Júnior Back → API REST do Rastreador (NestJS, PostgreSQL)
Pleno → Rastreador full-stack (Next.js, une os dois anteriores, com auth e DB)
Sênior → Rastreador em escala (performance, observabilidade, arquitetura)
```

Esse arco narrativo é opcional mas altamente recomendado: o aluno carrega o *mesmo produto* ao longo de toda a plataforma, vendo-o crescer junto com suas habilidades. Cria identidade com o projeto e portfólio coerente.

---

## 11. Estado Atual e Próximos Passos

### Pronto ✅
- **Starter** — completo, com todos os módulos, projeto do Rastreador de Gastos, Capítulo 7 de IA, tratamento de erros, módulos, async/await, debugging, recursão opcional.

### A construir (em ordem sugerida)
1. **Júnior Front-end** — maior impacto imediato, público mais amplo, feedback visual motiva mais rápido
2. **Júnior Back-end** — após o front, usando NestJS para tirar proveito do TypeScript já ensinado
3. **Pleno** — quando ambos os júniores estiverem prontos, o projeto de convergência faz sentido completo
4. **Sênior** — último, quando a base estiver consolidada

### Decisões abertas (a resolver antes de cada curso)
- Qual projeto incremental específico para cada nível (o arco do Rastreador é sugestão, não obrigação)
- Se os cursos Júnior Front e Júnior Back compartilham módulos complementares (Metodologias Ágeis, Preparação para Entrevistas) ou são duplicados por curso
- Estratégia de avaliação/certificação (se houver)
- Modelo de acesso (gratuito, pago, freemium)
