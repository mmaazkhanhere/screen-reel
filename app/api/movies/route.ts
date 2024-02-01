/*An Api route that get movie data from the database */

import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async (request: NextRequest) => {
    try {
        const movies = await prismadb.mediaModel.findMany({
            where: {
                category: 'Movie',
            },
        }); /*return all media files where the category is equal to movies */

        const response = NextResponse.json({ movies }) /*return the movies
        data in json format */
        return response;

    } catch (error) {
        console.error(error)
        throw new Error("ERROR AT GET MOVIES")
    }
}