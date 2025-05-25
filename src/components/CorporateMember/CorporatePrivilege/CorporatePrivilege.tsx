'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './CorporatePrivilege.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Benefit {
  title: string;
  image: string;
}

const CorporatePrivilege: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: 'EXCLUSIVE MEMBER RATES',
      image: '/images/CorporatePrivilege1.jpg'
    },
    {
      title: 'UPTO 20% SAVINGS ON STAYS',
      // title: 'UPTO 20% SAVINGS ON STAYS, DINING, SPA AND MORE',
      image: '/images/CorporatePrivilege2.jpg'
    },
    {
      title: 'MINIMUM 4% NEUCOINS',
      // title: 'MINIMUM 4% NEUCOINS\n1 NEUCOIN = 1 RUPEE',
      image: '/images/CorporatePrivilege3.jpg'
    },
    {
      title: 'EARN AND REDEEM ACROSS STAYS',
      // title: 'EARN AND REDEEM ACROSS STAYS, DINING, SPAS AND MORE',
      image: '/images/CorporatePrivilege4.jpg'
    },
    {
      title: 'COMPLIMENTARY ROOM UPGRADES',
      image: '/images/CorporatePrivilege5.jpg'
    },
    {
      title: 'EARLY CHECK-IN & CHECK-OUT',
      // title: 'EARLY CHECK-IN AND LATE CHECK-OUT',
      image: '/images/CorporatePrivilege6.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Create extended array for infinite scroll
  const extendedBenefits: Benefit[] = [...benefits, ...benefits, ...benefits];

  const getCardWidth = (): number => {
    if (!carouselRef.current || !carouselRef.current.children[0]) return 316; // 300 + 16 gap
    const cardElement = carouselRef.current.children[0] as HTMLElement;
    const cardWidth = cardElement.offsetWidth;
    const gap = 16;
    return cardWidth + gap;
  };

  const slideToPosition = useCallback((index: number, smooth: boolean = true): void => {
    if (!carouselRef.current) return;
    const cardWidth = getCardWidth();
    const scrollLeft = cardWidth * index;

    carouselRef.current.scrollTo({
      left: scrollLeft,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, []);
  // const slideToPosition = (index: number, smooth: boolean = true): void => {
  //   if (!carouselRef.current) return;
  //   const cardWidth = getCardWidth();
  //   const scrollLeft = cardWidth * index;

  //   if (smooth) {
  //     carouselRef.current.scrollTo({
  //       left: scrollLeft,
  //       behavior: 'smooth'
  //     });
  //   } else {
  //     carouselRef.current.scrollLeft = scrollLeft;
  //   }
  // };

  const nextSlide = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    slideToPosition(benefits.length + newIndex);
  };

  const prevSlide = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    slideToPosition(benefits.length + newIndex);
  };

  // Handle infinite scroll reset
  useEffect(() => {
    const timer = setTimeout(() => {
      slideToPosition(benefits.length, false);
    }, 100);
    return () => clearTimeout(timer);
  }, [slideToPosition, benefits.length]); // ✅ Fix 1

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex >= benefits.length) {
        setCurrentIndex(currentIndex - benefits.length);
        slideToPosition(benefits.length + (currentIndex - benefits.length), false);
      } else if (currentIndex < 0) {
        setCurrentIndex(currentIndex + benefits.length);
        slideToPosition(benefits.length + (currentIndex + benefits.length), false);
      }
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex, benefits.length, slideToPosition]); // ✅ Fix 2

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     slideToPosition(benefits.length, false);
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);

  // // Get visible card indices (center 3 cards)
  // const getVisibleIndices = (): number[] => {
  //   const center = currentIndex;
  //   const indices: number[] = [];
  //   for (let i = -1; i <= 1; i++) {
  //     let index = center + i;
  //     if (index < 0) index += benefits.length;
  //     if (index >= benefits.length) index -= benefits.length;
  //     indices.push(index);
  //   }
  //   return indices;
  // };

  // const visibleIndices = getVisibleIndices();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.containerHeader}>
          <hr className={styles.divider} />
          <div className={styles.titleContainer}>
            {/* <h2 className={styles.titleLine1}>Join UZO</h2> */}
            <h2 className={styles.titleLine2}>Join UZO PASS Corporate Membership <br />Privileges And Benefits</h2>
          </div>
          <hr className={styles.divider} />
        </div>
        <p className={styles.subtitle}>
          Unlock a host of elevated experiences and countless rewards with UZO pass loyalty program.
          Enjoy special room rates, earn and redeem UZO Coins and indulge in exceptional benefits
          on plush stays, exquisite dining, relaxing spa & salon services and more.
        </p>
        <button className={styles.joinButton}>
          JOIN NOW
          {/* <FiArrowRight className={styles.arrowIcon} /> */}
          <ChevronRight className={styles.arrowIcon} />
        </button>
      </div>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrowButton} onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowIcon} />
          {/* <FaArrowLeft className={styles.arrowIcon} /> */}
        </button>

        <div
          className={styles.carousel}
          ref={carouselRef}
        >
          {extendedBenefits.map((benefit: Benefit, index: number) => {
            // const originalIndex = index % benefits.length;
            // const isActive = visibleIndices.includes(originalIndex);

            return (
              <div
                key={`${benefit.title}-${index}`}
                className={`${styles.card} ${styles.active}`}
              >
                {/* <div
                key={`${benefit.title}-${index}`}
                className={`${styles.card} ${isActive ? styles.active : ''}`}
              > */}
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  className={styles.cardImage}
                  height={1074}
                  width={960}
                />
                <div className={styles.cardContent}>
                  <hr className={styles.cardDivider} />
                  <h3 className={styles.cardTitle}>
                    {benefit.title.split('\n').map((line: string, i: number) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < benefit.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <button className={styles.arrowButton} onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
          {/* <FaArrowRight className={styles.arrowIcon} /> */}
        </button>
      </div>
    </div>
  );
};

export default CorporatePrivilege;