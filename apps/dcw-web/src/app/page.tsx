import Link from "next/link";
import { DCW, dcwCapabilities, dcwPrinciples, products, siteUrl } from "@dcw/brand";
import { Container } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "DCW — Technology, AI & Product Development",
  description: DCW.definition,
  path: "/",
});

const capabilityCodes = ["AI", "01", "WEB", "MOB", "AUTO", "DEV", "LAB"];

export default function HomePage() {
  return (
    <main id="main" className="dcw-page">
      <section className="relative border-b border-[color:var(--line)]">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:py-32">
          <div>
            <div className="ai-kicker">
              <span className="ai-kicker-dot" aria-hidden="true" />
              Technology + Product Development
            </div>

            <h1 className="font-display mt-7 max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[5.6rem]">
              Build the next
              <span className="ai-gradient-text block">useful system.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--ink-muted)] sm:text-xl">
              DCW builds digital products, AI-enabled solutions, web platforms, mobile experiences, and business
              automation with practical engineering at the center.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center rounded-full bg-[color:var(--accent)] px-6 text-sm font-bold text-[#041014] shadow-[0_0_38px_rgba(103,232,249,0.18)] transition hover:bg-white"
              >
                Explore products
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full border border-[color:var(--line-strong)] bg-white/[0.025] px-6 text-sm font-semibold text-white transition hover:border-[color:var(--accent)] hover:bg-white/[0.05]"
              >
                Start a conversation
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs tracking-[0.12em] text-[color:var(--ink-muted)] uppercase">
              <span>AI-enabled systems</span>
              <span>Product engineering</span>
              <span>Automation</span>
              <span>Emerging ventures</span>
            </div>
          </div>

          <div className="ai-orbit" aria-label="DCW product system visual">
            <div className="ai-core">DCW</div>
            <span className="ai-node left-[8%] top-[12%]">AI systems</span>
            <span className="ai-node right-[7%] top-[18%]">FastQue</span>
            <span className="ai-node bottom-[15%] left-[10%]">Automation</span>
            <span className="ai-node right-[9%] bottom-[11%]">IRISH</span>
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] tracking-[0.16em] text-[color:var(--ink-muted)] uppercase">
              <span>DCW Product Network</span>
              <span className="text-[color:var(--accent)]">Building</span>
            </div>
          </div>
        </Container>
      </section>

      <section id="what-is-dcw" className="relative border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">
                What is DCW?
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                A technology brand that builds products.
              </h2>
            </div>
            <div className="ai-panel p-6 sm:p-8">
              <p className="text-lg leading-8 text-[#dbe7f5] sm:text-xl">
                {DCW.definition}
              </p>
              <Link
                href="/what-is-dcw"
                className="mt-5 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-white"
              >
                Read the definitive “What is DCW?” page →
              </Link>
              <div className="ai-rule my-6" />
              <p className="text-sm leading-7 text-[color:var(--ink-muted)]">
                DCW is not limited to a single category. The common thread is practical software: identify a real
                problem, build a product around it, automate what should be automated, and keep the system understandable
                enough to own and evolve.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">Products</p>
              <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Powered by DCW.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[color:var(--ink-muted)]">
              Live products and active development projects are shown with their real status.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="ai-panel ai-card-hover group block p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[color:var(--accent)] uppercase">
                    {product.status === "live" ? "Live product" : "Active development"}
                  </span>
                  <span className="text-sm text-[color:var(--ink-muted)] transition group-hover:translate-x-1">↗</span>
                </div>
                <h3 className="font-display mt-6 text-4xl font-semibold tracking-[-0.04em]">{product.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#d6e1ef]">{product.line}</p>
                <p className="mt-5 max-w-xl leading-7 text-[color:var(--ink-muted)]">{product.summary}</p>
              </a>
            ))}
          </div>

          <div className="mt-5 rounded-[1.35rem] border border-dashed border-white/15 bg-white/[0.018] p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[#a78bfa] uppercase">Emerging projects</p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[color:var(--ink-muted)]">
                  DCW also develops experimental and emerging software projects. They are introduced publicly when
                  there is something real to show — not before.
                </p>
              </div>
              <span className="font-display text-2xl text-white/45">R&amp;D →</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">Capabilities</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            From idea to operating product.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dcwCapabilities.map((item, index) => (
              <article key={item.title} className="ai-panel ai-card-hover min-h-56 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[color:var(--accent)] uppercase">
                    {capabilityCodes[index] ?? String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/70 shadow-[0_0_14px_rgba(103,232,249,.5)]" />
                </div>
                <h3 className="font-display mt-10 text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--ink-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[color:var(--line)]">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#a78bfa] uppercase">Build logic</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.045em]">The rules behind the work.</h2>
            <p className="mt-5 max-w-md leading-7 text-[color:var(--ink-muted)]">
              AI can increase speed. Product discipline decides whether that speed becomes useful software.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {dcwPrinciples.slice(0, 6).map((item, index) => (
              <article key={item.title} className="border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] text-[color:var(--accent)]">0{index + 1}</span>
                <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--ink-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-28">
          <div className="ai-panel overflow-hidden p-8 sm:p-12">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">
                Build with DCW
              </p>
              <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Useful technology starts with a real problem.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--ink-muted)]">
                Product ideas, AI-enabled workflows, web platforms, and automation systems can all start with one clear
                conversation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-bold text-[#05070d] transition hover:bg-[color:var(--accent)]"
                >
                  Contact DCW
                </Link>
                <a
                  href={siteUrl("irish")}
                  className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-[color:var(--accent)]"
                >
                  Explore IRISH
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
