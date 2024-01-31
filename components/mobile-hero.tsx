import React from 'react'
import MobileNavbar from './mobile-navbar'
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'


type Props = {}

const MobileHero = (props: Props) => {

    const imageUrl: string = '/images/mobile-nav.jpg'

    return (
        <section
            className='h-[23vh] md:h-[30vh] block lg:hidden relative w-full '
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <MobileNavbar />
            <div
                className='absolute top-0 left-0 z-40 flex flex-col items-center
                justify-end h-full mx-auto w-full'
            >
                {/*Input */}
                <div className='relative max-w-[550px] w-full mx-2 px-4'>
                    <input
                        type="text"
                        className='px-4 lg:px-2 py-2 md:py-3 lg:py-4 rounded-lg 
                            lg:rounded-xl w-full shadow-xl pl-10 lg:pl-12'
                        placeholder="Search..."
                    />
                    <MagnifyingGlassIcon
                        className='w-5 md:w-6 fill-black text-black 
                            absolute left-6 top-2.5 md:top-3 lg:top-4'
                    />
                </div>
            </div>
        </section>
    )
}

export default MobileHero