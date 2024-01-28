"use client"
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useMovieBoard = () => {

    const url = `/api/movies/random`

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        randomMovie: data,
        error,
        isLoading
    }
}

export default useMovieBoard

