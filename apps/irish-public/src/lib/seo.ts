import type { Metadata } from "next";
import { siteUrl } from "@dcw/brand";

export function pageMeta(input: { title: string; description: string; path: string }): Metadata {
  const base = siteUrl("irish");
  const url = `${base}${input.path}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: "IRISH",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}
