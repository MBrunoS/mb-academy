import type { ReactNode } from 'react';

/**
 * Bilhete — a voz do Antecessor dentro do conteúdo.
 *
 * Bloco fechável e pulável: quem quer a história abre, quem quer só o código
 * ignora. Renderiza como HTML estático (<details>), sem JS de cliente — funciona
 * no site estático.
 *
 * Ver docs/narrativa.md §4 e §7.
 */
export function Bilhete({
  de = 'A.',
  titulo = 'Bilhete do Antecessor',
  children,
  aberto = true,
}: {
  de?: string;
  titulo?: string;
  children: ReactNode;
  aberto?: boolean;
}) {
  return (
    <details
      open={aberto}
      className="group my-5 rounded-lg border border-amber-500/30 bg-amber-50/60 px-4 py-3 dark:border-amber-400/20 dark:bg-amber-950/20"
    >
      <summary className="flex cursor-pointer select-none list-none items-center gap-2 font-medium text-amber-900 marker:hidden dark:text-amber-200 [&::-webkit-details-marker]:hidden">
        <span aria-hidden>💬</span>
        <span>{titulo}</span>
        <span className="text-amber-700/70 dark:text-amber-300/60">— {de}</span>
        <span className="ml-auto text-xs text-amber-700/50 transition-transform group-open:rotate-90 dark:text-amber-300/40">
          ▶
        </span>
      </summary>
      <div className="mt-2 text-sm leading-relaxed text-amber-950/90 [&>p]:my-2 dark:text-amber-100/80">
        {children}
      </div>
    </details>
  );
}
