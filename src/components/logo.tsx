import { Code2 } from "lucide-react";
import { cn } from "fumadocs-ui/utils/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm",
        className,
      )}
    >
      <Code2 className="size-[62%]" strokeWidth={2.5} />
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className="size-6" />
      <span className="font-bold tracking-tight">
        MB <span className="font-medium text-fd-muted-foreground">Academy</span>
      </span>
    </span>
  );
}
