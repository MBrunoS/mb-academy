# Narrativa e Gamificação — Rastro *(nome de trabalho)*

> Documento de design da camada narrativa e da experiência da plataforma. Companheiro de `planejamento.md`: aquele define **o que** se ensina; este define **como a jornada é vivida**. Atualizar sempre que decisões estruturais mudarem.
>
> **Status:** direção escolhida, pré-implementação. *Rastro* é nome de trabalho — não decidido. Conferir INPI + domínio antes de comprometer.
>
> **Direção (v2 deste doc):** a plataforma deixa de ser "curso com narrativa" e passa a **simulação de trabalho** — uma holding fictícia (*Systema Corp*, nome provisório) onde o aluno sobe na carreira entregando código real via fluxo GitHub-nativo. A herança do **Antecessor** é o coração humano dentro dessa moldura corporativa.

---

## 1. Princípio que rege tudo

> **A narrativa tem que ser a verdade emocional de virar dev — não uma fantasia colada por cima.**

Toda vez que a história acontece *ao lado* do aprendizado (ex.: "termine a lição e ganhe +50 de faísca"), soa estranho, e o público adulto sente na hora. A narrativa só funciona quando ela **é a mesma coisa** que trabalhar como dev de verdade já é. Por isso a moldura é uma empresa, e a mecânica são as ferramentas reais (Git, PR, CI), não metáforas.

### Contrato pedagógico (não-negociável)

- **Narrativa é retenção. Conteúdo é aquisição.** O aluno chega pela profundidade do conteúdo e fica pela história. A narrativa **não** compensa conteúdo raso — principalmente para o júnior/pleno, que já tem Google, doc e IA. Se o módulo não for mais fundo do que o que existe de graça, nada o segura.
- **A simulação nunca rouba a cena do código.** A Systema Corp emoldura e dá apostas; não é uma novela de personagens.
- **Tudo é pulável.** Quem quer só o código ignora a narrativa sem perder conteúdo técnico.

---

## 2. A premissa: Systema Corp, um SO de carreira

O aluno não "entra num jogo". Ele faz login no banco de talentos de uma **holding de tecnologia fictícia** e sobe na hierarquia interna **entregando código real**. A interface evoca ferramentas de trabalho (board estilo Jira/Linear, Git, chat com o "time"), mas — ponto crítico — **o trabalho de verdade acontece no GitHub** (§6), não numa IDE fake.

A narrativa opera em **duas camadas**, em planos diferentes:

| Camada | O que é | Papel |
|---|---|---|
| **Moldura — Systema Corp / carreira** | *onde você está*: um dev subindo de cargo numa empresa, com as apostas reais do trabalho | a **motivação / o sentido** |
| **Motor — o Antecessor / herança** | *o que você toca todo dia*: o código herdado, a relação com quem veio antes, o ato de suceder | a **didática** |

São o **mesmo arco visto de dois ângulos**: uma carreira *é* uma história de sucessão. Você começa como o estagiário que herda o código do sênior e termina como o sênior cujo código os outros herdam. A herança é o que você **faz**; a carreira é o que aquilo **significa**.

> **Regra anti-cafona:** a Systema Corp é **impessoal de propósito** — mas tem *uma* pessoa que de fato te ensina: o Antecessor (seu padrinho). O contraste (sistema frio + um humano que se importa) é bom drama e boa didática. Não encher de personagens (RH, manager, PM) — isso vira novela. O Antecessor e o código são o centro.

---

## 3. Progressão por cargo

Em vez de fases, o aluno avança por **responsabilidade**. O registro da narrativa e o tipo de tarefa mudam por nível:

| Cargo (nível) | Narrativa | Acesso / dinâmica | Relação com o Antecessor |
|---|---|---|---|
| **Estágio / Onboarding** (Starter) | passou no processo seletivo; acesso restrito (lê, ainda não escreve no repo principal) | configurar ambiente, sintaxe, passar nos primeiros testes; **fazer o 1º commit/PR** | **Confiança** — ele sabe, você segue |
| **Júnior** | recebe suas primeiras *tasks* no board; o padrinho revisa seus PRs | abrir branches, corrigir bugs do "QA", passar no CI; PR ruim é rejeitado com comentários pra refatorar | **Autonomia** — você estende o que ele deixou |
| **Pleno** | autonomia; cria *features* do zero; participa de decisões de arquitetura | escolhe foco **Front** (render, estado, APIs) ou **Back** (modelagem, endpoints, queries) | **Discordância** — "eu teria feito diferente, e sei por quê" |
| **Sênior / Tech Lead** | responsável pela saúde do ecossistema; suas decisões impactam o negócio | partes críticas do sistema; **code review** em PRs de juniores (bots no v1); detectar gargalos; decisões de arquitetura | **Sucessão** — você vira o Antecessor de alguém |

> O nível **Estágio read-only** não é só enredo: treina a skill real de **ler código antes de escrever** — exatamente o que a herança exige e o que ninguém ensina. O primeiro "ticket" pode ser literalmente *"faça seu primeiro commit"*.
>
> O primeiro momento em que o aluno **discorda** do Antecessor, com argumento, é o momento em que deixou de ser júnior. A narrativa encena isso sozinha — um curso comum não consegue medir.

Por que isso retém o intermediário: tutorial ensina *greenfield* (começar limpo); senioridade é *herdar bagunça e decidir com trade-off*. A herança + a simulação de trabalho são, literalmente, a lacuna que o júnior/pleno não acha em lugar nenhum — ambientação **+ método**.

---

## 4. O Antecessor (o coração humano)

- **No texto:** o padrinho — um dev talentoso que começou o projeto da Systema Corp e seguiu em frente. Deixou código, commits, README pela metade, bilhetes. No Júnior, revisa seus PRs.
- **Na real:** é **você, o criador, com um véu leve.** A voz do Antecessor é a sua voz ensinando através do tempo — o maior ativo da plataforma (beginner fideliza por voz pessoal de fundador). Não terceirize essa voz; em especial, é ela que dá calor à corporação fria.

### A regra de ouro: andaime, nunca quebrado

O código herdado **não é quebrado**. Código quebrado ensina vício, frustra, e faz o aluno achar que o Antecessor era ruim.

| ❌ Quebrado | ✅ Inacabado com intenção |
|---|---|
| bugs, gambiarra, lógica errada | estrutura limpa, tipos definidos, lógica *por escrever* |
| "esse cara era ruim" | "esse cara era bom — olha como está organizado" |
| você debuga e xinga | você **preenche** um esqueleto bem desenhado |

**É a qualidade do que ele deixou que prova o talento dele:** tipos certos, arquivos separados, contratos definidos, e os pontos difíceis marcados com um bilhete que explica a intenção. (Exceção: a **Sprint de Crise** (§7) usa código propositalmente quebrado — mas ali o aluno é o *bombeiro*, não o herdeiro.)

---

## 5. A dimensão OSS (escala com a maturidade)

A herança ganha **apostas externas** conforme o aluno cresce, espelhando o fio de IA do `planejamento.md`:

- **Estágio/Starter:** íntimo. Só você + o andaime do Antecessor.
- **Júnior+:** revela-se que o produto da Systema Corp é, na verdade, open-source e **outras pessoas dependem dele**. Entra a cultura real: issues, PRs, semver, changelog. (O "mantenedor que sumiu" *é* o Antecessor — os frames convergem.)
- **Pleno/Sênior:** você assume a manutenção de algo que importa para fora de você.

"Pessoas dependem disso" é motivação mais adulta que um bilhete pessoal, e projeto abandonado **já vem com mess** — combustível para prática de julgamento. Tudo **simulado** (issues/PRs roteirizados): sem comunidade real, sem risco de autopromoção (§9).

---

## 6. Como funciona na prática: GitHub-nativo

> Modelo mental: **o site (Fumadocs) ensina. O GitHub é onde você trabalha. Os próprios recursos do GitHub _são_ a simulação — mais reais que uma IDE fake, porque são as ferramentas de verdade.**

**Importante:** o **GitHub Classroom foi descontinuado** (cadastros encerrados em 26/05/2026; aposentadoria em 28/08/2026). Ele nunca foi peça essencial — só automatizava a criação do repo por aluno. Substituído por recursos **nativos e gratuitos**. Contas, repositórios e Actions não são afetados.

### Um ticket, do começo ao fim

1. **Onboarding — o aluno ganha o repo dele.** Sem Classroom, via:
   - ⭐ **"Use this template"**: o repo do projeto é um *template*; um clique cria a cópia própria do aluno. Grátis, nativo, ele é dono.
   - **Fork** de template público (dá o sabor "sincronizar com upstream" / OSS).
   - **CLI scaffolder** (`npx create-rastreador` / `gh repo create --template`) — on-brand pro Starter, que já é um projeto CLI.
   - **Auto-provisão via GitHub App** (cria o repo no enroll) — fica para o v2, quando houver backend.
2. **O board** = **GitHub Projects** (kanban sobre issues). As *tasks* já vêm como **Issues** escritas na voz do Antecessor, com critérios de aceite e labels (`nível:júnior`, `front`, `dificuldade:2`).
3. **O trabalho** = branch + commits. Git de verdade desde o dia 1 (o que no `planejamento.md` é teoria de Git vira prática).
4. **A esteira** = **GitHub Actions**: cada push roda `tsc` + lint + **os testes do capítulo**. ✅/❌. É a "Confiabilidade do Código" (§8) em mecânica real.
5. **O PR + dois revisores:**
   - **Bot CI:** testes falhando = PR "reprovado" com o output do erro.
   - **Antecessor (revisão de IA):** um Action manda o *diff* + rubrica + a persona do Antecessor para Claude, que **comenta o PR na voz do padrinho, sobre o código real do aluno**. Amarra a voz pessoal + o fio de IA + o tutor-que-não-entrega-a-resposta (a rubrica instrui a *guiar*, não corrigir).
6. **Merge destranca o próximo.** PR verde → merge → um Action **abre a próxima Issue** (o próximo ticket + o próximo Bilhete). É a *história-como-recompensa* (§7) em mecânica pura.

### Off-the-shelf × construído

| De fábrica (grátis, real) | A gente constrói (os diferenciais) |
|---|---|
| Repos, Issues, Projects, "Use this template" | **Revisor IA do Antecessor** (Action + Claude API) |
| Branches, commits, PRs | **"Merge destranca a próxima Issue"** (Action) |
| **Actions** = CI/testes/lint | **Stack Profile** (agrega skills pelas labels) |
| Deploy preview (Vercel/Railway) | Issues/tickets roteirizados; a Sprint de Crise |

### Custo ≈ zero para escalar
Cada aluno trabalha **no repo da própria conta** → o CI roda nos **minutos gratuitos de Actions dele**, não nos seus (repo público = Actions ilimitado). Seu único custo real são os **tokens da revisão de IA** (sua chave da API).

### Atritos honestos
- Exige conta no GitHub + um mínimo de git (ok no Júnior+; no Estágio o 1º ticket é "faça seu primeiro commit").
- Revisão de IA custa tokens por PR (gerenciável; dá pra limitar escopo).
- Avaliar código nunca é perfeito (testes pegam correção; IA pega julgamento; bordas escapam — como review humano real).

---

## 7. Gamificação que não parece jogo

A régua: progressão por **maestria e indicadores de mercado**, não por XP/grind. A recompensa é **curiosidade**, não número.

### Mecânica-âncora — história como recompensa
Terminar uma task **não** dá pontos abstratos; **destranca o próximo pedaço da história** (a próxima Issue, um bilhete novo, uma revelação). A cenoura é "e agora?". Não dá pra farmar (só avança fazendo o trabalho); e o portão tem que ser **real** (CI verde + review), senão vira "next" vazio.

### Métricas como indicadores reais (não XP/HP/inventário)
- **Confiabilidade do Código** (no lugar de vidas/HP): mantém o verde na esteira. Commits que quebram o CI derrubam o índice; recuperar exige resolver *hotfixes*. ⭐ métrica-líder — premia correção.
- **Stack Profile** (no lugar de inventário): domínio real por tecnologia (TS 80%, SQL 40%), agregado pelas labels das tasks entregues. É o "mapa de capacidades": adulto liga pra sinal, não pra ponto.
- **Portfólio de Commits**: o aluno sai com artefato real (repo, deploy, PRs) — não certificado.

> ⚠️ **Velocity / "Eficiência de Entrega" — cuidado (lei de Goodhart).** Velocity *recompensada* incentiva correr e gamear; é anti-padrão até no mercado real. Manter, se houver, como **informação**, nunca como pontuação premiada. Líderes são Confiabilidade e Stack Profile.

### Stackam por cima
- **Grimório pessoal**: seu arsenal real (snippets, configs, dotfiles) — peça de jogo e artefato pra vida.
- **Bestiário de bugs**: cada tipo de bug "derrotado" entra num manual — divertido e material de revisão.

### O boss — a Sprint de Crise
O clímax de cada nível não é um "monstro": é um **incidente**. Um Action abre uma Issue `🔴 incidente`, o repo está num estado quebrado (bug plantado / regressão de performance) com logs, e há um tempo determinado. O aluno lê os logs, acha a linha, corrige e sobe o patch — **o CI precisa voltar a verde**. Resposta a incidente + postmortem de verdade.

---

## 8. O clímax macro: a ficção se dissolve em realidade

O **twist de verdade** (uma vez por jornada, não por capítulo): durante o começo, "A." é ambíguo de propósito. Lá pra frente, o aluno descobre que o projeto que herdou foi **real** — commits, datas, becos sem saída de uma pessoa de verdade. "A." nunca foi ficção. E o golpe: **o projeto dele vai ser entregue, de verdade, ao próximo** — com as anotações dele, o nome dele.

Cada bilhete era um humano esticando a mão através do tempo — e o aluno treinava, sem saber, pra virar um. Não é estranho **porque é verdade**. A sucessão final (você vira o Antecessor / o mantenedor que os outros herdam) é o encontro das duas camadas: virar sênior *é* virar quem os outros herdam.

---

## 9. O que **não** vamos fazer (e por quê)

- **Comunidade pública / peers reais — descartado no v1.** O "code review em PRs de juniores" do nível Sênior usa **bots/cenários roteirizados**, não alunos reais. Peers reais reabririam o risco de autopromoção (lição do TabNews: reputação otimiza pelo que mede) e exigiriam curadoria pesada. Parado como ideia de futuro distante.
- **"Legar" no v1 = hand-off privado** (autor revisa), não mural público.
- **Velocity como pontuação premiada** (§7) e **fantasia decorativa** (forja, faíscas, mascote) — fora.

---

## 10. Dials (a calibrar contra este doc)

- **Intensidade da Systema Corp:** começar **baixa** (ambiente leve) e subir se faltar peso. Cuidado com excesso de personagens.
- **Quão cedo cai o véu do twist:** provavelmente Pleno. *(Aberto.)*
- **Nome da plataforma:** *Rastro* (trabalho). Candidatos sondados sem colisão no nicho: Cerne, Limiar, Âmago, Raiz, Lastro, Systema Corp. *(Aberto — conferir INPI + domínio.)*

---

## 11. Implementação (faseada)

### Fase 1 — site estático atual + GitHub-nativo (sem backend próprio)
- Site Fumadocs = "manual da empresa": ensina e, ao fim de cada lição, aponta o ticket (link pro template/Issue).
- Componente MDX **`<Bilhete>`** (voz do Antecessor, fechável e pulável).
- Projeto como **template repo** com: Issues roteirizadas, **Actions** (tsc/lint/testes), e o **Action de revisão IA** (Claude) na persona do Antecessor.
- **"Merge destranca a próxima Issue"** via Action.
- Capstone = hand-off privado; o aluno sai com **Portfólio de Commits** (repo + deploy + PRs).

### Fase 2 — backend próprio
- Contas, **Stack Profile** e **Confiabilidade** persistentes (lendo a API do GitHub), **grimório**/**bestiário**, auto-provisão de repo (GitHub App), avaliação por defesa do projeto. (Peers reais só se §9 for revisitado.)

---

## 12. Exemplo concreto (Estágio → Júnior, Rastreador)

Issue no board, na voz do Antecessor:

> **Issue #4 — Permitir registrar um gasto** · `nível:estágio` `dificuldade:1`
> *"Deixei o `adicionar()` só com a assinatura, de propósito. Um gasto entra na lista — os tipos já te guiam. Critério: o teste `adicionar.spec.ts` passa no CI. — A."*

O código herdado (andaime, não quebrado):

```ts
// tipos.ts  ·  deixado pronto pelo Antecessor
export type Categoria = "alimentação" | "transporte" | "lazer" | "outros";
export type Gasto = { descricao: string; valor: number; categoria: Categoria; data: Date };
```
```ts
// rastreador.ts
export class Rastreador {
  private gastos: Gasto[] = [];
  adicionar(gasto: Gasto): void {
    // TODO(você): um gasto entra na lista. Os tipos já te dizem o formato.
  }
}
```

O aluno cria a branch, implementa, abre o PR. O CI roda os testes; o Antecessor (IA) comenta o diff:

> 💬 **Antecessor** (revisão de IA no PR)
> *"Funciona. Mas no `total()` você fez um `for` na mão — lembra do `reduce`? Tenta, e repara que some o risco de erro de índice. — A."*

CI verde + review → merge → abre a **Issue #5** com o próximo Bilhete (história como recompensa).

---

## 13. Encaixe com o `planejamento.md`

- **Projeto incremental** (Rastreador → dashboard → API → sistema distribuído): é o produto da Systema Corp amadurecendo nas mãos do aluno.
- **Currículo em espiral:** "aquele módulo que eu não entendia, agora entendo" — você volta ao mesmo sistema e enxerga o que era opaco (Metroidvania).
- **Trilha dupla front/back:** as **duas faces** do sistema (interface × motor) = a escolha de foco no Pleno (§3).
- **Git/PR/CI:** deixam de ser teoria e viram a *mecânica diária* (§6).
- **Fio de IA:** o revisor de IA do Antecessor é o tutor socrático "que não dá a resposta" — combatendo a dependência de IA que o `planejamento.md` já critica.

---

## 14. Próximos passos

1. **Capítulo-piloto** do Estágio com `<Bilhete>` + template repo + 1 Action de teste, pra sentir o tom.
2. Protótipo do **Action de revisão IA** (Claude na persona do Antecessor) num PR de exemplo.
3. Componente `<Bilhete>` em `src/mdx-components.tsx`.
4. Calibrar os dials (§10) e decidir o nome.
