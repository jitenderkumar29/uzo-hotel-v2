'use client'
import React from 'react';
import styles from './OffersUzo.module.css';
import Image from 'next/image';
import OffersTab from './OffersTab/OffersTab';
import HeaderTop from '../Headers/HeaderTop/HeaderTop';
import { HotelSearchProvider } from '@/app/Context/HotelSearchContext';
import HotelSearchBarTop from '../SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop';
import FooterUzo from '../FooterUzo/FooterUzo';

const OffersUzo: React.FC = () => {
  return (
    <> <div className={styles.headerTopBody}>
      <HeaderTop />
    </div>
      <div className={styles.HotelSearchBarTopBody}>
        <HotelSearchProvider>
          <HotelSearchBarTop />
        </HotelSearchProvider>
      </div>
      <section className={styles.bckwht}>
        <div className={styles.top_banner}>
          {/* <div className={styles.banner_content}>
          <h1 className={styles.banner_title}>
            Turn Your Dream Journey<br />
            Into Reality With Special Offers
          </h1>
          <button className={styles.cta_button}>
            Explore Offers <FontAwesomeIcon icon={faArrowRight} className={styles.cta_icon} />
          </button>
          <div className={styles.decorative_elements}>
            <div className={styles.star}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.star}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.star}>
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div> */}
          <div className={styles.banner_image}>
            <Image
              src="/images/offersUzo.jpg"
              alt="Banner"
              // layout="fill"
              // objectFit="cover"
              quality={100}
              width={2536}
              height={460}
              className={styles.banner_img}
            />
          </div>
        </div>
      </section>
      <section>
        <OffersTab />
      </section>
      <div className={styles.footerBox}>
        <FooterUzo />
      </div>
    </>
  );
};

export default OffersUzo;