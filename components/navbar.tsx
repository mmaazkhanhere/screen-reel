import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarItem from './navbar-item'
import MobileNavbar from './mobile-navbar'

type Props = {}

const Navbar = (props: Props) => {

    const imageUrl: string = '/images/nav-hero.jpg'

    return (
        <>
            <nav
                className='h-[30vh] relative hidden lg:block'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div
                    className='absolute top-0 left-0 w-full h-full backdrop-blur-sm
                    bg-red-500/40 px-2'
                >
                    <nav
                        className='lg:max-w-[1600px] mx-auto hidden lg:flex items-center 
                        justify-between w-full'
                    >
                        {/*Logo */}
                        <div className='flex items-center justify-center'>
                            <Image
                                src='/logo.png'
                                alt='Logo'
                                width={90}
                                height={90}
                            />
                            <p className='text-3xl font-black uppercase text-white'>
                                ScreenReel
                            </p>
                        </div>

                        {/*Navigation Bar */}
                        <div className='flex items-center justify-start gap-10'>
                            <NavbarItem label='Home' href='/' current />
                            <NavbarItem label='Genre' href='/' />
                            <NavbarItem label='Movies' href='/' />
                            <NavbarItem label='TV Shows' href='/' />

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
                </div>
            </nav>
            {/*Mobile Menu */}
            <nav
                className='lg:hidden block'
            >
                <MobileNavbar />
            </nav>
        </>

    )
}

export default Navbar