import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';


interface Token {
  exp?: number;
  role?: string;
  accessToken?: any;
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  // const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET }) as Token | null;
  const cookieStore = cookies();
  const token =  cookieStore.get('access_token')?.value;

  const isProtectedRoute = url.pathname.startsWith('/platform');
  if (isProtectedRoute) {
    // console.log('token-mid', token)
    // Redirect to login if user is not authenticated
    if (!token) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }

    // const currentTime = Math.floor(Date.now() / 1000);
    // if (token.exp && token.exp < currentTime) {
    //   url.pathname = '/';
    //   return NextResponse.redirect(url);
    // }

    // Redirect to login if user is not an admin
    // if (token.role !== 'admin') {
    //   url.pathname = '/';
    //   return NextResponse.redirect(url);
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/platform/:path*'],
};
