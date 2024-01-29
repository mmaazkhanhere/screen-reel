import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer
            className='bg-black text-white max-w-[1600px]
            mx-auto p-4 flex flex-col md:flex-row justify-between items-center w-full 
            mt-32 gap-10'
        >
            <div className='flex flex-col items-center'>
                <Image
                    src='/logo.png'
                    alt='Logo'
                    width={150}
                    height={150}
                />
                <span className='text-xl uppercase font-bold'>ScreenReel</span>
            </div>

            <div
                className='flex flex-col items-center justify-center gap-10 
                md:gap-5 lg:gap-2'
            >
                <p className='md:text-sm text-gray-300'>
                    ScreenReel: Your ad-free streaming destination for over
                    10,000 movies and TV series. No registration or payment
                    required. Enjoy seamless online streaming without the option
                    to download. Dive into entertainment with ScreenReel—your
                    go-to for instant access to your favorite content.
                </p>
                <div className='flex items-center justify-between gap-5
                text-sm lg:text-base'>
                    <span
                        className='hover:underline hover:text-white/70
                        cursor-pointer'
                    >
                        Android App
                    </span>

                    <span
                        className='hover:underline hover:text-white/70
                        cursor-pointer'
                    >
                        Terms of Service
                    </span>

                    <span
                        className='hover:underline hover:text-white/70
                        cursor-pointer'
                    >
                        Contact
                    </span>

                    <span
                        className='hover:underline hover:text-white/70
                        cursor-pointer'
                    >
                        Sitemap
                    </span>

                    <span
                        className='hover:underline hover:text-white/70
                        cursor-pointer'
                    >
                        FAQ
                    </span>
                </div>
            </div>

            <div className='border border-gray-500 p-1 text-sm'>
                ScreenReel does not store any files on our server, we only
                linked to the media which is hosted on 3rd party services.
            </div>
        </footer>
    )
}

export default Footer