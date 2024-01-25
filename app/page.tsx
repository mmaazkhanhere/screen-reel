import HeroSearch from '@/components/hero-search'
import Navbar from '@/components/navbar'
import React from 'react'
import TrendingList from '@/components/trending-list'

type Props = {}

const Home = (props: Props) => {

  return (
    <>
      <Navbar />
      <HeroSearch />
      <TrendingList title='Trending' />
    </>
  )
}

export default Home