/*A custom hook that fetches recently released movies using useSWR library */

"use client"
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useNewMoviesList = (category: string) => {

    const url = `/api/movies/recent?category=${category}`

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
        newMovies: data, //data fetched is assigned to newMovies variable
        error,
        isLoading
    }
}

export default useNewMoviesList

