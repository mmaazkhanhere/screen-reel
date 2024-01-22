import HeroSearch from '@/components/hero-search'
import MoviesList from '@/components/movies-list'
import Navbar from '@/components/navbar'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <HeroSearch />
      <MoviesList title='Trending' />
    </>
  )
}

export default Home