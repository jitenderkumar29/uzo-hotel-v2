// components/ImageCarousel/ImageCarousel.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './ImagePagination.module.css';
import Image from 'next/image';

interface SlideProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ImagePagination: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const slideContainerRef = useRef<HTMLDivElement | null>(null);

  const slides: SlideProps[] = [
    {
      title: "What Will You Bring Back?",
      description: "Explore our extraordinary hotels and experiences around the world.",
      image: "/images/imagePagination1.jpg",
      alt: "Woman Travelling"
    },
    {
      title: "Orlando",
      description: "Stay close to theme parks, nature reserves and celebrated restaurants.",
      image: "/images/imagePagination2.jpg",
      alt: "Poolside family - The Ritz-Carlton"
    },
    {
      title: "Aruba",
      description: "Escape to white-sand beaches, resort-style pools and relaxing spas.",
      image: "/images/imagePagination3.jpg",
      alt: "Beachfront dining"
    },
    {
      title: "Phoenix",
      description: "Find sparkling pools, kid-friendly activities and serene spas in Phoenix.",
      image: "/images/imagePagination4.jpg",
      alt: "Pool Resort in Scottsdale AZ"
    },
    {
      title: "Cancun",
      description: "Explore all-inclusive resorts made for family vacations and spa retreats.",
      image: "/images/imagePagination5.jpg",
      alt: "Spa massage tables"
    }
  ];


  const goToSlide = (index: number): void => {
    setActiveSlide(index);
    resetAutoplay();
  };

  const nextSlide = (): void => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    resetAutoplay();
  };

  const prevSlide = (): void => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoplay();
  };

  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
  };

  const resetAutoplay = (): void => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    if (isPlaying) {
      autoplayTimerRef.current = setInterval(nextSlide, 3000);
    }
  };

  useEffect(() => {
    // Update slide position when activeSlide changes
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(-${activeSlide * 100}%)`;
    }
  }, [activeSlide]);

  useEffect(() => {
    // Setup autoplay timer
    if (isPlaying) {
      autoplayTimerRef.current = setInterval(nextSlide, 3000);
    } else if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className={styles.carouselContainer}>
      {/* Main Carousel */}
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselSlides}
          ref={slideContainerRef}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.carouselSlide}>
              <Image
                src={slide.image}
                alt={slide.alt}
                className={styles.slideImage}
                width={1600}
                height={800}
              />
              <div className={styles.slideContent}>
                <h3 className={styles.slideTitle}>{slide.title}</h3>
                <p className={styles.slideDescription}>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`${styles.carouselNavButton} ${styles.prevButton}`}
        aria-label="Previous slide"
      >
        <span className={`${styles.arrowIcon} ${styles.leftArrow}`}></span>
      </button>

      <button
        onClick={nextSlide}
        className={`${styles.carouselNavButton} ${styles.nextButton}`}
        aria-label="Next slide"
      >
        <span className={`${styles.arrowIcon} ${styles.rightArrow}`}></span>
      </button>

      {/* Controls: Play/Pause button and Dots */}
      <div className={styles.carouselControls}>
        <button
          onClick={togglePlayPause}
          className={styles.playPauseButton}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <div className={styles.pauseIcon}>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className={styles.playIcon}></div>
          )}
        </button>

        <div className={styles.carouselDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.carouselDot} ${index === activeSlide ? styles.active : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide ? true : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePagination;