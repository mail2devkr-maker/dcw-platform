# DCW public-platform production hardening

This document records the safe hardening applied to the public DCW and IRISH
Next.js applications. It is intentionally free of credentials and deployment
environment values.

## Public applications

- `apps/dcw-web` serves the DCW product-company site and contact endpoint.
- `apps/irish-public` serves the public IRISH product site.
- FastQue and IRISH remain the only publicly represented products.

## Security headers

Both applications use the shared header policy from `packages/config`:

- `X-Content-Type-Options: nosniff`
- strict-origin referrer policy
- clickjacking protection (`X-Frame-Options` and CSP `frame-ancestors`)
- restrictive Permissions Policy
- HSTS for HTTPS deployments
- cross-origin opener isolation and disabled DNS prefetching
- a narrow CSP with no `unsafe-eval`; `unsafe-inline` remains necessary for the
  current Next.js runtime and inline JSON-LD scripts. The policy allows only
  same-origin resources, `data:` images, and same-origin workers.

The DCW apex redirect uses the current Next.js `proxy.ts` convention. No
production middleware warning should remain after a clean build.

## Contact delivery

The contact endpoint accepts only `application/json`, bounds the streamed body
to 12 KB, validates UTF-8 and field lengths, and supports a honeypot field.
Responses are never cached. Webhook delivery is restricted to HTTPS (or
loopback HTTP for local development), rejects URL credentials, fails closed on
non-2xx responses/network errors, and times out after eight seconds. If only a
contact address is configured, the response contains a `mailto:` draft; it does
not claim that a message was delivered. Missing delivery configuration returns
an explicit 503.

No distributed rate limiter was added: doing so safely requires shared
infrastructure that is outside this repository and would otherwise provide
false confidence across multiple instances.

## SEO, robots, and structured data

Canonical URLs are derived from the shared brand URL helper and normalized to a
single trailing-slash convention. Each public app exposes its own sitemap and
robots route. Structured data uses stable entity IDs for DCW, FastQue, and
IRISH without invented ratings, pricing, addresses, or company claims.

## Validation

From the repository root:

```text
npm ci --include=dev --workspaces --include-workspace-root
npm run lint
npm run typecheck
npm test
npm run build
git diff --check
```

Route smoke checks cover the public pages, sitemap, robots, contact endpoint,
and generated Open Graph routes for both applications.

## Known limitations

- Lighthouse scores were not collected because the configured environment does
  not expose Chrome DevTools/Lighthouse automation.
- Headless screenshot capture is useful for visual review, but this environment
  cannot guarantee a device-emulated CSS viewport; true mobile viewport metrics
  should be confirmed in a browser/device QA pass.
- Distributed abuse prevention, production deployment checks, and DNS/CDN
  configuration remain deployment-owner responsibilities.

## Intentionally not automated

No production data, secrets, external services, DNS, analytics, or paid
infrastructure were changed as part of this hardening work.
