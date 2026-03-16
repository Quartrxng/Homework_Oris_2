import React from 'react';

const PhoneInfo = ({ phone, workingHours }) => {
  return (
    <div className="phoneinformation">
      <a 
        className="button--ripple phonebutton" 
        tabIndex="0" 
        href={`tel:${phone.replace(/\D/g, '')}`}
      >
        <div className="PhoneButton_phone-info">
          <p>{phone}</p>
          <p>{workingHours}</p>
        </div>
        <span className="touchripple"></span>
      </a>
    </div>
  );
};

export default PhoneInfo;