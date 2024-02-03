/*Dynamic route that for watching a media based on its id that is received as 
slug. The id is passed to useWatchMedia custom hook to fetch details and media
content based on the provided mediaId. If media is released (video source exists),
the media can be played else a coming soon message is being displayed. Additionally,
user needs to be authenticated to access this route.
*/

"use client"
import React, { useEffect, useState } from 'react'
import useWatchMedia from '@/hooks/useWatchMedia'
import LoadingSkeleton from '@/components/loading-skeletion'
import ComingSoonModal from '@/components/coming-soon-modal'
import MediaDetail from '@/components/media-detail'

import { usePathname, useRouter } from 'next/navigation'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import MediaSuggest from '@/components/media-suggest'
import Footer from '@/components/footer'
import { useAuth } from '@/hooks/useAuth'
import { JWTPayload } from 'jose'

type Props = {}

const WatchMovie = (props: Props) => {

    const router = useRouter()

    const [auth, setAuth] = useState<JWTPayload | null>(); /*state variable
    to handle authentication */

    /*useEffect hook is used to fetch the authentication status of the user
    when the component mounts */

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const authStatus = await useAuth.fromServer(); /*uses the fromServer\
            function from the useAuth hook that performs a server-side check to
            determine the user's authentication status. It is done by making
            a request to the server */

            setAuth(authStatus);
        }
        fetchAuthStatus();

    }, [auth]); /*Dependency array have auth that means whenever the value of 
    auth changes, the whole page is re-rendered */

    const pathName = usePathname().split('/')
    const mediaId = pathName[pathName.length - 1]; /*The media id is extracted 
    from the url */

    const { watchMedia, isLoading } = useWatchMedia(mediaId) /*The media id is passed to 
    useWatchMedia custom hook to fetch the media detail */


    if (isLoading) {
        /*While watchMedia is being fetched, display LoadingSkeleton */
        return (
            <section className='w-screen h-screen p-5'>
                <LoadingSkeleton />
            </section>
        )

    }

    return (
        <React.Fragment>
            {
                auth === null && (
                    /*If user is authenticated, the media will be displayed */

                    <div
                        className='h-[60vw] lg:h-[40vw] w-screen bg-black 
                        max-w-[1600px] mx-auto'
                    >
                        {/*Navbar that  contains a back arrow and the media name */}
                        <nav
                            className='fixed w-full flex items-center 
                            justify-start bg-black bg-opacity-70 p-4 
                            max-w-[1580px] mx-auto gap-5 z-10'
                        >
                            {/*Back Arrow */}
                            <ArrowLeftIcon
                                onClick={() => router.push('/')}
                                className='w-8 fill-white cursor-pointer hover:opacity-80
                                transition'
                            />
                            {/*Media Title */}
                            {/*Displayed only if it is released */}
                            {
                                watchMedia.media.videoSource && (
                                    <p className='text-lg lg:text-2xl font-bold text-white'>
                                        Watching: &nbsp;<span className='font-thin '>
                                            {watchMedia.media.title}
                                        </span>
                                    </p>
                                )
                            }

                        </nav>
                        {/*Media Video */}
                        {/*If media fetched is not released yet, coming soon 
                        modal is being fetched */}
                        {
                            watchMedia.media.videoSource === '' ? (
                                <ComingSoonModal />
                            ) : (
                                <video
                                    className='h-full w-full'
                                    src={watchMedia.media.videoSource}
                                    controls />
                            )
                        }

                        <MediaDetail mediaDetail={watchMedia.media} />
                        <MediaSuggest />
                        <Footer />
                    </div>
                )
            }
        </React.Fragment>

    )
}

export default WatchMovie