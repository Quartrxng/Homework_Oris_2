import React from 'react';

const CompanyInfo = ({ companyInfo }) => {
  return (
    <>
        {companyInfo.name}<br />
        ИНН:{companyInfo.inn}<br />
        {companyInfo.address} тел.<br />
        {companyInfo.phones.map((phone, index) => (
          <React.Fragment key={index}>
            <a href={phone.link}>{phone.value}</a>
            {index < companyInfo.phones.length - 1 ? ', ' : ''}
          </React.Fragment>
        ))}
        <br />
        <a href={companyInfo.emailLink}>{companyInfo.email}</a>
    </>
  );
};

export default CompanyInfo;