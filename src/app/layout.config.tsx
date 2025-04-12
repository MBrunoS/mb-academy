import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {
  AlbumIcon,
  Book,
  ComponentIcon,
  Heart,
  Layout,
  LayoutTemplate,
  Pencil,
  Server,
} from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        Forja Academy
      </>
    ),
  },
  links: [
    {
      type: "menu",
      text: "Cursos",
      url: "/courses/starter",
      items: [
        {
          icon: <ComponentIcon />,
          text: "Starter",
          description: "Comece com o básico.",
          url: "/courses/starter",
        },
        {
          icon: <Server />,
          text: "Front-end Junior",
          description: "Crie interfaces de usuário com HTML, CSS e JavaScript.",
          url: "/courses/fe-junior",
        },
      ],
    },
  ],
};
