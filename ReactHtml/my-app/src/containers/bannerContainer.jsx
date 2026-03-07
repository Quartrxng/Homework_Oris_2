import React, { useState, useEffect, useRef } from 'react';
import { slidesData } from '../data/slidesData';
import BannerSlide from '../components/bannerSlide';
import SliderIndicatorContainer from './sliderIndicatorContainer';

const INTERVAL = 25000;

const BannerContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

const [direction, setDirection] = useState(1);

const nextSlide = () => {
  setDirection(1);
  setCurrentIndex(prev =>
    prev === slidesData.length - 1 ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setDirection(-1);
  setCurrentIndex(prev =>
    prev === 0 ? slidesData.length - 1 : prev - 1
  );
};

const goToSlide = (index) => {
  if (index === currentIndex) return;

  const isWrapForward =
    currentIndex === slidesData.length - 1 && index === 0;

  const dir =
    index > currentIndex || isWrapForward ? 1 : -1;

  setDirection(dir);
  setCurrentIndex(index);
};

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, INTERVAL);
  };

useEffect(() => {
  intervalRef.current = setInterval(() => {
    setDirection(1);
    setCurrentIndex(prev =>
      prev === slidesData.length - 1 ? 0 : prev + 1
    );
  }, INTERVAL);

  return () => clearInterval(intervalRef.current);
}, []);

  return (
    <div className="mt-3 slider--container">
      <div
        className="slide--container"
        style={{
          height: '275px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {slidesData.map((slide, index) => (
          <BannerSlide
            key={slide.id}
            data={slide}
            index={index}
            currentIndex={currentIndex}
            direction={direction}
          />
        ))}
      </div>

      <div className="slider--nav__button--right">
        <button onClick={nextSlide} className="button--ripple slider--nav__buttons">
          <svg className="svgicon svgicon--container" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateNextIcon">
              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
          <span className="touchripple"></span>
        </button>
      </div>

      <div className="slider--nav__button--left">
        <button onClick={prevSlide} className="button--ripple slider--nav__buttons">
            <svg className="svgicon svgicon--container" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateBeforeIcon">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
            <span className="touchripple"></span>
        </button>
      </div>

      <SliderIndicatorContainer
        count={slidesData.length}
        activeIndex={currentIndex}
        onChange={goToSlide}
      />
    </div>
  );
};

export default BannerContainer;