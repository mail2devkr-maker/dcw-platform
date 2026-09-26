import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@dcw/ui";

const canonical = "https://ashengrid.dcw.co.in";

export const metadata: Metadata = {
  title: "ASHENGRID: SURVIVAL — In Development | DCW Games",
  description:
    "ASHENGRID: SURVIVAL is an original portrait one-hand 3D survival shooter in development at DCW Games, combining fast combat, relay-sector missions, and persistent shelter progression.",
  alternates: { canonical },
  openGraph: { title: "ASHENGRID: SURVIVAL — DCW Games", description: "The grid died. You didn't.", url: canonical, siteName: "ASHENGRID: SURVIVAL", type: "website", locale: "en_IN" },
};

const features = [
  ["Portrait one-hand combat", "A mobile-first 3D survival-shooter loop designed around fast movement, automatic aiming and firing, dash, and a charged Grid Burst ability."],
  ["Original near-future setting", "In 2049 the automated ASHENGRID power-and-defense network collapses during a bioelectric outbreak, leaving Relay Runner ROOK to restore the grid."],
  ["Five-sector v0.1 campaign", "The current project scope includes five missions progressing toward the WARDEN boss guarding the final relay."],
  ["Persistent shelter progression", "Armory, Medbay, Workshop, and Grid Core progression gives runs a light persistent layer beyond individual missions."],
  ["Android + Windows targets", "The Godot project includes configured Android and Windows export paths for development builds."],
  ["Built in Godot", "Development currently uses Godot Engine 4.7.2 stable with GDScript and the Mobile renderer."],
] as const;

export default function AshengridPage() {
  return (
    <main id="main" className="dcw-page">
      <section className="border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <div className="ai-kicker"><span className="ai-kicker-dot" aria-hidden="true" />DCW Games · In development</div>
          <p className="mt-7 text-sm font-semibold tracking-[0.12em] text-violet-300 uppercase">ASHENGRID: SURVIVAL</p>
          <h1 className="font-display mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">The grid died. <span className="ai-gradient-text block">You didn&apos;t.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--ink-muted)] sm:text-xl">
            ASHENGRID: SURVIVAL is an original portrait, one-hand 3D survival shooter in active development at DCW Games. Fast combat is paired with relay-sector missions and persistent shelter progression in a collapsed near-future world.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="https://dcw.co.in/products" className="inline-flex min-h-12 items-center rounded-full bg-[color:var(--accent)] px-6 text-sm font-bold text-[#041014] transition hover:bg-white">View DCW portfolio</Link>
            <span className="inline-flex min-h-12 items-center rounded-full border border-[color:var(--line-strong)] px-6 text-sm font-semibold text-white">Status: In development</span>
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">Current game direction</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">A mobile survival loop with a world worth rebuilding.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, body], index) => (
              <article key={title} className="ai-panel min-h-56 p-6">
                <span className="font-mono text-[10px] text-[color:var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--ink-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
