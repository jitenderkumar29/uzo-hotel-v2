import { useState, ChangeEvent } from 'react';
import styles from './PaymentGiftCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface GiftCard {
  number: string;
  pin: string;
}

export default function PaymentGiftCard() {
  const [giftCardNumber, setGiftCardNumber] = useState('');
  const [displayPin, setDisplayPin] = useState('');
  const [maskedPin, setMaskedPin] = useState('');
  const [isPinVisible, setIsPinVisible] = useState(false);
  const [giftCards, setGiftCards] = useState<GiftCard[]>([]);
  const [isViewMoreGift, setIsViewMoreGift] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const visiableGiftCard = isViewMoreGift ? giftCards.length : 3;

  const formatGiftCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    setGiftCardNumber(value);
  };

  const addMaskPin = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');

    // Handle backspace/delete
    if (value.length < displayPin.length) {
      setDisplayPin(value);
      setMaskedPin('*'.repeat(value.length));
      return;
    }

    if (value.length > 6) {
      value = value.substring(0, 6);
    }
    setDisplayPin(value);
    setMaskedPin('*'.repeat(value.length));
  };

  const togglePinVisibility = () => {
    setIsPinVisible(!isPinVisible);
  };

  const addToWallet = () => {
    setError(null);

    if (!giftCardNumber.match(/^[0-9]{16}$/)) {
      setError('Please enter a valid 16-digit gift card number');
      return;
    }

    if (!displayPin.match(/^[0-9]{4,6}$/)) {
      setError('Please enter a valid 4-6 digit PIN');
      return;
    }

    const newCard = {
      number: giftCardNumber,
      pin: displayPin
    };

    setGiftCards([...giftCards, newCard]);
    setGiftCardNumber('');
    setDisplayPin('');
    setMaskedPin('');
  };

  const toggleGiftView = () => {
    setIsViewMoreGift(!isViewMoreGift);
  };

  const isFormValid = () => {
    return giftCardNumber.match(/^[0-9]{16}$/) && displayPin.match(/^[0-9]{4,6}$/);
  };

  return (
    <div className={styles.giftCardContainer}>
      {error && <p className={styles.errorMessage}>{error}</p>}

      {giftCards.length > 0 && (
        <button className={styles.backButton}>Back</button>
      )}

      <div className={styles.giftCardForm}>
        <div className={styles.formRow}>
          <label className={styles.inputGroup} style={{ width: '60%' }}>
            Enter 16 Digit Gift Card Number
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={giftCardNumber}
                onChange={formatGiftCardNumber}
                placeholder="Gift Card Number"
                maxLength={16}
              />
              <img
                src="icons/giftcard.svg"
                alt="credit-card"
                className={styles.cardIcon}
              />
              {!giftCardNumber.match(/^[0-9]{16}$/) && giftCardNumber.length > 0 && (
                <p className={styles.errorMessage}>
                  Please enter a valid 16-digit gift card number
                </p>
              )}
            </div>
          </label>

          <label className={styles.inputGroup} style={{ width: '40%' }}>
            Enter PIN
            <div className={styles.inputWrapper}>
              <input
                type={isPinVisible ? 'text' : 'password'}
                value={isPinVisible ? displayPin : maskedPin}
                onChange={addMaskPin}
                id="giftCardPin"
                placeholder="Enter Gift Card PIN"
                maxLength={6}
              />
              <FontAwesomeIcon
                icon={isPinVisible ? faEyeSlash : faEye}
                onClick={togglePinVisibility}
                aria-label={isPinVisible ? 'Hide PIN' : 'Show PIN'}
                className={styles.eyeIcon}
              />
            </div>
          </label>
        </div>

        <button
          className={styles.addButton}
          onClick={addToWallet}
          disabled={!isFormValid()}
        >
          Add To My Account
        </button>
      </div>

      <div className={styles.note}>
        <strong>Please Note</strong><br />
        This Gift card/voucher cannot be clubbed with any other ongoing offer discount/cashback/promotion run by Uzohotels.com on website.
      </div>

      {giftCards.length > 0 && (
        <div className={styles.addedCards}>
          <div className={styles.cardsHeader}>
            <div className={styles.leftSide}>
              <div className={styles.cardsCount}>
                You Have {giftCards.length} Gift Cards
              </div>
              <div className={styles.cardsSubtitle}>
                You can redeem upto 3 gift cards
              </div>
            </div>
            <button className={styles.addNewCard}>
              + Add New Gift Card
            </button>
          </div>

          {/* Card list would go here */}

          {giftCards.length > 3 && (
            <div className={styles.viewMoreBtn} onClick={toggleGiftView}>
              <button className={styles.btn}>
                View More <i className={`${styles.arrow} ${isViewMoreGift ? styles.up : styles.down}`} />
              </button>
            </div>
          )}

          <div className={styles.totalAmount}>
            <span className={styles.priceAmount}>4,431</span>
            <span className={styles.dueNow}>Due Now</span>
          </div>
        </div>
      )}
    </div>
  );
}