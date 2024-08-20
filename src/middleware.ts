import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const NAMETOKEN = "@dog:token";

function hasToken(request: NextRequest): boolean {
  const token = request.cookies.get(NAMETOKEN)?.value;
  return !!token;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if(url.pathname.includes('/images')){
    return NextResponse.next()
  }
  if (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/favicon.ico') ||
    url.pathname.startsWith('/public/')
  ) {
    return NextResponse.next();
  }


  if (url.pathname === '/login' || url.pathname === '/login/create') {
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
    '/images'
  ],
};
