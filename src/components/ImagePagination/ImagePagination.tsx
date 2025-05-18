// components/ImageCarousel/ImageCarousel.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Clone first and last slides for seamless infinite scrolling
  const extendedSlides = [
    slides[slides.length - 1], // last slide cloned at beginning
    ...slides,
    slides[0] // first slide cloned at end
  ];

  const totalSlides = extendedSlides.length;
  const realSlideCount = slides.length;

  const updateSlidePosition = useCallback((index: number, withTransition: boolean = true) => {
    if (slideContainerRef.current) {
      setIsTransitioning(withTransition);
      slideContainerRef.current.style.transition = withTransition ? 'transform 0.5s ease-in-out' : 'none';
      slideContainerRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, []);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);

    // If we're at the cloned first slide (index 0), jump to the real last slide
    if (activeSlide === 0) {
      updateSlidePosition(realSlideCount, false);
      setActiveSlide(realSlideCount);
    }
    // If we're at the cloned last slide (index totalSlides - 1), jump to the real first slide
    else if (activeSlide === totalSlides - 1) {
      updateSlidePosition(1, false);
      setActiveSlide(1);
    }
  }, [activeSlide, realSlideCount, totalSlides, updateSlidePosition]);

  const goToSlide = (index: number): void => {
    // Adjust for the extended slides array
    const adjustedIndex = index + 1;
    setActiveSlide(adjustedIndex);
    updateSlidePosition(adjustedIndex);
    resetAutoplay();
  };

  const nextSlide = useCallback((): void => {
    setActiveSlide(prev => {
      const nextIndex = (prev + 1) % totalSlides;
      updateSlidePosition(nextIndex);
      return nextIndex;
    });
    resetAutoplay();
  }, [totalSlides, updateSlidePosition]);

  const prevSlide = useCallback((): void => {
    setActiveSlide(prev => {
      const prevIndex = (prev - 1 + totalSlides) % totalSlides;
      updateSlidePosition(prevIndex);
      return prevIndex;
    });
    resetAutoplay();
  }, [totalSlides, updateSlidePosition]);

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
    // Initialize the carousel position to the first real slide (index 1)
    updateSlidePosition(1, false);
  }, [updateSlidePosition]);

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
  }, [isPlaying, nextSlide]);

  useEffect(() => {
    // Add transition end event listener
    const container = slideContainerRef.current;
    if (container) {
      container.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener('transitionend', handleTransitionEnd);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [handleTransitionEnd]);

  // Calculate the real slide index for dots and aria attributes
  const getRealSlideIndex = (index: number): number => {
    if (index === 0) return realSlideCount - 1; // first clone is last real slide
    if (index === totalSlides - 1) return 0; // last clone is first real slide
    return index - 1; // adjust for the cloned first slide
  };

  const realActiveSlide = getRealSlideIndex(activeSlide);

  return (
    <div className={styles.carouselContainer}>
      {/* Main Carousel */}
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselSlides}
          ref={slideContainerRef}
        >
          {extendedSlides.map((slide, index) => (
            <div key={`${index}-${slide.title}`} className={styles.carouselSlide}>
              <Image
                src={slide.image}
                alt={slide.alt}
                className={styles.slideImage}
                width={1600}
                height={800}
                priority={index === activeSlide}
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
        disabled={isTransitioning}
      >
        <span className={`${styles.arrowIcon} ${styles.leftArrow}`}></span>
      </button>

      <button
        onClick={nextSlide}
        className={`${styles.carouselNavButton} ${styles.nextButton}`}
        aria-label="Next slide"
        disabled={isTransitioning}
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
              className={`${styles.carouselDot} ${index === realActiveSlide ? styles.active : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === realActiveSlide ? true : undefined}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePagination;