"use client"

import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

type Props = {
    mediaId: string
}

const PlayButton: React.FC<Props> = ({ mediaId }: Props) => {

    const router = useRouter()

    return (
        <button
            aria-label='Play Button'
            onClick={() => router.push(`/watch/${mediaId}`)}
            className='bg-red-500 hover:scale-95 px-6 py-2 rounded-xl
            transform duration-300'
        >
            <PlayIcon className='w-6 fill-white' />
        </button>
    )
}

export default PlayButton