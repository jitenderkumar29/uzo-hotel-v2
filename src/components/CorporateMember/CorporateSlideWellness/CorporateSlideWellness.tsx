'use client';
import React, { useState } from 'react';
import styles from './CorporateSlideWellness.module.css';
import Image from 'next/image';

const CorporateSlideWellness = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'IMMERSIVE EXPERIENCES',
      description: 'Innergise offers immersive experiences for daily rejuvenation, from conscious Cooking for focused energy to mindful painting for relaxa',
      imageUrl: '/images/CorporateSlide1.jpg'
    },
    {
      id: 2,
      title: 'J WELLNESS CIRCLE THERAPIES',
      description: 'Align your mind, body, and spirit for a sense of oneness. Our therapies are inspired by blend energizing tech',
      imageUrl: '/images/CorporateSlide2.jpg'
    },
    {
      id: 3,
      title: 'JAMUNITY',
      description: 'Elevate your immunity with our carefully curated cuisine, blending fresh ingredients, antioxidants and superfoods. Craft',
      imageUrl: '/images/CorporateSlide3.jpg'
    },
    {
      id: 4,
      title: "IMMUNITY BOOSTING CUISINE",
      description: "Explore sun-kissed beaches and urban sanctuaries to snow-capped mountains and tranquil waters",
      imageUrl: "/images/CorporateSlide4.jpg"
    },
    {
      id: 5,
      title: "Wellness Circle Bliss",
      description: "Indulge in J Wellness Circle Bliss, a journey of serenity and luxury. Enjoy exclusive spa therapies, rejuvenating salon sessions.",
      imageUrl: "/images/CorporateSlide5.jpg"
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
    slidesToShow.push({ ...slides[prevIndex], position: 'left', blurred: false });

    // Current slides (main)
    slidesToShow.push({ ...slides[currentSlide], position: 'center', blurred: false });
    if (currentSlide + 1 < slides.length) {
      slidesToShow.push({ ...slides[currentSlide + 1], position: 'center', blurred: false });
    } else {
      slidesToShow.push({ ...slides[0], position: 'center', blurred: false });
    }

    // Next slide (blurred)
    const nextIndex = currentSlide + 2 >= slides.length ? (currentSlide + 2) % slides.length : currentSlide + 2;
    slidesToShow.push({ ...slides[nextIndex], position: 'right', blurred: false });

    return slidesToShow;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <div className={styles.divider}></div> */}
        <hr className={styles.divider} />
        <h1 className={styles.title}>
          <span>Wellness Privileges</span>
          <span></span>
        </h1>
        <hr className={styles.divider} />
      </div>
      <div className={styles.header}>
        <p className={styles.subtitle}>
          Unlock your innermost energy with Innergise stay retreats, designed to guide you on a holistic, transformative wellness journey.
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

      {/* <div className={styles.pagination}>
        {Array.from({ length: slides.length }).map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CorporateSlideWellness;