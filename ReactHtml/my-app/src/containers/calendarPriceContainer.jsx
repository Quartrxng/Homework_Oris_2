import React from 'react';
import FiltersBlock from '../components/filtersBlock';
import CalendarBody from './calendarBodyContainer';
import { filtersData} from '../data/filtersData';
import { calendarData} from '../data/calendarPriceData'; 

const CalendarPriceContainer = ({ variant = 'variant1' }) => {

  return (
    <div className="Calendar DTCalendar">
      <FiltersBlock filtersconfig={filtersData[variant]} variant={variant}/>
      <CalendarBody countries={calendarData} />
      <div className="CalendarFooter CalMainColor">
        <div className="CalShowAll"></div>
      </div>
    </div>
  );
}
export default CalendarPriceContainer;