import React, { useEffect, useState } from "react";
import BenefitsBanner from "../components/benefitBanner";

const BenefitsContainer = () => {
  const [benefitsData, setBenefitsData] = useState([]);

  useEffect(() => {
    const loadBanners = async () => {
      try {
        const response = await fetch("/api/bannersData.json");

        if (!response.ok) {
          throw new Error("Ошибка загрузки bannersData");
        }

        const data = await response.json();
        setBenefitsData(data);
      } catch (error) {
        console.error("Ошибка загрузки баннеров:", error);
      }
    };

    loadBanners();
  }, []);

  return (
    <div className="benefits__container">
      {benefitsData.map((item) => (
        <BenefitsBanner
          key={item.id}
          title={item.title}
          description={item.description}
          images={item.images}
          bannerType={item.bannerType}
        />
      ))}
    </div>
  );
};

export default BenefitsContainer;