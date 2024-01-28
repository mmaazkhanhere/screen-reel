import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import MobileMenu from '@/components/mobile-menu'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const MobileNavbar = (props: Props) => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <React.Fragment>
            <div
                className='flex items-center justify-between px-2'
            >
                <button
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
                <button
                    className='bg-white rounded-full p-1 md:p-2'
                >
                    <UserIcon className='fill-black w-6 md:w-8' />
                </button>
            </div>
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