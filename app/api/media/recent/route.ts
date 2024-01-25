import { NextResponse, NextRequest } from "next/server";
import prismadb from '@/libs/prismadb';

export const GET = async (request: NextRequest) => {
    try {
        console.log('API called')
        const year = request.nextUrl.searchParams.get('year');
        console.log(year)

        let newRelease;

        if (year)
            newRelease = await prismadb.mediaModel.findMany({
                where: {
                    releaseYear: year,
                }
            })

        return NextResponse.json({ newRelease })

    } catch (error) {
        console.error(error);
        return new NextResponse("ERROR AT GET RECENT API", { status: 500, })
    }
}