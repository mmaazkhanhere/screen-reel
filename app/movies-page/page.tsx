import React from 'react'

import PopularMovies from './components/popular-movies'
import HeroBoardMovies from './components/hero-board-movies'
import Footer from '@/components/footer'

type Props = {}

const Movies = (props: Props) => {

    return (
        <div>
            <HeroBoardMovies />
            <PopularMovies title='Popular Movies' />
            <Footer />
        </div>
    )
}

export default Movies