import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rotas que não precisam de autenticação
const publicRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Se for uma rota pública, permite o acesso
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  // Para simplificar, vamos permitir acesso a todas as rotas
  // Isso é temporário até resolvermos o problema de autenticação
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
