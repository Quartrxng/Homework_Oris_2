import React, { useCallback } from 'react';
import StarFilter from '../components/starsFilter';

const StarFilterContainer = ({ value = 1, onChange }) => {
  const handleRatingChange = useCallback((newRating) => {
    onChange?.(newRating);
  }, [onChange]);

  return (
    <StarFilter
      initialRating={value}
      totalStars={5}
      disabled={false}
      onRatingChange={handleRatingChange}
    />
  );
};

export default StarFilterContainer;
