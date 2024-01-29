"use client"

import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const url: string = '/api/media/random'

const useRandomMedia = () => {
    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        randomMedia: data,
        error,
        isLoading
    }
}

export default useRandomMedia