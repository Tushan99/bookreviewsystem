import React from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const stars = [...Array(5)].map((_, index) => {
    const starValue = index + 1;
    return (
      <span
        key={index}
        className={`cursor-pointer text-2xl ${
          starValue <= rating ? 'text-yellow-500' : 'text-gray-400'
        }`}
        onClick={() => onRatingChange(starValue)}
      >
        &#9733;
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;
