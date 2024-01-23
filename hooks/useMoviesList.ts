"use client"
import fetcher from "@/libs/fetcher";
import useSWR from 'swr'

const useMoviesList = () => {
    const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return { data, isLoading, error }
}

export default useMoviesList