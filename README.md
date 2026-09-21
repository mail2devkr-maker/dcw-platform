# DCW Platform (`dcw-platform`)

Public web properties for **DCW** and **IRISH — Master AI, presented by DCW**.

DCW is a technology and product development brand focused on building digital products, AI-enabled solutions, web platforms, business automation systems, and practical software ventures. **FastQue** and **IRISH** are products powered by DCW, alongside a growing portfolio of experimental and emerging projects.

Canonical GitHub Repository: `mail2devkr-maker/dcw-platform`

---

## Architectural Layout

```
dcw-platform/
├── apps/
│   ├── dcw-web/          # https://dcw.co.in (Parent brand website)
│   └── irish-public/     # https://irish.dcw.co.in (IRISH product & demo)
├── packages/
│   ├── brand/            # Brand constants, capability posture matrix, and catalog
│   ├── config/           # Shared security headers, CSP, hostnames, and redirect utilities
│   └── ui/               # Shared design-system primitives
└── .github/workflows/    # Automated CI verification gate
```

---

## Target Host Mapping & Security Boundaries

| Hostname | Role | Status / Target |
| :--- | :--- | :--- |
| `dcw.co.in` | Parent Brand Website | Production target (`apps/dcw-web`) |
| `www.dcw.co.in` | Canonical Redirect | 308 Permanent Redirect to `https://dcw.co.in` |
| `irish.dcw.co.in` | IRISH Product & Demo | Production target (`apps/irish-public`) |
| `mcp.dcw.co.in` | **Privileged / Private** | **STRICTLY ISOLATED** |
| `auth.dcw.co.in` | **Privileged / Private** | **STRICTLY ISOLATED** |

---

## Public Product Portfolio

- **FastQue** — live salon booking, queue, and operations platform.
- **IRISH** — AI Project Execution Platform in active development.
- Additional experimental and emerging projects are listed only when there is something real to describe.

---

## Capability Posture

In accordance with **Evidence Before Claims**, capabilities are categorized by implementation and verification status.

---

## Local Development & Verification Gate

Use Node.js `>=22.16.0` (Node 24 recommended).

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run build
```

---

## License

All rights reserved © DCW.
