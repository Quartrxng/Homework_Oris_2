import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchTypeContainer from './searchTypeContainer';
import SearchPlacementContainer from './searchPlacementContainer';
import CalendarContainer from './CalendarContainer';
import TouristsFilterContainer from './touristsFilterContainer';
import StarFilterContainer from './starsFilterContainer';
import FiltersContainer from './filtersContainer';
import ServicesTooltipContainer from './servicesTooltipContainer';
import HotelListContainer from './hotelListContainer';

const getInitialSearchData = (data) => {
  if (!data) {
    return {
      searchMode: 'tours',
      placement: null,
      dates: { startDate: null, endDate: null },
      tourists: { adults: 2, children: [] },
      stars: 1,
      filters: {},
      services: [],
    };
  }

  const filters = data.variant2.filters;
  const starsFilter = filters.find(f => f.type === 'stars');
  const dynamicFilters = data.dynamicFilters?.default || [];

  const dynamicInitial = dynamicFilters.reduce((acc, filter) => {
    acc[filter.type] = filter.defaultValue || 'any';
    return acc;
  }, {});

  return {
    searchMode: 'tours',
    placement: filters.find(f => f.type === 'departure')?.value || null,
    dates: { startDate: null, endDate: null },
    tourists: { adults: 2, children: [] },
    stars: starsFilter?.activeStars ?? 1,
    filters: dynamicInitial,
    services: [],
  };
};

const TourSearchContainer = ({
  backgroundColor = 'rgb(62, 81, 248)',
  buttonColor = 'rgb(255, 14, 25)',
  textColor = 'rgb(255, 255, 255)',
  filterBackgroundColor = 'rgb(255, 255, 255)',
  minHeight = '215px',
  borderRadius = '25px'
}) => {
  const [apiData, setApiData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('https://localhost:7273/api/Filter');
        if (!res.ok) throw new Error('Ошибка API');

        const json = await res.json();
        const data = json.filterData;

        setApiData(data);
        setSearchData(getInitialSearchData(data));

      } catch (e) {
        console.error('Ошибка загрузки API:', e);
      }
    };

    loadData();
  }, []);
  useEffect(() => {
  if (!searchData) return;

  const params = new URLSearchParams(location.search);

  const initialPlacement = params.get('Country') ? { name: params.get('Country') } : null;
  const initialFilters = {
    Meal: params.get('Meal') || undefined,
    Rating: params.get('Rating') || undefined,
    MaxPrice: params.get('MaxPrice') || undefined,
  };
  const initialStars = params.get('Stars') ? Number(params.get('Stars')) : searchData.stars;

  setSearchData((prev) => ({
    ...prev,
    placement: initialPlacement || prev.placement,
    filters: { ...prev.filters, ...initialFilters },
    stars: initialStars,
  }));

  if (params.toString()) {
    handleSearchClick({
      placement: initialPlacement || searchData.placement,
      filters: { ...searchData.filters, ...initialFilters },
      stars: initialStars,
    });
  }
}, [location.search, searchData]);

  const adaptedData = useMemo(() => {
    if (!apiData) return null;

    const mainFilters = apiData.variant2.filters
      .sort((a, b) => a.order - b.order);

    const dynamicFilters = apiData.dynamicFilters?.default || [];

    const servicesGrouped = apiData.servicesData.reduce((acc, item) => {
      const key = item.category_Name;

      if (!acc[key]) {
        acc[key] = {
          category: key,
          order: item.category_Order,
          items: []
        };
      }

      acc[key].items.push({
        id: item.id,
        name: item.service_Name,
        order: item.service_Order
      });

      return acc;
    }, {});

    const services = Object.values(servicesGrouped)
      .sort((a, b) => a.order - b.order)
      .map(group => ({
        ...group,
        items: group.items.sort((a, b) => a.order - b.order)
      }));

    return {
      mainFilters,
      dynamicFilters,
      services
    };
  }, [apiData]);

  const updateSearchData = useCallback((key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleSearchModeChange = (v) => updateSearchData('searchMode', v);
  const handlePlacementChange = (v) => updateSearchData('placement', v);
  const handleDatesChange = (v) => updateSearchData('dates', v);
  const handleTouristsChange = (v) => updateSearchData('tourists', v);
  const handleStarsChange = (v) => updateSearchData('stars', v);
  const handleFiltersChange = (v) => updateSearchData('filters', v);
  const handleServicesChange = (v) => updateSearchData('services', v);

  const handleSearchClick = async () => {
    setShowResults(true);

    try {
      const url = new URL('https://localhost:7273/api/Tour');

      if (searchData?.placement?.name) url.searchParams.append('Country', searchData.placement.name);
      if (searchData?.filters?.Meal) url.searchParams.append('Meal', searchData.filters.Meal);
      if (searchData?.stars) url.searchParams.append('Stars', searchData.stars);
      if (searchData?.filters?.Rating) url.searchParams.append('Rating', searchData.filters.Rating);
      if (searchData?.filters?.MaxPrice) url.searchParams.append('MaxPrice', searchData.filters.MaxPrice);

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error('Ошибка загрузки API');

      const tours = await res.json();

      setSearchData((prev) => ({ ...prev, results: tours }));
    } catch (e) {
      console.error('Ошибка fetch тура:', e);
    }
  };
  const hasActiveFilters = showResults;

  if (!searchData || !adaptedData) return null;

  const departureFilter = adaptedData.mainFilters.find(f => f.type === 'departure');
  const flyDatesFilter = adaptedData.mainFilters.find(f => f.type === 'flyDates');
  const starsFilter = adaptedData.mainFilters.find(f => f.type === 'stars');

  return (
    <div id="toursearch" className="topSpacing search-form scrollSpace" style={{ minHeight }}>
      <div className="wideform maintheme">
        <div className="interface--wrapper" style={{ borderRadius }}>

          <div className="mainform" style={{ backgroundColor, color: textColor }}>
            <SearchTypeContainer value={searchData.searchMode} onChange={handleSearchModeChange} />

            <div className="mainfilters">
              <SearchPlacementContainer
                value={searchData.placement}
                onChange={handlePlacementChange}
                options={departureFilter?.options || []}
              />

              <CalendarContainer
                value={searchData.dates}
                onChange={handleDatesChange}
                options={flyDatesFilter?.options || []}
              />

              <TouristsFilterContainer
                value={searchData.tourists}
                onChange={handleTouristsChange}
              />

              <div className="main--searchButton" style={{ backgroundColor: buttonColor }} onClick={handleSearchClick}>
                <img src="/img/icons8-search-64.png" className="SearchIcon" alt="search" />
              </div>
            </div>
          </div>

          <div className="filter--form" style={{ backgroundColor: filterBackgroundColor }}>
            <div className="filters-container">

              <StarFilterContainer
                value={searchData.stars}
                onChange={handleStarsChange}
                config={starsFilter}
              />

              <FiltersContainer
                value={searchData.filters}
                onChange={handleFiltersChange}
                filters={adaptedData.dynamicFilters}
              />

              <ServicesTooltipContainer
                value={searchData.services}
                onChange={handleServicesChange}
                services={adaptedData.services}
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