import React, { useState, useEffect, useRef } from 'react';

const HotelComponent = ({ hotel }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const sliderRef = useRef(null);

  const slideWidth = 592; 
  const gap = 10; 
  const step = slideWidth + gap;

  if (!hotel) return <div className="hotels__site">Отель не найден</div>;

  useEffect(() => {
    if (sliderRef.current && hotel.images) {
      const containerWidth = sliderRef.current.parentElement.offsetWidth; 
      const totalContentWidth = hotel.images.length * step - gap;
      const calculatedMax = totalContentWidth - containerWidth;
      setMaxOffset(calculatedMax > 0 ? calculatedMax : 0);
    }
  }, [hotel.images, step]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < hotel.images.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const currentTranslate = Math.min(currentSlide * step, maxOffset);

  return (
    <div className="hotels__site">
      <div className="hotel-wrapper">
        <div className="hotel-header">
          <div className="stars">
            {[...Array(hotel.stars)].map((_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" className="star-icon" fill="#ff6856">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
              </svg>
            ))}
          </div>
          <h1 className="hotel-title">{hotel.name}</h1>
          <div className="hotel-location">{hotel.location}</div>
          
          <div className="hotel-nav-buttons">
            <button className="hotel-nav-button active">Об отеле</button>
            <button className="hotel-nav-button">Фото</button>
            <button className="hotel-nav-button">На карте</button>
            <button className="hotel-nav-button">Отзывы</button>
          </div>
        </div>

        <div className="description">
          <div className="rating__container">
            <p className="rating verygood">{hotel.rating}</p>
          </div>
          <p className="description-text">Отель только для взрослых</p>
        </div>

        <div className="slider-container">
          <div 
            className="slider-images" 
            ref={sliderRef}
            style={{ 
              transform: `translateX(-${currentTranslate}px)`,
              display: 'flex',
              transition: 'transform 0.5s'
            }}
          >
            {hotel.images.map((img, index) => (
              <div className="mask-image" key={index}>
                <img className="slider-image" src={img} alt={hotel.name} />
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <div className="NavLeft" onClick={prevSlide}>
              <div className="LeftImg"></div>
            </div>
            <div className="NavRight" onClick={nextSlide}>
              <div className="RightImg"></div>
            </div>
          </div>
        </div>

        <div className="section">
          {hotel.sections && hotel.sections.map((section, idx) => (
            <div key={idx}>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <h3>Примечание</h3>
          <div>Отель предназначен только для гостей старше 18 лет.</div>
        </div>
      </div>
    </div>
  );
};

export default HotelComponent;