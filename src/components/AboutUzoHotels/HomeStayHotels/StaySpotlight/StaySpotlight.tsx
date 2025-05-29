'use client';
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './StaySpotlight.module.css';
import { SpotlightItemInterFace } from "@/interfaces";

// interface SpotlightItem {
//   id: number;
//   title: string;
//   imageUrl: string;
//   link: string;
// }

// const spotlightData: SpotlightItemInterFace[] = [
//   {
//     id: 1,
//     title: 'Amsterdam',
//     imageUrl: 'https://images.pexels.com/photos/2856012/pexels-photo-2856012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     link: '/',
//   },
//   {
//     id: 2,
//     title: 'London hyde park',
//     imageUrl: 'https://images.pexels.com/photos/6587608/pexels-photo-6587608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     link: '/',
//   },
//   {
//     id: 3,
//     title: 'London may fair',
//     imageUrl: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     link: '/en/hong-kong/the-landmark/spa',
//   },
//   {
//     id: 4,
//     title: 'Hong Kong Mandrin Oriental',
//     imageUrl: 'https://images.pexels.com/photos/19251323/pexels-photo-19251323/free-photo-of-chi-lin-nunnery-with-bonsai-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     link: '/en/hong-kong/the-landmark/spa',
//   },
//   {
//     id: 5,
//     title: 'Hong Kong - The Landmark',
//     imageUrl: 'https://images.pexels.com/photos/32296730/pexels-photo-32296730/free-photo-of-international-finance-centre-in-hong-kong-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     link: '/en/hong-kong/the-landmark/spa',
//   },
// ];

const visibleCards = 3;
const clonedCount = visibleCards;
// const totalCards = spotlightData.length;

interface StaySpotlightProps {
  spotlightData: SpotlightItemInterFace[];
}

const StaySpotlight: React.FC<StaySpotlightProps> = ({ spotlightData }) => {
  const [index, setIndex] = useState(clonedCount);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalCards = spotlightData.length;

  const fullList = [
    ...spotlightData.slice(-clonedCount),
    ...spotlightData,
    ...spotlightData.slice(0, clonedCount),
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
        container.style.transform = `translateX(-${container.offsetWidth / visibleCards * clonedCount
          }px)`;
      } else if (index <= 0) {
        setIndex(totalCards);
        container.style.transform = `translateX(-${container.offsetWidth / visibleCards * totalCards
          }px)`;
      }
    };

    container.addEventListener('transitionend', handleTransitionEnd);
    return () => container.removeEventListener('transitionend', handleTransitionEnd);
  }, [index, totalCards]);

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      container.style.transform = `translateX(-${container.offsetWidth / visibleCards * index}px)`;
    }
  }, [index]);

  return (
    <div className={styles.container}>
      <div className={styles.carouselWrapper}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          <ChevronLeft className={styles.arrowIcon} />
        </button>

        <div className={styles.carouselViewport}>
          <div className={styles.carousel} ref={carouselRef}>
            {fullList.map((item, i) => (
              <div className={styles.card} key={`${item.id}-${i}`}>
                <Link href={item.link} className={styles.cardLink}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={styles.cardContent}>
                    {/* <hr className={styles.cardDivider} /> */}
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                </Link>
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

export default StaySpotlight;
