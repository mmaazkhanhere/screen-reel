import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async (request: NextRequest) => {

    try {
        const url = request.nextUrl.pathname.split('/')
        const mediaId = url[url.length - 1]

        if (!mediaId) {
            throw new Error('Missing Id')
        }

        const media = await prismadb.mediaModel.findUnique({
            where: {
                id: mediaId
            }
        })

        return NextResponse.json({ media })

    } catch (error) {
        console.error(error)
        return new NextResponse('ERROR GETTING ID FOR WATCHING MEDIA',
            { status: 500 }
        )
    }

}