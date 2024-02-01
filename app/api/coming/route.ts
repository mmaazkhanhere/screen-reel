/*An API route to fetch movies and tv shows that are coming soon using prisma
query. */

import { NextRequest, NextResponse } from "next/server"
import prismadb from "@/libs/prismadb"

export const GET = async (request: NextRequest) => {

    try {
        const comingSoon = await prismadb.mediaModel.findMany({
            where: {
                videoSource: ""
            }
        }) /*Find all the media in the Media Model where the video source is
        an empty string*/

        return NextResponse.json({ comingSoon })/*Return the coming soon media
        as a json response */

    } catch (error) {
        console.error(error) /*Console log any errors if exists */
        return new NextResponse('COMING SOON MEDIA GET ERROR', { status: 500 })
    }
}