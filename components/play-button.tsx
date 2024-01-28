import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

type Props = {}

const PlayButton = (props: Props) => {
    return (
        <button
            className='bg-red-500 hover:scale-95 px-6 py-2 rounded-xl
            transform duration-300'
        >
            <PlayIcon className='w-6 fill-white' />
        </button>
    )
}

export default PlayButton