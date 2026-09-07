import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        tabs: [
          {
            title: "Starter",
            description: "Starter",
            url: "/courses/starter",
          },
          {
            title: "Júnior Front-end",
            description: "Júnior Front-end",
            url: "/courses/junior-frontend",
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}
