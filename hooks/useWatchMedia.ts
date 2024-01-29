import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const useWatchMedia = (mediaId: string) => {

    const url: string = `/api/watch/${mediaId}`

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        watchMedia: data,
        error,
        isLoading
    }
}

export default useWatchMedia