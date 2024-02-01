/*An api route to fetch the latest movies and show */
import { NextResponse, NextRequest } from "next/server";
import prismadb from '@/libs/prismadb';

export const GET = async (request: NextRequest) => {
    try {

        /*Get parameter value passed in the url */
        const year = request.nextUrl.searchParams.get('year');

        let newRelease;

        if (year)
            /*If year is provided, fetch all the movies and shows released in that
        year. We can also fetch data in the descending order below release year */
            newRelease = await prismadb.mediaModel.findMany({
                where: {
                    releaseYear: year,
                }
            })

        return NextResponse.json({ newRelease }) /*Return the movies and show */

    } catch (error) {
        /*Console log any error present in the code */
        console.error(error);
        return new NextResponse("ERROR AT GET RECENT API", { status: 500, })
    }
}