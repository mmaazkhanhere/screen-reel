/*A React component that renders a modal displaying detailed information about
a specific media item. */

"use client"

import { IMedia } from '@/interfaces'
import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { FaYoutube } from "react-icons/fa6";
import TrailerModal from './trailer-modal';

type Props = {
    mediaDetails: IMedia,
    setShowDetails: React.Dispatch<React.SetStateAction<boolean>>
}

const Details: React.FC<Props> = ({ mediaDetails, setShowDetails }) => {


    const [showTrailer, setShowTrailer] = useState<boolean>(false)/*A state 
    variable that handles whether to show trailer modal */

    const handleTrailerDetail = () => {
        /*function that displays the trailer modal */
        setShowTrailer(true)
    }

    return (
        <section
            className="fixed inset-0 z-50 overflow-auto bg-black/70 flex 
            items-center justify-center"
        >
            <div
                className="relative bg-black/60 w-full max-w-lg mx-auto 
                rounded-xl"
            >
                {/*Close Icon */}
                <div
                    onClick={() => setShowDetails(false)}
                    className="cursor-pointer absolute top-3 right-3 h-10 w-10 
                    rounded-full bg-black bg-opacity-70 flex items-center 
                    justify-center z-20"
                >
                    <XMarkIcon className="text-white w-6" />
                </div>

                {/*Media Details */}
                <div className="flex-auto flex-col items-start justify-center 
                w-full">
                    {/*If media is released, start playing the media else
                    display the trailer */}
                    {
                        mediaDetails.videoSource ? (
                            <video
                                src={mediaDetails.videoSource}
                                autoPlay
                                loop
                                muted
                                className='w-full'
                            />
                        ) : (
                            <iframe
                                src={mediaDetails.trailerUrl}
                                className='w-full h-[350px]'
                            />
                        )
                    }

                    {/*Media title and age */}
                    <div className="flex items-center gap-5 text-white p-2">
                        {/*Title */}
                        <h3 className='text-xl'>
                            {mediaDetails.title}
                        </h3>
                        {/*Viewer Age */}
                        <div
                            className="border border-gray-400 text-xs md:text-xs 
                        text-gray-100 rounded-lg px-2 py-1"
                        >
                            + {mediaDetails.age}
                        </div>
                    </div>

                    {/*Duration, Genre,  Release Year*/}

                    <div className="flex items-center gap-5 text-white text-xs 
                    p-2">
                        {/*Release Year */}
                        <p>
                            {mediaDetails.releaseYear}
                        </p>

                        {/*Genre */}
                        <p>
                            {mediaDetails.genre}
                        </p>

                        {/*Duration */}
                        <p>
                            {mediaDetails.duration}
                        </p>

                        {/*Trailer Button */}
                        <div
                            className='hover:scale-95 transform duration-300
                            cursor-pointer'
                            onClick={handleTrailerDetail}
                        >
                            <FaYoutube className='rounded-lg w-7 h-7 fill-red-500'
                            />
                        </div>
                        {/*If show trailer state variable is true, the trailer
                        modal component is rendered */}
                        {
                            showTrailer && (
                                <TrailerModal
                                    setShowTrailer={setShowTrailer}
                                    trailerUrl={mediaDetails.trailerUrl}
                                />
                            )
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Details;
