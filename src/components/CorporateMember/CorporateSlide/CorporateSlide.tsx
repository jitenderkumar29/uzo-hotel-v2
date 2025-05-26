import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './CorporateSlide.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const CorporateSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from 1 due to clone
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const slides: SlideItem[] = [
    {
      id: 1,
      title: 'IMMERSIVE EXPERIENCES',
      description: 'Innergise offers immersive experiences for daily rejuvenation...',
      imageUrl: 'https://cdn.sanity.io/images/ocl5w36p/prod4/9fb05206e9d912ce6343c0d834c9b0b5fa230d6e-1400x1120.jpg'
    },
    {
      id: 2,
      title: 'J WELLNESS CIRCLE THERAPIES',
      description: 'Align your mind, body, and spirit for a sense of oneness...',
      imageUrl: 'https://cdn.sanity.io/images/ocl5w36p/prod4/8f1d55c662965d52f94ca69f9f8e420268237397-1400x1120.jpg'
    },
    {
      id: 3,
      title: 'JAMUNITY',
      description: 'Explore sun-kissed beaches and urban sanctuaries...',
      imageUrl: 'https://cdn.sanity.io/images/ocl5w36p/prod4/e0ddd1eeb287370163917d224d132c5512fbbc3c-1400x1120.jpg'
    },
    {
      id: 4,
      title: "IMMUNITY BOOSTING CUISINE",
      description: "Elevate your immunity with our carefully curated cuisine...",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/99dcb41e21c139debd8ebd2c30af4f963c82c18c-952x760.jpg"
    }
  ];

  const totalSlides = slides.length;
  const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]]; // Clone last and first

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === extendedSlides.length - 1) {
      setCurrentSlide(1);
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(-50%)`;
        requestAnimationFrame(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.5s ease-in-out';
          }
        });
      }
    }
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides);
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(-${totalSlides * 50}%)`;
        requestAnimationFrame(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.5s ease-in-out';
          }
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentSlide * 50}%)`;
    }
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStartX(null);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselTrack}
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.imageContainer}>
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  className={styles.slideImage}
                  priority
                />
              </div>
              <div className={styles.cardOverlay}>
                <h3 className={styles.slideTitle}>{slide.title}</h3>
                <p className={styles.slideDescription}>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrowButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className={`${styles.arrowButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentSlide === index + 1 ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(index + 1)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}

      </div>
    </div>
  );
};

export default CorporateSlide;
