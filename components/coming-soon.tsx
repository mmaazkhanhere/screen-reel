/*A react component for displaying a list of upcoming movie or tv shows. It uses
the useComingSoonList custom hook to fetch the upcoming media items and
manages the loading state. */

"use client"
import { IMedia } from '@/interfaces';
import React from 'react';
import MediaCard from './media-card';
import LoadingSkeleton from './loading-skeletion';
import useComingSoonList from '@/hooks/useComingSoonList';

type Props = {
    title: string; //receives the title of the section
};

const ComingSoon: React.FC<Props> = ({ title }: Props) => {

    const { comingSoon, isLoading } = useComingSoonList();

    if (isLoading) {
        {/*while coming soon is being fetched, display a loading skeleton */ }
        return (
            <section
                className="flex flex-col items-start justify-center mt-24 
                lg:mt-[150px] max-w-[1600px] mx-auto px-2 gap-4"
            >
                <h2 className="text-2xl lg:text-4xl font-semibold">
                    {title}
                </h2>
                <LoadingSkeleton />
            </section>
        );
    }

    return (
        <section
            className='flex flex-col items-start justify-center mt-24 
            lg:mt-[100px] max-w-[1600px] mx-auto px-2'>
            <div className='flex items-center justify-center gap-5'>
                {/*Title of Section */}
                <h2 className='text-2xl lg:text-4xl font-semibold'>{title}</h2>
            </div>

            {/* Movies List */}
            <div
                className='flex gap-5 lg:gap-10 flex-wrap justify-start 
            items-center w-full mt-5'
            >
                {
                    comingSoon.comingSoon.map((item: IMedia) => (
                        <MediaCard key={item.id} data={item} />
                    ))
                }
            </div>
        </section>
    );
};

export default ComingSoon;
