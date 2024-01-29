
import React from 'react'
import HeroBoardShows from './components/hero-board-shows'
import PopularShows from './components/popular-shows'
import Footer from '@/components/footer'

type Props = {}

const ShowsPage = (props: Props) => {
    return (
        <div>
            <HeroBoardShows />
            <PopularShows title='Popular Shows' />
            <Footer />
        </div>
    )
}

export default ShowsPage