export type CapabilityStatus = "live" | "in-development" | "planned";

export type Capability = {
  id: string;
  name: string;
  status: CapabilityStatus;
  summary: string;
};

/**
 * Capability claims for the public IRISH site.
 * Statuses are derived from the IRISH repository at inspection time
 * (mail2devkr-maker/irish @ abf90d0) and must stay conservative.
 *
 * LIVE: implemented with tests in the IRISH repo for the local/control path.
 * IN DEVELOPMENT: code exists; public live gate is not claimed.
 * PLANNED: specified or gated; not presented as available.
 */
export const irishCapabilities: readonly Capability[] = [
  {
    id: "projects",
    name: "Projects",
    status: "live",
    summary: "Durable project contracts, goals, and state that survive a closed session.",
  },
  {
    id: "mission-planning",
    name: "Mission planning",
    status: "live",
    summary: "Mission graphs, typed mission state, and versioned mission control.",
  },
  {
    id: "developer",
    name: "Developer specialist",
    status: "live",
    summary: "First specialist vertical: bounded issue-to-PR engineering work.",
  },
  {
    id: "instructions",
    name: "Mission instructions",
    status: "live",
    summary: "Intent is recorded as instructions. Instructions never grant extra authority.",
  },
  {
    id: "diff-review",
    name: "Diff review",
    status: "live",
    summary: "Content-bound change review before any publication path proceeds.",
  },
  {
    id: "validation",
    name: "Validation",
    status: "live",
    summary: "Baseline and after checks. Generated output is not treated as completion.",
  },
  {
    id: "approvals",
    name: "Approval workflow",
    status: "live",
    summary: "High-risk publication stays behind an explicit owner approval boundary.",
  },
  {
    id: "runtime",
    name: "Runtime status",
    status: "live",
    summary: "Local control surfaces expose mission, attempt, and specialist-run status.",
  },
  {
    id: "report",
    name: "Mission report",
    status: "live",
    summary: "Artifacts, evaluations, and attempt lineage form an auditable report.",
  },
  {
    id: "providers",
    name: "Provider routing",
    status: "in-development",
    summary: "Replaceable reasoning and capability adapters. No single vendor is required.",
  },
  {
    id: "github-pr",
    name: "GitHub PR workflows",
    status: "live",
    summary: "Canonical remote is GitHub. Publication is pull-request first. Automatic merge is not allowed.",
  },
  {
    id: "boss",
    name: "BOSS control architecture",
    status: "in-development",
    summary: "Authenticated, scoped control for the owner. Not a public demo login.",
  },
  {
    id: "mcp",
    name: "MCP",
    status: "in-development",
    summary: "Bounded MCP resource for authenticated owner control. Isolated from this public website.",
  },
  {
    id: "oauth",
    name: "OAuth",
    status: "in-development",
    summary: "Owner authorization server for privileged control. Isolated from this public website.",
  },
  {
    id: "web-intelligence",
    name: "Web Intelligence",
    status: "planned",
    summary: "Blocked until its required live gate passes. Not available in this preview.",
  },
] as const;

export const statusLabel: Record<CapabilityStatus, string> = {
  live: "Live / verified",
  "in-development": "In development",
  planned: "Planned",
};

export function capabilitiesByStatus(status: CapabilityStatus): Capability[] {
  return irishCapabilities.filter((item) => item.status === status);
}
