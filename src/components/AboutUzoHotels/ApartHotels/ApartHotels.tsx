'use client';
import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import styles from './ApartHotels.module.css';

interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: 'Exceptional Homes',
    description: 'Inspected by Mandarin Oriental to ensure the utmost quality and safety standards, as well as prime locations within top leisure destinations. The homes can only be booked as part of Mandarin Oriental&apos;s exclusive collection.',
    image: 'https://images.pexels.com/photos/32281084/pexels-photo-32281084/free-photo-of-charming-barcelona-balcony-architecture-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'PRIVATE, ON-DEMAND\nCULINARY EXPERIENCES',
    description: 'An in-house private chef approved by Mandarin Oriental’s culinary experts will design bespoke menus based on guest preferences and local seasonal produce.  ',
    image: 'https://images.pexels.com/photos/5778600/pexels-photo-5778600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'LUXURIOUS HOUSEKEEPING',
    description: 'Daily service inspired by Mandarin Oriental’s exacting housekeeping standards. ',
    image: 'https://images.pexels.com/photos/6466496/pexels-photo-6466496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'FAMILY-FRIENDLY SERVICES',
    description: 'Special arrangements and activities tailored to children of all ages.',
    image: 'https://images.pexels.com/photos/6232000/pexels-photo-6232000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'WELLNESS & SPA ACCESS',
    description: 'Complimentary access to luxurious spa and wellness facilities.',
    image: 'https://images.pexels.com/photos/5659007/pexels-photo-5659007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const visibleCards = 3;
const clonedCount = visibleCards;

const ApartHotels: React.FC = () => {
  const [index, setIndex] = useState(clonedCount);
  const carouselRef = useRef<HTMLDivElement>(null);

  const fullList = [
    ...features.slice(-clonedCount),
    ...features,
    ...features.slice(0, clonedCount),
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

      if (index >= features.length + clonedCount) {
        setIndex(clonedCount);
        container.style.transform = `translateX(-${container.offsetWidth / visibleCards * clonedCount}px)`;
      } else if (index <= 0) {
        setIndex(features.length);
        container.style.transform = `translateX(-${container.offsetWidth / visibleCards * features.length}px)`;
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
      <h2 className={styles.header}>WHAT MAKES A MANDARIN ORIENTAL EXCEPTIONAL HOME?</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <div className={styles.carouselViewport}>
          <div className={styles.carousel} ref={carouselRef}>
            {fullList.map((item, i) => (
              <div className={styles.card} key={`${item.title}-${i}`}>
                <div className={styles.imageWrapper}>
                  <Image src={item.image} alt={item.title} fill className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.arrowButton} onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ApartHotels;
