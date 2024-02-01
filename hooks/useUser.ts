import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const useUser = (username: string) => {

    const url: string = `/api/user?username=${username}` /*api route which
    is called and data is passed */

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })/* useSWR takes a fetcher function and url from where data is fetched and
    returns three variables
    1- data is payload or the data returned
    2- error is the error that may have occurred during state management
    3- isLoading is the loading state */

    return {
        user: data, //the user detail returned is assigned to the user variable
        error,
        isLoading
    }
}

export default useUser