import React, { useEffect, useState } from 'react';
import RegistrationType from '../components/registrationType';

const StepperContainer = () => {
  const [registrationData, setRegistrationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/registrationData.json');

        if (!response.ok) {
          throw new Error('Ошибка загрузки registrationData');
        }

        const data = await response.json();
        setRegistrationData(data.registrationData);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

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