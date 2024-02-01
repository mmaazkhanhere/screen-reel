/* An api route to get the media detail the user is watching. The media id
is passed as query parameter which is used to get the detail using prisma query */

import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async (request: NextRequest) => {

    try {
        const url = request.nextUrl.pathname.split('/') /*Get the url from the request */
        const mediaId = url[url.length - 1] /*Extract the media id from the url */

        if (!mediaId) {
            /*is media id doesn't exist, return missing id error message */
            throw new Error('Missing Id')
        }

        const media = await prismadb.mediaModel.findUnique({
            where: {
                id: mediaId
            }
        }) /*find the media whose id is same as media id passed in the url */

        const response = NextResponse.json({ media }) /*return the media data */

        return response

    } catch (error) {
        console.error(error)
        return new NextResponse('ERROR GETTING ID FOR WATCHING MEDIA',
            { status: 500 }
        )
    }

}