import React from 'react';
import SliderIndicator from '../components/sliderIndicator';

const SliderIndicatorContainer = ({ count, activeIndex, onChange }) => {
  return (
    <div className="slider--indicator--container">
      {[...Array(count)].map((_, index) => (
        <SliderIndicator
          key={index}
          active={index === activeIndex}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
};

export default SliderIndicatorContainer;