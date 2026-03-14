import React from 'react';

const FooterLogo = ({ viewBox, paths }) => {
  return (
    <a className="Footer_logo">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlSpace="preserve" 
        viewBox={viewBox}
        style={{
          shapeRendering: 'geometricprecision',
          textRendering: 'geometricprecision',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }}
      >
        {paths.map((path, index) => (
          <path 
            key={index}
            d={path.d}
            style={path.style}
            className={path.className}
          />
        ))}
      </svg>
    </a>
  );
};

export default FooterLogo;