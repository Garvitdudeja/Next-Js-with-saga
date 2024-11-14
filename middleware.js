// middleware.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const session = JSON.parse(cookies().get("authToken")?.value ?? "{}").token;
  const publicPaths = ["/login", "/", "/blogs"]
  // const loginVisiblePublicPaths = ['/', "/blogs", "/privacypolicy", "/cookiepolicy", "/terms-conditions"]
  // If the user is not logged in, redirect to the login page
  if (!session && !publicPaths.includes(url.pathname)) {
    // url.pathname = '/login';
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Check if the user is verified by adding age
  if (session && JSON.parse(cookies().get("authToken")?.value ?? "{}").dob == null && url.pathname != '/verify') {
    return NextResponse.redirect(new URL('/verify', req.url));
  }
  if (session && JSON.parse(cookies().get("authToken")?.value ?? "{}").dob != null && url.pathname == '/verify') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  // If the user is logged in and tries to access the login page, redirect to the dashboard
  if (session && publicPaths.includes(url.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }


  return NextResponse.next();
}


export const config = {
  matcher: [ '/login', "/dashboard", "/verify"],
}

const temp =['/', "/blogs", "/blogs/:id", "/privacypolicy", "/cookiepolicy", "/terms-conditions"]