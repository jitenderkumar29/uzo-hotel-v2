'use client';
import React, { useState } from 'react';
import styles from './ImagePaginationThree.module.css';
import Image from 'next/image';

const ImagePaginationThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "PLATINUM MEMBERSHIP OF LOYALTY PROGRAM",
      // title: "PLATINUM MEMBERSHIP OF NEUPASS LOYALTY",
      description: "Members can enjoy the benefits of the highest-tier Platinum membership of the UzoOne Loyalty Program.",
      imageUrl: "/images/paginationThree3.jpg"
    },
    {
      id: 2,
      title: "INVITATIONS TO EXCLUSIVE EVENTS",
      description: "Members enjoy access to ultra-exclusive events curated especially by The Chambers.",
      imageUrl: "/images/paginationThree4.jpg"

    },
    {
      id: 3,
      title: "COMPLIMENTARY ROOM UPGRADE",
      description: "Members enjoy priority bookings with complimentary one-level room upgrade, across Uzo, SeleQtions and Vivanta hotels.",
      imageUrl: "/images/paginationThree5.jpg"

    },
    {
      id: 4,
      title: "DINING & WELLNESS EXPERIENCES",
      description: "Members receive exclusive vouchers for complimentary dining and wellness services across Uzo, SeleQtions and Vivanta hotels.",
      imageUrl: "/images/paginationThree6.jpg"

    },
    {
      id: 5,
      title: "COMPLIMENTARY ACCESS TO HOTEL FACILITIES",
      description: "Members enjoy complimentary access to the pool and fitness centre across all Uzo, SeleQtions and Vivanta hotels worldwide.",
      imageUrl: "/images/paginationThree7.jpg"

    },
    {
      id: 6,
      title: "BUSINESS CENTRE & LOUNGE ACCESS",
      description: "Members enjoy unrestricted access to the business centre and club lounge across all Uzo, SeleQtions and Vivanta hotels worldwide.",
      imageUrl: "/images/paginationThree8.jpg"

    },
    {
      id: 7,
      title: "A LIFETIME OF PRIVILEGES",
      description: "Members enjoy a lifetime of unfettered access to all benefits and privileges associated with the membership.",
      imageUrl: "/images/paginationThree1.jpg"

    },
    {
      id: 8,
      title: "ADD-ON CARD",
      description: "Members can share select privileges with their spouse by availing the complimentary add-on card facility.",
      imageUrl: "/images/paginationThree2.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 2 : prev - 1));
  };

  const getVisibleSlides = () => {
    const slidesToShow = [];

    // Previous slide (blurred)
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    slidesToShow.push({ ...slides[prevIndex], position: 'left', blurred: true });

    // Current slides (main)
    slidesToShow.push({ ...slides[currentSlide], position: 'center', blurred: false });
    if (currentSlide + 1 < slides.length) {
      slidesToShow.push({ ...slides[currentSlide + 1], position: 'center', blurred: false });
    } else {
      slidesToShow.push({ ...slides[0], position: 'center', blurred: false });
    }

    // Next slide (blurred)
    const nextIndex = currentSlide + 2 >= slides.length ? (currentSlide + 2) % slides.length : currentSlide + 2;
    slidesToShow.push({ ...slides[nextIndex], position: 'right', blurred: true });

    return slidesToShow;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <div className={styles.divider}></div> */}
        <hr className={styles.divider} />
        <h1 className={styles.title}>
          <span>Unmatched UZO ONE Privileges</span>
          <span></span>
        </h1>
        <hr className={styles.divider} />
      </div>
      <div className={styles.header}>
        <p className={styles.subtitle}>
          The Uzo One Global Membership brings a bouquet of benefits and enhanced privileges for the discerning elite.
        </p>
      </div>
      <div className={styles.carouselContainer}>
        <button className={`${styles.arrow} ${styles.prevArrow}`} onClick={prevSlide}>
          <span className="sr-only">Previous</span>
        </button>

        <div className={styles.carouselTrack}>
          {getVisibleSlides().map((slide, index) => (
            <div
              key={`${slide.title}-${index}`}
              className={`${styles.slide} ${styles[slide.position]} ${slide.blurred ? styles.blurred : ''}`}
            >
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    className={styles.image}
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{slide.title}</h3>
                  {!slide.blurred && (
                    <p className={styles.cardDescription}>{slide.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.nextArrow}`} onClick={nextSlide}>
          <span className="sr-only">Next</span>
        </button>
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: slides.length }).map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagePaginationThree;