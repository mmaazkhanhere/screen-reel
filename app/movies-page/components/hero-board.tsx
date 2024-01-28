"use client"

import React from 'react'
import Navbar from './navbar'
import useMovieBoard from '@/hooks/useMovieBoard'
import LoadingSkeleton from '@/components/loading-skeletion'

type Props = {}

const HeroBoard = (props: Props) => {

    const { randomMovies } = useMovieBoard()
    //console.log(randomMovies)
    //console.log(randomMovies.trailerUrl)

    if (!randomMovies) {
        return (
            <section className='max-w-[1600px] mx-auto h-[35vw]'>
                <LoadingSkeleton />
            </section>
        )
    }

    return (
        <section
            className='relative max-w-[1600px] mx-auto'
        >
            <div className='w-full h-[35vw] border'>
                <video
                    src={randomMovies.trailerUrl}
                    autoPlay
                    muted
                    loop
                    className='w-full border border-black'
                ></video>
            </div>
            <header className='absolute top-0 left-0 z-50 w-full'>
                <Navbar />
            </header>
        </section>
    )
}

export default HeroBoard