"use client"

import React, { useState } from 'react';

type Props = {
  title: string
};

const MoviesList: React.FC<Props> = (props: Props) => {

  const [activeCategory, setActiveCategory] = useState('movies');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section
      className='flex flex-col items-start justify-center mt-[250px] 
      max-w-[1600px] mx-auto'
    >
      <div className='flex items-center justify-center gap-5'>
        {/*Heading */}
        <h2 className='text-4xl font-semibold'>
          {props.title}
        </h2>
        {/*Buttons */}
        <div className='flex items-center justify-center gap-2'>
          <button
            className={`px-4 py-2 rounded-xl font-bold ${activeCategory === 'movies'
              ? 'bg-red-500 text-white'
              : 'bg-white text-black border border-gray-400'
              }`}
            onClick={() => handleCategoryChange('movies')}
          >
            Movies
          </button>
          <button
            className={`px-4 py-2 rounded-xl font-bold ${activeCategory === 'tvShows'
              ? 'bg-red-500 text-white'
              : 'bg-white text-black border border-gray-400'
              }`}
            onClick={() => handleCategoryChange('tvShows')}
          >
            TV Shows
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoviesList;
