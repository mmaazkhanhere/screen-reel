"use client"
import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useNewReleaseList = (year: string) => {

    const url = `/api/media/recent?year=${year}`

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        newRelease: data,
        error,
        isLoading
    }
}

export default useNewReleaseList

