"use client"
import { IMedia } from '@/interfaces';
import React, { useState } from 'react';
import MediaCard from './media-card';
import useMediaList from '@/hooks/useMediaList';

type Props = {
  title: string;
};

const MediaList: React.FC<Props> = (props: Props) => {

  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const { media } = useMediaList(activeCategory);

  if (!media) {
    return (
      <section className='flex flex-col items-start justify-center mt-[250px] max-w-[1600px] mx-auto px-2'>
        <h2 className='text-4xl font-semibold'>{props.title}</h2>
      </section>
    )
  }

  return (
    <section
      className='flex flex-col items-start justify-center mt-[250px] 
    max-w-[1600px] mx-auto px-2'
    >
      <div className='flex items-center justify-center gap-5'>
        {/*Title of Section */}
        <h2 className='text-4xl font-semibold'>
          {props.title}
        </h2>

        {/*Buttons to Switch Category */}
        <div className='flex items-center justify-center gap-2'>
          {/*Movies Button */}
          <button
            className={`px-4 py-2 rounded-xl font-bold 
            ${activeCategory === 'Movie'
                ? 'bg-red-500 text-white'
                : 'bg-white text-black border border-gray-400'
              }`}
            onClick={() => handleCategoryChange('Movie')}
          >
            Movies
          </button>
          {/*Show Button */}
          <button
            className={`px-4 py-2 rounded-xl font-bold 
            ${activeCategory === 'Show'
                ? 'bg-red-500 text-white'
                : 'bg-white text-black border border-gray-400'
              }`}
            onClick={() => handleCategoryChange('Show')}
          >
            TV Shows
          </button>
        </div>
      </div>

      {/* Movies List */}
      <div className='grid grid-cols-4 gap-10'>
        {
          media.media.map((item: IMedia) => (
            <MediaCard key={item.id} data={item} />
          ))
        }
      </div>
    </section>
  );
};

export default MediaList