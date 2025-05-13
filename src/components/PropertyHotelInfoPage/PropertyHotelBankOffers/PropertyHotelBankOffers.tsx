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
  const [offers,] = useState<Offer[]>([
    {
      code: 'HDFCDCEMI',
      discount: '-₹1,080',
      description: 'Pay using HDFC Bank and get a Flat 12% Instant Discount!',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'GOAXISEMI',
      discount: '-₹1,080',
      description: '3M NC EMI + Flat 12% Instant Discount (up to Rs.5000) on all tenures using AXIS Bank Credit Cards EMI.',
      disclaimer: '(Not available with "Book @ ₹0")',
    },
    {
      code: 'GOBAJAJEMI',
      discount: '-₹1,350',
      description: 'Paying through Bajaj Finserv Card to avail this offer. Book now!!',
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

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.offerWrapper}>
        <h4 className={styles.sectionHeader}>Goibibo Offers</h4>
      </div>

      <div className={styles.offerWrapper}>
        {offers.map((offer) => (
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
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        height="1.2rem"
                        width="1.2rem"
                        fill="#2bac36"
                      >
                        <path d="M16 31.333c8.468 0 15.333-6.865 15.333-15.333S24.468.667 16 .667.667 7.532.667 16v-.001C.676 24.463 7.535 31.323 16 31.333M9.4 11.287a1.333 1.333 0 0 1 1.852-1.918l.033.033 4.479 4.479c.13.13.341.13.471 0l4.479-4.479a1.333 1.333 0 0 1 1.918 1.852l-.033.033-4.479 4.479a.333.333 0 0 0 0 .471l4.479 4.479a1.333 1.333 0 0 1-1.852 1.918l-.033-.033-4.479-4.479a.333.333 0 0 0-.471 0l-4.479 4.479A1.332 1.332 0 0 1 9.4 20.715l4.479-4.479a.333.333 0 0 0 0-.471z"></path>
                      </svg> */}
                    </span>
                  )}
                </div>
                <span className={styles.discount}>{offer.discount}</span>
              </div>

              <p className={styles.description}>
                {offer.description}
                <span className={styles.disclaimer}>{offer.disclaimer}</span>
              </p>
            </div>
          </div>
        ))}

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
      </div>
    </div>
  );
};

export default PropertyHotelBankOffers;