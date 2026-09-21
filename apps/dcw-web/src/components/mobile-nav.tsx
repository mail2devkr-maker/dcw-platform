"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";

export function MobileNav({
  links,
  cta,
}: {
  links: Array<{ href: string; label: string }>;
  cta: { href: string; label: string };
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <div
      className="lg:hidden"
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        type="button"
        ref={triggerRef}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="min-h-11 min-w-11 rounded-md border border-[color:var(--line-strong)] px-3 text-sm"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-[color:var(--line)] bg-[color:var(--canvas)] px-5 py-4"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-3 text-base">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={cta.href} className="pt-2 font-semibold" onClick={() => setOpen(false)}>
            {cta.label}
          </a>
        </nav>
      </div>
    </div>
  );
}
