import React, { useEffect, useRef, useState } from 'react';

const BannerSlide = ({ data, index, currentIndex, direction }) => {
  const { bgImage, flagImage, category, title, price, link, isRedPrice } = data;

  const slideRef = useRef(null);
  const isFirstRender = useRef(true);
  const prevIndexRef = useRef(currentIndex);

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    if (isFirstRender.current) {
      el.style.transition = 'none';
      el.style.transform =
        index === currentIndex ? 'translateX(0)' : 'translateX(100%)';
      el.style.opacity = index === currentIndex ? '1' : '0';
      el.style.zIndex = index === currentIndex ? '1' : '0';

      isFirstRender.current = false;
      return;
    }

    const prevIndex = prevIndexRef.current;

    if (index === currentIndex) {
      el.style.transition = 'none';
      el.style.transform = `translateX(${100 * direction}%)`;
      el.style.opacity = '1';
      el.style.zIndex = '1';

      requestAnimationFrame(() => {
        el.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
        el.style.transform = 'translateX(0)';
      });
    }

    if (index === prevIndex && index !== currentIndex) {
      el.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
      el.style.transform = `translateX(${-100 * direction}%)`;
      el.style.opacity = '0';
      el.style.zIndex = '0';
    }

    prevIndexRef.current = currentIndex;
  }, [currentIndex, direction, index]);

  return (
    <div className="slide">
      <div
        draggable="false"
        style={{
          height: '100%',
          userSelect: 'none',
          touchAction: 'pan-y',
          transformOrigin: '50% 50% 0px'
        }}
      >
        <div
          ref={slideRef}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            display: 'block'
          }}
        >
          <div className="banner--country">
            <img 
              fetchPriority="high" 
              width="1200" 
              height="275" 
              src={bgImage} 
              alt={title} 
              style={{ color: 'transparent' }} 
            />
            
            {flagImage && (
              <img 
                loading="lazy" 
                className="banner--country__flag" 
                src={flagImage} 
                alt="" 
              />
            )}

            <div className="banner--country__title">
              <p>{category}</p>
              <p>{title}</p>
            </div>

            <div role="group" className="banner--country__search-price slide--detail__container">
              <button 
                className={`button--ripple slide--button__price banner--country__button-price ${isRedPrice ? 'price--button__red' : 'price--button'}`} 
                type="button"
              >
                {price}
                <span className="touchripple"></span>
              </button>

              <button className="button--ripple slide--button banner--country__button-search" type="button" data-ripple-color="gray">
                <span className="svgimage">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                    <path fill="#333" d="M10.923 10.706 7.89 7.673a4.2 4.2 0 0 0 .94-2.653A4.227 4.227 0 0 0 4.61.798 4.227 4.227 0 0 0 .387 5.02a4.227 4.227 0 0 0 4.222 4.222 4.2 4.2 0 0 0 2.652-.94l3.033 3.032a.443.443 0 0 0 .629 0 .444.444 0 0 0 0-.628M4.609 8.354A3.337 3.337 0 0 1 1.276 5.02a3.337 3.337 0 0 1 3.333-3.333A3.337 3.337 0 0 1 7.942 5.02a3.337 3.337 0 0 1-3.333 3.334"></path>
                  </svg>
                </span>
                <a className="button--zoom" href={link}>Поиск</a>
                <span className="touchripple"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;