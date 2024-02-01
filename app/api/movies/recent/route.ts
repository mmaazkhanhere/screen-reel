/*An api route to get the latest movies */

import { NextResponse, NextRequest } from "next/server";
import prismadb from '@/libs/prismadb';

export const GET = async (request: NextRequest) => {
    try {

        /*Getting parameter passed in the url. It may be unnecessary because
        you can specify category as 'Movie' directly because we are fetching
        latest movies */
        const category = request.nextUrl.searchParams.get('category');

        let newMovies;

        if (category) {
            newMovies = await prismadb.mediaModel.findMany({
                where: {
                    category: category,
                },
                orderBy: [
                    {
                        releaseYear: 'desc'
                    }
                    /*Get the latest movies in the descending order */
                ]
            })
        }
        return NextResponse.json({ newMovies }) /*Return the latest movies */

    } catch (error) {
        console.error(error);
        return new NextResponse("ERROR AT GET RECENT API", { status: 500, })
    }
}