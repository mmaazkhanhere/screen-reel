import React from 'react'
import HeroBoard from '@/components/hero-board'
import PopularMovies from './components/popular-movies'
import RecentMovies from '@/components/recent-movies'

type Props = {}

const Movies = (props: Props) => {

    return (
        <div>
            <HeroBoard />
            <PopularMovies title='Popular Movies' />
        </div>
    )
}

export default Movies