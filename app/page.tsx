import HeroSearch from '@/components/hero-search'
import Navbar from '@/components/navbar'
import React from 'react'
import MediaList from '@/components/media-list'

type Props = {}

const Home = (props: Props) => {

  return (
    <>
      <Navbar />
      <HeroSearch />
      <MediaList title='Trending' />
    </>
  )
}

export default Home