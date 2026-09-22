const sites = [
  {
    name: "dcw",
    base: process.env.DCW_BASE_URL ?? "http://localhost:3000",
    routes: ["/", "/what-is-dcw", "/products", "/products/fastque", "/products/irish", "/about", "/capabilities", "/principles", "/contact", "/security", "/privacy", "/terms", "/robots.txt", "/sitemap.xml", "/opengraph-image"],
  },
  {
    name: "irish",
    base: process.env.IRISH_BASE_URL ?? "http://localhost:3001",
    routes: ["/", "/product", "/demo", "/architecture", "/security", "/roadmap", "/docs", "/privacy", "/terms", "/robots.txt", "/sitemap.xml", "/opengraph-image"],
  },
];

const failures = [];
const checked = new Set();

async function check(url, context) {
  const key = url.toString();
  if (checked.has(key)) return;
  checked.add(key);
  try {
    const response = await fetch(url, { redirect: "manual" });
    if (response.status < 200 || response.status >= 400) {
      failures.push(`${context}: ${response.status} ${key}`);
    }
  } catch (error) {
    failures.push(`${context}: ${error instanceof Error ? error.message : String(error)} ${key}`);
  }
}

for (const site of sites) {
  for (const route of site.routes) {
    const url = new URL(route, site.base);
    await check(url, `${site.name} route`);
    if (route.endsWith(".xml") || route.endsWith(".txt") || route.endsWith("/opengraph-image")) continue;

    try {
      const response = await fetch(url);
      if (!response.ok) continue;
      const html = await response.text();
      for (const match of html.matchAll(/href=["']([^"']+)["']/gi)) {
        const href = match[1];
        if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
        const linked = new URL(href, url);
        if (linked.origin === new URL(site.base).origin) {
          await check(linked, `${site.name} internal link from ${route}`);
        }
      }
    } catch {
      // The route status check above reports the actionable failure.
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Public route/link check passed: ${checked.size} same-origin URLs checked.`);
}
