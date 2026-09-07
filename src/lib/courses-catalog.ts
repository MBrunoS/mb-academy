export type CourseTrack = "geral" | "frontend" | "backend";

export interface CatalogCourse {
  slug: string;
  title: string;
  level: "Starter" | "Júnior" | "Pleno" | "Sênior";
  track: CourseTrack;
  description: string;
  status: "available" | "soon";
  href?: string;
}

/**
 * Fonte de verdade do roadmap: reflete docs/planejamento.md.
 * Cursos "soon" ainda não têm conteúdo escrito.
 */
export const coursesCatalog: CatalogCourse[] = [
  {
    slug: "starter",
    title: "Starter",
    level: "Starter",
    track: "geral",
    description:
      "Zero até pensar como programador: lógica, TypeScript, POO e um projeto real de CLI com IA integrada.",
    status: "available",
    href: "/courses/starter",
  },
  {
    slug: "junior-frontend",
    title: "Júnior Front-end",
    level: "Júnior",
    track: "frontend",
    description:
      "HTML, CSS, React com TypeScript, consumo de APIs e deploy — publique um dashboard com URL real.",
    status: "available",
    href: "/courses/junior-frontend",
  },
  {
    slug: "junior-backend",
    title: "Júnior Back-end",
    level: "Júnior",
    track: "backend",
    description:
      "Servidores, NestJS com TypeScript, PostgreSQL e autenticação — o par back-end do Júnior Front-end.",
    status: "soon",
  },
  {
    slug: "pleno-frontend",
    title: "Pleno Front-end",
    level: "Pleno",
    track: "frontend",
    description:
      "Next.js, gerenciamento de estado, design system e Testes II — evolução direta do dashboard do Júnior.",
    status: "soon",
  },
  {
    slug: "pleno-backend",
    title: "Pleno Back-end",
    level: "Pleno",
    track: "backend",
    description:
      "NestJS avançado, bancos de dados otimizados, Redis e mensageria — evolução direta da API do Júnior.",
    status: "soon",
  },
  {
    slug: "senior-frontend",
    title: "Sênior Front-end",
    level: "Sênior",
    track: "frontend",
    description:
      "Arquitetura escalável, performance, acessibilidade e segurança front — rumo a uma arquitetura em escala.",
    status: "soon",
  },
  {
    slug: "senior-backend",
    title: "Sênior Back-end",
    level: "Sênior",
    track: "backend",
    description:
      "Sistemas distribuídos, observabilidade, infraestrutura e segurança back — rumo a um sistema em produção real.",
    status: "soon",
  },
];

export const levelOrder: CatalogCourse["level"][] = [
  "Starter",
  "Júnior",
  "Pleno",
  "Sênior",
];
