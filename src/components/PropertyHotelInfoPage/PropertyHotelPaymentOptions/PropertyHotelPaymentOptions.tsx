import React, { useState } from 'react';
import styles from './PropertyHotelPaymentOptions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type PaymentOption = 'bookNow' | 'bookLater';

const PropertyHotelPaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState<PaymentOption>('bookNow');
  const [isExpanded, setIsExpanded] = useState(true);

  const handleOptionChange = (option: PaymentOption) => {
    setSelectedOption(option);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggleExpand}>
        <span className={styles.headerText}>SELECT PAYMENT OPTION</span>
        <div className={styles.arrowIcon}>
          <FontAwesomeIcon icon={faChevronDown} className={`${styles.arrowSvg} ${isExpanded ? styles.arrowUp : ''}`} />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={`${styles.arrowSvg} ${isExpanded ? styles.arrowUp : ''}`}
          >
            <path d="M16 26a3.07 3.07 0 0 1-2.305-1.04L.614 10.091A2.462 2.462 0 0 1 4.312 6.84l11.439 13.003a.334.334 0 0 0 .501 0L27.691 6.84a2.462 2.462 0 1 1 3.697 3.251L18.311 24.955A3.08 3.08 0 0 1 16.002 26z" />
          </svg> */}
        </div>
      </div>

      {isExpanded && (
        <div className={styles.optionsContainer}>
          <label className={styles.optionLabel}>
            <input
              type="radio"
              name="paymentOption"
              value="bookLater"
              checked={selectedOption === 'bookLater'}
              onChange={() => handleOptionChange('bookLater')}
              // disabled
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            <div className={styles.optionContent}>
              <div className={styles.optionHeader}>
                <p className={styles.optionMainText}>Book Now Pay Later</p>
              </div>
              <p className={styles.optionSubText}>Login to book this property</p>
            </div>
          </label>

          <label className={styles.optionLabel}>
            <input
              type="radio"
              name="paymentOption"
              value="bookNow"
              checked={selectedOption === 'bookNow'}
              onChange={() => handleOptionChange('bookNow')}
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            <div className={styles.optionContent}>
              <p className={styles.payNowText}>Pay entire ₹11150 now</p>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default PropertyHotelPaymentOptions;