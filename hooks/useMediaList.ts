"use client"

// useMediaList.ts
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useMediaList = (category?: string) => {

    const url = category ? `/api/media?category=${category}` : '/api/media';

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        media: data,
        error,
        isLoading,
    };
};

export default useMediaList;
