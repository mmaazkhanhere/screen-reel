"use client"
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useNewShowsList = (category: string) => {

    const url = `/api/shows/recent?category=${category}`

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        newShows: data,
        error,
        isLoading
    }
}

export default useNewShowsList

