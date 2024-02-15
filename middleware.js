import { NextResponse } from "next/server";

export async function middleware(request) {
  console.log("hello there");
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/query/:path*"],
};
