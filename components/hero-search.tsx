import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

type Props = {}

const HeroSearch = (props: Props) => {
    return (
        <section
            className='relative -mt-28'>
            <div
                className='absolute text-center flex flex-col items-center 
                justify-center w-full z-20'
            >
                {/*Headings */}
                <div
                    className='flex flex-col items-center justify-center
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

                <div className='flex items-center justify-center gap-5'>
                    <input
                        type="text"
                        className='px-2 py-4 w-[650px] rounded-xl shadow-xl'
                    />
                    <button
                        className='flex items-center justify-center p-3
                        bg-red-500 rounded-full'
                    >
                        <ArrowRightIcon
                            className='fill-white text-white w-7'
                        />
                    </button>
                </div>

            </div>
        </section>
    )
}

export default HeroSearch