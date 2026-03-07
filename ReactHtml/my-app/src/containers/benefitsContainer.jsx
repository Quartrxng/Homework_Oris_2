import React from 'react';
import BenefitsBanner from '../components/benefitBanner';
import { benefitsData } from '../data/bannersData';

const BenefitsContainer = () => {
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