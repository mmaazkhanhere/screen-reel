import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/libs/prismadb"

export const GET = async (request: NextRequest) => {
    try {
        const movies = await prismadb.movie.findMany();
        const response = NextResponse.json({ movies })
        return response;

    } catch (error) {
        console.error(error)
        throw new Error("ERROR AT GET MOVIES")
    }
}