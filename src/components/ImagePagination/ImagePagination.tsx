'use client';
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
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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
      description2: "",
      // description2: "with our Infinity Rewards Program",
      image: "/images/imagePagination2.jpg",
      alt: "Poolside family"
    },
    {
      title: "RESERVE FOR A",
      title2: "REWARDING STAY",
      title3: "GET EXCLUSIVE",
      title4: "DISCOUNTS ON MEALS",
      description: "With Infinity Rewards your points go",
      description2: "",
      // description2: "beyond stays, Join us to dine, relax, and indulge",
      image: "/images/imagePagination3.jpg",
      alt: "Beachfront dining"
    },
    {
      title: "Phoenix",
      title2: "",
      title3: "",
      title4: "",
      description: "Find sparkling pools, kid-friendly activities ",
      description2: "",
      // description2: "and serene spas in Phoenix.",
      image: "/images/imagePagination7.jpg",
      alt: "Pool Resort in Scottsdale AZ"
    },
    {
      title: "Cancun",
      title2: "",
      title3: "",
      title4: "",
      description: "Explore all-inclusive resorts made for ",
      description2: "",
      // description2: "family vacations and spa retreats.",
      image: "/images/imagePagination8.jpg",
      alt: "Spa massage tables"
    },
    {
      title: "Book Hotels on",
      title2: "",
      title3: "uzohotels.com",
      title4: "",
      description: "Get up to 40% off*",
      description2: "",
      image: "/images/imagePagination9.jpg",
      alt: "Spa massage tables"
    },
    // {
    //   title: "Book Hotels on",
    //   title2: "",
    //   title3: "uzohotels.com",
    //   title4: "",
    //   description: "Get up to 40% off*",
    //   description2: "",
    //   image: "/images/imagePagination6.jpg",
    //   alt: "Spa massage tables"
    // },
  ];
  // Effect 5
  // const imageVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 50,
  //     scale: 0.8,
  //     filter: "blur(4px)"
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     filter: "blur(0px)",
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.2, 0.8, 0.4, 1],
  //       when: "beforeChildren"
  //     }
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 1.1,
  //     transition: {
  //       duration: 0.3,
  //       ease: "easeIn"
  //     }
  //   }
  // };

  // Effect 4
  const imageVariants = {
    hidden: {
      opacity: 0,
      rotateX: 90,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "backOut"
      }
    },
    exit: {
      opacity: 0,
      rotateY: 90,
      transition: { duration: 0.3 }
    }
  };

  // Effect3
  // const imageVariants = {
  //   hidden: {
  //     opacity: 0,
  //     rotate: -500, // Slight initial rotation
  //     y: 30,
  //     scale: 1.2
  //   },
  //   visible: {
  //     opacity: 1,
  //     rotate: 0,
  //     y: 0,
  //     scale: 1,
  //     transition: {
  //       type: "spring",
  //       damping: 10,
  //       stiffness: 100,
  //       mass: 0.5
  //     }
  //   },
  //   exit: {
  //     opacity: 0,
  //     x: -50, // Slide out to the left
  //     transition: {
  //       duration: 0.4,
  //       ease: "easeIn"
  //     }
  //   }
  // };

  // effect2
  // const imageVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 20,  // Start slightly below
  //     scale: 0.95
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,   // Move to normal position
  //     scale: 1,
  //     transition: {
  //       duration: 0.7,
  //       ease: [0.2, 0.8, 0.4, 1] // Custom cubic bezier for more bounce
  //     }
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 1.1, // Slight zoom out while fading
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeIn"
  //     }
  //   }
  // };

  // effect1
  // const imageVariants = {
  //   hidden: { opacity: 0.8, scale: 1.5 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 0.8,
  //       ease: "easeOut"
  //     }
  //   },
  //   exit: {
  //     opacity: 0.8,
  //     scale: 1.5, // zoom-in while fading out
  //     transition: {
  //       // delay: 0.1,
  //       duration: 0.6,
  //       ease: "easeInOut"
  //     }
  //   }
  // };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    resetAutoplay();
  };

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    // resetAutoplay();
  }, [slides.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    if (isPlaying) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  }, [isPlaying, nextSlide]);


  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPlaying, resetAutoplay]);


  const currentSlide = slides[activeSlide];

  return (
    <div className={styles.carouselContainerBody}>
      <div className={styles.carouselContainerBodyPad}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className={styles.carouselSlide}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
              >
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.alt}
                  className={styles.slideImage}
                  width={1600}
                  height={800}
                  priority
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeSlide}`}
                    className={styles.slideContent}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.15,
                          delayChildren: 0.2,
                        },
                      },
                      exit: {
                        transition: {
                          staggerChildren: 0.1,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    {/* Top-down: title */}
                    <motion.h3
                      className={styles.slideTitle}
                      variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
                      }}
                    >
                      <span>{currentSlide.title}</span>{" "}
                      <span className={styles.title2}>{currentSlide.title2}</span>
                    </motion.h3>

                    {/* Top-down: title2 */}
                    <motion.h3
                      className={styles.slideTitle2}
                      variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
                      }}
                    >
                      <span>{currentSlide.title3}</span>{" "}
                      <span className={styles.title4}>{currentSlide.title4}</span>
                    </motion.h3>

                    {/* Bottom-up: description */}
                    <motion.p
                      className={styles.slideDescription}
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        exit: { opacity: 0, y: 30, transition: { duration: 0.4, ease: "easeIn" } },
                      }}
                    >
                      {currentSlide.description}
                    </motion.p>

                    {/* Bottom-up: description2 (conditionally) */}
                    {currentSlide.description2 && (
                      <motion.p
                        className={styles.slideDescription}
                        variants={{
                          hidden: { opacity: 0, y: 40 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                          exit: { opacity: 0, y: 30, transition: { duration: 0.4, ease: "easeIn" } },
                        }}
                      >
                        {currentSlide.description2}
                      </motion.p>
                    )}
                  </motion.div>
                </AnimatePresence>


                {/* <div className={styles.slideContent}>
              <h3 className={styles.slideTitle}>
                <span>{currentSlide.title}</span>{" "}
                <span className={styles.title2}>{currentSlide.title2}</span>
              </h3>
              <h3 className={styles.slideTitle2}>
                <span>{currentSlide.title3}</span>{" "}
                <span className={styles.title4}>{currentSlide.title4}</span>
              </h3>
              <p className={styles.slideDescription}>{currentSlide.description}</p>
              {currentSlide.description2 && (
                <p className={styles.slideDescription}>{currentSlide.description2}</p>
              )}
            </div> */}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
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
      </div>
    </div>
  );
};

export default ImagePagination;
