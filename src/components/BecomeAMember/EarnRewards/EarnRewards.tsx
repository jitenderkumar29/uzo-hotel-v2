// components/EarnRewards/EarnRewards.tsx
import React, { useRef } from 'react';
import styles from './EarnRewards.module.css';
import Image from 'next/image';
import Link from 'next/link';
import EarnPoints from './EarnPoints/EarnPoints';

interface RewardCard {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  linkText?: string;
}

const EarnRewards = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  const rewardCards: RewardCard[] = [
    {
      title: "Hotel stays",
      description: "Earn points for every eligible stay at any Radisson Hotel.",
      imageUrl: "/images/EarnRewards1.jpg",
      imageAlt: "Radisson hotel pool",
      linkUrl: "/rewards/hotel-stays",
      linkText: "See more"
    },
    {
      title: "Food and Beverages",
      description: "Earn points on food & beverage purchases at participating hotels.",
      imageUrl: "/images/EarnRewards2.jpg",
      imageAlt: "People dining at Radisson",
      linkUrl: "/rewards/food-beverage"
    },
    {
      title: "Meetings and Events",
      description: "Earn 5 points per USD spent when booking meetings and events.",
      imageUrl: "/images/EarnRewards3.jpg",
      imageAlt: "Business meeting at Radisson",
      linkUrl: "/rewards/meetings-events",
      linkText: "See more"
    }
  ];

  // const scrollLeft = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  //   }
  // };

  // const scrollRight = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>More stays, more rewards</h2>
          {/* <div className={styles.controls}>
          <button
            className={styles.controlButton}
            onClick={scrollLeft}
            aria-label="Previous slide"
          >
            <span className={styles.arrowLeft}></span>
          </button>
          <button
            className={styles.controlButton}
            onClick={scrollRight}
            aria-label="Next slide"
          >
            <span className={styles.arrowRight}></span>
          </button>
        </div> */}
        </div>

        <p className={styles.subtitle}>
          As a Radisson Rewards member, you get rewarded every day, from the very first day.
          Discover various ways by which you can earn points to get discounts or free Award Nights.
        </p>

        <div className={styles.cardContainer} ref={swiperRef}>
          {rewardCards.map((card, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  width={400}
                  height={230}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                {card.linkText && (
                  <Link href={card.linkUrl} className={styles.cardLink}>
                    {card.linkText}
                    <span className={styles.linkArrow}></span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <div>
        <EarnPoints />
      </div>
      {/* <div>
        <UzoRewards />
      </div> */}
    </>
  );
};

export default EarnRewards;