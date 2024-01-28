import Link from 'next/link'
import React from 'react'

type Props = {
    visible?: boolean
}

const MobileMenu: React.FC<Props> = (props: Props) => {

    if (!props.visible) {
        return null
    }

    return (
        <div
            className='bg-white w-44 absolute top-14 left-2 pt-3
            flex flex-col border-2 border-gray rounded-xl text-sm z-50'
        >
            <div className='flex flex-col items-center justify-center'>
                <Link
                    href='/'
                    className='border-b w-full text-center py-1'>
                    Home
                </Link>
                <Link
                    href='/movies-page'
                    className='border-b w-full text-center py-1'>
                    Movies
                </Link>
                <Link
                    href='/shows-page'
                    className='border-b w-full text-center py-1'>
                    TV Shows
                </Link>
                <Link
                    href='/'
                    className='py-1'
                >
                    Genre
                </Link>
            </div>

        </div>
    )
}

export default MobileMenu