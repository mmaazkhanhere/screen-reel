import { IMovie } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

type Props = {
    data: IMovie
}

const MovieCard = (props: Props) => {
    console.log(props.data)
    return (
        <section
            className='group relative h-[12vw]'
        >
            Movie Card
        </section>
    )
}

export default MovieCard