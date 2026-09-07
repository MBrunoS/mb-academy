import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-fd-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-fd-muted-foreground">
            Uma iniciativa pessoal para ensinar programação do zero ao sênior.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fd-muted-foreground">
          <Link href="/courses" className="hover:text-fd-foreground">
            Cursos
          </Link>
          <Link
            href="https://github.com/MBrunoS/forja-academy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fd-foreground"
          >
            GitHub
          </Link>
          <span>&copy; {year} MB Academy</span>
        </div>
      </div>
    </footer>
  );
}
