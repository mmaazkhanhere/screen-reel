"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import MobileMenu from './mobile-menu'

type Props = {}

const MobileNavbar = (props: Props) => {

    const imageUrl: string = '/images/mobile-nav.jpg'
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    console.log(showMenu)

    return (
        <div
            className='h-[25vh] relative '
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
                <div className='sm:max-w-sm mx-auto w-full flex items-center 
                justify-between px-2'
                >
                    <div>
                        <Image
                            src='/logo.png'
                            alt='Logo'
                            width={65}
                            height={65}
                        />
                    </div>
                    <button
                        onClick={toggleMenu}
                        className='flex items-center justify-center gap-1
                        p-2 text-sm rounded-lg bg-white text-black'
                    >
                        <Bars3Icon className='fill-black w-4 text-black' />
                        Menu
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