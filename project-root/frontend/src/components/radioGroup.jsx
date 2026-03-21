import React from 'react';

const RadioGroup = ({ 
  children, 
  direction = 'Row', 
  theme = 'StyleTheme1',
  gapSize = 'M'
}) => {
  return (
    <div className={`RadioGroup ${theme} GapSize-${gapSize} AxisDirection-${direction}`}>
      {children}
    </div>
  );
};

export default RadioGroup;