import React from 'react';

const OfficesLink = ({ text }) => {
  return (
    <a className="offices" href="#offices">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 13">
        <path fill="#fff" d="M5.229 0C2.54 0 .354 2.202.354 4.91c0 3.848 4.416 7.82 4.604 7.987a.406.406 0 0 0 .54 0c.189-.167 4.606-4.14 4.606-7.987C10.104 2.202 7.916 0 5.229 0m0 7.583A2.71 2.71 0 0 1 2.52 4.875 2.71 2.71 0 0 1 5.23 2.167a2.71 2.71 0 0 1 2.708 2.708 2.71 2.71 0 0 1-2.708 2.708"></path>
      </svg>
      <span>{text}</span>
    </a>
  );
};

export default OfficesLink;