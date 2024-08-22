import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { verifyToken } from './server-actions/login';
import { Logout } from './server-actions/getUser';

const NAMETOKEN = "@dog:token";

type ResponseVerifyToken = {
  code: string;
  message?: string;
  data: { status: number }
}
async function verifyIsTokenValid(request: NextRequest) {
  const token = request.cookies.get(NAMETOKEN)?.value;
  if (!token) return false;
  const isValidToken: ResponseVerifyToken = await verifyToken(token.toString());
  if (isValidToken.data.status != 200) {
    return false;
  }
  return true
}

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname.includes('/images')) {
    if (url.pathname.startsWith('/images')) {
      return NextResponse.next();
    }
    const newPathname = url.pathname.substring(url.pathname.indexOf('/images'));
    url.pathname = newPathname;
    return NextResponse.redirect(url);
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

  const isValidToken = await verifyIsTokenValid(request);
  if (!isValidToken) {
    if (url.pathname === "/" || url.pathname.startsWith("/photo"))
      return NextResponse.next()

    else {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: [
    '/login',
    '/:path*',
    '/images'
  ],
};
