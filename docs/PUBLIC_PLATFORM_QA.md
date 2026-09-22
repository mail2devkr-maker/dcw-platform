# DCW public-platform QA checklist

This checklist complements `docs/PRODUCTION_HARDENING.md` and is intended for
each release of the public DCW and IRISH sites.

## Public route inventory

DCW: `/`, `/what-is-dcw`, `/products`, `/products/fastque`,
`/products/irish`, `/about`, `/capabilities`, `/principles`, `/contact`,
`/security`, `/privacy`, `/terms`, `/robots.txt`, `/sitemap.xml`, and
`/opengraph-image`.

IRISH: `/`, `/product`, `/demo`, `/architecture`, `/security`, `/roadmap`,
`/docs`, `/privacy`, `/terms`, `/robots.txt`, `/sitemap.xml`, and
`/opengraph-image`.

## Release checks

1. Install from the lockfile with `npm ci --include=dev --workspaces --include-workspace-root`.
2. Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
3. Start both production servers and run `npm run qa:public` to check expected
   routes and same-origin links.
4. Verify security headers on a page and `/api/contact` response.
5. Verify sitemap and robots output contains only the intended public host.
6. Review JSON-LD for stable IDs and factual product status.
7. Review keyboard navigation, skip links, mobile navigation, contact errors,
   focus visibility, and no horizontal overflow at 320–1440px.
8. Review a concise desktop/mobile screenshot set. Do not claim WCAG or
   Lighthouse conformance without the corresponding evidence.

## Scope boundaries

This QA process does not deploy production, modify DNS, access private
infrastructure, mutate product data, or expose credentials. Lighthouse and
device-accurate viewport checks are recorded as limitations when the local
browser tooling cannot provide them.
