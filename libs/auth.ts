/*custom functions created that helps in authentication */

import { jwtVerify } from "jose";

export const getSecretKey = () => { /*function that retrieves the secret key
from the environment and encode it */

    const secretKey = process.env.JWT_SECRET_KEY //get the secret key

    if (!secretKey) {
        /*If no secret key exists, return error */
        throw new Error("JWT Secret Key does not match")
    }

    return new TextEncoder().encode(secretKey) //encode the secret key
}

export async function verifyJWTToken(token: string) { /*A custom function that
takes a token as a parameter that is JWT token and verifies the secret key
using jwtVerify function of jose library */
    try {
        const { payload } = await jwtVerify(token, getSecretKey)
        return payload
    } catch (error) {
        return null
    }
}