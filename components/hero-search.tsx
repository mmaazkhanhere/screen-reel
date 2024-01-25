import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type Props = {}

const HeroSearch = (props: Props) => {
    return (
        <section
            className='relative -mt-12 lg:-mt-32'>
            <div
                className='absolute text-center flex flex-col items-center 
                justify-center w-full z-20 gap-4 left-2 lg:left-0'
            >

                {/*Headings */}
                <div
                    className='hidden lg:flex flex-col items-center justify-center
                    gap-2'
                >
                    {/*Hero Heading */}
                    <h1
                        className='text-5xl font-black text-white'
                    >
                        Unveil the Cinematic Experience
                    </h1>
                    {/*Hero Sub-Heading */}
                    <h2 className='text-xl uppercase text-white'>
                        ScreenReel – Where Every Frame Tells a Story.
                    </h2>
                </div>

                {/*Search bar */}
                <div className='flex flex-1 items-center justify-center gap-5 
                w-full max-w-[650px]'>
                    {/*Input */}
                    <div className='relative w-full mx-2'>
                        <input
                            type="text"
                            className='px-4 lg:px-2 py-2 md:py-3 lg:py-4 rounded-lg 
                            lg:rounded-xl w-full shadow-xl pl-10 lg:pl-12'
                            placeholder="Search..."
                        />
                        <MagnifyingGlassIcon
                            className='w-5 md:w-6 fill-black text-black 
                            absolute left-2 lg:left-2 top-2.5 md:top-3 lg:top-4'
                        />
                    </div>

                    {/*Search Button */}
                    <button
                        className='flex items-center justify-center lg:p-3
                        bg-red-500 rounded-full'
                    >
                        <ArrowRightIcon
                            className='fill-white text-white w=5 lg:w-7'
                        />
                    </button>
                </div>

            </div>
        </section>
    )
}

export default HeroSearch