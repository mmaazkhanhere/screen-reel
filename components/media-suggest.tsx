/*A react component that display related or suggestion media on the watch page */

import React from 'react'

import LoadingSkeleton from './loading-skeletion'
import useRandomMedia from '@/hooks/useRandomMedia'
import MediaCard from './media-card'

import { IMedia } from '@/interfaces'

type Props = {}

const MediaSuggest = (props: Props) => {

    const { randomMedia, isLoading } = useRandomMedia() /*getting random
    media */

    if (isLoading) {
        /*while randomMedia is being fetched */
        return (
            <LoadingSkeleton />
        )
    }

    return (
        <section className='flex flex-col items-start mt-10 px-2'>
            {/*Title */}
            <div>
                <h2 className='text-2xl lg:text-3xl font-semibold'>
                    You May Also Like
                </h2>
            </div>
            {/*Media card */}
            <div
                className='flex gap-5 lg:gap-10 flex-wrap justify-start items-center w-full 
                mt-5'
            >
                {
                    randomMedia.map((media: IMedia) => (
                        <MediaCard key={media.id} data={media} />
                    ))
                }
            </div>
        </section>

    )
}

export default MediaSuggest