import React from 'react';

const FooterTerms = ({ items }) => {
  return (
    <div className="Footer_terms">
      <div className="Footer_terms_row">
        {items.slice(0, 2).map((item) => (
          <span
            key={item.id}
            role="button"
            tabIndex={0}
            className="Footer_download-link"
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="Footer_terms_row">
        {items.slice(2, 4).map((item) => (
          <span
            key={item.id}
            role="button"
            tabIndex={0}
            className="Footer_download-link"
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterTerms;