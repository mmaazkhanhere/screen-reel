/*A responsive mobile navigation bar that includes a toggle menu button, 
a clickable logo button that redirects to homepage, and either an Account
or Login Button based on user authentication status. The menu reveals additional
navigation options when activated, enhancing the mobile user experience*/


import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cookies from 'universal-cookie'

import { Bars3Icon } from '@heroicons/react/24/solid'

import MobileMenu from '@/components/mobile-menu'
import AccountButton from '@/components/account-button'
import LoginButton from '@/components/login-button'

type Props = {}

const MobileNavbar = (props: Props) => {

    const [showMenu, setShowMenu] = useState(false) /*state variable to show
    sub menu. Initially, it is false, meaning it is not showed */

    const cookies = new Cookies()
    const username = cookies.get('username') /*get username from cookies */

    const toggleMenu = () => {/*function to hide or show sub menu */
        setShowMenu(!showMenu)
    }

    return (
        <React.Fragment>
            <div
                className='flex items-center justify-between px-2'
            >
                {/*Menu Button */}
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
                {/*If username exist account button is displayed or else login
                button is displayed */}
                {
                    username ? <AccountButton username={username} /> : <LoginButton />
                }
            </div>
            {/*If show menu is true (user wants to see sub menu), sub menu is
            displayed */}
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