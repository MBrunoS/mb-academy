# Narrativa e Gamificação — Rastro *(nome de trabalho)*

> Documento de design da camada narrativa da plataforma. Companheiro de `planejamento.md`: aquele define **o que** se ensina; este define **como a jornada é vivida**. Atualizar sempre que decisões estruturais da narrativa mudarem.
>
> **Status:** direção escolhida, pré-implementação. *Rastro* é nome de trabalho — não decidido. Conferir INPI + domínio antes de comprometer.

---

## 1. Princípio que rege tudo

> **A narrativa tem que ser a verdade emocional de virar dev — não uma fantasia colada por cima.**

Toda vez que a história acontece *ao lado* do aprendizado (ex.: "termine a lição e ganhe +50 de faísca"), soa estranho, e o público adulto sente na hora. A narrativa só funciona quando ela **é a mesma coisa** que aprender a programar de verdade já é.

E a experiência mais narrativa que existe na profissão a gente vive todo dia:

> Você entra num sistema que **outra pessoa construiu**. Não entende nada. Se sente uma fraude. Aos poucos decifra. Um dia, você *é* a pessoa cujo código os outros vão herdar.

Isso é um arco de três atos completo — e é, literalmente, a escada Aprendiz → Sênior. Não precisamos inventar nada. Só **nomear** o que já acontece.

### Contrato pedagógico (não-negociável)

- **Narrativa é retenção. Conteúdo é aquisição.** O aluno chega pela profundidade do conteúdo e fica pela história. A narrativa **não** compensa conteúdo raso — principalmente para o público júnior/pleno, que já tem Google, doc e IA. Se o módulo não for mais fundo do que o que existe de graça, nenhuma narrativa o segura.
- **A história nunca rouba a cena do código.** Ela emoldura, dá peso e continuidade. Não é uma novela.
- **Tudo é pulável.** Quem quer só o código ignora a narrativa sem perder conteúdo técnico.

---

## 2. A direção: motor + moldura

A narrativa opera em **duas camadas**, em planos diferentes:

| Camada | O que é | Papel |
|---|---|---|
| **Motor — o Antecessor / herança** | *o que você toca todo dia*: o código herdado, a relação com quem veio antes, e o ato de suceder | a **didática** |
| **Moldura — carreira** | *onde você está*: um dev numa jornada, do primeiro contato ao sênior, com as apostas reais | a **motivação / o sentido** |

São o **mesmo arco visto de dois ângulos**: uma carreira *é* uma história de sucessão. Você começa como o júnior que herda o código do sênior e termina como o sênior cujo código os outros herdam. A herança é o que você **faz**; a carreira é o que aquilo **significa**.

> **Regra do dial:** a moldura de carreira fica **leve** — ambiente, um evento aqui e ali pra dar peso. Nunca uma trama de personagens (PM chato, RH, manager) que vira cafona. O Antecessor e o código são o centro. A intensidade da carreira é um *dial* ajustável (ver §9).

---

## 3. O Antecessor

O aluno não começa numa "aula 1". Ele **chega** num projeto inacabado — o Rastreador de Gastos — deixado por alguém que foi embora: **o Antecessor** (assinatura: *"— A."*).

### Quem é o Antecessor

- **No texto:** um dev talentoso que começou o projeto e seguiu em frente. Deixou o código, os commits, um README pela metade, bilhetes.
- **Na real:** é **você, o criador da plataforma, com um véu leve.** A voz do Antecessor é a sua voz ensinando através do tempo. Esse é o maior ativo da plataforma — beginner fideliza por voz pessoal de fundador (modelo curso.dev / Boot.dev). Não terceirize essa voz.

### A regra de ouro: andaime, nunca quebrado

O código herdado **não é quebrado**. Código quebrado ensina vício, frustra, e faz o aluno achar que o Antecessor era ruim — o oposto do que queremos.

| ❌ Quebrado | ✅ Inacabado com intenção |
|---|---|
| bugs, gambiarra, lógica errada | estrutura limpa, tipos definidos, lógica *por escrever* |
| "esse cara era ruim" | "esse cara era bom — olha como está organizado" |
| você debuga e xinga | você **preenche** um esqueleto bem desenhado |

**É a qualidade do que ele deixou que prova o talento dele.** Os tipos certos, os arquivos separados, os contratos definidos, e os pontos difíceis marcados com um bilhete que explica a intenção. É exatamente como um sênior faz onboarding de um júnior: *"montei a estrutura, os tipos estão prontos, agora implementa essas funções."*

---

## 4. A relação evolui (para não virar o mesmo truque toda aula)

O que mantém vivo é que a **relação com o Antecessor amadurece** junto com a senioridade. O registro da narrativa muda por nível:

| Nível | Relação | O que ele te entrega | O "exercício" |
|---|---|---|---|
| **Starter** | **Confiança** — "ele sabe, eu sigo" | esqueleto limpo pra preencher | *implemente* |
| **Júnior** | **Autonomia** — você estende além do que ele fez | base que funciona, pra crescer | *construa em cima* |
| **Pleno** | **Discordância** — "eu teria feito diferente, e sei por quê" | algo que funciona mas tem dívida e decisões | *julgue, refatore, defenda* |
| **Sênior** | **Sucessão** — você reescreve e documenta pro próximo | o bastão | *deixe algo herdável* |

> O primeiro momento em que o aluno **discorda** do Antecessor, com argumento, é o momento em que ele deixou de ser júnior. Num curso comum isso não dá pra medir; aqui a narrativa o encena sozinha.

Isso também resolve o problema de **reter o intermediário**: tutorial ensina *greenfield* (começar do zero, limpo); senioridade é *herdar bagunça e decidir com trade-off*. O modelo de herança é, literalmente, a lacuna que o júnior/pleno não acha em lugar nenhum — ambientação **+ método**, não só ambientação.

---

## 5. A dimensão OSS (escala com a maturidade)

A herança ganha **apostas externas** conforme o aluno cresce — do íntimo ao coletivo, espelhando o fio de IA do `planejamento.md`:

- **Starter:** íntimo. Só você + o andaime do Antecessor. Sem peso de mundo.
- **Júnior+:** revela-se que aquilo é, na verdade, um projeto open-source e **outras pessoas dependem dele**. Entra a cultura real: issues, PRs, semver, changelog. (O "mantenedor que sumiu" *é* o Antecessor — os dois frames convergem.)
- **Pleno/Sênior:** você assume a manutenção de algo que importa para fora de você.

Ganho: "pessoas dependem disso" é uma motivação mais adulta que um bilhete pessoal, e um projeto abandonado **já vem com mess** — combustível perfeito para prática de julgamento. Tudo **simulado** (issues, PRs fake): sem comunidade real, sem risco de virar vitrine de autopromoção (ver §8).

---

## 6. O clímax: a ficção se dissolve em realidade

Isto é o **twist de verdade** (macro, uma vez por jornada — não um truque de capítulo):

Durante todo o começo, "A." é ambíguo de propósito — pode ser um personagem, um recurso narrativo. Lá pra frente, o aluno descobre que o projeto que herdou foi **real**: commits, datas, becos sem saída que uma pessoa de verdade deixou. "A." nunca foi ficção. E o golpe: **o projeto dele vai ser entregue, de verdade, ao próximo** — com as anotações dele, o nome dele.

Cada bilhete que ele leu era um humano esticando a mão através do tempo — e ele estava treinando, sem saber, pra virar um. Deixa de ser "um jogo sobre herdar código" e passa a ser "você é o elo mais novo de uma corrente real". Fiel ao princípio: não é estranho **porque é verdade**.

A sucessão final ("você vira o Antecessor / o mantenedor que os outros herdam") é o encontro das duas camadas: virar sênior *é* virar a pessoa que os outros herdam.

---

## 7. Gamificação que acopla (sem virar Duolingo-pra-criança)

A régua: progressão por **maestria e identidade**, não por XP/grind. A recompensa é **curiosidade**, não número.

### Mecânica-âncora — história como recompensa
Terminar uma lição **não** dá pontos abstratos; **destranca o próximo pedaço da história** (um bilhete novo, uma revelação, a próxima dobra). A cenoura é "e agora?".
- **Não dá pra farmar:** você só avança a história fazendo o trabalho de verdade — resolve o medo de premiar moagem.
- **O portão tem que ser real:** o desbloqueio vem de *demonstrar* entendimento, não de clicar "next". Senão vira "próximo" vazio.

### Stackam por cima (em escopo)
- **Grimório pessoal:** seu arsenal real (snippets, configs, dotfiles) montado ao longo do curso. Peça de jogo *e* artefato que você leva pra vida.
- **Bestiário de bugs:** cada tipo de bug "derrotado" entra num manual — divertido *e* vira material de revisão.
- **Boss = ticket multi-skill:** o capstone de cada nível é um desafio que junta tudo e destranca o próximo nível.
- **Mapa de capacidades:** o perfil mostra *o que você consegue fazer* (silhueta de skills), não uma barra de XP. Adulto liga pra sinal, não pra ponto.

### Fora de escopo por ora
Leaderboard de karma, streaks competitivos, badges de vaidade. Risco de incentivar a coisa errada (ver §8).

---

## 8. O que **não** vamos fazer (e por quê)

- **Comunidade pública / Commons aberto — descartado.** Risco de virar amontoado de autopromoção (o que aconteceu com o TabNews: sistema de reputação otimiza pelo que mede; se mede atenção, gera caça-atenção). Além de exigir curadoria pesada e contínua.
- **No v1, "legar" é hand-off privado** (para o autor revisar), não mural público. Prova o conceito da sucessão com controle de qualidade total. Um eventual Commons curado fica **parado como ideia de futuro distante**, só se houver demanda *e* fôlego de curadoria.
- **Fantasia decorativa** (forja mística, faíscas, mascote). Some com a credibilidade pro público adulto.

---

## 9. Dials (ajustes a calibrar contra este doc)

- **Intensidade da carreira:** de "quase ausente, só um pano de fundo" a "eventos recorrentes (review, deadline, promoção)". Começar **baixo**; subir se faltar peso. *(Decisão aberta — calibrar lendo os primeiros capítulos.)*
- **Quão cedo cai o véu do twist:** provavelmente Pleno, quando o aluno já repara no cuidado dos comentários. *(Aberto.)*
- **Nome da plataforma:** *Rastro* (trabalho). Outros candidatos sondados sem colisão no nicho: Cerne, Limiar, Âmago, Raiz, Lastro. *(Aberto — conferir INPI + domínio.)*

---

## 10. Implementação (faseada)

### Fase 1 — cabe no site estático atual (Next.js 15 + Fumadocs/MDX, sem backend)
- Componente MDX **`<Bilhete>`**: a voz do Antecessor, em bloco **fechável e pulável**. Quem quer história abre; quem quer código ignora.
- **Checkpoints de código por capítulo** — já previstos no `planejamento.md` (§10). O estado do projeto ao fim do capítulo anterior; é o "andaime" que o aluno preenche.
- **Progresso client-side** (`localStorage`) + "marquei como feito" por lição, lendo o `meta.json` existente. Sem login.
- **História-como-recompensa** via gating leve: o próximo `<Bilhete>`/capítulo abre ao concluir o anterior.
- Capstone do Starter = **hand-off privado** (publicável no GitHub com README, deploy e write-up — o aluno sai com artefato real, não certificado).

### Fase 2 — quando existir backend (já planejado)
- Contas, progresso persistido, **mapa de capacidades**, **grimório** e **bestiário** persistentes.
- Eventual avaliação por defesa do projeto (em vez de quiz).
- (Commons curado só se §8 for revisitado.)

---

## 11. Exemplo concreto (Starter, capítulo 1 do Rastreador)

O aluno abre o projeto e encontra isto — **não** uma tela de erro:

```ts
// tipos.ts  ·  deixado pronto pelo Antecessor
export type Categoria = "alimentação" | "transporte" | "lazer" | "outros";

export type Gasto = {
  descricao: string;
  valor: number;
  categoria: Categoria;
  data: Date;
};
```

```ts
// rastreador.ts
export class Rastreador {
  private gastos: Gasto[] = [];

  adicionar(gasto: Gasto): void {
    // TODO(você): um gasto entra na lista. Os tipos já te dizem o formato.
  }

  total(): number {
    // TODO(você): some os valores. Vai querer um array method aqui. 😉
  }
}
```

E no MDX, ao lado, a voz aparece como bloco **opcional e fechável**:

> 💬 **Bilhete do Antecessor**
> *"Defini os tipos antes de qualquer lógica, de propósito. Quando os tipos estão certos, o resto quase se escreve sozinho. Confia — você vai sentir isso. — A."*

Pedagogicamente: o aluno **não debugou nada**. Preencheu um esqueleto limpo, e a *escolha* do Antecessor (tipos primeiro) virou a própria lição. Ao concluir, em vez de "+50 XP", abre o próximo bilhete — que planta o gancho do capítulo seguinte (história como recompensa).

---

## 12. Encaixe com o `planejamento.md`

- **Projeto incremental** (Rastreador → dashboard → API → sistema distribuído): é o "sistema herdado" amadurecendo nas mãos do aluno. A narrativa não muda o projeto; dá peso a ele.
- **Currículo em espiral:** "aquele módulo que eu não entendia no capítulo 2, agora entendo" — você volta ao mesmo sistema e enxerga o que era opaco (estrutura tipo Metroidvania). Descoberta, não repetição.
- **Trilha dupla front/back:** o sistema tem **duas faces** — a interface que se vê e o motor que a sustenta. Duas especialidades, um sistema. O Antecessor pode ter deixado as duas pela metade.
- **Trilha obrigatória/opcional:** módulos seguem consumíveis avulsos (o intermediário entra direto no gap dele); quem segue o arco do Rastreador vê o conteúdo aterrissar em contexto.
- **Fio de IA:** o tutor socrático "que se recusa a dar a resposta" pode ser **uma das vozes do Antecessor** — combatendo a dependência de IA que o `planejamento.md` já critica.

---

## 13. Próximos passos

1. Escrever 1–2 capítulos-piloto do Starter já com `<Bilhete>` e checkpoint, pra **sentir o tom** na prática.
2. Implementar o componente `<Bilhete>` (fechável) em `src/mdx-components.tsx`.
3. Calibrar os dials da §9 lendo o piloto.
4. Decidir o nome.
