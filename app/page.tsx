
import React from 'react'

import TrendingList from '@/components/trending-list'
import RecentMovies from '@/components/recent-movies'
import RecentShows from '@/components/recent-shows'
import ComingSoon from '@/components/coming-soon'
import Footer from '@/components/footer'
import Hero from '@/components/hero'

type Props = {}

const Home = (props: Props) => {

  return (
    <>
      <Hero />
      <TrendingList title='Trending' />
      <RecentMovies title='Latest Movies' />
      <RecentShows title='Latest TV Shows' />
      <ComingSoon title='Coming Soon' />
      <Footer />
    </>
  )
}

export default Home