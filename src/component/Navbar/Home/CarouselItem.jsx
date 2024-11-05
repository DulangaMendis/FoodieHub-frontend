// CarouselItem.jsx
import React from 'react';

export const CarouselItem = ({ image, title }) => {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <img
                className="w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full object-cover object-center"
                src={image || "https://via.placeholder.com/150"} // Use placeholder if image is missing
                alt={title}
            />
            <span className="py-5 font-semibold text-xl text-gray-400">{title}</span>
        </div>
    );
};
