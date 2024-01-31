import { NextRequest, NextResponse } from "next/server";
import { verifyJWTToken } from "@/libs/auth";

const protectedPages = ["/watch"]; // List of pages that require authentication
const isProtectedPage = (url: any) => protectedPages.some(page => url.startsWith(page));

export async function middleware(request: NextRequest) {
    const { nextUrl, cookies } = request;
    const { value: token } = cookies.get("authenticationToken") ?? { value: null };

    console.log(token);

    const hasVerifiedToken = token && (await verifyJWTToken(token));
    console.log(hasVerifiedToken);

    const isProtectedPageRequest = isProtectedPage(nextUrl.pathname);
    console.log(isProtectedPageRequest);

    if (isProtectedPageRequest && !hasVerifiedToken) {
        // Redirect unauthenticated users to the login page
        const loginUrl = new URL("/auth", nextUrl.origin);
        return NextResponse.redirect(loginUrl.href);
    }

    return NextResponse.next();
}

export const config = { api: { bodyParser: false } };
