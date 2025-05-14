import React, { useState } from 'react';
import styles from './PropertyHotelBankOffers.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Offer {
  code: string;
  discount: string;
  description: string;
  disclaimer: string;
}

const PropertyHotelBankOffers: React.FC = () => {
  const [allOffers] = useState<Offer[]>([
    {
      code: 'HDFCDCEMI',
      discount: '-₹1,080',
      description: 'Pay using HDFC Bank and get a Flat 12% Instant Discount!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'UZOAXISEMI',
      discount: '-₹1,080',
      description: '3M NC EMI + Flat 12% Instant Discount (up to Rs.5000) on all tenures using AXIS Bank Credit Cards EMI.',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'UZOBAJAJEMI',
      discount: '-₹1,350',
      description: 'Paying through Bajaj Finserv Card to avail this offer. Book now!!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'UZODEAL',
      discount: '-₹1,424',
      description: 'Use UZODEAL to get instant discount on this hotel booking!!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'UZOSMARTDEAL',
      discount: '-₹1,379',
      description: 'Use UZOSMARTDEAL to get instant discount on this hotel booking.!!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'STEALDEAL',
      discount: '-₹1,315',
      description: 'Pay using Credit card and get a Flat 15% Instant Discount!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'IDBIDEAL',
      discount: '-₹1,515',
      description: 'Pay using IDBI Bank and get a Flat 20% Instant Discount!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'UCOBANK',
      discount: '-₹1,515',
      description: 'Pay using UCO Bank and get a Flat 10% Instant Discount!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'ICICIBANK',
      discount: '-₹1,515',
      description: 'Pay using IDBI Bank and get a Flat 20% Instant Discount!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
  ]);

  const [selectedOffer, setSelectedOffer] = useState<string>('HDFCDCEMI');
  const [promoCode, setPromoCode] = useState('');

  const handleOfferChange = (code: string) => {
    setSelectedOffer(code);
  };

  const handleApplyPromoCode = () => {
    // Handle promo code application logic here
    console.log('Applying promo code:', promoCode);
  };

  // Sort offers to put the selected one first
  const sortedOffers = [...allOffers].sort((a, b) => {
    if (a.code === selectedOffer) return -1;
    if (b.code === selectedOffer) return 1;
    return 0;
  });

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.offerWrapper}>
        <h4 className={styles.sectionHeader}>UZO Offers</h4>
      </div>

      <div className={styles.promoCodeWrapper}>
        <input
          type="text"
          placeholder="Got A Promocode?"
          className={styles.promoInput}
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button
          className={styles.applyButton}
          onClick={handleApplyPromoCode}
        >
          APPLY
        </button>
      </div>

      <div className={styles.offerWrapper}>
        {sortedOffers.map((offer) => (
          <div
            key={offer.code}
            className={`${styles.offer} ${selectedOffer === offer.code ? styles.selected : ''}`}
            onClick={() => handleOfferChange(offer.code)}
          >
            <div className={styles.radioWrapper}>
              <input
                type="radio"
                id={offer.code}
                name="bankOffer"
                value={offer.code}
                checked={selectedOffer === offer.code}
                onChange={() => handleOfferChange(offer.code)}
                className={styles.radioInput}
              />
              <span className={styles.radioControl}></span>
            </div>

            <div className={styles.offerContent}>
              <div className={styles.offerCode}>
                <div className={styles.codeWrapper}>
                  <span className={styles.code}>{offer.code}</span>
                  {selectedOffer === offer.code && (
                    <span className={styles.removeIcon}>
                      <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                    </span>
                  )}
                </div>
                <span className={styles.discount}>{offer.discount}</span>
              </div>

              <p className={styles.description}>
                {offer.description}
                {/* <span className={styles.disclaimer}>{offer.disclaimer}</span> */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyHotelBankOffers;