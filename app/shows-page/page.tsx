
import React from 'react'
import HeroBoardShows from './components/hero-board-shows'
import PopularShows from './components/popular-shows'

type Props = {}

const ShowsPage = (props: Props) => {
    return (
        <div>
            <HeroBoardShows />
            <PopularShows title='Popular Shows' />
        </div>
    )
}

export default ShowsPage