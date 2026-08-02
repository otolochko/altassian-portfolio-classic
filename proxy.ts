import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const legacyLocale = request.nextUrl.searchParams.get("lang");
  const locale = legacyLocale === "uk" ? "uk" : "en";
  const destination = request.nextUrl.clone();

  destination.pathname = `/${locale}`;
  destination.search = "";

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: "/",
};
