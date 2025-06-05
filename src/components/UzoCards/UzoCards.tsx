'use client';
import React from 'react'
import styles from './UzoCards.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import HeaderTop from '../Headers/HeaderTop/HeaderTop'
import HotelSearchBarTop from '../SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop'
import { HotelSearchProvider } from '@/app/Context/HotelSearchContext'
import UzoCardsInfo from './UzoCardsInfo/UzoCardsInfo'
import CardBenefits from './CardBenefits/CardBenefits'
import AvailBenefits from './AvailBenefits/AvailBenefits'
import CardsList from './CardsList/CardsList'
import Image from 'next/image'
import FooterUzo from '../FooterUzo/FooterUzo';

const UzoCards: React.FC = () => {
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
      <section className={styles.uzoCardsSection}>
        <div className={styles.bannerArea}>
          <div className={styles.bnrContent}>
            <p className={styles.bnrSubtitle}>Uncover New Horizons With</p>
            <h1 className={styles.bnrTitle}>
              UZO Hotel&apos;s Co-Branded <br />
              Debit & Credit Cards
            </h1>
            <p className={styles.bnrTagline}>
              <strong>Offering Extraordinary Benefits for Elevated Experiences</strong>
            </p>
            <p className={styles.bnrDesc}>
              Unlock a world full of assured travel perks and other benefits with our Co-Branded cards, where every swipe is
              a step towards your next dream getaway.
            </p>
            <a href="#Applynow" className={styles.ctaButton}>
              Get Your Card <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
            </a>
          </div>

          <div className={styles.cardImages}>
            <Image src="/icons/uzoCards1.png" alt="Bank of Baroda Card" className={`${styles.card} ${styles.card1}`} height={200} width={280} />
            <Image src="/icons/uzoCards2.png" alt="Standard Chartered Card" className={`${styles.card} ${styles.card2}`} height={200} width={280} />
            <Image src="/icons/uzoCards3.png" alt="DBS Green Card" className={`${styles.card} ${styles.card3}`} height={200} width={280} />
            <Image src="/icons/uzoCards4.png" alt="PNB Card" className={`${styles.card} ${styles.card4}`} height={200} width={280} />
          </div>
        </div>
      </section>
      <UzoCardsInfo />
      <CardBenefits />
      <AvailBenefits />
      <CardsList />
      <div className={styles.footerBox}>
        <FooterUzo />
      </div>
    </>
  )
}

export default UzoCards
