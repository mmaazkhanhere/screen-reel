import { NextRequest, NextResponse } from "next/server";
import { verifyJWTToken } from "@/libs/auth";

const protectedPages = ["/watch"]; // List of pages that require authentication
const isProtectedPage = (url: any) => protectedPages.some(page => url.startsWith(page));

export async function middleware(request: NextRequest) {
    const { nextUrl, cookies } = request;
    const { value: token } = cookies.get("authenticationToken") ?? { value: null };

    const hasVerifiedToken = token && (await verifyJWTToken(token));
    const isProtectedPageRequest = isProtectedPage(nextUrl.pathname);

    if (isProtectedPageRequest) {
        if (!hasVerifiedToken) {
            // Redirect unauthenticated users to the login page
            const loginUrl = new URL("/auth", nextUrl.origin);
            if (nextUrl.pathname) {
                const lastSegment = nextUrl.pathname.split("/").pop();
                if (lastSegment) {
                    loginUrl.searchParams.set("mediaId", lastSegment);
                }
            }
            return NextResponse.redirect(loginUrl.href);
        }
    }

    return NextResponse.next();
}

export const config = { api: { bodyParser: false } };
