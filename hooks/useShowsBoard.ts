"use client"

import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useShowBoards = () => {

    const url = `/api/shows/random`

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    console.log(data)

    return {
        randomShows: data,
        error,
        isLoading
    }
}

export default useShowBoards



