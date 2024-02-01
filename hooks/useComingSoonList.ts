/*A custom react hook using useSWR for state management that is used to
fetch the coming soon media items */

"use client"

import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useComingSoonList = () => {

    const { data, error, isLoading } = useSWR('/api/coming', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })/* useSWR takes a fetcher function and url from where data is fetched and
    returns three variables
    1- data is payload or the data returned
    2- error is the error that may have occurred during state management
    3- isLoading is the loading state */

    return {
        comingSoon: data, //data is assigned to coming soon variable
        error,
        isLoading
    }
}

export default useComingSoonList;