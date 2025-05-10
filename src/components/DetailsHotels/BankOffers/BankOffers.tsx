'use client';
import { useState } from 'react';
import styles from './BankOffers.module.css';
import Image from 'next/image';
// import { offers } from './offerData';

export const offers = [
  {
    code: "GOSMARTDEAL",
    amount: 954,
    description: "You saved ₹954",
    bankImage: null,
  },
  {
    code: "GOYES",
    amount: 1124,
    description: "Pay using YES Bank Credit Cards to avail the offer.",
    bankImage: "https://gos3.ibcdn.com/yes-bank-1602661178.png",
  },
  {
    code: "HDFCEMI",
    amount: 899,
    description: "Pay using HDFC Bank and enjoy No cost EMI for 3 months and Flat 12% Instant Discount",
    bankImage: "https://promos.makemytrip.com/notification/xhdpi/hdfc-09102023.png",
  },
];


const BankOffers = () => {
  const [selectedCode, setSelectedCode] = useState('GOSMARTDEAL');

  const totalSavings = 3871;
  const discountedPrice = 6545;
  const taxesAndFees = 1423;

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <p>Offers Applied</p>
        <button className={styles.closeBtn}>×</button>
      </div>

      <div className={styles.body}>
        <p className={styles.subHeader}>
          <span className={styles.icon}>🏷️</span>
          PROMOCODES ({offers.length})
        </p>

        <ul className={styles.offerList}>
          {offers.map((offer) => (
            <li
              key={offer.code}
              className={`${styles.offerItem} ${selectedCode === offer.code ? styles.selected : ''}`}
              onClick={() => setSelectedCode(offer.code)}
            >
              <input
                type="radio"
                checked={selectedCode === offer.code}
                onChange={() => setSelectedCode(offer.code)}
                onClick={(e) => e.stopPropagation()} // prevent double-firing
              />
              <div className={styles.details}>
                <div className={styles.row}>
                  <span className={styles.code}>
                    {offer.bankImage && (
                      <Image src={offer.bankImage} alt="" className={styles.bankImg} />
                    )}
                    {offer.code}
                  </span>
                  <span className={styles.amount}>- ₹{offer.amount}</span>
                </div>
                <p className={styles.desc}>{offer.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerText}>
          <span className={styles.footerTextHead}>Total Savings</span>
          <span>Price after discount</span>
          <span className={styles.perNight}>Per Night</span>
        </div>
        <div className={styles.footerPrice}>
          <span className={styles.totalSavings}>- ₹{totalSavings}</span>
          <span className={styles.discounted}>₹{discountedPrice}</span>
          <span>+ ₹{taxesAndFees} taxes & fees</span>
        </div>
      </div>
    </div>
  );
};

export default BankOffers;
