/*React custom hook must start with the word 'use' that's why
they are named as useMoviesList */

import useSwr from 'swr'
import fetcher from '@/libs/fetcher'

function useMoviesList() {
    const { data, error, isLoading } = useSwr('/api/movies', fetcher)

    return { data, error, isLoading }
}


export default useMoviesList;