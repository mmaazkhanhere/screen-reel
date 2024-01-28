import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async () => {
    try {

        const totalMovies: number = await prismadb.mediaModel.count({
            where: {
                category: 'Movie',
                videoSource: { not: '' }
            }
        })

        console.log(totalMovies)

        const randomIndex = Math.floor(Math.random() * totalMovies)

        const randomMovie = await prismadb.mediaModel.findMany({
            where: {
                category: 'Movie',
                videoSource: { not: '' }
            },
            take: 1,
            skip: randomIndex
        })

        return NextResponse.json(randomMovie[0])

    } catch (error) {
        console.error(error);
        return new NextResponse('ERROR AT GETTING RANDOM MOVIES FOR MOVIE BOARD',
            { status: 500 })
    }
}