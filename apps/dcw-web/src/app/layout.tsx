import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { DCW, siteUrl } from "@dcw/brand";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/chrome";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-file",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans-file",
  display: "swap",
});

const dcw = siteUrl("dcw");

export const metadata: Metadata = {
  metadataBase: new URL(dcw),
  title: {
    default: `${DCW.shortName} — ${DCW.legalName}`,
    template: `%s — ${DCW.shortName}`,
  },
  description: DCW.tagline,
  applicationName: DCW.legalName,
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: DCW.legalName,
        alternateName: DCW.shortName,
        url: dcw,
      },
      {
        "@type": "WebSite",
        name: DCW.legalName,
        url: dcw,
      },
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="theme-dcw flex min-h-dvh flex-col antialiased" style={{ fontFamily: "var(--font-sans-file), var(--font-sans)" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
