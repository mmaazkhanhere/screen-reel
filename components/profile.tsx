/*A react component that displays the user personal information if signed in
and ability to logout from the application */

import useUser from '@/hooks/useUser'
import Cookies from 'universal-cookie'
import React from 'react'
import { useRouter } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = {
    handleShowButton(): void
    username: string
}

const Profile = ({ username, handleShowButton }: Props) => {

    const router = useRouter()

    const { user, isLoading } = useUser(username) /*uses the useUser custom hook to get
    the username */

    if (isLoading) {
        /*Display nothing while user are being fetched from the database */
        return null;
    }

    const handleLogout = () => {
        /*function that provides the logout functionality. The authentication
        token associated with the user is deleted and user is redirected to
        the auth page */

        const cookies = new Cookies();
        const token = cookies.remove("authenticationToken");
        const username = cookies.remove("username")
        router.push('/auth');
    }

    return (
        <section
            className='absolute right-5 top-[65px] z-50' // Adjust the z-index value as needed
        >
            <div
                className='bg-black max-w-2xl mx-auto rounded-xl
                w-full text-white p-2 lg:p-4 z-50'
            >
                {/*Close icon */}
                <XMarkIcon
                    onClick={handleShowButton}
                    className='text-white w-6'
                />

                {/*Name */}
                <p className='text-sm lg:text-lg font-bold mt-5'>
                    Name: &nbsp;
                    <span className='text-xs lg:text-base font-medium'>
                        {user.user.name}
                    </span>
                </p>

                {/*Username */}
                <p className='text-sm lg:text-lg font-bold'>
                    Username: &nbsp;<span className='text-xs lg:text-base font-medium'>
                        {user.user.username}
                    </span>
                </p>

                {/*Email address */}
                <p className='text-sm lg:text-lg font-bold'>
                    Email Address: &nbsp;
                    <span className='text-xs lg:text-base font-medium'>
                        {user.user.email}
                    </span>
                </p>

                {/*Logout Button */}
                <button
                    onClick={handleLogout}
                    className='bg-red-500 p-2 text-sm lg:text-base 
                    rounded-xl text-white mt-5 z-30'
                >
                    Logout
                </button>
            </div>

        </section>
    )
}


export default Profile