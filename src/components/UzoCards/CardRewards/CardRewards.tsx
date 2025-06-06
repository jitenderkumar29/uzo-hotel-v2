"use client";
import React from 'react';
import styles from './CardRewards.module.css';
import Image from 'next/image';

const CardRewards = () => {
  return (
    <div className={styles.travelRewards}>
      <div className={styles.cardContainer}>
        <div className={styles.textCenter}>
          <div className={styles.subtitle}>Grab Amazing REWARDS</div>
          <h2 className={styles.title}>Just Swipe Your Cards & Earn Fantastic Rewards</h2>
          <p className={styles.tagline}>No extra charges, no hidden fees, no confusing terms & conditions*</p>
        </div>

        <div className={styles.benefitsContainer}>
          <div className={styles.benefitItem} data-aos="fade-right">
            <div className={styles.iconWrapper}>
              {/* <Armchair className={styles.icon} /> */}
              <Image src={"/svg/loungeChair.svg"} height={100} width={100} alt='Lounge Chair' />
            </div>
            <div className={styles.benefitText}>
              Complimentary Access to Domestic & International Airport Lounges
            </div>
          </div>

          <div className={styles.benefitItem} data-aos="fade-right" data-aos-delay="100">
            <div className={styles.iconWrapper}>
              <Image src={"/svg/Gift.svg"} height={100} width={100} alt='Lounge Chair' />
              {/* <Gift className={styles.icon} /> */}
            </div>
            <div className={styles.benefitText}>
              Enjoy Unbeatable Discounts Up to 20% on Travel Bookings
            </div>
          </div>

          <div className={styles.benefitItem} data-aos="fade-right" data-aos-delay="200">
            <div className={styles.iconWrapper}>
              <Image src={"/svg/Trophy.svg"} height={100} width={100} alt='Lounge Chair' />
              {/* <Trophy className={styles.icon} /> */}
            </div>
            <div className={styles.benefitText}>
              Get 10x Rewards on Every INR 100 spent on Flights & Hotels
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRewards;