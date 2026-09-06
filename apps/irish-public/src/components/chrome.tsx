import Link from "next/link";
import { githubIrishUrl, siteUrl } from "@dcw/brand";
import { MobileNav } from "./mobile-nav";

const links = [
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Demo" },
  { href: "/architecture", label: "Architecture" },
  { href: "/security", label: "Security" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/docs", label: "Docs" },
];

export function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-4 top-0 z-50 -translate-y-full rounded-sm bg-[color:var(--accent)] px-3 py-2 text-sm text-[color:var(--canvas)] focus:translate-y-4"
    >
      Skip to content
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--canvas)]/85 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight">IRISH</span>
          <span className="hidden text-xs text-[color:var(--ink-muted)] sm:inline">presented by DCW</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]">
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo"
            className="rounded-full bg-[color:var(--accent)] px-3.5 py-1.5 font-semibold text-[color:var(--canvas)]"
          >
            Open demo
          </Link>
        </nav>
        <MobileNav links={links} cta={{ href: "/demo", label: "Open demo" }} />
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="mt-auto border-t border-[color:var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">IRISH</p>
          <p className="mt-2 max-w-sm text-sm text-[color:var(--ink-muted)]">Master AI, presented by DCW. Development preview.</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <a href={siteUrl("dcw")}>DCW</a>
          </li>
          <li>
            <a href={githubIrishUrl()}>GitHub</a>
          </li>
          <li>
            <Link href="/docs">Docs preview</Link>
          </li>
        </ul>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
          <li>
            <Link href="/security">Security</Link>
          </li>
        </ul>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-6 text-xs text-[color:var(--ink-muted)] sm:px-8">
        © {year} Devdutta Creative World. IRISH is under active development.
      </p>
    </footer>
  );
}
