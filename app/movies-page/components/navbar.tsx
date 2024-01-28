import NavbarItem from '@/components/navbar-item'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <React.Fragment>
            <nav
                className='max-w-[1600px] mx-auto hidden lg:flex items-center 
                        justify-between w-full px-2'
            >
                {/*Logo */}
                <div className='flex items-center justify-center'>
                    <Image
                        src='/logo.png'
                        alt='Logo'
                        width={90}
                        height={90}
                    />
                    <p className='text-3xl font-black uppercase 
                            text-white -ml-5'>
                        ScreenReel
                    </p>
                </div>

                {/*Navigation Bar */}
                <div className='flex items-center justify-start gap-10'>
                    <NavbarItem label='Home' href='/' current />
                    <NavbarItem label='Genre' href='/' />
                    <NavbarItem label='Movies' href='/movies-page' />
                    <NavbarItem label='TV Shows' href='/shows' />

                </div>
                <div>
                    <button
                        className='bg-white px-6 py-2 rounded-lg text-black
                            font-bold'
                    >
                        Login
                    </button>
                </div>
            </nav>
            <nav>

            </nav>
        </React.Fragment>

    )
}

export default Navbar