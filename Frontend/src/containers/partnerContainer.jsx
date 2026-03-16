import React, { useEffect, useState } from "react";
import PartnerCard from "../components/partnerCard";

const PartnersContainer = () => {
  const [partnersData, setPartnersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const response = await fetch("/api/partnersData.json");

        if (!response.ok) {
          throw new Error("Ошибка загрузки partnersData.json");
        }

        const data = await response.json();
        setPartnersData(data.partnersData || []);
      } catch (error) {
        console.error("Ошибка загрузки партнеров:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPartners();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="partners__container">
      {partnersData.map((item) => (
        <PartnerCard
          key={item.id}
          partner={item}
        />
      ))}
    </div>
  );
};

export default PartnersContainer;