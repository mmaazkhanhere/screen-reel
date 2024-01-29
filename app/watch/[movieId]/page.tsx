"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import useWatchMedia from '@/hooks/useWatchMedia'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

type Props = {}

const WatchMovie = (props: Props) => {

    const pathName = usePathname().split('/')
    const mediaId = pathName[pathName.length - 1];

    const { watchMedia } = useWatchMedia(mediaId)

    return (
        <section className='h-screen w-screen bg-black max-w-[1600px] mx-auto'>
            <nav
                className='fixed w-full flex-auto items-center justify-center
            bg-black bg-opacity-70 p-4 max-w-[1600px] mx-auto'
            >
                <ArrowLeftIcon
                    className='w-10 fill-white cursor-pointer hover:opacity-80
                transition'
                />
            </nav>
        </section>
    )
}

export default WatchMovie