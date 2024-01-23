"use client"
import { IMovie } from '@/interfaces';
import React, { useState } from 'react';
import MediaCard from './media-card';
import useMoviesList from '@/hooks/useMoviesList';
import useShows from '@/hooks/useShowsList';
import useMediaList from '@/hooks/useMediaList';

type Props = {
  title: string;
};

const MediaList: React.FC<Props> = (props: Props) => {

  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // const { movies } = useMoviesList();
  // const { shows } = useShows();
  const { media } = useMediaList(activeCategory);

  if (!media) {
    return (
      <section className='flex flex-col items-start justify-center mt-[250px] max-w-[1600px] mx-auto px-2'>
        <h2 className='text-4xl font-semibold'>{props.title}</h2>
      </section>
    )
  }

  console.log(media.media);
  console.log(activeCategory)

  return (
    <section className='flex flex-col items-start justify-center mt-[250px] max-w-[1600px] mx-auto px-2'>
      <div className='flex items-center justify-center gap-5'>
        <h2 className='text-4xl font-semibold'>{props.title}</h2>
        <div className='flex items-center justify-center gap-2'>
          <button
            className={`px-4 py-2 rounded-xl font-bold ${activeCategory === 'movie'
              ? 'bg-red-500 text-white'
              : 'bg-white text-black border border-gray-400'
              }`}
            onClick={() => handleCategoryChange('movie')}
          >
            Movies
          </button>
          <button
            className={`px-4 py-2 rounded-xl font-bold ${activeCategory === 'show'
              ? 'bg-red-500 text-white'
              : 'bg-white text-black border border-gray-400'
              }`}
            onClick={() => handleCategoryChange('show')}
          >
            TV Shows
          </button>
        </div>
      </div>
      {/* Movies List */}
      <div className='grid grid-cols-4 gap-2'>
        {
          media.media.map((item: IMovie) => (
            <MediaCard key={item.id} data={item} />
          ))
        }
      </div>
    </section>
  );
};

export default MediaList