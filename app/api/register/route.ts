/*An api route that register the user for the application and upload their
data into the database. JWT Token is created for the new registered user
which is used in the application for the authentication */

import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/libs/prismadb'
import bcrypt from 'bcrypt'
import { SignJWT } from "jose";
import { getSecretKey } from "@/libs/auth";

export const POST = async (request: NextRequest) => {

    try {

        const body = await request.json() /*get the data passed in the request
        and assign to variable body */

        /*extract and assign data from the body variable */
        const name = body.name
        const username = body.username
        const email = body.email
        const password = body.password


        const existingUser = await prismadb.user.findFirst({
            /*Checks if the user already exists or not by checking if
            its username or email exists in the database*/
            where: {
                OR: [
                    { username },
                    { email }
                ]
            }
        })

        if (existingUser) {
            /*If user already exists, 422 status error is returned along
            with the message that the user already exists */
            return new NextResponse('User already exists', { status: 422 })
        }

        const hashedPassword = await bcrypt.hash(password, 12) /*The password
        of the user is encrypted using bcrypt module hash function */

        const user = await prismadb.user.create({
            data: {
                name,
                username,
                email,
                hashedPassword
            }
        }) /*The details of the user is added to the database */

        const token = await new SignJWT({
            username: username,
            role: 'user'
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt(new Date().getTime())
            .setExpirationTime('2h')
            .sign(getSecretKey())
        /*JSON token is created for the signed in user */

        const response = NextResponse.json({ user })

        response.cookies.set({
            name: 'authenticationToken',
            value: token,
            path: '/'
        }) /*token is added to the cookies for authentication purposes */

        response.cookies.set({
            name: 'username',
            value: username,
            path: '/'
        }) /*username is added to the cookies for fetching user details */

        return response;

    } catch (error) {
        console.error(error)
        return new NextResponse("ERROR WHILE REGISTER USER", { status: 500 })
    }
}