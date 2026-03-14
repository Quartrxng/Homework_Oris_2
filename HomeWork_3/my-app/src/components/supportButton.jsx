import React from 'react';

const SupportButton = ({ text }) => {
  return (
    <button 
      className="button--ripple headerbottom--support support" 
      tabIndex="0" 
      type="button"
    >
      <span className="svgimage">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none" className="mui-14s82c2">
          <path fill="#ffffff" fillRule="evenodd" d="M8.998 13.07a.93.93 0 0 0-.93-.929H6.93a.93.93 0 0 0 0 1.86H8.07a.93.93 0 0 0 .93-.93m-6.971-2.396c.155.012.343.018.531.007a2.64 2.64 0 0 0 2.59 2.129h.354a1.5 1.5 0 0 0 0 .522h-.354a3.16 3.16 0 0 1-3.121-2.658m-.266-.556A2.025 2.025 0 0 1 .072 8.121V6.886a2.025 2.025 0 0 1 2.026-2.025h.135a5.284 5.284 0 0 1 10.534 0h.135a2.025 2.025 0 0 1 2.025 2.025v1.235a2.026 2.026 0 0 1-2.025 2.025h-.598a.45.45 0 0 1-.449-.449V5.284a4.355 4.355 0 0 0-8.71 0v4.413c0 .175-.101.327-.247.401-.402.14-1.026.039-1.137.02" clipRule="evenodd"></path>
        </svg>
      </span>
      {text}
      <span className="touchripple"></span>
    </button>
  );
};

export default SupportButton;