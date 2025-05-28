// components/BoosterBenefits.tsx
'use client';
import React from 'react';
import styles from './BoosterBenefits.module.css';
import Image from 'next/image';
import Link from 'next/link';

const BoosterBenefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <div className={styles.row}>
            <div className={styles.contentContainer}>
              <div className={styles.contentWrapper}>
                <p className={styles.headText}>Discount Booster benefit</p>
                <p className={styles.subText}>
                  As a Premium or VIP member you can activate the Discount Booster benefit to enjoy up to 20% discount on all your bookings.
                  {/* <br /><br /> */}
                  &nbsp;When the Discount Booster is activated, you will earn 9 points per USD spent as a Premium member and 12 points per USD spent as a VIP member.
                  {/* <br /><br /> */}
                  &nbsp;Update your Rewards preferences in your account at any moment.
                </p>
                <Link
                  href="/"
                  target="_self"
                  title="Sign in"
                  className={styles.ctaBtn}
                >
                  Sign in
                </Link>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/CorporateSlide5.jpg"
                alt="Radisson Blu Resort and Spa, Split - Outdoor Pool"
                width={384}
                height={670}
                className={styles.bannerImage}
                style={{ aspectRatio: '1.74' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoosterBenefits;