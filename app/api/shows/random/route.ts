/*An api route to get random tv shows for the hero board of the tv show page
and display its content */

import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async () => {
    try {

        const totalShows: number = await prismadb.mediaModel.count({
            where: {
                category: 'Show'
            }
        }) /*get the total number of tv shows */

        const randomIndex: number = Math.floor(Math.random() * totalShows)
        //select a random index

        const randomShows = await prismadb.mediaModel.findMany({
            where: {
                category: 'Show'
            },
            take: 1,
            skip: randomIndex
        }) /*select one data, and skip all data before randomIndex (results 
            in selecting the random index) and store the data in the randomShows
            variable */

        return NextResponse.json(randomShows[0]) /*return the randomShow data */

    } catch (error) {
        console.error(error);
        return new NextResponse('ERROR GETTING RANDOM TV SHOWS API',
            { status: 500 }
        );
    }
}