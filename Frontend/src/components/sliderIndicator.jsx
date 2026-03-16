import React from 'react';

const SliderIndicator = ({ active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button--ripple slider--indicator ${
        active ? "slider--indicator__active" : ""
      }`}
      type="button"
      aria-label="carousel indicator"
      data-ripple-color="gray"
    >
      <svg
        className="svgicon mui-d4n4tp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8"></circle>
      </svg>
      <span className="touchripple"></span>
    </button>
  );
};

export default SliderIndicator;