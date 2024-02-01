/*A react component that displays a list of recently released movies. It utilizes
a useNewMoviesList custom hook to fetch the list of new movies and manages the
loading state. */

"use client"
import { IMedia } from '@/interfaces';
import React from 'react';
import MediaCard from './media-card';
import useNewMoviesList from '@/hooks/useNewMoviesList';
import LoadingSkeleton from './loading-skeletion';

type Props = {
    title: string;
};

const RecentMovies: React.FC<Props> = ({ title }: Props) => {

    const { newMovies, isLoading } = useNewMoviesList('Movie'); /*Fetch 
    new movies released to custom hook useNewMoviesList */

    if (isLoading) {
        {/*While the data is being fetched display a loading skeleton */ }
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

            {/*Title of Section */}
            <div className='flex items-center justify-center gap-5'>
                <h2 className='text-2xl lg:text-4xl font-semibold'>{title}</h2>
            </div>

            {/* Movies List */}
            <div className='flex gap-5 lg:gap-10 flex-wrap justify-start items-center w-full mt-5'>
                {newMovies.newMovies.map((item: IMedia) => (
                    <MediaCard key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
};

export default RecentMovies;
