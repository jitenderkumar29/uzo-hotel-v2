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

const slides: Slide[] = [
  {
    title: 'We Are an Unrivaled Leader across Brand Segments',
    description: 'Our unmatched brand portfolio is the industry’s most diverse: 40+ hotel brands across all segments from luxury to economy, a comprehensive portfolio of extended stay and branded residences, plus entertainment, restaurants & bars, coworking, business services, and more.',
    imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'We Are an Expert Business Partner',
    description: 'We bring unique expertise and solutions to maximize performance, value, and growth for our partners across operational management, talent, sustainability, procurement, distribution, loyalty, digital, and more. Our Business Booster brands bring deep expertise to drive day-to-day operations and performance.',
    imageUrl: 'https://images.pexels.com/photos/7876711/pexels-photo-7876711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'We Are Shaping a New Future for Hospitality',
    description: 'Our pioneering spirit fosters innovation and continuous transformation. We look ahead, trailblazing towards emerging trends and anticipating opportunities. We dynamically form partnerships with start-ups, businesses, and associations, accelerating innovation to design the future of hospitality.',
    imageUrl: 'https://images.pexels.com/photos/52988/swim-water-diving-underwater-52988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'We Are the Most Diversified Hospitality Group',
    description: 'Our holistic ecosystem of brands and experiences, value-added services and solutions, all-in-one booking platform, and powerful loyalty program allows us to expand our services and relationships with our clients and enhance the Accor experience both during and beyond hotel stays, while delivering business performance to our partners.',
    imageUrl: 'https://images.pexels.com/photos/7108317/pexels-photo-7108317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Global Presence with Local Expertise',
    description: 'We bring unique expertise and solutions to maximize performance, value, and growth for our partners across operational management, talent, sustainability, procurement, distribution, loyalty, digital, and more. Our Business Booster brands bring deep expertise to drive day-to-day operations and performance.',
    imageUrl: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Innovation in Guest Experiences',
    description: 'Our pioneering spirit fosters innovation and continuous transformation. We look ahead, trailblazing towards emerging trends and anticipating opportunities. We dynamically form partnerships with start-ups, businesses, and associations, accelerating innovation to design the future of hospitality.',
    imageUrl: 'https://images.pexels.com/photos/2451570/pexels-photo-2451570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const GroupSlide: React.FC = () => {
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
            <h3>An Integrated Hospitality Ecosystem Designed for Growth</h3>
          </h2>
          <p className={styles.subtitle}>
            Our diversified ecosystem of leading brands, tailored services and expert solutions...
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
