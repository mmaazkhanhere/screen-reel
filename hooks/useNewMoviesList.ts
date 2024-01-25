"use client"
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useNewMoviesList = (category: string) => {

    const url = `/api/movies/recent?category=${category}`

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        newMovies: data,
        error,
        isLoading
    }
}

export default useNewMoviesList

