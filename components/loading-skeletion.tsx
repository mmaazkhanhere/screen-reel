import React from 'react'

type Props = {}

const LoadingSkeleton = (props: Props) => {
    return (
        <div className="animate-pulse flex flex-col">
            {/* Circle placeholder */}
            <div className="w-14 h-14 bg-gray-100 rounded-full mb-2" />
            {/* Placeholder lines */}
            <div className='flex flex-col gap-3'>
                <div className="bg-gray-100 h-1 w-64 lg:w-[600px] mb-2" />
                <div className="bg-gray-100 h-1 w-64 lg:w-[600px] mb-2" />
                <div className="bg-gray-100 h-1 w-64 lg:w-[600px] mb-2" />
            </div>
        </div>

    )
}

export default LoadingSkeleton