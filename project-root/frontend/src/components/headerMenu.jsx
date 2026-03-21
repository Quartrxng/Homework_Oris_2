import React from 'react';

const HeaderActions = ({ data, onPhoneClick, onOfficesClick, onSupportClick }) => {
  return (
    <>
      <a className="offices" onClick={onOfficesClick} href="#offices">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 13">
          <path fill="#fff" d="M5.229 0C2.54 0 .354 2.202.354 4.91c0 3.848 4.416 7.82 4.604 7.987a.406.406 0 0 0 .54 0c.189-.167 4.606-4.14 4.606-7.987C10.104 2.202 7.916 0 5.229 0m0 7.583A2.71 2.71 0 0 1 2.52 4.875 2.71 2.71 0 0 1 5.23 2.167a2.71 2.71 0 0 1 2.708 2.708 2.71 2.71 0 0 1-2.708 2.708"></path>
        </svg>
        <span>{data.officesText}</span>
      </a>
      
      <div className="phoneinformation">
        <a 
          className="button--ripple phonebutton" 
          tabIndex="0" 
          href={`tel:${data.phone.replace(/\D/g, '')}`}
          onClick={onPhoneClick}
        >
          <div className="PhoneButton_phone-info">
            <p>{data.phone}</p>
            <p>{data.workingHours}</p>
          </div>
          <span className="touchripple"></span>
        </a>
      </div>
      
      <button 
        className="button--ripple headerbottom--support support" 
        tabIndex="0" 
        type="button"
        onClick={onSupportClick}
      >
        <span className="svgimage">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none" className="mui-14s82c2">
            <path fill="#ffffff" fillRule="evenodd" d="M8.998 13.07a.93.93 0 0 0-.93-.929H6.93a.93.93 0 0 0 0 1.86H8.07a.93.93 0 0 0 .93-.93m-6.971-2.396c.155.012.343.018.531.007a2.64 2.64 0 0 0 2.59 2.129h.354a1.5 1.5 0 0 0 0 .522h-.354a3.16 3.16 0 0 1-3.121-2.658m-.266-.556A2.025 2.025 0 0 1 .072 8.121V6.886a2.025 2.025 0 0 1 2.026-2.025h.135a5.284 5.284 0 0 1 10.534 0h.135a2.025 2.025 0 0 1 2.025 2.025v1.235a2.026 2.026 0 0 1-2.025 2.025h-.598a.45.45 0 0 1-.449-.449V5.284a4.355 4.355 0 0 0-8.71 0v4.413c0 .175-.101.327-.247.401-.402.14-1.026.039-1.137.02" clipRule="evenodd"></path>
          </svg>
        </span>
        {data.supportText}
        <span className="touchripple"></span>
      </button>
    </>
  );
};

export default HeaderActions;