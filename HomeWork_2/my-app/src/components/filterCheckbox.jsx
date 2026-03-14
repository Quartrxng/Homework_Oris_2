import React from 'react';

const FilterCheckbox = ({ label, disabled = false }) => {
  const disabledClass = disabled ? ' Disabled' : '';
  
  return (
    <div className={`CheckboxControl StyleTheme2 Position-Left Justify-SpaceBeetwen${disabledClass}`} title="">
      <div className="CheckboxContent">{label}</div>
    </div>
  );
};

export default FilterCheckbox;