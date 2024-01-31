"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

const LoginButton = (props: Props) => {

    const router = useRouter()

    return (
        <button
            aria-label='Login Button'
            className='bg-white px-4 lg:px-6 py-2 lg:py-2 rounded-lg text-black
                        font-bold'
            onClick={() => router.push('/auth')}
        >
            Login
        </button>
    )
}

export default LoginButton