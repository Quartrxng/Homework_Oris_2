import React, { useEffect, useState } from "react";
import ExpertsBanner from "../components/expertsBanner";

const ExpertsBannerContainer = () => {
  const [contactsData, setContactsData] = useState(null);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const response = await fetch("/api/expertSocialsData.json");

        if (!response.ok) {
          throw new Error("Ошибка загрузки expertSocialsData");
        }

        const data = await response.json();
        setContactsData(data);
      } catch (error) {
        console.error("Ошибка загрузки контактов:", error);
      }
    };

    loadContacts();
  }, []);

  if (!contactsData) {
    return null;
  }

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