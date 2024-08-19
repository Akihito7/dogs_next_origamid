import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const NAMETOKEN = "@dog:token";

function hasToken(request: NextRequest): boolean {
  const token = request.cookies.get(NAMETOKEN)?.value;
  return !!token;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/_next/static/') || url.pathname.startsWith('/favicon.ico')) {
    return NextResponse.next();
  }

  // Permitir acesso à página de login
  if (url.pathname === '/login') {
    return NextResponse.next();
  }

  if (!hasToken(request)) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    '/:path*', 
  ],
};
