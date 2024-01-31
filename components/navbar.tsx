"use client"
import Image from 'next/image'
import Cookies from 'universal-cookie'
import React, { useEffect, useState } from 'react'
import NavbarItem from './navbar-item'
import MobileNavbar from './mobile-navbar'
import AccountButton from './account-button'
import LoginButton from './login-button'

type Props = {}

const Navbar = (props: Props) => {

    const cookies = new Cookies()
    const username = cookies.get('username')

    return (

        <nav
            className='absolute top-0 left-0 px-2 py-1 z-10 w-full'
        >
            <nav
                className='max-w-[1600px] mx-auto hidden lg:flex items-center 
                        justify-between w-full '
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
                {
                    username ? <AccountButton username={username} /> : <LoginButton />
                }
            </nav>
        </nav>

    )
}

export default Navbar