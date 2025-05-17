import { useState } from 'react';
import styles from './PaymentPayLater.module.css';
import Image from 'next/image';

const PaymentPayLater = () => {
  const [mobileNumber, setMobileNumber] = useState('9999999999');
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [, setSelectedProvider] = useState('');

  const checkEligibility = () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      setIsEligible(false);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Random eligibility for demo purposes
      setIsEligible(Math.random() > 0.3);
    }, 1500);
  };

  // const selectProvider = (provider: string) => {
  //   setSelectedProvider(provider);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.paymentBox}>
        {/* <div className={styles.providersSection}>
          <button
            className={`${styles.providerButton} ${selectedProvider === 'SIMPLE' ? styles.active : ''}`}
            onClick={() => selectProvider('SIMPLE')}>
            <img
              src="https://flight.easemytrip.com/M_Content/img/NewTravImg/simpl-pay-logo.png"
              alt="SimplPay"
              className={styles.providerLogo}
            />
            Simpl
          </button>
        </div> */}
        {/* Additional providers can be added here */}

        <div className={styles.eligibilitySection}>
          <div className={styles.eligibilityHeader}>Check eligibility of mobile number</div>

          <div className={styles.mobileInputContainer}>
            <input
              type="tel"
              className={styles.mobileInput}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter mobile number"
              maxLength={10}
            />
          </div>

          {isEligible === false && (
            <div className={styles.errorMessage}>
              Currently you are not eligible. We are working to improve our coverage
            </div>
          )}

          <button
            className={styles.submitButton}
            onClick={checkEligibility}
            disabled={isLoading}
          >
            {!isLoading ? 'Submit' : <span className={styles.spinner}></span>}
          </button>
        </div>

        <div className={styles.benefitsHeader}>Benefits of pay later</div>

        <ul className={styles.benefitsList}>
          <li className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <Image src="/icons/percentIcon.svg" alt="No Interest"
                height={50}
                width={50} className={styles.benefitListIcon} />
            </div>
            <div className={styles.benefitText}>
              <div className={styles.benefitTitle}>No Interest</div>
              <div className={styles.benefitDescription}>Zero% interest for non-EMI plans</div>
            </div>
          </li>

          <li className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <Image src="/icons/credit-periods.svg" alt="Credit Periods" height={50}
                width={50} className={styles.benefitListIcon} />
            </div>
            <div className={styles.benefitText}>
              <div className={styles.benefitTitle}>Numerous Credit Periods</div>
              <div className={styles.benefitDescription}>From 15 days to 18 month tenures</div>
            </div>
          </li>

          <li className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <Image src="/icons/no-document.svg" alt="No Documentation" height={50}
                width={50} className={styles.benefitListIcon} />
            </div>
            <div className={styles.benefitText}>
              <div className={styles.benefitTitle}>No Documentation Required</div>
              <div className={styles.benefitDescription}>Eligibility by Mobile number</div>
            </div>
          </li>

          <li className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <Image src="/icons/phone-otp.svg" alt="OTP Confirmation" height={50}
                width={50} className={styles.benefitListIcon} />
            </div>
            <div className={styles.benefitText}>
              <div className={styles.benefitTitle}>Booking Confirmation via OTP</div>
              <div className={styles.benefitDescription}>Received on your mobile no.</div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default PaymentPayLater;