/*An api route to get the user data that is signed in*/

import { NextResponse, NextRequest } from "next/server";
import prismadb from '@/libs/prismadb'

export const GET = async (request: NextRequest) => {
    try {

        /*Get the username value passed in the url */
        const username = request.nextUrl.searchParams.get('username')

        if (!username) {
            /*If no username exists, return 404 status */
            return new NextResponse('No username', { status: 404 })
        }

        const user = await prismadb.user.findFirst({
            where: {
                username: username
            }
        })
        /*returned the user data whose username is same as the username provided
        and store its value in the user */

        return NextResponse.json({ user }) /*Return the user in response in json */
    } catch (error) {
        console.error(error)
        return new NextResponse('ERROR IN GET USER', { status: 500 })
    }
}