import { IMedia } from '@/interfaces'
import Image from 'next/image'
import React, { useState } from 'react'

import { VideoCameraIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/20/solid'
import { HandThumbDownIcon } from '@heroicons/react/20/solid'
import TrailerModal from './trailer-modal'

type Props = {
    mediaDetail: IMedia;
}

const MediaDetail: React.FC<Props> = ({ mediaDetail }: Props) => {

    const [showTrailer, setShowTrailer] = useState<boolean>(false);

    const handleShowTrailer = () => {
        setShowTrailer(!showTrailer);
    }

    return (
        <section
            className='w-full shadow-xl p-4 rounded-2xl flex items-center gap-5
            mt-10'
        >
            {/*Image Section */}

            <div>
                <Image
                    src={mediaDetail.posterUrl}
                    alt={mediaDetail.title}
                    width={600}
                    height={300}
                />
            </div>

            {/*Detail Section */}
            <div className='flex flex-col items-start justify-center gap-5'>
                {/*Title */}
                <span className='text-2xl font-black'>
                    {mediaDetail.title}
                </span>

                {/*Trailer, HD and Age */}
                <div className='flex items-center gap-2'>

                    {/*Trailer */}
                    <button
                        aria-label='Trailer Button'
                        onClick={handleShowTrailer}
                        className='flex items-center gap-2 p-2 border 
                        border-black rounded-lg hover:scale-95 transition
                        duration-300'
                    >
                        <VideoCameraIcon className='w-4 fill-black' />
                        <span className='text-xs'>Trailer</span>
                    </button>

                    {
                        showTrailer && (
                            <TrailerModal
                                setShowTrailer={setShowTrailer}
                                trailerUrl={mediaDetail.trailerUrl}
                            />
                        )
                    }

                    {/*HD */}
                    <span
                        className='flex items-center gap-2 p-2 border 
                        border-black rounded-lg text-xs'
                    >
                        HD
                    </span>

                    {/*Age */}
                    <span>
                        + {mediaDetail.age}
                    </span>
                </div>

                {/*Overview */}
                <p>
                    {mediaDetail.overview}
                </p>

                <div className='flex items-center gap-3'>
                    {/*Released */}
                    <p className='font-semibold text-sm'>
                        Released:&nbsp;
                        <span className='text-xs font-normal'>
                            {mediaDetail.releaseYear}
                        </span>
                    </p>

                    <p className='font-semibold text-sm'>
                        Genre:&nbsp;
                        <span className='text-xs font-normal'>
                            {mediaDetail.genre}
                        </span>
                    </p>

                    {/*Duration */}
                    {
                        mediaDetail.category == 'Movie' && (
                            <p className='font-semibold text-sm'>
                                Duration:&nbsp;
                                <span className='text-xs font-normal'>
                                    {mediaDetail.duration}
                                </span>
                            </p>
                        )
                    }

                    {/*Total Seasons */}
                    {
                        mediaDetail.category == 'Show' && (
                            <p className='font-semibold text-sm'>
                                Total Seasons:&nbsp;
                                <span className='text-xs font-normal'>
                                    {mediaDetail.totalSeasons}
                                </span>
                            </p>
                        )
                    }

                    {/*Episode */}
                    {
                        mediaDetail.category == 'Show' && (
                            <p className='font-semibold text-sm'>
                                Episodes:&nbsp;
                                <span className='text-xs font-normal'>
                                    {mediaDetail.episodes}
                                </span>
                            </p>
                        )
                    }

                </div>
            </div>
        </section>
    )
}

export default MediaDetail