import { NextResponse, NextRequest } from "next/server";
import prismadb from '@/libs/prismadb';

export const GET = async (request: NextRequest) => {
    try {

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
            })
        }
        return NextResponse.json({ newShows })

    } catch (error) {
        console.error(error);
        return new NextResponse("ERROR AT GET RECENT API", { status: 500, })
    }
}