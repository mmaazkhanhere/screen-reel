/*A custom react hook that manages user authentication state. It utilizes JSON
Web Token for authentication and using custom function to verify the JWT token
from the cookes */

import React from "react";
import Cookies from "universal-cookie"
import { JWTPayload } from "jose";

import { verifyJWTToken } from "@/libs/auth";

const fromServer = async () => {/*Function responsible for verifying the JWT
token stored in cookies especially on the server side */

    const cookies = new Cookies();

    // get the token from the cookies
    const authenticatedToken = cookies.get("authenticatedToken") ?? null;

    //verify the token using verifyJWTToken
    const verifiedToken = await verifyJWTToken(authenticatedToken);

    return verifiedToken //returns the verified token
}

export function useAuth() { /*A custom hook designed to manage the  */

    const [auth, setAuth] = React.useState<JWTPayload | null>(null); /*A state
    variable to manage authentication */

    const getVerifiedToken = async () => {

        const cookies = new Cookies();
        const token = cookies.get("authenticatedToken") ?? null; /*get token
        from the cookies */

        const verifiedToken = await verifyJWTToken(token); /*Verify the token */
        setAuth(verifiedToken);
    };

    React.useEffect(() => {
        getVerifiedToken();
    }, [])

    return auth;
}

useAuth.fromServer = fromServer;