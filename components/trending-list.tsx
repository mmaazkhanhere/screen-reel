/*A react component designed to display a list of trending media content
based on different categories. It utilizes useMediaList custom hook to fetch
media based on the active category */

"use client"
import { IMedia } from '@/interfaces';
import React, { useState } from 'react';
import MediaCard from './media-card';
import useMediaList from '@/hooks/useMediaList';
import CategoryButtons from './category-button';
import LoadingSkeleton from './loading-skeletion';

type Props = {
  title: string;
};

const TrendingList: React.FC<Props> = ({ title }: Props) => {

  const [activeCategory, setActiveCategory] = useState(''); /*state variable to
  control the active category */

  const handleCategoryChange = (category: string) => {
    /*function the sets the value of activeCategory state variable */
    setActiveCategory(category);
  };

  const { media } = useMediaList(activeCategory); /*fetch the media
  using useMediaList hook */

  if (!media) {
    /*While data being fetched, display a loading skeleton */
    return (
      <section
        className="flex flex-col items-start justify-center mt-20 
      lg:mt-[120px] max-w-[1600px] mx-auto px-2 gap-4"
      >
        <h2 className="text-2xl lg:text-4xl font-semibold">{title}</h2>
        <LoadingSkeleton />
      </section>
    );
  }

  return (
    <section
      className='flex flex-col items-start justify-center mt-20 lg:mt-[120px] 
      max-w-[1600px] mx-auto px-2'
    >
      <div className='flex items-center justify-center gap-5'>

        {/*Title of Section */}
        <h2 className='text-2xl lg:text-4xl font-semibold'>
          {title}
        </h2>

        {/*Buttons to Switch Category */}
        <CategoryButtons
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Movies List */}
      <div
        className='flex gap-5 lg:gap-10 flex-wrap justify-start items-center w-full 
        mt-5'
      >
        {
          media.media.map((item: IMedia) => (
            <MediaCard key={item.id} data={item} />
          ))
        }
      </div>
    </section>
  );
};

export default TrendingList