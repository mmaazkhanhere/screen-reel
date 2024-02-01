/*An api route that fetches random movies and tv show for You May Also Like
component. First we get the total number of movies and tv stored in the database
and randomly pick 4 movies or show from them */

import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/libs/prismadb";

export const GET = async () => {
    try {

        const totalMedia: number = await prismadb.mediaModel.count(); /*Find
        the total number of media stored in the database using count query */

        const randomIndices: number[] = [];

        while (randomIndices.length < 4) {
            /*Here we are generating an array of 4 unique random indices to 
            select random media items. If it os not unqiue, one media can 
            be displayed more than once */
            const randomIndex = Math.floor(Math.random() * totalMedia);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }

        /*Using the random generated indices, we fetch corresponding media items
        from the database. We used promise due to asynchronous nature of database
        queries */

        const randomMedia = await Promise.all(
            randomIndices.map(async (index) => {
                const media = await prismadb.mediaModel.findFirst({
                    skip: index, /*skip records  */
                });
                return media;
            })
        );

        return NextResponse.json(randomMedia);/*return the random Media */

    } catch (error) {
        console.error(error);
        return new NextResponse(
            "ERROR AT GETTING RANDOM MOVIES FOR MOVIE BOARD",
            { status: 500 }
        );
    }
};
