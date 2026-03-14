import React from 'react';

const RadioInput = ({ 
  id, 
  name, 
  label, 
  checked, 
  onChange, 
  primaryColor, 
  textColor,
  size = 'S',
  fontSize = 'M',
  fontWeight = 'Size-M',
  gapSize = 'M'
}) => {
  return (
    <div className={`InputRadio RadioGroupItem Size-${size} GapSize-${gapSize} FontSize-${fontSize} FontWeightSize-${fontWeight}`}>
      <input
        className="InputRadioInput"
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        value={label}
      />
      <div className="InputRadioWrapper">
        <div className="InputRadioLabel">
          <div 
            className="InputRadioLabelCheck" 
            style={{ background: primaryColor }}
          ></div>
        </div>
        <div 
          className="InputRadioContent" 
          style={{ color: textColor }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default RadioInput;