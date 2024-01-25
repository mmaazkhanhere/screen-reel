"use client"
import { IMedia } from '@/interfaces';
import React from 'react';
import MediaCard from './media-card';
import useNewReleaseList from '@/hooks/useNewReleaseList';
import LoadingSkeleton from './loading-skeletion';

type Props = {
    title: string;
};

const NewRelease: React.FC<Props> = (props: Props) => {

    const { newRelease, isLoading } = useNewReleaseList('2023');

    if (isLoading) {
        // Loading skeleton or placeholder
        return (
            <section
                className="flex flex-col items-start justify-center mt-24 
            lg:mt-[150px] max-w-[1600px] mx-auto px-2 gap-4"
            >
                <h2 className="text-2xl lg:text-4xl font-semibold">
                    {props.title}
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
                <h2 className='text-2xl lg:text-4xl font-semibold'>{props.title}</h2>
            </div>

            {/* Movies List */}
            <div className='flex gap-5 lg:gap-10 flex-wrap justify-start items-center w-full mt-5'>
                {newRelease.newRelease.map((item: IMedia) => (
                    <MediaCard key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
};

export default NewRelease;
