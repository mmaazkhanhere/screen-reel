import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/libs/prismadb';

export const GET = async (request: NextRequest) => {
    try {

        const category = request.nextUrl.searchParams.get('category');

        let media;
        if (category) {
            media = await prismadb.mediaModel.findMany({
                where: {
                    category,
                },
            });
        } else {
            media = await prismadb.mediaModel.findMany();
        }

        const response = NextResponse.json({ media });

        return response;
    } catch (error) {
        console.error(error);
        return new NextResponse('GET MEDIA API ERROR', { status: 500 })
    }
};
