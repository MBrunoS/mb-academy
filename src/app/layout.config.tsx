import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ComponentIcon } from "lucide-react";
import { Logo } from "@/components/logo";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo />,
  },
  links: [
    {
      type: "menu",
      text: "Cursos",
      url: "/courses",
      items: [
        {
          icon: <ComponentIcon />,
          text: "Starter",
          description: "Comece com o básico.",
          url: "/courses/starter",
        },
        {
          icon: <ComponentIcon />,
          text: "Júnior Front-end",
          description: "Construa interfaces web reais com React.",
          url: "/courses/junior-frontend",
        },
      ],
    },
  ],
};
