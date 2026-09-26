import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { apexRedirectTarget, publicProductRouteForHost } from "@dcw/config/hosts";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const target = apexRedirectTarget(host);
  const url = new URL(request.url);
  if (target) return NextResponse.redirect(`${target}${url.pathname}${url.search}`, 308);

  const productRoute = publicProductRouteForHost(host);
  if (productRoute && url.pathname === "/") {
    url.pathname = productRoute;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
