import React from 'react';
import Step from './step';

const RegistrationType = ({ title, icon, steps }) => {
  return (
    <div className="registration--type">
      <div
        className="button--ripple registration--type--title"
        tabIndex="0"
        role="button"
        aria-expanded="true"
      >
        <div className="registration--type--content__container type--registration--online">
          <div
            dangerouslySetInnerHTML={{ __html: icon.path }}
            style={{
              width: icon.width,
              height: icon.height,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <h3 className="slogan block--subtitle">{title}</h3>
        </div>
      </div>
      <div className="registration--type--maintext__container" style={{ minHeight: 0 }}>
        {steps.map((step, index) => (
          <Step
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default RegistrationType;