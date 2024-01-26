"use client"

import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useComingSoonList = () => {

    const { data, error, isLoading } = useSWR('/api/coming', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        comingSoon: data,
        error,
        isLoading
    }
}

export default useComingSoonList;