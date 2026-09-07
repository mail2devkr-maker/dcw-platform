import type { Metadata } from "next";
import { IRISH, siteUrl } from "@dcw/brand";

export function pageMeta(input: { title: string; description: string; path: string }): Metadata {
  const base = siteUrl("irish");
  const url = `${base}${input.path}`;
  const isHome = input.path === "/";
  const title = isHome ? `${IRISH.searchName} — ${IRISH.productLine} | DCW` : input.title;
  const description = isHome ? IRISH.definition : input.description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "IRISH",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
