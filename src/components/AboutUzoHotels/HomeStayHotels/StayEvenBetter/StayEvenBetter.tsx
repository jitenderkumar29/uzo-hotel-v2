'use client';
import React from 'react';
import styles from './StayEvenBetter.module.css';
import { faWifi, faGift, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const StayEvenBetter = () => {
  return (
    <section className={styles.teaserLink}>
      <div className={styles.teaserLinkWrapper}>

        <div className={styles.teaserLinkContent}>
          <h3 className={styles.title}>MAKE YOUR STAY EVEN BETTER.</h3>
          <div className={styles.description}>
            <p>
              By becoming a Fan of M.O., you can now enjoy:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <FontAwesomeIcon icon={faWifi} className={styles.icon} />
                <span>Complimentary WiFi</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                <span>Members-only offers</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGift} className={styles.icon} />
                <span>Welcome amenity every stay</span>
              </li>
            </ul>
            <p>Wherever that may be.</p>
          </div>
          <div className={styles.ctas}>
            <Link href="/aboutUzoHotels" className={styles.secondaryCta}>
              <span>Why Join?</span>
            </Link>
            <Link href="/aboutUzoHotels" className={styles.primaryCta}>
              <span>Become a Fan</span>
            </Link>
          </div>
        </div>

        <div className={styles.teaserLinkImage}>
          {/* Using Next.js Image component for optimized loading */}
          <div className={styles.imageWrapper}></div>
        </div>
      </div>
    </section>
  );
};

export default StayEvenBetter;