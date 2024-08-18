import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const NAMETOKEN = "@dog:token"

function hasToken(request: NextRequest): boolean {
  const token = request.cookies.get(NAMETOKEN);
  return !!token;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/login')) {
    if (hasToken(request)) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } else {
  
    if (!hasToken(request)) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/login/:path*'],
};
