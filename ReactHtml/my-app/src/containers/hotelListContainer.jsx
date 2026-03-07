import React from 'react';
import HotelCard from '../components/hotelCard';
import { hotelsData } from '../data/hotelsData';

const HotelListContainer = () => {
  return (
    <div className="card-container">
      {hotelsData.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelListContainer;