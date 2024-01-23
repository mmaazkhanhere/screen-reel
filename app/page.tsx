"use client"
import HeroSearch from '@/components/hero-search'
import MoviesList from '@/components/movies-list'
import Navbar from '@/components/navbar'

import React from 'react'

import useMoviesList from '@/hooks/useMoviesList'

type Props = {}

const Home = (props: Props) => {

  const { data } = useMoviesList()

  console.log(data.movies)

  return (
    <>
      <Navbar />
      <HeroSearch />
      <MoviesList title='Trending' data={data.movies} />
    </>
  )
}

export default Home