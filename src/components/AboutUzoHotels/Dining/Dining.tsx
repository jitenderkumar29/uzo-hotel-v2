// components/Dining.tsx
'use client';
import React from 'react';
import styles from './Dining.module.css';
import { FaUtensils, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

const Dining = () => {
  return (
    <section className={styles.teaserLink}>
      <div className={styles.teaserLinkWrapper}>

        <div className={styles.teaserLinkContent}>
          <h3 className={styles.title}>
            <FaUtensils className={styles.icon} />
            EXCLUSIVE DINING BENEFITS
          </h3>
          <div className={styles.description}>
            Mandarin Oriental hotels and resorts now offer special Fans of M.O. dining amenities
            to delight and surprise our members.
          </div>
          <div className={styles.ctas}>
            <Link href="/aboutUzoHotels" className={`${styles.cta} ${styles.ctaSecondary}`}>
              <FaUserCircle className={styles.ctaIcon} />
              <span>Log In</span>
            </Link>
            <Link href="/aboutUzoHotels" className={`${styles.cta} ${styles.ctaPrimary}`}>
              <span>Become a Fan</span>
            </Link>
          </div>
        </div>

        <div className={styles.teaserLinkImage}>
          {/* Background image will be set via CSS */}
        </div>
      </div>
    </section>
  );
};

export default Dining;