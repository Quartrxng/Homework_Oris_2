import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(hotel.price);

  return (
    <div className="card-wrapper">
      <div className={`card ${hotel.name.replace(/\s/g, '-')}`}>
        <div className="image-container">
          <img src={hotel.images[1]} alt={hotel.name} className="hotel-image" />
        </div>
        <div className="content">
          <div className="header">
            <div>
              <div className="star-badge">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" className="star-icon">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                ))}
              </div>

              <Link className="hotel-name" to={`/hotel/${hotel.id}`}>
                {hotel.name}
              </Link>

              <p className="location">{hotel.location}</p>
              <div className="description">
                <p className={`rating ${hotel.ratingStatus}`}>{hotel.rating}</p>
                <p className="description-text">{hotel.descriptionText}</p>
              </div>
            </div>
          </div>
          
          <div className="footer">
            <div className="buttons">
              <button className="btn" data-target="aboutcard">ОБ ОТЕЛЕ</button>
              <button className="btn" data-target="hotelrooms">НОМЕРА</button>
              <button className="btn">ОТЗЫВЫ</button>
              <button className="btn">КАРТА</button>
              <button className="heart-btn btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            
            <div className="price-container">
              <div className="price">{formattedPrice}</div>
              <div className="currency">{hotel.currency}</div>

              <Link to={`/hotel/${hotel.id}`} className="arrow-btn">
                <svg width="20" height="20" viewBox="0 0 306 306" style={{ transform: 'rotate(180deg)' }}>
                  <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153" fill="white"></polygon>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;