/*A hero section for showcasing random movies on a webpage. It uses
useMovieBoard hook to fetch random movie details and display a video or
YouTube trailer in the background along with the movies title and overview.
The component includes playing button (if the movie is released) and detail
button that displays a detailed view about the movie*/

"use client"

import React, { useState } from 'react'

import Navbar from '@/app/movies-page/components/navbar'
import useMovieBoard from '@/hooks/useMovieBoard'
import LoadingSkeleton from '@/components/loading-skeletion'
import PlayButton from '@/components/play-button'
import Details from '@/components/details'

type Props = {}

const HeroBoardMovies = (props: Props) => {

    const [showDetails, setShowDetails] = useState<boolean>(false)/*state variable
    to handle whether to show details or not */

    const { randomMovie } = useMovieBoard() /*custom hook to fetch random movie */

    if (!randomMovie) {
        /*If no random movie exists (still fetching the data), display a loading
        skeleton component*/
        return (
            <section className='max-w-[1600px] mx-auto mt-10 lg:mt-20'>
                <LoadingSkeleton />
            </section>
        )
    }

    const handleShowDetail = () => { /*function to handle showing movie detail */
        setShowDetails(true)
    }

    return (
        <section
            className='relative max-w-[1600px] mx-auto'
        >
            <div className='relative w-full'>
                {/*Video Banner */}
                {/*Displays movie if released or trailer if it is not released */}
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

                    {/*Buttons */}
                    <div
                        className='hidden md:flex items-center justify-start gap-5 mt-5'
                    >
                        {/*If movie is released then display the watch button */}
                        {
                            randomMovie.videoSource && (
                                <PlayButton mediaId={randomMovie.id} />
                            )
                        }

                        {/*Details Button */}
                        <button
                            aria-label='Detail Button'
                            onClick={handleShowDetail}
                            className='bg-white text-red-500 hover:scale-95 
                            px-4 lg:px-6 py-1.5 lg:py-2 text-sm lg:text-base 
                            rounded-xl transform duration-300'
                        >
                            Details
                        </button>
                        {/*If user clicks on detail button (sets the showDetail
                            state variable to true), display the Detail
                            component */}
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