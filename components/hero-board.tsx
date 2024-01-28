"use client"

import React, { useState } from 'react'
import Navbar from '@/app/movies-page/components/navbar'
import useMovieBoard from '@/hooks/useMovieBoard'
import LoadingSkeleton from '@/components/loading-skeletion'
import PlayButton from '@/components/play-button'
import Details from '@/components/details'

type Props = {}

const HeroBoard = (props: Props) => {

    const [showDetails, setShowDetails] = useState<boolean>(false)
    const { randomMovies } = useMovieBoard()

    if (!randomMovies) {
        return (
            <section className='max-w-[1600px] mx-auto h-[35vw]'>
                <LoadingSkeleton />
            </section>
        )
    }

    const handleShowDetail = () => {
        setShowDetails(true)
    }


    console.log(randomMovies)
    console.log(randomMovies.videoSource)
    console.log(randomMovies.trailerUrl)
    console.log(showDetails)

    return (
        <section
            className='relative max-w-[1600px] mx-auto h-[40vw]'
        >
            <div className='relative w-full h-[40vw]'>
                {
                    randomMovies.videoSource ? (
                        <video
                            src={randomMovies.videoSource}
                            autoPlay
                            loop
                            muted
                            className='w-full'
                        />
                    ) : (
                        <iframe
                            src={randomMovies.trailerUrl}
                            className='w-full h-[40vw]'
                        />
                    )
                }

                {/*Background Video */}

                <div
                    className='absolute top-[40%] left-[5%] flex-auto flex-col items-center 
                    justify-start text-white z-10 w-[50%]'
                >
                    {/*Movie Details */}
                    <h2 className='text-5xl font-black'>
                        {randomMovies.title}
                    </h2>

                    {/*Movie Overview */}
                    <p className='text-lg font-medium mt-5'>
                        {randomMovies.overview}
                    </p>

                    {

                    }
                    {/*Buttons */}
                    <div className='flex items-center justify-start gap-5 mt-5'>

                        {
                            randomMovies.videoSource && (
                                <PlayButton />
                            )
                        }

                        {/*Details Button */}
                        <button
                            onClick={handleShowDetail}
                            className='bg-white text-red-500 hover:scale-95 px-6 py-2 
                            rounded-xl transform duration-300'
                        >
                            Details
                        </button>
                        {
                            showDetails && (
                                <Details
                                    mediaDetails={randomMovies}
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

export default HeroBoard