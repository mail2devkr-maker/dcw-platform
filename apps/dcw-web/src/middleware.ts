import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { apexRedirectTarget } from "@dcw/config/hosts";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const target = apexRedirectTarget(host);
  if (!target) return NextResponse.next();
  const url = new URL(request.url);
  return NextResponse.redirect(`${target}${url.pathname}${url.search}`, 308);
}
