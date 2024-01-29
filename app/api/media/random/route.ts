import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/libs/prismadb";

export const GET = async () => {
    try {
        const totalMedia: number = await prismadb.mediaModel.count();

        console.log(totalMedia);

        const randomIndices: number[] = [];

        // Generate 5 unique random indices
        while (randomIndices.length < 4) {
            const randomIndex = Math.floor(Math.random() * totalMedia);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }

        // Fetch media items based on the random indices
        const randomMedia = await Promise.all(
            randomIndices.map(async (index) => {
                const media = await prismadb.mediaModel.findFirst({
                    skip: index,
                });
                return media;
            })
        );

        return NextResponse.json(randomMedia);
    } catch (error) {
        console.error(error);
        return new NextResponse(
            "ERROR AT GETTING RANDOM MOVIES FOR MOVIE BOARD",
            { status: 500 }
        );
    }
};
