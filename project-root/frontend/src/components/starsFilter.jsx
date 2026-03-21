import React, { useState, useEffect } from 'react';

const StarFilter = ({ 
  initialRating = 0, 
  totalStars = 5,
  disabled = false,
  onRatingChange 
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleMouseEnter = (index) => {
    if (disabled) return;
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setHoverRating(0);
  };

  const handleClick = (index) => {
    if (disabled) return;
    const newRating = index + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const getStarClass = (index) => {
    const activeRating = hoverRating || rating;
    return `star-svg ${index < activeRating ? 'filled' : ''}`;
  };

  return (
    <div className={`filter-item filter-stars class-hotel ${disabled ? 'disabled' : ''}`}>
      <span className="filter-label">Класс отеля</span>
      <div className="filter-content">
        {[...Array(totalStars)].map((_, index) => (
          <svg
            key={index}
            className={getStarClass(index)}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            style={{ cursor: disabled ? 'default' : 'pointer' }}
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg>
        ))}
      </div>
      <span className="filter--select__content" style={{ display: 'none' }}>
        {rating}
      </span>
    </div>
  );
};

export default StarFilter;