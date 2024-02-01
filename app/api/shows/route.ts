/*An api route to fetch tv shows from the database */

import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async (request: NextRequest) => {
    try {
        const shows = await prismadb.mediaModel.findMany({
            where: {
                category: 'Show',
            },
        }); /*fetch all the media where the category is 'Show' and assign it to 
        the variable show */

        const response = NextResponse.json({ shows })/*Return the show data */
        return response;

    } catch (error) {
        console.error(error)
        throw new Error("ERROR AT GET SHOW")
    }
}