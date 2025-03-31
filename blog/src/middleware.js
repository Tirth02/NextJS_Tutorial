import { NextResponse } from 'next/server'


export function middleware (request) {

    // Task didn't want redirection on /about route but want redirection on it's subroute ie. /about/abc etc.
    if (request.nextUrl.pathname === "/about") {
        return NextResponse.next(); // Allow access
    }
  
    // if(request.nextUrl.pathname!="/login")
    // {
        return NextResponse.redirect(new URL("/login",request.url));
    // }
}

export const config = {
     //matcher: "/about/:path*" //for single string
     matcher : ["/about/:path*","/studentlist/:path*"] // to redirect more then one path
}


