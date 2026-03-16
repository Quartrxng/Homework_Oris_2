import React from 'react';

const Step = ({ number, title, description, isLast }) => {
  return (
    <div className="registration--type--step">
      <div className="Step_container">
        <div className="Step_step">
          <span>{number}</span>
        </div>
        {!isLast && (
          <div className="Step_step-arrow">
            <svg
              className="svgicon svgicon--container"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropDownIcon"
            >
              <path d="m7 10 5 5 5-5z"></path>
            </svg>
          </div>
        )}
      </div>
      <div className="Step_text">
        <h4 className="slogan Step_title contained--item__title">{title}</h4>
        <p className="slogan Step_description contained--item__text">{description}</p>
      </div>
    </div>
  );
};

export default Step;