"use client"

import React, { useState } from 'react'
import Navbar from '@/app/movies-page/components/navbar'
import useMovieBoard from '@/hooks/useMovieBoard'
import LoadingSkeleton from '@/components/loading-skeletion'
import PlayButton from '@/components/play-button'
import Details from '@/components/details'
import useShowBoards from '@/hooks/useShowsBoard'

type Props = {}

const HeroBoardShows = (props: Props) => {

    const [showDetails, setShowDetails] = useState<boolean>(false)

    const { randomShows } = useShowBoards()

    if (!randomShows) {
        return (
            <section className='max-w-[1600px] mx-auto mt-10 lg:mt-20'>
                <LoadingSkeleton />
            </section>
        )
    }

    const handleShowDetail = () => {
        setShowDetails(true)
    }

    return (
        <section
            className='relative max-w-[1600px] mx-auto'
        >
            <div className='relative w-full'>
                {
                    randomShows.videoSource ? (
                        <video
                            src={randomShows.videoSource}
                            autoPlay
                            loop
                            muted
                            className='w-full'
                        />
                    ) : (
                        <iframe
                            src={randomShows.trailerUrl}
                            className='w-full h-[70vw] lg:h-[40vw]'
                        />
                    )
                }

                {/*Background Video */}

                <div
                    className='absolute top-[35%] left-[5%] flex-auto 
                    flex-col items-center justify-start text-white z-10 w-[50%]'
                >
                    {/*Movie Details */}
                    <h2 className='hidden md:block text-4xl lg:text-5xl font-black'>
                        {randomShows.title}
                    </h2>

                    {/*Movie Overview */}
                    <p className='hidden md:block lg:text-lg font-medium mt-5'>
                        {randomShows.overview}
                    </p>

                    {

                    }
                    {/*Buttons */}
                    <div
                        className='hidden md:flex items-center justify-start gap-5 mt-5'
                    >

                        {
                            randomShows.videoSource && (
                                <PlayButton />
                            )
                        }

                        {/*Details Button */}
                        <button
                            onClick={handleShowDetail}
                            className='bg-white text-red-500 hover:scale-95 
                            px-4 lg:px-6 py-1.5 lg:py-2 text-sm lg:text-base 
                            rounded-xl transform duration-300'
                        >
                            Details
                        </button>
                        {
                            showDetails && (
                                <Details
                                    mediaDetails={randomShows}
                                    setShowDetails={setShowDetails}
                                />
                            )
                        }
                    </div>
                </div>
            </div>

            {/*Navbar */}
            <header className='absolute top-0 left-0 z-50 w-full'>
                <Navbar />
            </header>

        </section>
    )
}

export default HeroBoardShows