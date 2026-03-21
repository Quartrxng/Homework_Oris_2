import React from 'react';

const FilterSelect = ({ placeholder, value, className = '', hideArrow = false }) => {
  const selectClass = `AddSelect StyleTheme2 ${value ? 'Selected' : ''}`;
  
  return (
    <div className={selectClass}>
      <div className="AddSelectContentBlock">
        <div className="AddSelectPlaceholder">{placeholder}</div>
        <div className={`AddSelectContent ${value ? '' : 'Hide'}`} title={value || ''}>
          {value}
        </div>
      </div>
      {!hideArrow && <div className="AddSelectArrow"></div>}
    </div>
  );
};

export default FilterSelect;