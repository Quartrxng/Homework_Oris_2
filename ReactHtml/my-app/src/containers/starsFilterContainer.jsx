import React, { useState, useCallback } from 'react';
import StarFilter from '../components/starsFilter';

const StarFilterContainer = () => {
  const [hotelRating, setHotelRating] = useState(1);

  const handleRatingChange = useCallback((newRating) => {
    setHotelRating(newRating);
    console.log('Selected rating:', newRating);
  }, []);

  return (
    <StarFilter
      initialRating={hotelRating}
      totalStars={5}
      disabled={false}
      onRatingChange={handleRatingChange}
    />
  );
};

export default StarFilterContainer;