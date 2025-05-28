// components/MemberTiersBenefits.tsx
'use client';
import React, { useRef } from 'react';
import styles from './MemberTiersBenefits.module.css';
import Image from 'next/image';

interface TierCard {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const MemberTiersBenefits: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const cards: TierCard[] = [
    {
      title: 'UZO ONE Classic',
      description: 'Instant benefits from day 1 and become Classic after only 3 stays.',
      imageUrl: '/images/MemberTiersBenefits1.jpg',
      imageAlt: 'Uzo Rewards Brand - Free Room Upgrade Uzo Rewards'
    },
    {
      title: 'UZO ONE Milania',
      description: 'Choose how to be rewarded for a truly elevated experience.',
      imageUrl: '/images/MemberTiersBenefits2.jpg',
      imageAlt: 'Uzo Rewards Brand - Member enjoying a drink with the room sea view'
    },
    {
      title: 'UZO ONE Royal',
      description: 'Ultimate Uzo Rewards experience with tailor-made benefits.',
      imageUrl: '/images/MemberTiersBenefits3.jpg',
      imageAlt: 'UZO Rewards Brand - Friends having Free breakfast for 2 - UZO Rewards'
    }
  ];

  // const scrollLeft = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  //   }
  // };

  // const scrollRight = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Join our UZO ONE tiers and world of benefits</h2>
        {/* <h2 className={styles.title}>Discover our tiers and world of benefits</h2> */}
        {/* <div className={styles.controls}>
          <button
            className={styles.controlButton}
            onClick={scrollLeft}
            aria-label="Previous slide"
          >
            <span className={styles.arrowIcon}>←</span>
          </button>
          <button
            className={styles.controlButton}
            onClick={scrollRight}
            aria-label="Next slide"
          >
            <span className={styles.arrowIcon}>→</span>
          </button>
        </div> */}
      </div>

      <div className={styles.swiperContainer} ref={swiperRef}>
        <div className={styles.swiperWrapper}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  width={600}
                  height={345}
                  className={styles.image}
                  priority={index === 0}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberTiersBenefits;