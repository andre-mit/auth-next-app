import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export default function middleware(request: NextRequest) {
  const token = cookies().get("token")?.value;

  if (!token) {
    const signInURL = new URL("/login", request.url);

    if (request.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInURL);
  } else if (request.nextUrl.pathname === "/login") {
    const homeURL = new URL("/", request.url);
    return NextResponse.redirect(homeURL);
  }
}

export const config = {
  matcher: ["/((?!_next|api/auth).*)(.+)", "/login", "/"],
};
