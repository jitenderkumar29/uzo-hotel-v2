import React, { useState, useEffect, useRef } from 'react';
import styles from './GroupSlide.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
}

interface GroupSlideProps {
  slides: Slide[];
  headerTitle?: string;
  headerDescription?: string;
}

const GroupSlide: React.FC<GroupSlideProps> = ({
  slides,
  headerTitle = "An Integrated Hospitality Ecosystem Designed for Growth",
  headerDescription = "Our diversified ecosystem of leading brands, tailored services and expert solutions..."
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleSlides(1);
      else if (width < 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const nextSlide = () => {
    if (activeIndex < slides.length - visibleSlides) {
      setActiveIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedSlide(expandedSlide === index ? null : index);
  };

  return (
    <div className={styles.groupSlide}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <h3>{headerTitle}</h3>
          </h2>
          <p className={styles.subtitle}>
            {headerDescription}
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <button
            onClick={prevSlide}
            className={`${styles.navButton} ${styles.prevButton}`}
            disabled={activeIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className={styles.sliderWrapper}>
            <ul
              className={styles.slider}
              ref={sliderRef}
              style={{
                transform: `translateX(-${(100 / slides.length) * activeIndex}%)`,
                width: `${slides.length * (100 / visibleSlides)}%`
              }}
            >
              {slides.map((slide, index) => (
                <li
                  key={index}
                  className={`${styles.slide} ${expandedSlide === index ? styles.expanded : ''}`}
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <figure className={styles.slideFigure} onClick={() => toggleExpand(index)}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={slide.imageUrl}
                        alt={slide.title}
                        className={styles.slideImage}
                        width={450}
                        height={550}
                      />
                    </div>
                    <figcaption className={styles.slideCaption}>
                      <h3 className={styles.slideTitle}>{slide.title}</h3>
                      <div className={`${styles.slideTextWrapper} ${expandedSlide === index ? styles.visible : ''}`}>
                        <p className={styles.slideText}>{slide.description}</p>
                      </div>
                      <button
                        className={`${styles.toggleButton} ${expandedSlide === index ? styles.closeButton : styles.openButton}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
                      >
                        <FontAwesomeIcon icon={expandedSlide === index ? faMinus : faPlus} />
                      </button>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={nextSlide}
            className={`${styles.navButton} ${styles.nextButton}`}
            disabled={activeIndex >= slides.length - visibleSlides}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupSlide;