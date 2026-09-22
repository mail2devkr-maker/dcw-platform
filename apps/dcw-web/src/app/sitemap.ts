import { siteUrl } from "@dcw/brand";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl("dcw");
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/what-is-dcw", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/products/fastque", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/products/irish", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/capabilities", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/principles", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/security", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path || "/"}`,
    changeFrequency,
    priority,
  }));
}
