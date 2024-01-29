// CategoryButtons.tsx
import React from 'react';

type CategoryButtonsProps = {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
};

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
    activeCategory,
    onCategoryChange,
}) => {
    return (
        <div className='flex items-center justify-center gap-2'>
            {/* Movies Button */}
            <button
                aria-label='Movie Switch Button'
                className={` px-2  lg:px-4 py-2 rounded-xl lg:font-bold text-xs
                lg:text-base ${activeCategory === 'Movie'
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-black border border-gray-400'
                    }`}
                onClick={() => onCategoryChange('Movie')}
            >
                Movies
            </button>
            {/* Show Button */}
            <button
                aria-label='Show Switch Button'
                className={`px-2 lg:px-4 py-2 rounded-xl lg:font-bold text-xs
                lg:text-base ${activeCategory === 'Show'
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-black border border-gray-400'
                    }`}
                onClick={() => onCategoryChange('Show')}
            >
                TV Shows
            </button>
        </div>
    );
};

export default CategoryButtons;
