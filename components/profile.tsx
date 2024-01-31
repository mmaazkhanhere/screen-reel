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

    const { user } = useUser(username)
    if (!user) {
        return null;
    }
    console.log(user.user)

    const handleLogout = () => {
        const cookies = new Cookies();
        const token = cookies.remove("authenticationToken");
        router.push('/auth');
    }

    return (
        <div
            className="fixed inset-0 overflow-auto bg-black/70 flex 
            items-end justify-center z-10"
        >
            <div
                className="absolute bg-black/70 max-w-4xl mx-auto 
                rounded-xl p-4 z-10"
            >
                <div
                    className="cursor-pointer absolute top-3 right-3 h-10 w-10 
                    rounded-full bg-black bg-opacity-70 flex items-center 
                    justify-center z-20"
                >
                    <XMarkIcon
                        onClick={handleShowButton}
                        className="text-white w-6" />
                </div>
                <div className='text-white '>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                </div>
            </div>
        </div>
    )
}


export default Profile