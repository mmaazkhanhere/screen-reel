import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async (request: NextRequest) => {
    try {
        const shows = await prismadb.mediaModel.findMany({
            where: {
                category: 'Show',
            },
        });
        const response = NextResponse.json({ shows })
        return response;

    } catch (error) {
        console.error(error)
        throw new Error("ERROR AT GET SHOW")
    }
}