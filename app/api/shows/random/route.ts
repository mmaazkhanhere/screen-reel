import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async () => {
    try {

        const totalShows: number = await prismadb.mediaModel.count({
            where: {
                category: 'Show'
            }
        })

        const randomIndex: number = Math.floor(Math.random() * totalShows)

        const randomShows = await prismadb.mediaModel.findMany({
            where: {
                category: 'Show'
            },
            take: 1,
            skip: randomIndex
        })

        return NextResponse.json(randomShows[0])

    } catch (error) {
        console.error(error);
        return new NextResponse('ERROR GETTING RANDOM TV SHOWS API',
            { status: 500 }
        );
    }
}