import React, { useState, useEffect, useRef } from 'react';
import styles from './CelebrationType.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const CelebrationType: React.FC = () => {
  const slides: Slide[] = [
    {
      title: "Weddings",
      description: "We want to ensure that every moment of your big day is a memorable one...",
      imageUrl: "https://images.pexels.com/photos/949224/pexels-photo-949224.jpeg",
      altText: "Bride looking at flowers for her wedding banquet"
    },
    {
      title: "Banquets",
      description: "Our dedicated culinary team specializes in creative and exciting menus...",
      imageUrl: "https://images.pexels.com/photos/2504913/pexels-photo-2504913.jpeg",
      altText: "Event at dusk by the lake"
    },
    {
      title: "Events",
      description: "Our talented events team are experts when it comes to creative thinking...",
      imageUrl: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
      altText: "Event in the garden"
    }
  ];

  const totalSlides = slides.length;
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of cloned first slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  const extendedSlides = [
    slides[totalSlides - 1], // Clone of last
    ...slides,
    slides[0]               // Clone of first
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // If at clone of last, jump to real last
      setIsTransitioning(false);
      setCurrentIndex(totalSlides);
    } else if (currentIndex === totalSlides + 1) {
      // If at clone of first, jump to real first
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: isTransitioning ? 'transform 0.5s ease' : 'none'
  };

  return (
    <section className={styles.carousel} aria-label="Celebration types">
      <div className={styles.carouselWrapper}>
        <button className={styles.arrowButton} onClick={prevSlide} aria-label="Previous slide">
          <FaChevronLeft className={styles.arrowIcon} />
        </button>

        <div
          className={styles.slidesContainer}
          style={slideStyle}
          onTransitionEnd={handleTransitionEnd}
          ref={slideRef}
        >
          {extendedSlides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <div
                className={styles.slideImage}
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
                role="img"
                aria-label={slide.altText}
              />
              <div className={styles.slideContent}>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideDescription}>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.arrowButton} onClick={nextSlide} aria-label="Next slide">
          <FaChevronRight className={styles.arrowIcon} />
        </button>

        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentIndex === index + 1 ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index + 1)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CelebrationType;
