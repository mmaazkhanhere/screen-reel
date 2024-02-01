/*Custom react hook that fetches recently released tv shows from the database
using useSWR*/

"use client"

import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useNewShowsList = (category: string) => {

    const url = `/api/shows/recent?category=${category}` /*api route from 
    where data is fetched*/

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
        newShows: data, //data fetched is assigned to newShows variable
        error,
        isLoading
    }
}

export default useNewShowsList

