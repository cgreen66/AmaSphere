// ThankYouPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import "./thankyoupage.css"

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <FontAwesomeIcon icon={faCheckCircle} className="checkmark-icon" />
      <h2 className="thank-you-message">Thank you for placing your order!</h2>
    </div>
  );
};

export default ThankYouPage;
