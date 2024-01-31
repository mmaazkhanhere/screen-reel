import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import prismadb from '@/libs/prismadb'
import { getSecretKey } from "@/libs/auth";
import bcrypt from 'bcrypt'

export const GET = async (request: NextRequest) => {
    try {
        const username = request.nextUrl.searchParams.get('username');
        const password = request.nextUrl.searchParams.get('password');


        if (!username || !password) {
            return new NextResponse('Missing details', { status: 406 })
        }

        const existingUser = await prismadb.user.findFirst({
            where: {
                username: username
            }
        })

        if (!existingUser) {
            return new NextResponse("User doesn't exists", { status: 404 })
        }

        const hashedPassword = existingUser.hashedPassword

        const passwordMatch = await bcrypt.compare(password, hashedPassword)

        if (!passwordMatch) {
            return new NextResponse("Password does not match", { status: 401 })
        }

        const token = await new SignJWT({
            username: existingUser.username,
            role: 'user'
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('2h')
            .setIssuedAt(new Date().getDate())
            .sign(getSecretKey())

        const response = NextResponse.json({ existingUser })

        response.cookies.set({
            name: 'authenticationToken',
            value: token,
            path: '/'
        })
        response.cookies.set({
            name: 'username',
            value: username,
            path: '/'
        })

        return response;

    } catch (error) {
        console.error("ERROR IN LOGIN API: ", error);
        return new NextResponse("ERROR IN LOGIN API", { status: 500 });
    }
}