export const PRIVILEGED_HOSTS = ["mcp.dcw.co.in", "auth.dcw.co.in"] as const;
export const RETIRED_PRIVILEGED_HOSTS = ["mcp.irish.dcw.co.in", "auth.irish.dcw.co.in"] as const;
export const PUBLIC_APEX = "dcw.co.in";
export const PUBLIC_WWW = "www.dcw.co.in";
export const PUBLIC_IRISH = "irish.dcw.co.in";

export function isPrivilegedHost(host: string): boolean {
  const normalized = host.toLowerCase().replace(/:\d+$/, "");
  return (PRIVILEGED_HOSTS as readonly string[]).includes(normalized);
}

export function apexRedirectTarget(host: string): string | null {
  const normalized = host.toLowerCase().replace(/:\d+$/, "");
  if (normalized === PUBLIC_WWW) return `https://${PUBLIC_APEX}`;
  return null;
}
