import React from 'react';
import { useParams } from 'react-router-dom';
import { hotelsData } from '../data/hotelsData'; 
import HotelView from '../components/hotelsViews';
import '../styles/hotel-info.css'; 

const Hotels = () => {
  const { id } = useParams();

  const currentHotel = hotelsData.find(hotel => hotel.id === id);

  if (!currentHotel) {
    return <div className="hotel-wrapper"><h1>Отель не найден</h1></div>;
  }
  return (
    <HotelView hotel={currentHotel} />
  );  
};

export default Hotels;