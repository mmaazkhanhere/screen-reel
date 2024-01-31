import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const useUser = (username: string) => {

    const url: string = `/api/user?username=${username}`

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        user: data,
        error,
        isLoading
    }
}

export default useUser