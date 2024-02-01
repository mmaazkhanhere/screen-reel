/*a custom react hook to get detail about the media that is requested by the
user to be fetched*/

import fetcher from "@/libs/fetcher"
import useSWR from "swr"

const useWatchMedia = (mediaId: string) => {

    const url: string = `/api/watch/${mediaId}` /*api route that is called
    and data passed */

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
        watchMedia: data, //the detail of media returned is assigned to watchMedia
        error,
        isLoading
    }
}

export default useWatchMedia