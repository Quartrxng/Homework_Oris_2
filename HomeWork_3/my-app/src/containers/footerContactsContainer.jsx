import React from 'react';

const OfficeLink = ({ href, label, iconPath }) => (
  <a className="OfficeLinkWithIcon Footer_offices-phone-office offices" href={href}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 13" width="11" height="13">
      <path fill="#fff" d={iconPath} />
    </svg>
    <span>{label}</span>
  </a>
);

const PhoneBlock = ({ link, value, schedule }) => (
  <div className="phoneinformation">
    <a className="button--ripple phonebutton" tabIndex="0" href={link}>
      <div className="PhoneButton_phone-info">
        <p>{value}</p>
        <p>{schedule}</p>
      </div>
      <span className="touchripple"></span>
    </a>
  </div>
);

const FooterContactsContainer = ({ office, phone }) => {
  return (
    <div className="Footer_contacts">
      <div className="Footer_offices-phone">
        <OfficeLink 
          href={office.href} 
          label={office.label} 
          iconPath={office.iconPath} 
        />
        <PhoneBlock 
          link={phone.link} 
          value={phone.value} 
          schedule={phone.schedule} 
        />
      </div>
    </div>
  );
};

export default FooterContactsContainer;