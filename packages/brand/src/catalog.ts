export type ProductStatus = "live" | "development-preview";

export type Product = {
  id: string;
  name: string;
  category: string;
  href: string;
  status: ProductStatus;
  statusLabel: string;
  summary: string;
  ctaLabel: string;
};

export const products: readonly Product[] = [
  {
    id: "fastque",
    name: "FastQue",
    category: "Salon and barbershop platform",
    href: "https://fastque.com",
    status: "live",
    statusLabel: "Live product",
    summary:
      "A platform for discovering salons, booking services, managing queues, and running shop operations.",
    ctaLabel: "Visit FastQue",
  },
  {
    id: "irish",
    name: "IRISH",
    category: "AI project-execution platform",
    href: "https://irish.dcw.co.in",
    status: "development-preview",
    statusLabel: "Development preview",
    summary:
      "Local-first AI for software missions, with bounded execution, verifiable evidence, and a public read-only demo.",
    ctaLabel: "Explore IRISH",
  },
];

export const dcwCapabilities = [
  {
    title: "AI-enabled product engineering",
    body: "AI-assisted workflows designed around contracts, evidence, validation, and human approval instead of unrestricted autonomy.",
  },
  {
    title: "Digital product development",
    body: "From product architecture to production software, DCW builds systems intended to become durable, owned products.",
  },
  {
    title: "Web platforms",
    body: "Modern web experiences and operational platforms with accessibility, performance, search visibility, and maintainability built in.",
  },
  {
    title: "Mobile experiences",
    body: "Mobile-first product flows designed for real customer and operator use, not desktop screens compressed onto a phone.",
  },
  {
    title: "Business automation",
    body: "Practical automation for repetitive operational work, with clear boundaries around authority, approvals, and exception handling.",
  },
  {
    title: "Developer workflows",
    body: "Local-first engineering, GitHub-centered delivery, validation gates, reproducible builds, and replaceable infrastructure.",
  },
  {
    title: "Practical software ventures",
    body: "Product ideas are grounded in concrete problems, with public descriptions limited to work that can be verified.",
  },
] as const;

export const dcwPrinciples = [
  {
    title: "Owner control",
    body: "High-risk actions stay behind explicit approval. Natural language can describe intent; it does not silently grant authority.",
  },
  {
    title: "Evidence before claims",
    body: "A result is not done because a model said so. Artifacts, diffs, tests, reports, or observable outcomes should support the claim.",
  },
  {
    title: "Replaceable infrastructure",
    body: "Hosting, models, and transport should remain replaceable so product ownership survives vendor change.",
  },
  {
    title: "Thoughtful automation",
    body: "Automate the repeatable path, stop at the risk boundary, and keep people involved where judgment or approval matters.",
  },
  {
    title: "Practical technology",
    body: "Build for real customers, real operators, real repositories, and measurable workflows rather than technology theatre.",
  },
  {
    title: "Secure by design",
    body: "Finite capabilities, bounded authorization, revocation, and isolation of privileged control surfaces are product requirements.",
  },
  {
    title: "Long-term product ownership",
    body: "Source, data, deployment choices, and operating knowledge should remain understandable and controllable by the owner.",
  },
] as const;
