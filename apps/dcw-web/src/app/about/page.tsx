import { DCW } from "@dcw/brand";
import { Container } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About DCW",
  description:
    "DCW is a technology and product development brand building digital products, AI-enabled solutions, web platforms, and business automation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main" className="dcw-page">
      <Container className="py-16 sm:py-24">
        <div className="ai-kicker">
          <span className="ai-kicker-dot" aria-hidden="true" />
          About DCW
        </div>
        <h1 className="font-display mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
          A product brand built around useful technology.
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="ai-panel p-7 sm:p-9">
            <p className="text-xl leading-9 text-[#dce8f7]">{DCW.definition}</p>
            <div className="ai-rule my-7" />
            <div className="space-y-5 text-[color:var(--ink-muted)]">
              <p>
                DCW works across product engineering, AI-enabled workflows, web and mobile platforms, operational
                systems, and automation. The goal is not to use technology for its own sake; the goal is to build
                software that solves a concrete problem and can keep evolving.
              </p>
              <p>
                FastQue and IRISH represent two different directions inside that model: one is an operating product for
                salon businesses and customers, while the other explores AI-assisted project execution.
              </p>
              <p>
                Additional experimental and emerging projects may appear under DCW when they have a real product story
                to tell. Public claims are kept separate from private or privileged control surfaces.
              </p>
            </div>
          </div>

          <aside className="ai-panel p-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">DCW focus</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li className="border-b border-white/10 pb-4">Digital product development</li>
              <li className="border-b border-white/10 pb-4">AI-enabled solutions</li>
              <li className="border-b border-white/10 pb-4">Web and mobile platforms</li>
              <li className="border-b border-white/10 pb-4">Business automation systems</li>
              <li>Experimental and emerging software ventures</li>
            </ul>
          </aside>
        </div>
      </Container>
    </main>
  );
}
