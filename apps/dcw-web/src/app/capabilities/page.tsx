import { dcwCapabilities } from "@dcw/brand";
import Link from "next/link";
import { Container, Eyebrow } from "@dcw/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Capabilities",
  description: "DCW capabilities across product engineering, platforms, web, mobile, automation, and developer workflows.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <main id="main" className="dcw-page">
      <Container className="py-16 sm:py-20">
        <Eyebrow>Capabilities</Eyebrow>
        <h1 className="font-display mt-3 text-4xl">What we actually build</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--ink-muted)]">
          These are disciplines, not a customer roster. DCW does not list unverified commercial deployments.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-[color:var(--ink-muted)]">
          Learn more about{" "}
          <Link href="/what-is-dcw" className="font-semibold text-cyan-200 underline decoration-cyan-200/40 underline-offset-4 hover:text-white">
            DCW as a technology and product development brand
          </Link>.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {dcwCapabilities.map((item) => (
            <article key={item.title} className="border-t border-[color:var(--line-strong)] pt-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-[color:var(--ink-muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
