"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import MobileMenu from './mobile-menu'
import Link from 'next/link'

type Props = {}

const MobileNavbar = (props: Props) => {

    const imageUrl: string = '/images/mobile-nav.jpg'
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div
            className='h-[25vh] md:h-[35vh] relative '
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full backdrop-blur-sm
                bg-red-500/50"
            >
                <div
                    className='flex items-center justify-between px-2'
                >
                    <button
                        onClick={toggleMenu}
                        className='flex items-center justify-center gap-1
                        p-2 md:p-3 text-sm rounded-lg bg-white text-black'
                    >
                        <Bars3Icon className='fill-black w-4 text-black' />
                        Menu
                    </button>
                    <div>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                alt='Logo'
                                width={65}
                                height={65}
                                className='w-[70px] md:w-[80px]'
                            />
                        </Link>
                    </div>
                    <button
                        className='bg-white rounded-full p-1'
                    >
                        <UserIcon className='fill-black w-6' />
                    </button>
                </div>

            </div>
            {
                showMenu && (
                    <div>
                        <MobileMenu visible />
                    </div>
                )
            }
        </div>

    )
}

export default MobileNavbar