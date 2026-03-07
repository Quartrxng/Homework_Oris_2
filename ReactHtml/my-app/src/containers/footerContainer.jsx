import React from 'react';
import FooterTerms from '../components/footerTerms';
import FooterOffer from '../components/footerOffer';
import FooterNavigation from "../components/footerNavigation";
import FooterSocialNetworks from "./footerSocialsContainer";
import FooterContactsContainer from "./footerContactsContainer";
import { footerData } from '../data/footerData';
import FooterLogo from "../components/footerLogo";
import CompanyInfo from '../components/companyInfo';

const FooterContainer = () => {
  const { 
    office, 
    phone, 
    navigation, 
    terms, 
    offerText, 
    socialLinks,
    companyInfo,
    description,
    copyright,
    logo
  } = footerData;

  return (
    <div className='footer'>
        <footer className="footer__container">

        <div className="Footer_left">
            <div className="Footer_logo_description">
                <FooterLogo viewBox={logo.viewBox} paths={logo.paths} />
                <p className="Footer_description">
                    {description}
                    <br /><br />
                    <CompanyInfo companyInfo={companyInfo} />
                </p>
                <p className="Footer_copyright">{copyright.text}</p>
            </div>
        </div>
        
        <div className="Footer_right">
            <div className="Footer_right_content">
            <FooterNavigation navigation={navigation} />
            <FooterSocialNetworks 
                title="Мы в соцсетях"
                links={socialLinks}
            />
            <FooterContactsContainer 
                office={office}
                phone={phone}
            />
            </div>
            <FooterTerms items={terms} />
            <FooterOffer text={offerText} />
        </div>
        </footer>
    </div>
  );
};

export default FooterContainer;