/*A custom hook which leverages the SWR library to fetch random movie data from
a specified API endpoint that is displayed on hero of the movie page*/

"use client"
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useMovieBoard = () => {

    const url = `/api/movies/random` /*api route for fetching data */

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
        randomMovie: data,
        error,
        isLoading
    }
}

export default useMovieBoard

