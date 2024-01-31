import { NextResponse, NextRequest } from "next/server";
import prismadb from '@/libs/prismadb'

export const GET = async (request: NextRequest) => {
    try {

        const username = request.nextUrl.searchParams.get('username')

        if (!username) {
            return new NextResponse('No username', { status: 404 })
        }

        const user = await prismadb.user.findFirst({
            where: {
                username: username
            }
        })

        return NextResponse.json({ user })
    } catch (error) {
        console.error(error)
        return new NextResponse('ERROR IN GET USER', { status: 500 })
    }
}