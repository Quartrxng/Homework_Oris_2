import React from 'react';

const PartnerCard = ({ partner }) => {
  const isSvgString =
    typeof partner.img === 'string' &&
    partner.img.trim().startsWith('<svg');

  const isImagePath =
    typeof partner.img === 'string' &&
    !isSvgString;

  return (
    <a className="partners__link" href={partner.href}>
      {isSvgString ? (
        <div
          dangerouslySetInnerHTML={{ __html: partner.img }}
        />
      ) : isImagePath ? (
        <img
          alt={partner.name}
          loading="lazy"
          width="250"
          height="62"
          decoding="async"
          data-nimg="1"
          src={partner.img}
          style={{ color: 'transparent' }}
        />
      ) : null}

      <span>Подробнее</span>
    </a>
  );
};

export default PartnerCard;