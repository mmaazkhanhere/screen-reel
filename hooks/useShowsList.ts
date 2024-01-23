"use client"
import useSWR from "swr"
import fetcher from "@/libs/fetcher"

const useShows = () => {
    const { data, error, isLoading } = useSWR('/api/shows', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return { shows: data, error, isLoading }
}

export default useShows