import { cn } from "fumadocs-ui/utils/cn";

export function StatusBadge({
  status,
  className,
}: {
  status: "available" | "soon";
  className?: string;
}) {
  if (status === "available") {
    return (
      <span
        className={cn(
          "inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400",
          className,
        )}
      >
        <span className="size-1.5 rounded-full bg-emerald-500" />
        Disponível
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-400",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-amber-500" />
      Em breve
    </span>
  );
}
