import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {
    trailerUrl: string;
    setShowTrailer: React.Dispatch<React.SetStateAction<boolean>>
}

const TrailerModal = ({ trailerUrl, setShowTrailer }: Props) => {
    return (
        <div
            className="fixed inset-0 z-50 overflow-auto bg-black/70 flex 
            items-center justify-center"
        >
            <div
                className="relative bg-black/60 w-full max-w-4xl mx-auto 
                rounded-xl"
            >
                <div
                    onClick={() => setShowTrailer(false)}
                    className="cursor-pointer absolute top-3 right-3 h-10 w-10 
                    rounded-full bg-black bg-opacity-70 flex items-center 
                    justify-center z-20"
                >
                    <XMarkIcon className="text-white w-6" />
                </div>
                <div className='w-full'>
                    <iframe
                        src={trailerUrl}
                        className='w-full h-[600px]'
                    />
                </div>
            </div>
        </div>
    )
}

export default TrailerModal