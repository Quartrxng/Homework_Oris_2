import React from 'react';
import RegistrationType from '../components/registrationType';
import { registrationData } from '../data/registrationsData';

const StepperContainer = () => {
  return (
    <div className="Stepper_container">
      {registrationData.map((type) => (
        <RegistrationType
          key={type.id}
          title={type.title}
          icon={type.icon}
          steps={type.steps}
        />
      ))}
    </div>
  );
};

export default StepperContainer;