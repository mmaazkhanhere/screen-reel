/*A media api route that fetch media based on whether it is movie or tv show
that is passed in as category and returns the data in json format */

import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/libs/prismadb';

export const GET = async (request: NextRequest) => {
    try {

        /*Get parameters passed in the url */
        const category = request.nextUrl.searchParams.get('category');

        let media;

        if (category) {
            /*If category is passed, get data that matches for the category
            and assign to variable media */
            media = await prismadb.mediaModel.findMany({
                where: {
                    category,
                },
            });
            const response = NextResponse.json({ media }); /*Return the data
            in json */
            return response;
        }
        else {
            /*If no category is provided, return all the media data */
            media = await prismadb.mediaModel.findMany();
        }

        const response = NextResponse.json({ media });
        return response;

    } catch (error) {
        /*Console any error that if occurred during fetching process */
        console.error(error);
        return new NextResponse('GET MEDIA API ERROR', { status: 500 })
    }
};
