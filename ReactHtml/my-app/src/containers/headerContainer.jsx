import React from 'react';
import { headerData } from '../data/headerData';
import HeaderLogo from '../components/headerLogo';
import OfficesLink from '../components/officesLink';
import PhoneInfo from '../components/phoneInfo';
import Navigation from '../components/navigation';
import SupportButton from '../components/supportButton';

const HeaderContainer = () => {
  return (
    <div className="siteheader">
      <div className="siteheader--container">
        <div className="Header_top">
          <HeaderLogo />
          
          <div className="Header_right">
            <OfficesLink text={headerData.officesText} />
            <PhoneInfo 
              phone={headerData.phone}
              workingHours={headerData.workingHours}
            />
          </div>
        </div>
        
        <div className="headerbottom">
          <Navigation menuItems={headerData.menuItems} />
          <SupportButton text={headerData.supportText} />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;