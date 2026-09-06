import type { ReactNode } from "react";
import { cn } from "./cn.ts";

export { cn };

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[color:var(--accent)]">{children}</p>
  );
}

export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "live" | "dev" | "planned" | "neutral";
}) {
  const map = {
    live: "border-[color:var(--ok)] text-[color:var(--ok)]",
    dev: "border-[color:var(--accent)] text-[color:var(--accent)]",
    planned: "border-[color:var(--ink-muted)] text-[color:var(--ink-muted)]",
    neutral: "border-[color:var(--line-strong)] text-[color:var(--ink-muted)]",
  } as const;
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", map[tone])}>
      {children}
    </span>
  );
}
