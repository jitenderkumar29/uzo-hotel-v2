'use client';
import React, { useState } from 'react';
import styles from './CorporateMember.module.css';
import HeaderTop from '../HeaderTop/HeaderTop';
import { HotelSearchProvider } from '@/app/Context/HotelSearchContext';
import HotelSearchBarTop from '../SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop';
import CorporatePrivilege from './CorporatePrivilege/CorporatePrivilege';
import FooterUzo from '../FooterUzo/FooterUzo';
import CorporateTiers from './CorporateTiers/CorporateTiers';
import Image from 'next/image';

const CorporateMember = () => {
  const [currentSlide,] = useState(0);
  const [, setIsHovered] = useState(false);

  // Sample data for slides
  const slides = [
    {
      id: 1,
      title: "Corporate Member",
      subtitle: "EXPERIENCES LIKE ALWAYS REWARDS LIKE NEVER BEFORE",
      imageUrl: "/images/CorporateMember.jpg",
      altText: "Corporate member benefits"
    },
    // Add more slides as needed
  ];

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // // Auto-rotate slides
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isHovered) {
  //       nextSlide();
  //     }
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [isHovered]);

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
      <div
        className={styles.carouselContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <div className={styles.imageContainer}>
                <Image
                  src={slide.imageUrl}
                  alt={slide.altText}
                  className={styles.slideImage}
                  loading="lazy"
                  width={3200}
                  height={1100}
                />
                <div className={styles.textOverlay}>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {/* <button
        className={`${styles.navArrow} ${styles.prevArrow}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        className={`${styles.navArrow} ${styles.nextArrow}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button> */}

        {/* Indicators */}
        {/* <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      </div>
      <div>
        <CorporatePrivilege />
      </div>
      <div>
        <CorporateTiers />
      </div>
      <div className={styles.footerBox}>
        <FooterUzo />
      </div>
    </>
  );
};

export default CorporateMember;