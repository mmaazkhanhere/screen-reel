/*An api route to getting random movies that is to be displayed on the movie
page hero board. First get the total movies in the database and randomly 
pick any movie from the database */

import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async () => {
    try {

        const totalMovies: number = await prismadb.mediaModel.count({
            where: {
                category: 'Movie'
            }
        }) /*Get the total movies from the database */

        const randomIndex = Math.floor(Math.random() * totalMovies)
        /*get a random index */

        const randomMovie = await prismadb.mediaModel.findMany({
            where: {
                category: 'Movie',
            },
            take: 1,
            skip: randomIndex
        }) /*get 1 data and skip all the data before randomIndex and save data
        in the random movie variable */

        return NextResponse.json(randomMovie[0]) /*return the data in json 
        format  */

    } catch (error) {
        console.error(error);
        return new NextResponse('ERROR AT GETTING RANDOM MOVIES FOR MOVIE BOARD',
            { status: 500 })
    }
}