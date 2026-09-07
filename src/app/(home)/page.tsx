import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Github,
  Layers,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StatusBadge } from "@/components/status-badge";
import { coursesCatalog, levelOrder } from "@/lib/courses-catalog";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Philosophy />
      <Roadmap />
      <About />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-6 pt-16 pb-20 md:flex-row md:pt-24 md:pb-28">
      <div className="flex flex-1 flex-col items-start gap-6 text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs font-medium text-fd-muted-foreground">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Iniciativa pessoal &middot; conteúdo 100% gratuito
        </span>
        <h1 className="text-4xl leading-tight font-black tracking-tight text-fd-foreground md:text-6xl">
          Aprenda a programar do zero ao{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
            sênior
          </span>
        </h1>
        <p className="max-w-[520px] text-base leading-relaxed text-fd-muted-foreground md:text-lg">
          MB Academy é uma trilha de programação em português, escrita por um
          único dev: TypeScript desde a primeira aula, projeto prático
          crescendo capítulo a capítulo, e IA tratada como parte do processo
          de aprender — não como atalho.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/courses/starter"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-fd-primary px-5 text-sm font-bold text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Começar pelo Starter
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/courses"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-fd-border bg-fd-card px-5 text-sm font-bold text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            Ver todas as trilhas
          </Link>
        </div>
      </div>
      <div className="w-full flex-1 md:max-w-[440px]">
        <CodePreview />
      </div>
    </section>
  );
}

function CodePreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-fd-border bg-fd-card shadow-xl shadow-indigo-500/5">
      <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 font-mono text-xs text-fd-muted-foreground">
          trilha.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-violet-500 dark:text-violet-400">const</span>{" "}
          trilha = [{"\n"}
          {"  "}
          <span className="text-emerald-600 dark:text-emerald-400">
            &quot;Starter&quot;
          </span>
          ,{"\n"}
          {"  "}
          <span className="text-emerald-600 dark:text-emerald-400">
            &quot;Júnior&quot;
          </span>
          ,{"\n"}
          {"  "}
          <span className="text-emerald-600 dark:text-emerald-400">
            &quot;Pleno&quot;
          </span>
          ,{"\n"}
          {"  "}
          <span className="text-emerald-600 dark:text-emerald-400">
            &quot;Sênior&quot;
          </span>
          ,{"\n"}] <span className="text-violet-500 dark:text-violet-400">as const</span>;
          {"\n\n"}
          trilha.
          <span className="text-sky-600 dark:text-sky-400">forEach</span>
          {"("}nivel {"=>"} {"{"}
          {"\n"}
          {"  "}
          <span className="text-sky-600 dark:text-sky-400">console.log</span>
          {"("}
          <span className="text-emerald-600 dark:text-emerald-400">
            {"`-> ${nivel}`"}
          </span>
          {")"};{"\n"}
          {"}"});
        </code>
      </pre>
    </div>
  );
}

const philosophyItems = [
  {
    icon: Braces,
    title: "TypeScript desde o primeiro dia",
    description:
      "Sem regressão para JavaScript puro. Você aprende TS no Starter e aprofunda o sistema de tipos em cada nível seguinte.",
  },
  {
    icon: RefreshCw,
    title: "Currículo em espiral",
    description:
      "Os temas voltam com mais profundidade a cada nível — testes, por exemplo, aparecem no Júnior, no Pleno e no Sênior, cada vez mais avançados.",
  },
  {
    icon: Layers,
    title: "Projeto incremental por capítulo",
    description:
      "Nada de conceitos isolados: cada capítulo adiciona uma camada real ao projeto em construção, com checkpoints de código entre eles.",
  },
  {
    icon: Sparkles,
    title: "IA como fio condutor",
    description:
      "IA aparece em todos os níveis — de ferramenta de aprendizado no Starter a arquitetura de workflows avançados no Sênior.",
  },
];

function Philosophy() {
  return (
    <section className="border-t border-fd-border bg-fd-card/40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
            Como a MB Academy é diferente
          </h2>
          <p className="max-w-[640px] text-fd-muted-foreground">
            Cada decisão de conteúdo segue os mesmos princípios, do primeiro
            ao último curso da trilha.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {philosophyItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-background p-5"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <item.icon className="size-4.5" />
              </span>
              <h3 className="font-semibold text-fd-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-fd-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-20">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
          A trilha completa
        </h2>
        <p className="max-w-[640px] text-fd-muted-foreground">
          Do zero ao sênior, com trilhas espelhadas de front-end e back-end a
          partir do Júnior. Alguns níveis ainda estão em construção.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {levelOrder.map((level) => {
          const courses = coursesCatalog.filter((c) => c.level === level);
          return (
            <div
              key={level}
              className="flex flex-col gap-3 rounded-2xl border border-fd-border p-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="sm:w-36 sm:shrink-0">
                <span className="text-sm font-bold tracking-wide text-fd-muted-foreground uppercase">
                  {level}
                </span>
              </div>
              <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                {courses.map((course) => (
                  <div
                    key={course.slug}
                    className="flex items-center justify-between gap-3 rounded-xl bg-fd-card px-4 py-3"
                  >
                    <span className="text-sm font-medium text-fd-foreground">
                      {course.title}
                    </span>
                    <StatusBadge status={course.status} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline dark:text-indigo-400"
        >
          Ver detalhes de cada curso
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-t border-fd-border bg-fd-card/40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
          Um projeto pessoal, não uma escola
        </h2>
        <p className="max-w-[720px] text-fd-muted-foreground">
          Não há investidores, equipe de marketing ou vagas de emprego para
          vender aqui — só o curso que eu gostaria de ter tido quando comecei
          a programar. O plano completo de cada trilha e o código-fonte deste
          site são abertos no GitHub.
        </p>
        <Link
          href="https://github.com/MBrunoS/forja-academy"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl border border-fd-border bg-fd-background px-4 py-2 text-sm font-bold text-fd-foreground transition-colors hover:bg-fd-accent"
        >
          <Github className="size-4" />
          Ver no GitHub
        </Link>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-20">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 px-6 py-16 text-center">
        <h2 className="max-w-[560px] text-3xl font-black tracking-tight text-white md:text-4xl">
          Pronto para escrever sua primeira linha de código?
        </h2>
        <p className="max-w-[480px] text-indigo-100">
          O Starter é gratuito, completo, e não exige nenhuma experiência
          prévia.
        </p>
        <Link
          href="/courses/starter"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-indigo-700 transition-opacity hover:opacity-90"
        >
          Começar agora
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
