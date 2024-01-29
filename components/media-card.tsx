import { IMedia } from '@/interfaces'
import Image from 'next/image'
import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import PlayButton from './play-button'

type Props = {
    data: IMedia
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
                                <span>{data.releaseYear}</span>
                                <span>{data.duration}</span>
                            </div>
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
                                <span>SS {data.totalSeasons}</span>
                                <span>EPS {data.episodes}</span>
                            </div>
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