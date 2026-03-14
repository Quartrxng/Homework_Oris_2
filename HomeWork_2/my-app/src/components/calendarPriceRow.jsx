import React from 'react';

const CalendarRow = ({ item, isLast = false }) => {
  return (
    <div className="CalendarRow CalendarList" style={isLast ? { border: 'none' } : {}}>
      <div className="CalendarCountry">
        <div className="CalendarCountryFlag" style={item.flagStyle}></div>
        <div className="CalendarCountryValue">{item.country}</div>
        {item.hasVisa && <div className="CalendarCountryVisa" title="Визовое направление"></div>}
      </div>
      
      <div className="CalendarWeather">
        <div className="CalendarAir" title="Температура воздуха днем">
          +{item.weather.air}
        </div>
        {item.weather.water !== null && (
        <div className="CalendarWater" title="Температура воды">
          +{item.weather.water}
        </div>
        )}
      </div>

      <div className="CalendarDate">{item.date}</div>
      <div className="CalendarPrice">
        <div className="CalendarPriceContent" title="Показать календарь вылетов">
          <div className="CalendarPriceValue">{item.price.value}</div>
          <div className="CalendarPriceCurrency">{item.price.currency}</div>
        </div>
        <div className="CalendarBook"></div>
      </div>
    </div>
  );
};

export default CalendarRow;