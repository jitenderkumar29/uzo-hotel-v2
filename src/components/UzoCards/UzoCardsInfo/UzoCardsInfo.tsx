'use client';
import React from 'react';
import styles from './UzoCardsInfo.module.css';
import { Gift, Zap, Percent, Plane } from 'lucide-react';

const UzoCardsInfo = () => {
  const benefits = [
    {
      icon: <Gift size={48} />,
      title: 'Welcome Benefits worth INR 3000* Vouchers'
    },
    {
      icon: <Zap size={48} />,
      title: 'Get 10X Rewards on Every INR 100 spent on Flights and Hotels'
    },
    {
      icon: <Percent size={48} />,
      title: 'Enjoy Unbeatable Discounts of Up to 20%* on Travel Bookings'
    },
    {
      icon: <Plane size={48} />,
      title: 'Complimentary Access to Domestic & International Airport Lounges'
    }
  ];

  return (
    <section className={styles.whyChooseUs} id="whyChooseUs">
      <div className={styles.cardContainer}>
        <div className={styles.textCenter}>
          <div className={styles.subtitle}>EXPERIENCE OPTIMAL CONVENIENCE</div>
          <h2 className={styles.title}>Enjoy Exclusive Benefits With Our Bank Cards</h2>
          <p className={styles.tagline}>
            Maximize your adventures with special offers and top discounts
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={styles.benefitItem}
              data-aos="zoom-in-right"
              data-aos-delay={index * 100}
            >
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UzoCardsInfo;