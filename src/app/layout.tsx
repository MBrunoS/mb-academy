import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MB Academy",
    template: "%s | MB Academy",
  },
  description:
    "Trilha de programação em português, do zero ao sênior: TypeScript desde a primeira aula, projetos práticos e IA integrada ao aprendizado.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
