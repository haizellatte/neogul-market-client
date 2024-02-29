import { NextRequest, NextResponse } from "next/server";

export function userMiddleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  return NextResponse.redirect(new URL("/deal/*", request.url));
}

export default userMiddleware;
