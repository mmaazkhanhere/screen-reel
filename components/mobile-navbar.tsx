/*A responsive mobile navigation bar that includes a toggle menu button, 
a clickable logo button that redirects to homepage, and either an Account
or Login Button based on user authentication status. The menu reveals additional
navigation options when activated, enhancing the mobile user experience*/

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

    const [showMenu, setShowMenu] = useState(false) /*state variable for showing
    the menu */

    const cookies = new Cookies()
    const username = cookies.get('username') /*get the username from the cookies */

    console.log(username)

    const toggleMenu = () => {
        /*function that hides or show the sub menu */
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
                    {/*Menu button */}
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

                    {/*Logo */}
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

                    {/*Account/Login Button */}
                    {/*If username exists, display account button else login 
                    button */}
                    {
                        username ? <AccountButton username={username} /> : <LoginButton />
                    }
                </div>

            </nav>
            {/*show sub menu if the showMenu state variable is true */}
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