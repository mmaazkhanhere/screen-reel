import HeroSearch from '@/components/hero-search'
import Navbar from '@/components/navbar'
import React from 'react'
import TrendingList from '@/components/trending-list'
import NewRelease from '@/components/new-release'

type Props = {}

const Home = (props: Props) => {

  return (
    <>
      <Navbar />
      <HeroSearch />
      <TrendingList title='Trending' />
      <NewRelease title='New Release' />
    </>
  )
}

export default Home