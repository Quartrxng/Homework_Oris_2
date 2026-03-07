
import React from 'react';

const ExpertsBanner = ({ socials, phone, onRequestClick }) => {
  const socialsList = socials || [];
  
  return (
    <div className="experts">
      <img 
        alt="country_bg" 
        fetchPriority="high" 
        width="380" 
        height="178" 
        decoding="async" 
        src="/img/country_bg.png" 
        style={{ color: 'transparent' }} 
      />
      
      <h2 className="slogan Banner_title block--title">
        Наши эксперты по путешествиям готовы помочь!
      </h2>
      
      <div className="Banner_content">
        <button 
          className="button--ripple banner--button button--zoom" 
          data-ripple-color="gray" 
          type="button"
          onClick={onRequestClick}
        >
          Оставить заявку
          <span className="touchripple"></span>
        </button>
        
        <div className="Banner_contacts">
          {phone && (
            <a className="Banner_contact" href={phone.href}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 13">
                <path fill="#fff" d="m13.162 9.54-1.814-1.814c-.648-.647-1.75-.388-2.009.454-.194.583-.842.907-1.425.778-1.296-.324-3.046-2.009-3.37-3.37-.194-.583.195-1.23.778-1.425.842-.26 1.101-1.36.453-2.009L3.961.34c-.518-.453-1.296-.453-1.75 0L.982 1.571c-1.231 1.296.13 4.73 3.175 7.775s6.479 4.471 7.775 3.175l1.23-1.23c.454-.52.454-1.297 0-1.75"></path>
              </svg>
              <span>{phone.display}</span>
            </a>
          )}

          {socialsList.length > 0 ? (
            socialsList.map((social, idx) => (
              <a
                key={idx}
                className="button--ripple icon--button"
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={social.svg?.width || 13} 
                  height={social.svg?.height || 13} 
                  fill="none" 
                  viewBox={social.svg?.viewBox || "0 0 13 13"}
                >
                  <path fill="#fff" d={social.svg?.path || social.svg} />
                </svg>
                <span>{social.name}</span>
                <span className="touchripple"></span>
              </a>
            ))
          ) : (
            <div>Нет доступных контактов</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertsBanner;