import React from 'react';

const BenefitsBanner = ({ title, description, images, bannerType }) => {
  const bannerClass = `FeaturesBanner ${
    bannerType === 'big'
      ? 'benefit--big__banner'
      : 'benefit--default__banner'
  }`;

  return (
    <div className={bannerClass}>
      <div className="FeaturesBanner_images">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width={image.width}
              height={image.height}
              decoding="async"
              style={{ color: 'transparent' }}
            />
          </div>
        ))}
      </div>
      <h4 className="slogan FeaturesBanner_item-title contained--item__title">
        {title}
      </h4>
      <p className="slogan FeaturesBanner_item-description contained--item__text">
        {description}
      </p>
    </div>
  );
};

export default BenefitsBanner;