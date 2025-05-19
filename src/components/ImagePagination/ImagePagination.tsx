// components/ImageCarousel/ImageCarousel.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ImagePagination.module.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideProps {
  title: string;
  title2: string;
  title3: string;
  title4: string;
  description: string;
  description2: string;
  image: string;
  alt: string;
}

const ImagePagination: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideProps[] = [
    {
      title: "ULTIMATE",
      title2: "RELAXATION",
      title3: "WITH UNLIMITED",
      title4: "REWARDS",
      description: "Rewarded with Infinity Rewards Program",
      description2: "",
      image: "/images/imagePagination1.jpg",
      alt: "Woman Travelling"
    },
    {
      title: "CHECK IN FOR",
      title2: "COMFORT",
      title3: "CHECK OUT WITH",
      title4: "REWARDS",
      description: "Unlock exclusive rates & room upgrades",
      description2: "with our Infinity Rewards Program",
      image: "/images/imagePagination2.jpg",
      alt: "Poolside family - The Ritz-Carlton"
    },
    {
      title: "RESERVE FOR A",
      title2: "REWARDING STAY",
      title3: "GET EXCLUSIVE",
      title4: "DISCOUNTS ON MEALS",
      description: "With Infinity Rewards your points go",
      description2: "beyond stays, Join us to dine, relax, and indulge",
      image: "/images/imagePagination3.jpg",
      alt: "Beachfront dining"
    },
    {
      title: "Phoenix",
      title2: "",
      title3: "",
      title4: "",
      description: "Find sparkling pools, kid-friendly activities ",
      description2: "and serene spas in Phoenix.",
      image: "/images/imagePagination4.jpg",
      alt: "Pool Resort in Scottsdale AZ"
    },
    {
      title: "Cancun",
      title2: "",
      title3: "",
      title4: "",
      description: "Explore all-inclusive resorts made for ",
      description2: "family vacations and spa retreats.",
      image: "/images/imagePagination5.jpg",
      alt: "Spa massage tables"
    },
    {
      title: "Book Hotels on",
      title2: "",
      title3: "uzohotels.com",
      title4: "",
      description: "Get up to 40% off*",
      description2: "",
      image: "/images/imagePagination6.jpg",
      alt: "Spa massage tables"
    },
  ];

  // Animation variants
  const textVariants = {
    hidden: (custom: { direction: string }) => ({
      opacity: 0,
      x: custom.direction === 'left' ? -80 : 80,
      y: 20,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 1,
        delay: 0.5,
      },
    },
    exit: (custom: { direction: string }) => ({
      opacity: 0,
      x: custom.direction === 'left' ? 80 : -80,
      y: -20,
      scale: 0.95,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.6,
      },
    }),
  };

  // const textVariants = {
  //   hidden: (custom: { direction: string }) => ({
  //     opacity: 0,
  //     x: custom.direction === 'left' ? -50 : 50,
  //   }),
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: "easeOut"
  //     }
  //   },
  //   exit: (custom: { direction: string }) => ({
  //     opacity: 0,
  //     x: custom.direction === 'left' ? 50 : -50,
  //     transition: {
  //       duration: 0.5
  //     }
  //   })
  // };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.3,
        duration: 0.6
      }
    })
  };

  // Clone first and last slides for seamless infinite scrolling
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0]
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
    const adjustedIndex = index + 1;
    setDirection(index > getRealSlideIndex(activeSlide) ? 'right' : 'left');
    setActiveSlide(adjustedIndex);
    updateSlidePosition(adjustedIndex);
    resetAutoplay();
  };

  const nextSlide = useCallback((): void => {
    setDirection('right');
    setActiveSlide(prev => {
      const nextIndex = (prev + 1) % totalSlides;
      updateSlidePosition(nextIndex);
      return nextIndex;
    });
    resetAutoplay();
  }, [totalSlides, updateSlidePosition]);

  // const prevSlide = useCallback((): void => {
  //   setDirection('left');
  //   setActiveSlide(prev => {
  //     const prevIndex = (prev - 1 + totalSlides) % totalSlides;
  //     updateSlidePosition(prevIndex);
  //     return prevIndex;
  //   });
  //   resetAutoplay();
  // }, [totalSlides, updateSlidePosition]);

  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
  };

  const resetAutoplay = (): void => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    if (isPlaying) {
      autoplayTimerRef.current = setInterval(nextSlide, 5000);
    }
  };

  useEffect(() => {
    // Initialize the carousel position to the first real slide (index 1)
    updateSlidePosition(1, false);
  }, [updateSlidePosition]);

  useEffect(() => {
    // Setup autoplay timer
    if (isPlaying) {
      autoplayTimerRef.current = setInterval(nextSlide, 0);
      // autoplayTimerRef.current = setInterval(nextSlide, 5000);
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
    if (index === 0) return realSlideCount - 1;
    if (index === totalSlides - 1) return 0;
    return index - 1;
  };

  const realActiveSlide = getRealSlideIndex(activeSlide);
  const currentSlide = extendedSlides[activeSlide];

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

              {index === activeSlide && (
                <div className={styles.slideContent}>
                  <AnimatePresence custom={{ direction }} mode="wait">
                    <motion.h3
                      key={`title-${index}`}
                      custom={{ direction }}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={textVariants}
                      className={styles.slideTitle}
                    >
                      <span>{currentSlide.title}</span>{" "}
                      <span className={styles.title2}>{currentSlide.title2}</span>
                    </motion.h3>
                  </AnimatePresence>

                  <AnimatePresence custom={{ direction }} mode="wait">
                    <motion.h3
                      key={`title2-${index}`}
                      custom={{ direction }}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={textVariants}
                      className={styles.slideTitle2}
                    >
                      <span>{currentSlide.title3}</span>{" "}
                      <span className={styles.title4}>{currentSlide.title4}</span>
                    </motion.h3>
                  </AnimatePresence>

                  <AnimatePresence custom={{ direction }} mode="wait">
                    <motion.p
                      key={`desc1-${index}`}
                      custom={0}
                      initial="hidden"
                      animate="visible"
                      variants={descriptionVariants}
                      className={styles.slideDescription}
                    >
                      {currentSlide.description}
                    </motion.p>
                  </AnimatePresence>

                  {currentSlide.description2 && (
                    <AnimatePresence custom={{ direction }} mode="wait">
                      <motion.p
                        key={`desc2-${index}`}
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={descriptionVariants}
                        className={styles.slideDescription}
                      >
                        {currentSlide.description2}
                      </motion.p>
                    </AnimatePresence>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
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
      </button> */}

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