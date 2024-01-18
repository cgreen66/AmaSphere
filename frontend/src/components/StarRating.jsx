import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  // Assuming the rating is out of 5
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="star-rating">
      {'★'.repeat(filledStars)}
      {'☆'.repeat(emptyStars)}
    </div>
  );
};

export default StarRating;
