import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/libs/prismadb'
import bcrypt from 'bcrypt'

export const POST = async (request: NextRequest) => {

    try {

        const body = await request.json()

        const name = body.name
        const username = body.username
        const email = body.email
        const password = body.password

        const existingUser = await prismadb.user.findUnique({
            where: {
                username,
                email
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

        return NextResponse.json(user)

    } catch (error) {
        console.error(error)
        return new NextResponse("ERROR WHILE REGISTER USER", { status: 500 })
    }
}