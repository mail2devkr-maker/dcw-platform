import Link from "next/link";
import { products } from "@dcw/brand";
import { StatusBadge } from "@dcw/ui";

type ProductGridProps = {
  compact?: boolean;
  columns?: 1 | 2;
  headingLevel?: 2 | 3;
};

export function ProductGrid({ compact = false, columns = 2, headingLevel = 2 }: ProductGridProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className={`grid gap-4 ${columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}>
      {products.map((product) => (
        <article
          key={product.id}
          className={`${compact ? "rounded-xl border border-white/10 bg-[#080c15]/80 p-5" : "ai-panel p-6 sm:p-8"} flex h-full flex-col ${compact ? "min-h-0" : "min-h-64"}`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold text-[color:var(--ink-muted)]">{product.category}</span>
            <StatusBadge tone={product.status === "live" ? "live" : "dev"}>{product.statusLabel}</StatusBadge>
          </div>
          <Heading
            className={`font-display mt-6 font-semibold tracking-[-0.04em] ${compact ? "text-3xl" : "text-4xl"}`}
          >
            {product.name}
          </Heading>
          {product.relationshipLabel ? (
            <p className="mt-3 text-xs font-semibold tracking-[0.08em] text-cyan-200 uppercase">
              {product.relationshipLabel}
            </p>
          ) : null}
          <p className="mt-3 flex-1 leading-7 text-[color:var(--ink-muted)]">{product.summary}</p>
          {!compact && product.highlights?.length ? (
            <ul className="mt-5 space-y-2 text-sm leading-6 text-[color:var(--ink-muted)]">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            {product.detailsHref ? (
              <Link
                href={product.detailsHref}
                className="inline-flex min-h-11 w-fit items-center rounded-full bg-white px-4 text-sm font-bold text-[#05070d] transition hover:bg-[color:var(--accent)]"
              >
                Project details <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            ) : null}
            <a
              href={product.href}
              className="inline-flex min-h-11 w-fit items-center rounded-full border border-[color:var(--line-strong)] px-4 text-sm font-semibold text-white transition hover:border-[color:var(--accent)] hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            >
              {product.ctaLabel} <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
