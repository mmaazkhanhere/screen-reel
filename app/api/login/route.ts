/*A login api route that logs in the user in the application. It uses
jose library to create JWT tokens and store it in cookies that is used
for authentication purposes. */

import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import prismadb from '@/libs/prismadb'
import { getSecretKey } from "@/libs/auth";
import bcrypt from 'bcrypt'

export const GET = async (request: NextRequest) => {

    try {
        /*Gets query parameters passed in the url */

        const username = request.nextUrl.searchParams.get('username');
        const password = request.nextUrl.searchParams.get('password');


        if (!username || !password) {
            /*If no username or password passed, give 406 status error */
            return new NextResponse('Missing details', { status: 406 })
        }

        const existingUser = await prismadb.user.findFirst({
            where: {
                username: username
            }
        })/*Search the database for the username and when found returns the value
        and stored in the variable existing user */

        if (!existingUser) {
            /*If existing user doesn't exists (incorrect details are provided)
            404 status is returned */
            return new NextResponse("User doesn't exists", { status: 404 })
        }

        const hashedPassword = existingUser.hashedPassword /*Passwords are stored
        in hash form in the database. The password is extracted from the
        existing user */

        const passwordMatch = await bcrypt.compare(password, hashedPassword)
        /*Compares the password provided and the hashed password store in the
        database */

        if (!passwordMatch) {
            /*If the password doesn't matches, return 401 status */
            return new NextResponse("Password does not match", { status: 401 })
        }

        /*If password matches, create a JSON token */
        const token = await new SignJWT({
            username: existingUser.username,
            role: 'user'
        })
            .setProtectedHeader({ alg: 'HS256' }) //how it is encrypted
            .setExpirationTime('3h') //how long it will be valid for
            .setIssuedAt(new Date().getDate()) //when token was issued
            .sign(getSecretKey()) //signing the token

        const response = NextResponse.json({ existingUser }) /*Returning the
        existing user detail  */

        response.cookies.set({
            name: 'authenticationToken',
            value: token,
            path: '/'
        }) /*storing the token in the cookies */

        response.cookies.set({
            name: 'username',
            value: username,
            path: '/'
        }) /*storing the username in the cookies. It will be used to fetch user
        details for the account component.*/

        return response;

    } catch (error) {
        /*console logging any error if exist */
        console.error("ERROR IN LOGIN API: ", error);
        return new NextResponse("ERROR IN LOGIN API", { status: 500 });
    }
}