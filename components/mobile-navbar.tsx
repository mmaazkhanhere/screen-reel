"use client"

import Image from 'next/image'
import Cookies from 'universal-cookie'
import React, { useState } from 'react'

import { Bars3Icon } from '@heroicons/react/20/solid'

import MobileMenu from './mobile-menu'
import Link from 'next/link'
import AccountButton from './account-button'
import LoginButton from './login-button'

type Props = {}

const MobileNavbar = (props: Props) => {

    const [showMenu, setShowMenu] = useState(false)

    const cookies = new Cookies()
    const username = cookies.get('username')

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <React.Fragment>
            <nav
                className="absolute top-0 left-0 w-full h-full backdrop-blur-sm
                bg-red-500/50 px-1 z-40"
            >
                <div
                    className='flex items-center justify-between px-2'
                >
                    <button
                        aria-label='Menu Button'
                        onClick={toggleMenu}
                        className='flex items-center justify-center gap-1
                        p-2 md:p-3 text-sm rounded-lg bg-white text-black'
                    >
                        <Bars3Icon
                            className='fill-black w-4 md:w-5 text-black 
                        md:text-lg'
                        />
                        Menu
                    </button>
                    <div>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                alt='Logo'
                                width={65}
                                height={65}
                                className='w-[70px] md:w-[100px]'
                            />
                        </Link>
                    </div>
                    {
                        username ? <AccountButton username={username} /> : <LoginButton />
                    }
                </div>

            </nav>
            {
                showMenu && (
                    <div>
                        <MobileMenu visible />
                    </div>
                )
            }
        </React.Fragment>


    )
}

export default MobileNavbar