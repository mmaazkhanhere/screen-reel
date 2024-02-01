/*A react component that represents a media card displaying information about
a specific media item, which could be a movie or a TV show. */

import { IMedia } from '@/interfaces'

import Image from 'next/image'
import React from 'react'

import PlayButton from './play-button'

type Props = {
    data: IMedia //receives the media data prop
}

const MediaCard: React.FC<Props> = ({ data }) => {

    return (
        <section
            className='group mt-5'
        >
            <div
                className='flex flex-col items-start justify-center 
                max-w-[70vw] mx-auto group-hover:scale-110 
                group-hover:cursor-pointer transform duration-500'
            >
                {/*Image */}

                <div className='relative'>
                    <Image
                        src={data.posterUrl}
                        alt={data.title}
                        width={360}
                        height={360}
                        className='transition-opacity group-hover:opacity-80'
                    />
                    {/*Play Button */}
                    <div className='absolute inset-0 flex items-center 
                    justify-center hover:bg-black/50 opacity-0 
                    group-hover:opacity-100 
                    transition-opacity'
                    >
                        <PlayButton mediaId={data.id} />
                    </div>
                </div>

                {/*Title of the movie or show */}
                <h2 className='md:text-lg font-semibold mt-2'>
                    {data.title}
                </h2>
                {/*Detail of Movie */}
                {
                    data.category == 'Movie' && (
                        <div
                            className='flex items-center justify-between w-full'
                        >
                            <div
                                className='flex items-end justify-center 
                                gap-2 lg:gap-4 text-xs md:text-sm text-gray-600'
                            >
                                {/*Release year */}
                                <span>{data.releaseYear}</span>
                                {/*Duration */}
                                <span>{data.duration}</span>
                            </div>

                            {/*Category of the media */}
                            <div
                                className='border border-gray-400 text-xs md:text-sm 
                            text-gray-600 rounded-lg p-1'
                            >
                                {data.category}
                            </div>
                        </div>
                    )
                }
                {/*Detail of TV Show */}

                {
                    data.category == 'Show' && (
                        <div
                            className='flex items-center justify-between w-full'
                        >
                            <div
                                className='flex items-end justify-center 
                                gap-2 lg:gap-4 text-xs lg:text-sm text-gray-600'
                            >
                                {/*Total seasons */}
                                <span>SS {data.totalSeasons}</span>
                                {/*Total episodes in a season */}
                                <span>EPS {data.episodes}</span>
                            </div>

                            {/*Category of the media */}
                            <div
                                className='border border-gray-400 text-sm 
                                text-gray-600 rounded-lg p-1'
                            >
                                {data.category}
                            </div>
                        </div>
                    )
                }
            </div>

        </section >
    )
}

export default MediaCard