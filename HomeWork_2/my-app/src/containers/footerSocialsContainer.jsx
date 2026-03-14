import React from 'react';
import SocialLink from '../components/footerSocials';

const FooterSocialNetworks = ({ title, links }) => {
  return (
    <div className="Footer_socialNetworks">
      <p className="slogan Footer_socialNetworks-title contained--item__text">
        {title}
      </p>
      <div className="social--links__container">
        {links.map((social) => (
          <SocialLink 
            key={social.name} 
            {...social} 
          />
        ))}
      </div>
    </div>
  );
};

export default FooterSocialNetworks;