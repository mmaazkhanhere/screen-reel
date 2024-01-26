import { NextRequest, NextResponse } from "next/server"
import prismadb from "@/libs/prismadb"

export const GET = async (request: NextRequest) => {

    try {
        const comingSoon = await prismadb.mediaModel.findMany({
            where: {
                videoSource: ""
            }
        })

        return NextResponse.json({ comingSoon })
    } catch (error) {
        console.error(error)
        return new NextResponse('COMING SOON MEDIA GET ERROR', { status: 500 })
    }
}