export type ProductStatus = "flagship" | "in-development";

export type Product = {
  id: string;
  name: string;
  line: string;
  href: string;
  status: ProductStatus;
  summary: string;
};

export const products: readonly Product[] = [
  {
    id: "irish",
    name: "IRISH",
    line: "Master AI, presented by DCW",
    href: "https://irish.dcw.co.in",
    status: "flagship",
    summary:
      "Local-first AI for software missions: planning, bounded execution, evidence, validation, and owner approval before publication.",
  },
];

export const dcwCapabilities = [
  {
    title: "AI-enabled product engineering",
    body: "Specialist workflows that keep models behind contracts, evidence, and approval — not unrestricted autonomy.",
  },
  {
    title: "Digital platforms",
    body: "Web platforms designed as long-lived products: clear ownership, replaceable hosting, and honest status.",
  },
  {
    title: "Web experiences",
    body: "Public and product surfaces with editorial craft, accessibility, and performance as default requirements.",
  },
  {
    title: "Mobile experiences",
    body: "Mobile-quality interaction as a first-class constraint: touch targets, readable type, and no hidden overflow.",
  },
  {
    title: "Automation",
    body: "Thoughtful automation that creates bounded work, never silent authority.",
  },
  {
    title: "Developer workflows",
    body: "Local development first, GitHub as canonical remote, pull requests as the publication path.",
  },
  {
    title: "Intelligent operational systems",
    body: "Control surfaces for status, evidence, and decisions — so operators can see what happened and what is waiting.",
  },
] as const;

export const dcwPrinciples = [
  {
    title: "Owner control",
    body: "High-risk actions stay behind an explicit owner. Natural language describes intent; it does not grant power.",
  },
  {
    title: "Evidence before claims",
    body: "A result is not done because a model said so. Artifacts, diffs, tests, and reports have to exist.",
  },
  {
    title: "Replaceable infrastructure",
    body: "Hosting, models, and transport are adapters. The product must survive a vendor change.",
  },
  {
    title: "Thoughtful automation",
    body: "Automate the repeatable path. Stop at the risk boundary. Keep a human in the loop where it matters.",
  },
  {
    title: "Practical technology",
    body: "Build for real repositories, real reviews, and real operators — not theatre dashboards.",
  },
  {
    title: "Secure by design",
    body: "Finite capabilities, bounded authorization, revocation, and isolation of privileged control surfaces.",
  },
  {
    title: "Long-term product ownership",
    body: "Source stays with the owner. Local work is first-class. GitHub remains the canonical remote.",
  },
] as const;
