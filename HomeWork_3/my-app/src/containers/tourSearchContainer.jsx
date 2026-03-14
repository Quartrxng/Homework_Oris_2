import React, { useCallback, useMemo, useState } from 'react';
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
  const [searchData, setSearchData] = useState({
    searchMode: 'tours',
    placement: null,
    dates: {
      startDate: null,
      endDate: null,
    },
    tourists: {
      adults: 2,
      children: [],
    },
    stars: 1,
    filters: {
      meal: 'any',
      rating: 'any',
      beachLine: 'any',
    },
    services: [],
  });

  const updateSearchData = useCallback((key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleSearchModeChange = useCallback((searchMode) => {
    updateSearchData('searchMode', searchMode);
  }, [updateSearchData]);

  const handlePlacementChange = useCallback((placement) => {
    updateSearchData('placement', placement);
  }, [updateSearchData]);

  const handleDatesChange = useCallback((dates) => {
    updateSearchData('dates', dates);
  }, [updateSearchData]);

  const handleTouristsChange = useCallback((tourists) => {
    updateSearchData('tourists', tourists);
  }, [updateSearchData]);

  const handleStarsChange = useCallback((stars) => {
    updateSearchData('stars', stars);
  }, [updateSearchData]);

  const handleFiltersChange = useCallback((filters) => {
    updateSearchData('filters', filters);
  }, [updateSearchData]);

  const handleServicesChange = useCallback((services) => {
    updateSearchData('services', services);
  }, [updateSearchData]);

  const handleSearchClick = useCallback(() => {
    setShowResults(true);
  }, []);

  const hasActiveFilters = useMemo(() => showResults, [showResults]);

  return (
    <div id="toursearch" className="topSpacing search-form scrollSpace" style={{ minHeight }}>
      <div className="wideform maintheme" style={{ width: 'auto' }}>
        <div className="interface--wrapper" style={{ borderRadius }}>
          <div
            className="mainform"
            style={{
              backgroundColor,
              backgroundImage: 'none',
              color: textColor,
            }}
          >
            <SearchTypeContainer
              value={searchData.searchMode}
              onChange={handleSearchModeChange}
            />

            <div className="mainfilters">
              <SearchPlacementContainer
                value={searchData.placement}
                onChange={handlePlacementChange}
              />

              <CalendarContainer
                value={searchData.dates}
                onChange={handleDatesChange}
              />

              <TouristsFilterContainer
                value={searchData.tourists}
                onChange={handleTouristsChange}
              />

              <div
                className="main--searchButton"
                style={{ backgroundColor: buttonColor }}
                onClick={handleSearchClick}
              >
                <img src="/img/icons8-search-64.png" className="SearchIcon" alt="search" />
              </div>
            </div>
          </div>

          <div className="filter--form" style={{ backgroundColor: filterBackgroundColor }}>
            <div className="filters-container">
              <StarFilterContainer
                value={searchData.stars}
                onChange={handleStarsChange}
              />

              <FiltersContainer
                value={searchData.filters}
                onChange={handleFiltersChange}
              />

              <ServicesTooltipContainer
                value={searchData.services}
                onChange={handleServicesChange}
              />
            </div>
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="results-wrapper">
          <HotelListContainer searchData={searchData} />
        </div>
      )}
    </div>
  );
};

export default TourSearchContainer;