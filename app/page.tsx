import HeroSearch from '@/components/hero-search'
import Navbar from '@/components/navbar'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <HeroSearch />
    </>
  )
}

export default Home