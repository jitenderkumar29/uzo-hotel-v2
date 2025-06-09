import React, { useState, useEffect, useRef } from 'react';
import styles from './Retreats.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Retreat {
  location: string;
  title: string;
  imageUrl: string;
  description?: string;
  link: string;
}

const Retreats: React.FC = () => {
  const retreats: Retreat[] = [
    {
      location: "Boston",
      title: "Inner Strength and Outer Strength",
      imageUrl: "https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/"
    },
    {
      location: "Dubai, Jumeira Beach",
      title: "ReEnergise",
      imageUrl: "https://images.pexels.com/photos/29090573/pexels-photo-29090573/free-photo-of-luxurious-poolside-retreat-in-dubai-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/en/dubai/jumeira-beach/wellness"
    },
    {
      location: "Hong Kong, Mandarin Oriental",
      title: "Signature Traditional Chinese Therapy",
      imageUrl: "https://images.pexels.com/photos/7610571/pexels-photo-7610571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/en/hong-kong/victoria-harbour/wellness/retreat"
    },
    {
      location: "Prague",
      title: "On the Silk Road",
      imageUrl: "https://images.pexels.com/photos/3770110/pexels-photo-3770110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/en/prague/mala-strana/wellness"
    },
    {
      location: "Singapore",
      title: "Journey to Oriental Oasis",
      imageUrl: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Experience an Oriental retreat designed and sequenced to lead you to grow in introspection, awareness and living with intention.",
      link: "/en/singapore/marina-bay/explore/journey-to-oriental-oasis"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex > retreats.length - slidesToShow) {
      setCurrentIndex(Math.max(0, retreats.length - slidesToShow));
    }
  }, [slidesToShow, retreats.length, currentIndex]);

  // const goToSlide = (index: number) => {
  //   setCurrentIndex(Math.max(0, Math.min(index, retreats.length - slidesToShow)));
  // };

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, retreats.length - slidesToShow));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setDragStart('touches' in e ? e.touches[0].clientX : e.clientX);
    setDragOffset(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const movement = clientX - dragStart;
    setDragOffset(movement);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const threshold = carouselRef.current ? carouselRef.current.offsetWidth / 4 : 100;

    if (dragOffset > threshold) {
      prevSlide();
    } else if (dragOffset < -threshold) {
      nextSlide();
    }
  };

  return (
    <div className={styles.retreatsContainer}>
      <section className={styles.heading}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.headingTitle}><span>Retreats</span></h2>
          <div className={styles.headingContent}>
            <div className={styles.headingDescription}>
              <p>Take a few days to rejuvenate and reconnect.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.carouselSection}>
        <div
          className={styles.carouselWrapper}
          ref={carouselRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(calc(${-currentIndex * (100 / slidesToShow)}% + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.5s ease'
              }}
            >
              {retreats.map((retreat, index) => (
                <div
                  key={index}
                  className={styles.slide}
                  style={{ width: `calc(100% / ${slidesToShow})` }}
                >
                  <div className={styles.slideInner}>
                    <div className={styles.slideImage}>
                      <div
                        className={styles.imageWrapper}
                        style={{ backgroundImage: `url(${retreat.imageUrl})` }}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.slideEyebrow}>{retreat.location}</div>
                        <div className={styles.slideTitle}>{retreat.title}</div>
                      </div>
                    </div>
                    {/* <div className={styles.slideContent}>
                      {retreat.description && (
                        <div className={styles.slideDescription}>{retreat.description}</div>
                      )}
                      <div className={styles.slideUtility}>
                        <div className={styles.slideCtas}>
                          <a href={retreat.link} className={styles.slideCtaPrimary}>
                            See More
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            disabled={currentIndex >= retreats.length - slidesToShow}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* <div className={styles.dotsContainer}>
            {Array.from({ length: retreats.length - slidesToShow + 1 }).map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Retreats;