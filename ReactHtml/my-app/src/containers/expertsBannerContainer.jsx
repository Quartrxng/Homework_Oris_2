import React from 'react';
import { contactsData } from '../data/expertSocialsData';
import ExpertsBanner from '../components/expertsBanner';

const ExpertsBannerContainer = () => {
  const socials = contactsData.messengers || contactsData.socials;

  const phoneNumber = {
    display: contactsData.phone.display,
    href: contactsData.phone.href
  };

  const handleRequest = () => {
  };

  return (
    <ExpertsBanner 
      socials={socials}
      phone={phoneNumber}
      onRequestClick={handleRequest}
    />
  );
};

export default ExpertsBannerContainer;