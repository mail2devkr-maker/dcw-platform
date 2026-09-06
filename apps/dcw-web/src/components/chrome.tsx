import Link from "next/link";
import { siteUrl } from "@dcw/brand";
import { MobileNav } from "./mobile-nav";

const links = [
  { href: "/products", label: "Products" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/principles", label: "Principles" },
  { href: "/contact", label: "Contact" },
];

export function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-4 top-0 z-50 -translate-y-full rounded-sm bg-[color:var(--ink)] px-3 py-2 text-sm text-[color:var(--canvas)] focus:translate-y-4"
    >
      Skip to content
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--canvas)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2 no-underline">
          <span className="font-display text-xl tracking-tight">DCW</span>
          <span className="hidden text-xs tracking-[0.16em] text-[color:var(--ink-muted)] uppercase sm:inline">
            Devdutta Creative World
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]">
              {link.label}
            </Link>
          ))}
          <a
            href={siteUrl("irish")}
            className="rounded-full border border-[color:var(--ink)] px-3.5 py-1.5 text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--canvas)]"
          >
            Explore IRISH
          </a>
        </nav>
        <MobileNav links={links} cta={{ href: siteUrl("irish"), label: "Explore IRISH" }} />
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="mt-auto border-t border-[color:var(--line)] bg-[color:var(--ink)] text-[color:var(--canvas)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">DCW</p>
          <p className="mt-2 max-w-sm text-sm text-[color:var(--metal)]">
            Devdutta Creative World builds intelligent digital products with owner control, evidence, and replaceable
            infrastructure.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-[color:var(--metal)]">DCW</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-[color:var(--metal)]">Trust</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={siteUrl("irish")}>IRISH</a>
            </li>
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
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-[color:var(--metal)] sm:px-8">
          © {year} Devdutta Creative World. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
