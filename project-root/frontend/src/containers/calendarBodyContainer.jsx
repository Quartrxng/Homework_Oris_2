import React from 'react';
import CalendarRow from '../components/calendarPriceRow';

const CalendarBodyContainer = ({ countries }) => {
  return (
    <div className="CalBody">
      <div className="CalendarDepartureHeader"></div>
      
      <div className="CalendarRow CalendarListHeader">
        <div className="CalendarCountry"></div>
        <div className="CalendarWeather"></div>
        <div className="CalendarDate"></div>
        <div className="CalendarPrice"></div>
      </div>
      
      <div className="CalendarCountyList">
        {countries.map((item, index) => (
          <CalendarRow 
            key={item.id} 
            item={item} 
            isLast={index === countries.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarBodyContainer;