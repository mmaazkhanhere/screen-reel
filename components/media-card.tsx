import { IMedia } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

type Props = {
    data: IMedia
}

const MediaCard = (props: Props) => {
    console.log(props.data)
    return (
        <section
            className='group h-[12vw] mt-10'
        >
            <div className='flex flex-col items-start justify-center 
            max-w-[380px] mx-auto group-hover:scale-110 
            group-hover:cursor-pointer transform duration-500
            group-hover:bg-slate-500/50'
            >
                {/*Image */}
                <div>
                    <div className='relative'>
                        <Image
                            src={props.data.posterUrl}
                            alt={props.data.title}
                            width={350}
                            height={350}
                        />
                    </div>

                </div>
                {/*Title of the movie or show */}
                <h2 className='text-lg font-semibold mt-2'>
                    {props.data.title}
                </h2>
                {/*Detail of Movie */}
                {
                    props.data.category == 'Movie' && (
                        <div
                            className='flex items-center justify-between w-full'
                        >
                            <div
                                className='flex items-end justify-center 
                                gap-4 text-sm text-gray-600'
                            >
                                <span>{props.data.releaseYear}</span>
                                <span>{props.data.duration}</span>
                            </div>
                            <div
                                className='border border-gray-400 text-sm 
                            text-gray-600 rounded-lg p-1'
                            >
                                {props.data.category}
                            </div>
                        </div>
                    )
                }
                {/*Detail of TV Show */}

                {
                    props.data.category == 'Show' && (
                        <div
                            className='flex items-center justify-between w-full'
                        >
                            <div
                                className='flex items-end justify-center 
                                gap-4 text-sm text-gray-600'
                            >
                                <span>SS {props.data.totalSeasons}</span>
                                <span>EPS {props.data.episodes}</span>
                            </div>
                            <div
                                className='border border-gray-400 text-sm 
                                text-gray-600 rounded-lg p-1'
                            >
                                {props.data.category}
                            </div>
                        </div>
                    )
                }
            </div>

        </section>
    )
}

export default MediaCard