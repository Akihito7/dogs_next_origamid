import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const NAMETOKEN = "@dog:token";

function hasToken(request: NextRequest): boolean {
  const token = request.cookies.get(NAMETOKEN)?.value;
  return !!token;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Permitir acesso a arquivos estáticos do Next.js e favicon
  if (
    url.pathname.startsWith('/_next/static/') || 
    url.pathname.startsWith('/favicon.ico') || 
    url.pathname.startsWith('/public/')
  ) {
    return NextResponse.next();
  }

  // Permitir acesso à página de login
  if (url.pathname === '/login') {
    return NextResponse.next();
  }

  // Redirecionar para a página de login se o token não estiver presente
  if (!hasToken(request)) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',                 // Permite acesso à página de login
    '/:path*',                // Permite acesso a todas as outras rotas
  ],
};
