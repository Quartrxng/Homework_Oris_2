import React, { useState, useEffect } from 'react';
import MailingSubscription from '../components/mailSubscription';
const MailingSubscriptionContainer = () => {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Функция проверки валидности email
  const isValidEmail = (email) => {
    if (!email) return false;
    const domain = email.split('.').pop().toLowerCase();
    const allowedDomains = ['com', 'ru', 'org', 'uk', 'net'];
    return allowedDomains.includes(domain);
  };

  // Обработчик изменения email
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsButtonDisabled(!isValidEmail(newEmail));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isButtonDisabled && isAgreed) {
    }
  };

  // Обработчик согласия
  const handleAgreementToggle = () => {
    setIsAgreed(!isAgreed);
  };

  // Обработчики фокуса
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Эффект для проверки при загрузке
  useEffect(() => {
    setIsButtonDisabled(!isValidEmail(email));
  }, [email]);

  return (
    <MailingSubscription
      email={email}
      isButtonDisabled={isButtonDisabled}
      isAgreed={isAgreed}
      isFocused={isFocused}
      onEmailChange={handleEmailChange}
      onSubmit={handleSubmit}
      onAgreementToggle={handleAgreementToggle}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default MailingSubscriptionContainer;