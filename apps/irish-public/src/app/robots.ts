import { siteUrl } from "@dcw/brand";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl("irish")}/sitemap.xml`,
    host: siteUrl("irish"),
  };
}
