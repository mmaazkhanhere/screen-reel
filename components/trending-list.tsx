"use client"
import { IMedia } from '@/interfaces';
import React, { useState } from 'react';
import MediaCard from './media-card';
import useMediaList from '@/hooks/useMediaList';
import CategoryButtons from './category-button';

type Props = {
  title: string;
};

const TrendingList: React.FC<Props> = (props: Props) => {

  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const { media } = useMediaList(activeCategory);

  if (!media) {
    return (
      <section
        className='flex flex-col items-start justify-center mt-24 lg:mt-[250px] 
      max-w-[1600px] mx-auto px-2'
      >
        <h2 className='text-2xl lg:text-4xl font-semibold'>
          {props.title}
        </h2>
      </section>
    )
  }

  return (
    <section
      className='flex flex-col items-start justify-center mt-24 lg:mt-[250px] 
    max-w-[1600px] mx-auto px-2'
    >
      <div className='flex items-center justify-center gap-5'>

        {/*Title of Section */}
        <h2 className='text-2xl lg:text-4xl font-semibold'>
          {props.title}
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