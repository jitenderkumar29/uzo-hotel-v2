'use client';
import React from 'react';
import styles from './BecomeAMember.module.css';
import Image from 'next/image';
import HeaderTop from '../HeaderTop/HeaderTop';
import { HotelSearchProvider } from '@/app/Context/HotelSearchContext';
import HotelSearchBarTop from '../SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop';
import FooterUzo from '../FooterUzo/FooterUzo';
import MemberRewards from './MemberRewards/MemberRewards';
import MemberBenefits from './MemberBenefits/MemberBenefits';
import EarnRewards from './EarnRewards/EarnRewards';

const BecomeAMember = () => {
  return (
    <>
      <div className={styles.headerTopBody}>
        <HeaderTop />
      </div>
      <div className={styles.HotelSearchBarTopBody}>
        <HotelSearchProvider>
          <HotelSearchBarTop />
        </HotelSearchProvider>
      </div>
      <div className={styles.heroContainer}>
        <section className={`${styles.hero} ${styles.heroCommon}`}>
          <div className={`${styles.rhgHero} ${styles.rhgHeroReverse} ${styles.rhgHeroRedesign}`}>
            <div className={styles.rhgHeroImage}>
              <Image
                src="/images/becomeAMember.jpg"
                alt="Uzo Blu Poste Lafayette Resort and Spa, Mauritius - Aerial Hotel View"
                className={styles.imageEntity}
                priority
                height={520}
                width={2000}
              />
            </div>

            <div className={styles.rhgHeroText}>
              <div className={styles.textContent}>
                <h3 className={`${styles.h3} ${styles.rhgTextStrong} ${styles.rhgText2xl} ${styles.rhgHeroTitle}`}>
                  Membership
                </h3>
                <p className={`${styles.rhgTextNormal} ${styles.rhgTextMd}`}>
                  Elevate your travel experience with UZO Hotels Rewards
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <MemberNavBar /> */}
      <MemberRewards />
      <MemberBenefits />
      <EarnRewards />
      <div className={styles.footerBox}>
        <FooterUzo />
      </div>

    </>
  );
};

export default BecomeAMember;