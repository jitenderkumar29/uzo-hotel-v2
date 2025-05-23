// components/MemberTiersBenefits.tsx
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
      title: 'Club',
      description: 'Instant benefits from day 1 and become Premium after only 3 stays.',
      imageUrl: '/images/MemberTiersBenefits1.jpg',
      imageAlt: 'Radisson Rewards Brand - Free Room Upgrade Radisson Rewards'
    },
    {
      title: 'Premium',
      description: 'Choose how to be rewarded for a truly elevated experience.',
      imageUrl: '/images/MemberTiersBenefits2.jpg',
      imageAlt: 'Radisson Rewards Brand - Member enjoying a drink with the room sea view'
    },
    {
      title: 'VIP',
      description: 'Ultimate Radisson Rewards experience with tailor-made benefits.',
      imageUrl: '/images/MemberTiersBenefits3.jpg',
      imageAlt: 'Radisson Rewards Brand - Friends having Free breakfast for 2 - Radisson Rewards'
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
        <h2 className={styles.title}>Discover our tiers and world of benefits</h2>
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