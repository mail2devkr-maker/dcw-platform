import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@dcw/ui";

const canonical = "https://lam360.dcw.co.in";

export const metadata: Metadata = {
  title: "LAM360 — Privacy-first Remote Monitoring | DCW",
  description:
    "LAM360 is an in-development privacy-first remote monitoring platform by DCW, built around owner-started Camera and Viewer roles, secure pairing, WebRTC live viewing, and cross-platform mobile engineering.",
  alternates: { canonical },
  openGraph: { title: "LAM360 — In Development at DCW", description: "Privacy-first remote monitoring for people and places that matter.", url: canonical, siteName: "LAM360 by DCW", type: "website", locale: "en_IN" },
};

const capabilities = [
  ["Owner-started monitoring", "Monitoring is designed around explicit Camera Mode start/stop rather than covert or silent activation."],
  ["Camera + Viewer roles", "The product architecture separates the monitored device from the viewing device with clear, visible session state."],
  ["Secure pairing", "Development work includes cryptographic pairing, bounded sessions, and authenticated control paths."],
  ["Live WebRTC viewing", "The live-video stack is being engineered around WebRTC, reconnect behavior, camera controls, and network diagnostics."],
  ["Cross-platform direction", "Current work is expanding LAM360 toward Android 7+ and iOS 15.1+ support while respecting each platform's privacy and lifecycle rules."],
  ["Evidence before launch", "Build, emulator, automated, and physical-device evidence are tracked separately; development status is not presented as a finished launch."],
] as const;

export default function Lam360Page() {
  return (
    <main id="main" className="dcw-page">
      <section className="border-b border-[color:var(--line)]">
        <Container className="py-16 sm:py-24">
          <div className="ai-kicker"><span className="ai-kicker-dot" aria-hidden="true" />DCW product · In development</div>
          <p className="mt-7 text-sm font-semibold tracking-[0.12em] text-cyan-200 uppercase">LAM360 · Live Asset Monitoring 360</p>
          <h1 className="font-display mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">See what matters. <span className="ai-gradient-text block">Live.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--ink-muted)] sm:text-xl">
            LAM360 is DCW&apos;s privacy-first remote monitoring platform in active development. It is being built to turn supported phones into clearly visible Camera and Viewer devices while keeping monitoring owner-started, authenticated, and explicit.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="https://dcw.co.in/products" className="inline-flex min-h-12 items-center rounded-full bg-[color:var(--accent)] px-6 text-sm font-bold text-[#041014] transition hover:bg-white">View DCW portfolio</Link>
            <span className="inline-flex min-h-12 items-center rounded-full border border-[color:var(--line-strong)] px-6 text-sm font-semibold text-white">Status: In development</span>
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)] uppercase">Product direction</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Monitoring without pretending privacy is optional.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, body], index) => (
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
