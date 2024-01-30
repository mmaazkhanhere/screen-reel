import { jwtVerify } from "jose";

export const getSecretKey = () => {
    const secretKey = process.env.JWT_SECRET_KEY

    if (!secretKey) {
        throw new Error("JWT Secret Key does not match")
    }

    return new TextEncoder().encode(secretKey)
}

export async function verifyJWTToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, getSecretKey)
        return payload
    } catch (error) {
        return null
    }
}