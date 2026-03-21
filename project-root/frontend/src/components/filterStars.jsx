import React from 'react';

const FilterStars = ({ title, activeStars, maxStars = 5, size = 'S' }) => {
  return (
    <div className="StarsSelect StyleTheme2 ActiveColorOrange550 ColorGray675">
      <div className="StarsSelectTitle">{title}</div>
      {[...Array(maxStars)].map((_, i) => (
        <div 
          key={i} 
          className={`StarsSelectItem Size-${size} ${i < activeStars ? 'Active' : ''}`}
        />
      ))}
    </div>
  );
};

export default FilterStars;