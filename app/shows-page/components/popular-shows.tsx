/*React component that display list of popular tv shows */

"use client"
import { IMedia } from '@/interfaces';
import React from 'react';
import MediaCard from '@/components/media-card';
import useMediaList from '@/hooks/useMediaList';
import LoadingSkeleton from '@/components/loading-skeletion';

type Props = {
    title: string; //receives title as an argument
};

const PopularShows: React.FC<Props> = (props: Props) => {

    const { media } = useMediaList('Show');

    if (!media) {
        //while media is being fetched, display a loading skeleton
        return (
            <section
                className="flex flex-col items-start justify-center mt-16 
                md:mt-32 lg:mt-[100px] max-w-[1600px] mx-auto px-2 gap-4"
            >
                <h2 className="text-2xl lg:text-4xl font-semibold">{props.title}</h2>
                <LoadingSkeleton />
            </section>
        );
    }

    return (
        <section
            className='flex flex-col items-start justify-center mt-16 
            md:mt-32 lg:mt-[100px] max-w-[1600px] mx-auto px-2'
        >
            <div className='flex items-center justify-center gap-5'>

                {/*Title of Section */}
                <h2 className='text-2xl lg:text-4xl font-semibold'>
                    {props.title}
                </h2>

            </div>

            {/* TV Shows List */}
            <div
                className='flex gap-5 lg:gap-10 flex-wrap justify-start 
                items-center w-full mt-5'
            >
                {/*TV Shows Media Card */}
                {
                    media.media.map((item: IMedia) => (
                        <MediaCard key={item.id} data={item} />
                    ))
                }
            </div>
        </section>
    );
};

export default PopularShows