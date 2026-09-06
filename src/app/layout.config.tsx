import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ComponentIcon } from "lucide-react";

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
          viewBox="0 0 346 313"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.648865 312.482L132.312 74.0968L191.315 170.686C191.438 170.887 191.445 171.143 191.334 171.352L172.423 206.926C172.186 207.372 171.572 207.376 171.33 206.934L136.742 143.8C136.499 143.357 135.882 143.363 135.647 143.812C135.647 143.812 115.189 182.898 102.08 207.943C102.08 207.943 104.384 207.943 104.842 207.943C106.12 207.943 107.441 207.943 108.784 207.943C121.41 207.943 136.071 207.943 136.071 207.943C136.297 207.943 136.505 208.069 136.617 208.272L154.257 240.575C154.365 240.773 154.366 241.017 154.258 241.217L138.067 271.144C137.829 271.585 137.22 271.588 136.978 271.149C136.978 271.149 136.978 271.149 108.784 207.943C108.329 207.943 102.08 207.943 102.08 207.943C79.1749 248.642 43.4274 312.16 43.4274 312.16C43.315 312.359 43.1092 312.482 42.8868 312.482H0.648865Z"
            fill="currentColor"
          />
          <path
            d="M209.581 207.758L152.215 311.504C151.975 311.939 152.276 312.482 152.759 312.482H345.298L171.037 0L151.838 37.414C151.737 37.6124 151.74 37.8515 151.848 38.0465L282.798 275.14C283.038 275.576 282.737 276.118 282.255 276.118H210.801C210.329 276.118 210.027 275.595 210.247 275.161L244.614 207.43H210.124C209.9 207.43 209.693 207.555 209.581 207.758Z"
            fill="currentColor"
          />
        </svg>
        Forja Academy
      </>
    ),
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
