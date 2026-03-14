import React from "react";

const SocialLink = ({ href, paths, name, isYouTube }) => (
  <a 
    className="button--ripple icon--button social--link" 
    target="_blank" 
    rel="noopener noreferrer" 
    href={href}
    aria-label={name}
    data-ripple-color="gray"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none">
      {paths.map((d, i) => (
        <path 
          key={i} 
          fill="#fff" 
          d={d} 
          fillRule={isYouTube ? "evenodd" : "nonzero"} 
          clipRule={isYouTube ? "evenodd" : "nonzero"}
        />
      ))}
    </svg>
    <span className="touchripple"></span>
  </a>
);

export default SocialLink;