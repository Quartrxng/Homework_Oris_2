import React from 'react';

const PartnerCard = ({ partner }) => {
  const isImageStr = typeof partner.img === 'string';

  return (
    <a className="partners__link" href={partner.href}>
        {isImageStr ? (
          <img alt={partner.name} loading="lazy" width="250" height="62" decoding="async" data-nimg="1" src={partner.img} style={{ color: 'transparent' }} />
        ) : (
          partner.img
        )}
        <span>Подробнее</span>
    </a>
  );
};

export default PartnerCard;