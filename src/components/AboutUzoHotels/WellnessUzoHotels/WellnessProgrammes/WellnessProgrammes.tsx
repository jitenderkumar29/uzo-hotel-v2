'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './WellnessProgrammes.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Programme {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const WellnessProgrammes: React.FC = () => {
  const programmes: Programme[] = [
    {
      title: "Intelligent Movement",
      description: "Intelligent Movement is more than innovation — it's a conscious commitment to progress. Through smart design, energy efficiency, and thoughtful automation, we create a hotel experience that’s as kind to the planet as it is intuitive to the guest.",
      imageUrl: "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: "Intelligent Movement"
    },
    {
      title: "Authentic Rituals",
      description: "We invite you to experience Authentic Rituals — moments of stillness, renewal, and connection. Inspired by ancient wellness practices and delivered with heartfelt care, our rituals guide you into a deeper state of rest and presence, long after check-out.",
      imageUrl: "https://images.pexels.com/photos/7222168/pexels-photo-7222168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: "Authentic Rituals"
    },
    // {
    //   title: "Mindfulness Retreats",
    //   description: "Immerse yourself in our transformative mindfulness programs that help reduce stress and enhance mental clarity through guided practices.",
    //   imageUrl: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg",
    //   altText: "Person meditating at sunrise"
    // }
  ];

  const totalProgrammes = programmes.length;
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of cloned first slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  const extendedProgrammes = [
    programmes[totalProgrammes - 1], // Clone of last
    ...programmes,
    programmes[0]               // Clone of first
  ];

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);


  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);


  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // If at clone of last, jump to real last
      setIsTransitioning(false);
      setCurrentIndex(totalProgrammes);
    } else if (currentIndex === totalProgrammes + 1) {
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
    <section className={styles.carousel} aria-label="Wellness programmes">
      <div className={styles.carouselWrapper}>
        <button className={styles.arrowButton} onClick={prevSlide} aria-label="Previous programme">
          <FaChevronLeft className={styles.arrowIcon} />
        </button>

        <div
          className={styles.slidesContainer}
          style={slideStyle}
          onTransitionEnd={handleTransitionEnd}
          ref={slideRef}
        >
          {extendedProgrammes.map((programme, index) => (
            <div className={styles.slide} key={index}>
              <div
                className={styles.slideImage}
                style={{ backgroundImage: `url(${programme.imageUrl})` }}
                role="img"
                aria-label={programme.altText}
              />
              <div className={styles.slideContent}>
                <h2 className={styles.programmeTitle}>{programme.title}</h2>
                <p className={styles.programmeDescription}>{programme.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.arrowButton} onClick={nextSlide} aria-label="Next programme">
          <FaChevronRight className={styles.arrowIcon} />
        </button>

        <div className={styles.dotsContainer}>
          {programmes.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentIndex === index + 1 ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index + 1)}
              aria-label={`View programme ${index + 1}`}
              aria-current={currentIndex === index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessProgrammes;