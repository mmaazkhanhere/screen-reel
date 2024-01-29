"use client"
import React from 'react'
import useWatchMedia from '@/hooks/useWatchMedia'
import LoadingSkeleton from '@/components/loading-skeletion'
import ComingSoonModal from '@/components/coming-soon-modal'
import MediaDetail from '@/components/media-detail'

import { usePathname, useRouter } from 'next/navigation'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import MediaSuggest from '@/components/media-suggest'
import Footer from '@/components/footer'

type Props = {}

const WatchMovie = (props: Props) => {

    const router = useRouter()
    const pathName = usePathname().split('/')
    const mediaId = pathName[pathName.length - 1];

    const { watchMedia } = useWatchMedia(mediaId)

    if (!watchMedia) {
        return (
            <section className='w-screen h-screen p-5'>
                <LoadingSkeleton />
            </section>
        )

    }

    return (
        <div className='h-[40vw] w-screen bg-black max-w-[1600px] mx-auto'>
            <nav
                className='fixed w-full flex items-center justify-start 
                bg-black bg-opacity-70 p-4 max-w-[1580px] mx-auto gap-5 z-10'
            >
                <ArrowLeftIcon
                    onClick={() => router.push('/')}
                    className='w-8 fill-white cursor-pointer hover:opacity-80
                transition'
                />
                {
                    watchMedia.media.videoSource && (
                        <p className='text-2xl font-bold text-white'>
                            Watching: &nbsp;<span className='font-thin'>{watchMedia.media.title}</span>
                        </p>
                    )
                }

            </nav>
            {
                watchMedia.media.videoSource === '' ? (
                    <ComingSoonModal />
                ) : (
                    <video className='h-full w-full' src={watchMedia.media.videoSource} controls />
                )
            }

            <MediaDetail mediaDetail={watchMedia.media} />
            <MediaSuggest />
            <Footer />
        </div>
    )
}

export default WatchMovie