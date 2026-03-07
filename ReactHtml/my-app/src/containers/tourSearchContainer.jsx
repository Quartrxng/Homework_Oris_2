import React, { useState } from 'react';
import SearchTypeContainer from './searchTypeContainer';
import SearchPlacementContainer from './searchPlacementContainer';
import CalendarContainer from './CalendarContainer';
import TouristsFilterContainer from './touristsFilterContainer';
import StarFilterContainer from './starsFilterContainer';
import FiltersContainer from './filtersContainer';
import ServicesTooltipContainer from './servicesTooltipContainer';
import HotelListContainer from './hotelListContainer';

const TourSearchContainer = ({ 
  backgroundColor = 'rgb(62, 81, 248)',
  buttonColor = 'rgb(255, 14, 25)',
  textColor = 'rgb(255, 255, 255)',
  filterBackgroundColor = 'rgb(255, 255, 255)',
  minHeight = '215px',
  borderRadius = '25px'
}) => {
  const [showResults, setShowResults] = useState(false);
  return (
    <div 
      id="toursearch" 
      className="topSpacing search-form scrollSpace" 
      style={{ minHeight }}
    >
      <div className="wideform maintheme" style={{ width: 'auto' }}>
        <div className="interface--wrapper" style={{ borderRadius }}>
          <div 
            className="mainform" 
            style={{ 
              backgroundColor, 
              backgroundImage: 'none', 
              color: textColor 
            }}
          >
            <SearchTypeContainer />
            <div className="mainfilters">
              <SearchPlacementContainer />
              <CalendarContainer />
              <TouristsFilterContainer />

              <div
                className="main--searchButton"
                style={{ backgroundColor: buttonColor }}
                onClick={() => setShowResults(true)}
              >
                <img src="/img/icons8-search-64.png" className="SearchIcon" alt="search" />
              </div>
            </div>
          </div>
          
          <div 
            className="filter--form" 
            style={{ backgroundColor: filterBackgroundColor }}
          >
            <div className="filters-container">
              <StarFilterContainer />
              <FiltersContainer />
              <ServicesTooltipContainer />
            </div>
          </div>
        </div>
      </div>
      {showResults && (
            <div className="results-wrapper">
                <HotelListContainer />
            </div>
        )}
    </div>
  );
};

export default TourSearchContainer;