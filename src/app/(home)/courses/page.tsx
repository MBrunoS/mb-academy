import Link from "next/link";
import { ArrowRight, Layout, Rocket, Server } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StatusBadge } from "@/components/status-badge";
import {
  coursesCatalog,
  levelOrder,
  type CatalogCourse,
} from "@/lib/courses-catalog";

const trackIcon: Record<CatalogCourse["track"], typeof Layout> = {
  geral: Rocket,
  frontend: Layout,
  backend: Server,
};

const levelDescription: Record<CatalogCourse["level"], string> = {
  Starter: "Zero até pensar como programador e escrever TypeScript funcional.",
  Júnior:
    "Trilhas espelhadas de front-end e back-end — sua primeira vaga na área.",
  Pleno:
    "Aprofundamento técnico, arquitetura de aplicações e boas práticas de time.",
  Sênior:
    "Arquitetura em escala, sistemas distribuídos e o que só a experiência ensina.",
};

export default function CoursesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-6 pt-16 pb-8">
        <h1 className="text-3xl font-black tracking-tight text-fd-foreground md:text-5xl">
          Catálogo de Cursos
        </h1>
        <p className="max-w-[640px] text-fd-muted-foreground">
          A trilha completa, do zero ao sênior. Cursos disponíveis já podem
          ser acessados agora; os demais estão em produção.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-14 px-6 pb-24">
        {levelOrder.map((level) => (
          <LevelSection key={level} level={level} />
        ))}
      </div>

      <SiteFooter />
    </main>
  );
}

function LevelSection({ level }: { level: CatalogCourse["level"] }) {
  const courses = coursesCatalog.filter((c) => c.level === level);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-fd-foreground">{level}</h2>
        <p className="text-sm text-fd-muted-foreground">
          {levelDescription[level]}
        </p>
      </div>
      <div
        className={`grid grid-cols-1 gap-4 ${
          courses.length > 1 ? "md:grid-cols-2" : ""
        }`}
      >
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: CatalogCourse }) {
  const Icon = trackIcon[course.track];
  const available = course.status === "available";

  const content = (
    <div
      className={`group flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors ${
        available
          ? "border-fd-border bg-fd-card hover:border-emerald-500/50"
          : "border-dashed border-fd-border bg-fd-card/40"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex size-10 items-center justify-center rounded-xl text-white ${
            available
              ? "bg-gradient-to-br from-emerald-500 to-teal-600"
              : "bg-fd-muted text-fd-muted-foreground"
          }`}
        >
          <Icon className="size-5" />
        </span>
        <StatusBadge status={course.status} />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-bold text-fd-foreground">{course.title}</h3>
        <p className="text-sm leading-relaxed text-fd-muted-foreground">
          {course.description}
        </p>
      </div>
      {available && (
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">
          Saiba mais
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </div>
  );

  if (!available || !course.href) {
    return content;
  }

  return (
    <Link href={course.href} className="block h-full">
      {content}
    </Link>
  );
}
