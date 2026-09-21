import { products } from "@dcw/brand";
import { Container } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Products",
  description: "Explore products powered by DCW, including FastQue and IRISH.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main id="main" className="dcw-page">
      <Container className="py-16 sm:py-24">
        <div className="ai-kicker">
          <span className="ai-kicker-dot" aria-hidden="true" />
          DCW Products
        </div>
        <h1 className="font-display mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
          Products with different missions, built under one technology brand.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--ink-muted)]">
          The catalog distinguishes live products from active development. Experimental work is not presented as
          launched before it is ready to be described publicly.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="ai-panel ai-card-hover group block p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[color:var(--accent)] uppercase">
                  {product.status === "live" ? "Live product" : "Active development"}
                </span>
                <span className="text-[color:var(--ink-muted)] transition group-hover:translate-x-1">↗</span>
              </div>
              <h2 className="font-display mt-8 text-4xl font-semibold tracking-[-0.04em]">{product.name}</h2>
              <p className="mt-2 text-sm font-semibold text-slate-200">{product.line}</p>
              <p className="mt-5 leading-7 text-[color:var(--ink-muted)]">{product.summary}</p>
            </a>
          ))}
        </div>

        <div className="mt-6 rounded-[1.35rem] border border-dashed border-white/15 bg-white/[0.018] p-7">
          <p className="text-xs font-semibold tracking-[0.18em] text-violet-300 uppercase">Emerging projects</p>
          <p className="mt-3 max-w-3xl leading-7 text-[color:var(--ink-muted)]">
            DCW also explores additional software and AI ideas. They remain experiments until there is enough real
            implementation to describe them responsibly.
          </p>
        </div>
      </Container>
    </main>
  );
}
