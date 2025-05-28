// components/EarnPoints.tsx
'use client';
import styles from './EarnPoints.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGift } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const EarnPoints = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Buy points</h2>
          <p className={styles.description}>
            Need a top-up? Purchasing Extra points is an easy way to increase
            your Radisson rewards account balance and redeem rewards faster.
            Points are available for purchase in increments of 1,000 points, up
            to 250,000 points per account per calendar year.
          </p>
          <Link href="/" className={styles.link}>
            Learn more →
          </Link>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faGift} className={styles.icon} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Gift points</h2>
          <p className={styles.description}>
            Looking for the perfect gift? Purchase and gift points to your
            friends and family to help the special people in your life redeem
            rewards faster. Points are available to purchase as a gift in
            increments of 5,000 points, up to 250,000 points per account, per
            calendar year.
          </p>
          <Link href="/" className={styles.link}>
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EarnPoints;
