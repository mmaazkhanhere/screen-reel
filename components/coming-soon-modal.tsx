/*A react component that displays a coming soon message if the movie or tv
show is not released yet. Used in the watch page */

import React from 'react'

type Props = {}

const ComingSoonModal = (props: Props) => {
    return (
        <div className='text-white w-full h-full flex items-center
        justify-center'>
            <p className='text-4xl font-bold'>
                Coming Soon to Your Screen
            </p>
        </div>
    )
}

export default ComingSoonModal