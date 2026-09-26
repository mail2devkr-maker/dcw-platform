export const PRIVILEGED_HOSTS = ["mcp.dcw.co.in", "auth.dcw.co.in"] as const;
export const RETIRED_PRIVILEGED_HOSTS = ["mcp.irish.dcw.co.in", "auth.irish.dcw.co.in"] as const;
export const PUBLIC_APEX = "dcw.co.in";
export const PUBLIC_WWW = "www.dcw.co.in";
export const PUBLIC_IRISH = "irish.dcw.co.in";
export const PUBLIC_LAM360 = "lam360.dcw.co.in";
export const PUBLIC_ASHENGRID = "ashengrid.dcw.co.in";

export function publicProductRouteForHost(host: string): string | null {
  const normalized = host.toLowerCase().replace(/:\d+$/, "");
  if (normalized === PUBLIC_LAM360) return "/products/lam360";
  if (normalized === PUBLIC_ASHENGRID) return "/products/ashengrid";
  return null;
}

export function isPrivilegedHost(host: string): boolean {
  const normalized = host.toLowerCase().replace(/:\d+$/, "");
  return (PRIVILEGED_HOSTS as readonly string[]).includes(normalized);
}

export function apexRedirectTarget(host: string): string | null {
  const normalized = host.toLowerCase().replace(/:\d+$/, "");
  if (normalized === PUBLIC_WWW) return `https://${PUBLIC_APEX}`;
  return null;
}
