import React from 'react';

const Navigation = ({ menuItems }) => {
  const renderIcon = (iconType) => {
    if (iconType === 'fire') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 15">
          <path fill="#FF0E19" d="M8.524 5.993a3.28 3.28 0 0 1-.966 2.333.874.874 0 1 1-1.236-1.237 3.28 3.28 0 0 0 .966-2.333A6.57 6.57 0 0 0 5.354.089a4.93 4.93 0 0 1-1.45 3.5L1.57 5.922a4.92 4.92 0 0 0-1.45 3.5 4.668 4.668 0 0 0 9.333 0c0-1.339-.355-2.552-.93-3.429"></path>
        </svg>
      );
    }
    return null;
  };

  const renderDropdownIcon = () => (
    <svg className="svgicon svgicon--container" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
      <path d="m7 10 5 5 5-5z"></path>
    </svg>
  );

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="headerbottom__object">
            {item.hasIcon && renderIcon(item.icon)}
            
            <a 
              target={item.external ? "_blank" : "_self"} 
              href={item.href}
            >
              {item.label}
            </a>
            
            {item.hasDropdown && renderDropdownIcon()}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;