import useRandomMedia from '@/hooks/useRandomMedia'
import React from 'react'
import LoadingSkeleton from './loading-skeletion'
import MediaCard from './media-card'
import { IMedia } from '@/interfaces'

type Props = {}

const MediaSuggest = (props: Props) => {

    const { randomMedia } = useRandomMedia()
    if (!randomMedia) {
        return (
            <LoadingSkeleton />
        )
    }

    return (
        <section className='flex flex-col items-start mt-10 px-2'>
            <div>
                <h2 className='text-2xl lg:text-3xl font-semibold'>
                    You May Also Like
                </h2>
            </div>
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