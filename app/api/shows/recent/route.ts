/*An api route to get the latest tv shows */

import { NextResponse, NextRequest } from "next/server";
import prismadb from '@/libs/prismadb';

export const GET = async (request: NextRequest) => {
    try {

        /*getting parameters value that are passed in the url */
        const category = request.nextUrl.searchParams.get('category');

        let newShows;

        if (category) {
            newShows = await prismadb.mediaModel.findMany({
                where: {
                    category: category,
                },
                orderBy: [
                    {
                        releaseYear: 'desc'
                    }
                ]
            }) /*get all the media where category is show and return it in
            descending order */
        }
        return NextResponse.json({ newShows }) /*return the latest tv shows */

    } catch (error) {
        console.error(error);
        return new NextResponse("ERROR AT GET RECENT API", { status: 500, })
    }
}