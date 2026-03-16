import React from 'react';

const MailingSubscription = ({
  email,
  isButtonDisabled,
  isAgreed,
  isFocused,
  onEmailChange,
  onSubmit,
  onAgreementToggle,
  onFocus,
  onBlur
}) => {
  return (
    <div className="mailingsubsription" type="subscription">
      <div className="mailingsubsription__container">
        <div className="mailingsubsription--titles__container">
          <h2 className="slogan Banner_title block--title">
            Подпишитесь на рассылку
          </h2>
          <h3 className="slogan Banner_title block--subtitle">
            и узнавайте о самых выгодных предложениях первым
          </h3>
        </div>

        <form className="Banner_content" onSubmit={onSubmit}>
          <div 
            className={`Banner--input__container ${isFocused ? 'mui-focused' : ''}`}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            <input
              aria-invalid="false"
              name="email"
              placeholder="Введите ваш e-mail"
              type="email"
              className="mail--inupt"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          
          <button
            type="submit"
            className={`mail--input--sumbit button--zoom ${
              isButtonDisabled ? 'sumbit__disabled' : ''
            }`}
            disabled={isButtonDisabled}
            tabIndex={isButtonDisabled ? '-1' : undefined}
          >
            подписаться
          </button>
        </form>

        <div 
          className="mt-1" 
          style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            marginTop: '16px' 
          }}
        >
          <span 
            className="mui-1ycmw8j" 
            style={{ paddingLeft: '0px', cursor: 'pointer' }}
            onClick={onAgreementToggle}
            role="button"
            tabIndex="0"
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onAgreementToggle();
              }
            }}
          >
            <svg 
              className="mui-vubbuv" 
              focusable="false" 
              aria-hidden="true" 
              viewBox="0 0 24 24" 
              data-testid={isAgreed ? "CheckBoxIcon" : "CheckBoxOutlineBlankIcon"}
            >
              {isAgreed ? (
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              ) : (
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              )}
            </svg>
            <span className="mui-w0pj6f"></span>
          </span>

          <p className="mt-1 mui-1x2hz4" style={{ color: 'white' }}>
            Отправляя запрос, я выражаю{' '}
            <span
              role="button"
              tabIndex="0"
              className="mui-d5is7s"
              style={{ fontWeight: 'bold', color: 'white', cursor: 'pointer' }}
              onClick={onAgreementToggle}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onAgreementToggle();
                }
              }}
            >
              Согласие на обработку персональных данных
            </span>
            {' '}и подтверждаю, что ознакомлен и принимаю условия{' '}
            <span
              role="button"
              tabIndex="0"
              className="mui-d5is7s"
              style={{ fontWeight: 'bold', color: 'white', cursor: 'pointer' }}
            >
              Пользовательского соглашения
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default MailingSubscription;