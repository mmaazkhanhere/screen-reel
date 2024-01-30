import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/libs/prismadb'
import bcrypt from 'bcrypt'
import { SignJWT } from "jose";
import { getSecretKey } from "@/libs/auth";

export const POST = async (request: NextRequest) => {

    try {

        const body = await request.json()

        const name = body.name
        const username = body.username
        const email = body.email
        const password = body.password

        const existingUser = await prismadb.user.findFirst({
            where: {
                OR: [
                    { username },
                    { email }
                ]
            }
        })

        if (existingUser) {
            return new NextResponse('USER ALREADY EXISTS', { status: 422 })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prismadb.user.create({
            data: {
                name,
                username,
                email,
                hashedPassword
            }
        })

        const token = await new SignJWT({
            username: username,
            role: 'user'
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt(new Date().getTime())
            .setExpirationTime('2h')
            .sign(getSecretKey())

        const response = NextResponse.json({ user })

        response.cookies.set({
            name: 'authenticationToken',
            value: token,
            path: '/'
        })

        return response;

    } catch (error) {
        console.error(error)
        return new NextResponse("ERROR WHILE REGISTER USER", { status: 500 })
    }
}