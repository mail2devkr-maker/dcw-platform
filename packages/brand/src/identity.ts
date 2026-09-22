export const DCW = {
  shortName: "DCW",
  publicName: "DCW",
  tagline: "Technology and product development for practical work.",
  definition:
    "DCW is a technology and product development brand focused on digital products, AI-enabled solutions, web platforms, business automation systems, and practical software ventures. FastQue and IRISH are products powered by DCW.",
} as const;

export const IRISH = {
  name: "IRISH",
  productLine: "AI Project Execution Platform",
  positioning: "Master AI, presented by DCW",
  searchName: "IRISH AI",
  status: "Development preview",
  definition:
    "IRISH is DCW's local-first AI Project Execution Platform for planning, bounded specialist execution, verifiable evidence, validation, and owner-controlled publication.",
} as const;

export const PUBLIC_HOSTS = {
  dcw: "dcw.co.in",
  dcwWww: "www.dcw.co.in",
  irish: "irish.dcw.co.in",
} as const;

export const PRIVILEGED_HOSTS = {
  mcp: "mcp.dcw.co.in",
  auth: "auth.dcw.co.in",
} as const;

export const PUBLIC_URLS = {
  dcw: "https://dcw.co.in",
  irish: "https://irish.dcw.co.in",
  githubIrish: "https://github.com/mail2devkr-maker/irish",
} as const;

export function siteUrl(kind: "dcw" | "irish"): string {
  if (kind === "dcw") {
    return process.env.NEXT_PUBLIC_DCW_URL ?? PUBLIC_URLS.dcw;
  }
  return process.env.NEXT_PUBLIC_IRISH_URL ?? PUBLIC_URLS.irish;
}

export function githubIrishUrl(): string {
  return process.env.NEXT_PUBLIC_GITHUB_IRISH ?? PUBLIC_URLS.githubIrish;
}
