import HeroSearch from '@/components/hero-search'
import MoviesList from '@/components/movies-list'
import Navbar from '@/components/navbar'
import React from 'react'

import useMoviesList from '@/hooks/useMoviesList'

type Props = {}

const Home = (props: Props) => {

  const { data: movie = [] } = useMoviesList()

  return (
    <>
      <Navbar />
      <HeroSearch />
      <MoviesList title='Trending' data={movie} />
    </>
  )
}

export default Home