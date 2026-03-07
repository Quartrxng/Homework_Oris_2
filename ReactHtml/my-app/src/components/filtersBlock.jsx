import React from 'react';
import FilterSelect from '../components/filterSelect';
import FilterStars from '../components/filterStars';
import FilterCheckbox from '../components/filterCheckbox';

const FiltersBlock = ({ filtersconfig, variant }) => {
  const moduleClass = variant === "variant2"
    ? 'ModuleFilter Theme2 MinPFilterWrap' 
    : 'ModuleFilter Theme2 CalMainColor StopAnimation';

  const renderFilter = (filter) => {
    switch (filter.type) {
      case 'departure':
        return (
          <div className="DepartureSelect">
            <FilterSelect 
              placeholder={filter.placeholder} 
              value={filter.value}
              hideArrow={true}
            />
          </div>
        );

      case 'country':
        return (
          <div className="CountrySelect">
            <FilterSelect 
              placeholder={filter.placeholder} 
              value=""
            />
          </div>
        );

      case 'flyDates':
        return (
          <div className="FlyDatesSelect">
            <FilterSelect 
              placeholder={filter.placeholder} 
              value=""
            />
          </div>
        );

      case 'stars':
        return (
          <FilterStars 
            title={filter.title}
            activeStars={filter.activeStars}
            maxStars={filter.maxStars}
            size={filter.size}
          />
        );

      case 'budget':
        return (
          <div className="BudgetSelect">
            <FilterSelect 
              placeholder={filter.placeholder} 
              value=""
            />
          </div>
        );

      case 'checkbox':
        const filterClass = filter.subtype === 'visa' ? 'VisaFilter' : 'FlightTypeFilter';
        return (
          <div className={filterClass}>
            <FilterCheckbox 
              label={filter.label}
              disabled={filter.disabled}
            />
          </div>
        );

      case 'hideButton':
        return null;

      default:
        return null;
    }
  };

  const getFilterClass = (filter) => {
    switch (filter.type) {
      case 'departure': return 'DepartureFilter';
      case 'country': return 'CountryFilter';
      case 'flyDates': return 'FlyDatesFilter';
      case 'stars': return 'StarsFilter';
      case 'budget': return 'BudgetFilter';
      case 'checkbox':
        return filter.subtype === 'visa' ? 'VisaFilter' : 'FlightTypeFilter';
      case 'hideButton': return 'FiltersHideButton Active';
      default: return '';
    }
  };

  return (
    <div className={moduleClass} style={{ height: '60px' }}>
      <div className="ModuleFiltersBlock">
        {filtersconfig.filters.map((filter) => (
          <div 
            key={`${filter.type}-${filter.order}`}
            className={`FormControl ${getFilterClass(filter)}`}
            style={{ order: filter.order, width: 'calc(16.6667% - 10px)' }}
          >
            {renderFilter(filter)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersBlock;