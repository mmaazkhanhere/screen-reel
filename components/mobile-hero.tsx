/*A react component that represents the mobile version of hero section that 
consist of a non-functional search and a navbar displayed over the hero image  
*/

import React from 'react'

import MobileNavbar from './mobile-navbar'

import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type Props = {}

const MobileHero = (props: Props) => {

    const imageUrl: string = '/images/mobile-nav.jpg' /*Url of the image
    that is displayed in the background */

    return (
        <section
            className='h-[23vh] md:h-[30vh] block lg:hidden relative w-full '
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/*Mobile Navbar */}
            <MobileNavbar />

            <div
                className='absolute top-0 left-0 z-40 flex flex-col items-center
                justify-end h-full mx-auto w-full'
            >
                <div className='flex items-center justify-center w-full px-4'>

                    {/*Search Input */}
                    <div className='relative max-w-[550px] w-full mx-2 '>
                        <input
                            type="text"
                            className='px-4 py-2 md:py-3 rounded-lg 
                            lg:rounded-xl w-full shadow-xl pl-10'
                            placeholder="Search..."
                        />
                        <MagnifyingGlassIcon
                            className='w-5 md:w-6 fill-black text-black 
                            absolute left-3 top-2.5 md:top-3'
                        />
                    </div>

                    {/*Button */}
                    <button
                        aria-label='Search Button'
                        className='flex items-center justify-center p-2
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

export default MobileHero