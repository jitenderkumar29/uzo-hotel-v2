'use client';
import React from 'react';
import styles from './AvailBenefits.module.css';
import {
  CreditCard,
  Plane,
  Landmark,
  ShoppingBag,
} from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    icon: <CreditCard size={40} />,
    image: '/images/availBenefits1.png',
    text: 'Dedicated Visa Concierge Service',
  },
  {
    icon: <Plane size={40} />,
    image: '/images/availBenefits2.png',
    text: 'All-Inclusive Travel Benefits',
  },
  {
    icon: <Landmark size={40} />,
    image: '/images/availBenefits3.png',
    text: 'Simplified ATM Withdrawals',
  },
  {
    icon: <ShoppingBag size={40} />,
    image: '/images/availBenefits4.png',
    text: 'Unmatchable Deals & Discounts',
  },
];

const AvailBenefits = () => {
  return (
    <section className={styles.availSection} id="avail-benefits">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.textBlock}>
            <p className={styles.subTitle}>DISCOVER BOUNDLESS OPPORTUNITIES!</p>
            <h2 className={styles.title}>
              Avail Debit & Credit Cards Now <br />
              & Grab Featured Benefits
            </h2>
          </div>
          <div className={styles.description}>
            Whether you plan your picture-perfect escapes for holidays or just use it to fulfill your everyday necessity, every swipe of our bank credit and debit cards brings you closer to astonishing rewards and unforgettable memories.
          </div>
        </div>

        <div className={styles.cards}>
          {benefits.map((benefit, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.cardImageWrapper}>
                <Image src={benefit.image} alt={benefit.text} className={styles.cardImage} height={200} width={200} />
                <div className={styles.cardOverlayText}>{benefit.text}</div>
              </div>
            </div>
            // <div className={styles.card} key={idx}>
            //   <img src={benefit.image} alt={benefit.text} className={styles.cardImage} />
            //   <div className={styles.cardText}>
            //     {benefit.text}
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailBenefits;
