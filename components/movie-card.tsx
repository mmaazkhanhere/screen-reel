import Image from 'next/image'
import React from 'react'

type Props = {}

const MovieCard = (props: Props) => {
    return (
        <section
            className='group relative h-[12vw]'
        >
            <Image
                src=''
                alt='Movie Poster'
                draggable={false}
                className='cursor-pointer object-cover transition'
            />
            <div
                className='absolute top-0 left-0 w-full scale-0'
            >
                <Image
                    src=''
                    alt='Movie Second Poster'
                    draggable={true}
                    className=''
                />

            </div>
        </section>
    )
}

export default MovieCard