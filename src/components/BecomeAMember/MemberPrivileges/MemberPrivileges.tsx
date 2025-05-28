'use client';
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './MemberPrivileges.module.css';

interface Benefit {
  title: string;
  image: string;
}

const benefits: Benefit[] = [
  {
    title: 'EXCLUSIVE MEMBER RATES',
    image: 'https://images.pexels.com/photos/8636603/pexels-photo-8636603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'UPTO 25% SAVINGS ON STAYS',
    image: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'MINIMUM 5% UZOCOINS',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
  },
  {
    title: 'EARN AND REDEEM ACROSS STAYS',
    image: 'https://images.pexels.com/photos/7937708/pexels-photo-7937708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'COMPLIMENTARY ROOM UPGRADES',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
  },
  {
    title: 'EARLY CHECK-IN & LATE CHECK-OUT',
    image: 'https://images.pexels.com/photos/12663161/pexels-photo-12663161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const visibleCards = 3;
const totalCards = benefits.length;
const clonedCount = visibleCards;

const MemberPrivileges: React.FC = () => {
  const [index, setIndex] = useState(clonedCount);
  const carouselRef = useRef<HTMLDivElement>(null);

  const fullList = [
    ...benefits.slice(-clonedCount), // cloned from end
    ...benefits,
    ...benefits.slice(0, clonedCount), // cloned from start
  ];

  const slideTo = (newIndex: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth / visibleCards;
    container.style.transition = 'transform 0.5s ease';
    container.style.transform = `translateX(-${slideWidth * newIndex}px)`;
    setIndex(newIndex);
  };

  const handleNext = () => slideTo(index + 1);
  const handlePrev = () => slideTo(index - 1);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleTransitionEnd = () => {
      container.style.transition = 'none';

      if (index >= totalCards + clonedCount) {
        setIndex(clonedCount);
        container.style.transform = `translateX(-${container.offsetWidth / visibleCards * clonedCount}px)`;
      } else if (index <= 0) {
        setIndex(totalCards);
        container.style.transform = `translateX(-${container.offsetWidth / visibleCards * totalCards}px)`;
      }
    };

    container.addEventListener('transitionend', handleTransitionEnd);
    return () => container.removeEventListener('transitionend', handleTransitionEnd);
  }, [index]);

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      container.style.transform = `translateX(-${container.offsetWidth / visibleCards * index}px)`;
    }
  }, [index]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.containerHeader}>
          <hr className={styles.divider} />
          <div className={styles.titleContainer}>
            <h2 className={styles.titleLine2}>Join UZO ONE Membership <br />Privileges And Benefits</h2>
          </div>
          <hr className={styles.divider} />
        </div>
        <p className={styles.subtitle}>
          Unlock a world of refined comfort and personalized hospitality - where your membership grants you priority privileges, exclusive stays, and unforgettable experiences across every destination we call home.
        </p>
        {/* <button className={styles.joinButton}>
          JOIN NOW
          <ChevronRight className={styles.arrowIcon} />
        </button> */}
      </div>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          <ChevronLeft className={styles.arrowIcon} />
        </button>

        <div className={styles.carouselViewport}>
          <div className={styles.carousel} ref={carouselRef}>
            {fullList.map((benefit, i) => (
              <div className={`${styles.card} `} key={`${benefit.title}-${i}`}>
                {/* <div className={`${styles.card} ${i === index ? styles.active : ''}`} key={`${benefit.title}-${i}`}> */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.cardContent}>
                  <hr className={styles.cardDivider} />
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrowButton} onClick={handleNext}>
          <ChevronRight className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
};

export default MemberPrivileges;
