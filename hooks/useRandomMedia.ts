/*a custom hook to fetch random media using useSWR */

"use client"

import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const url: string = '/api/media/random' /*api route which is called and data 
passed to */

const useRandomMedia = () => {
    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });/* useSWR takes a fetcher function and url from where data is fetched and
    returns three variables
    1- data is payload or the data returned
    2- error is the error that may have occurred during state management
    3- isLoading is the loading state */


    return {
        randomMedia: data, //data fetched is assigned to randomMedia variable
        error,
        isLoading
    }
}

export default useRandomMedia