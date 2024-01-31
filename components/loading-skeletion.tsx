import React from 'react'

type Props = {}

const LoadingSkeleton = (props: Props) => {
    return (
        <div className="animate-pulse flex flex-col p-5 ">
            {/* Circle placeholder */}
            <div
                className="w-10 lg:w-14 h-10 lg:h-14 bg-gray-100 rounded-full 
                mb-3"
            />
            {/* Placeholder lines */}
            <div className='flex flex-col gap-3'>
                <div className="bg-gray-100 h-1 w-64 lg:w-[600px] mb-3" />
                <div className="bg-gray-100 h-1 w-64 lg:w-[600px] mb-3" />
                <div className="bg-gray-100 h-1 w-64 lg:w-[600px] mb-3" />
                <div className="bg-gray-100 h-1 w-64 lg:w-[600px] mb-3" />
                <div className="bg-gray-100 h-1 w-64 lg:w-[600px] mb-3" />
            </div>
        </div>

    )
}

export default LoadingSkeleton