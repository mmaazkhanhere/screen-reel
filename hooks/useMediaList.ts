/*A custom hook that used to fetch data based on the category passed using
useSWR for state management */

"use client"

import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useMediaList = (category?: string) => {

    const url = category ? `/api/media?category=${category}` : '/api/media';
    /*If category is passed, pass the category value in the url. If category is
    not passed */

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });/* useSWR takes a fetcher function and url from where data is fetched and
    returns three variables
    1- data is payload or the data returned
    2- error is the error that may have occurred during state management
    3- isLoading is the loading state */

    return {
        media: data,
        error,
        isLoading,
    };
};

export default useMediaList;
