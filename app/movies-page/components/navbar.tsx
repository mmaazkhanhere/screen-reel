import Image from 'next/image'
import React from 'react'
import Cookies from 'universal-cookie'

import NavbarItem from '@/components/navbar-item'
import MobileNavbar from './mobile-navbar'
import AccountButton from '@/components/account-button'
import LoginButton from '@/components/login-button'

type Props = {}

const Navbar = (props: Props) => {

    const cookies = new Cookies()
    const username = cookies.get('username')

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
                    <NavbarItem label='Home' href='/' />
                    <NavbarItem label='Genre' href='/genre' />
                    <NavbarItem label='Movies' href='/movies-page' />
                    <NavbarItem label='TV Shows' href='/shows-page' />

                </div>
                <div>
                    {
                        username ? <AccountButton username={username} /> : <LoginButton />
                    }
                </div>
            </nav>
            <nav
                className='lg:hidden'
            >
                <MobileNavbar />
            </nav>
        </React.Fragment>

    )
}

export default Navbar