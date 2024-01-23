import { IMovie } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

type Props = {
    data: IMovie
}

const MediaCard = (props: Props) => {
    console.log(props.data)
    return (
        <section
            className='group relative h-[12vw]'
        >
            {props.data.category}
        </section>
    )
}

export default MediaCard