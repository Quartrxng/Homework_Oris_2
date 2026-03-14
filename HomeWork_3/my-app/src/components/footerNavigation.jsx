import React from 'react';

const FooterNavigation = ({ navigation }) => {
  return (
    <nav className="Footer_navigation">
      <div>
        <p>{navigation.company.title}</p>
        <ul>
          {navigation.company.links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>{navigation.tourists.title}</p>
        <ul>
          {navigation.tourists.links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default FooterNavigation;