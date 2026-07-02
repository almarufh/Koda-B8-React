import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating(props) {
  const totalStars = 5;
  const goldStarsCount = Math.floor(props.ratingValue || 5);

  return (
    <div className="flex gap-1 items-center">
        <div className="flex items-center">
          {[...Array(totalStars)].map((_, index) => (
            <FaStar
              key={index}
              color={index < goldStarsCount ? "gold" : "#E5E7EB"}
            />
          ))}
        </div>
        <span 
            className="text-[14px] text-[#6B7280]"
        > 
            {props.ratingText}
        </span>
    </div>
  );
}

export default StarRating;