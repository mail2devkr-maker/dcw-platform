# DCW Platform (`dcw-platform`)

Public web properties for **Devdutta Creative World (DCW)** and its flagship product, **IRISH — Master AI, presented by DCW**.

Canonical GitHub Repository: [`mail2devkr-maker/dcw-platform`](https://github.com/mail2devkr-maker/dcw-platform)

---

## Architectural Layout

```
dcw-platform/
├── apps/
│   ├── dcw-web/          # https://dcw.co.in (Editorial parent brand website)
│   └── irish-public/     # https://irish.dcw.co.in (Flagship product & interactive command center demo)
├── packages/
│   ├── brand/            # Brand constants, capability posture matrix, and catalog
│   ├── config/           # Shared security headers, CSP, hostnames, and redirect utilities
│   └── ui/               # Shared design system primitives (cn, Container, Eyebrow, StatusBadge)
└── .github/workflows/    # Automated CI verification gate
```

---

## Target Host Mapping & Security Boundaries

| Hostname | Role | Status / Target |
| :--- | :--- | :--- |
| `dcw.co.in` | Parent Brand Website | Production (`apps/dcw-web`) |
| `www.dcw.co.in` | Canonical Redirect | 308 Permanent Redirect to `https://dcw.co.in` |
| `irish.dcw.co.in` | Flagship Product & Demo | Production (`apps/irish-public`) |
| `mcp.dcw.co.in` | **Privileged / Private** | **STRICTLY ISOLATED** (Owner MCP endpoint; never mapped to public web) |
| `auth.dcw.co.in` | **Privileged / Private** | **STRICTLY ISOLATED** (Owner OAuth server; never mapped to public web) |

---

## Capability Posture

In accordance with our core engineering principle of **Evidence Before Claims**, capabilities are categorized strictly by automated test evidence:

* **Live / Verified**: Projects, Mission planning, Developer specialist, Mission instructions, Diff review, Validation, Approval workflow, Runtime status, Mission report, GitHub PR workflow.
* **In Development**: Provider routing, BOSS control architecture, MCP, OAuth.
* **Planned**: Web Intelligence (Held behind formal verification and grounding benchmarks).

---

## Local Development & Verification Gate

Ensure Node.js `>=22.16.0` (Node 24 recommended) is installed.

```bash
# Clean dependency installation
npm ci

# Full multi-workspace typecheck
npm run typecheck

# Full multi-workspace static analysis (zero warnings allowed)
npm run lint

# Comprehensive unit test harness
npm test

# Production build for both applications
npm run build
```

---

## License

All rights reserved © Devdutta Creative World.
