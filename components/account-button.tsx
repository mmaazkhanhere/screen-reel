"use client"

import { UserIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Profile from './profile'


type Props = {
    username: string
}

const AccountButton = ({ username }: Props) => {

    const [showProfile, setShowProfile] = useState(false)

    const handleShowProfile = () => {
        setShowProfile(!showProfile)
    }

    return (
        <React.Fragment>
            <button
                aria-label='User account button'
                className='bg-white rounded-full p-1 md:p-2'
            >
                <UserIcon
                    onClick={handleShowProfile}
                    className='fill-black w-6 md:w-8'
                />
            </button>
            {
                showProfile && <Profile username={username} handleShowButton={handleShowProfile} />
            }
        </React.Fragment>

    )
}

export default AccountButton