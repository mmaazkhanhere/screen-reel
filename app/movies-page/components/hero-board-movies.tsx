"use client"

import React, { useState } from 'react'
import Navbar from '@/app/movies-page/components/navbar'
import useMovieBoard from '@/hooks/useMovieBoard'
import LoadingSkeleton from '@/components/loading-skeletion'
import PlayButton from '@/components/play-button'
import Details from '@/components/details'

type Props = {}

const HeroBoardMovies = (props: Props) => {

    const [showDetails, setShowDetails] = useState<boolean>(false)
    const { randomMovie } = useMovieBoard()

    if (!randomMovie) {
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
            className='relative max-w-[1600px] mx-auto border border-black'
        >
            <div className='relative w-full'>
                {
                    randomMovie.videoSource ? (
                        <video
                            src={randomMovie.videoSource}
                            autoPlay
                            loop
                            muted
                            className='w-full'
                        />
                    ) : (
                        <iframe
                            src={randomMovie.trailerUrl}
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
                        {randomMovie.title}
                    </h2>

                    {/*Movie Overview */}
                    <p className='hidden md:block lg:text-lg font-medium mt-5'>
                        {randomMovie.overview}
                    </p>

                    {

                    }
                    {/*Buttons */}
                    <div
                        className='hidden md:flex items-center justify-start gap-5 mt-5'
                    >

                        {
                            randomMovie.videoSource && (
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
                                    mediaDetails={randomMovie}
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

export default HeroBoardMovies