import React, { useState } from 'react';
import styles from './ImagePaginationThree.module.css';

const ImagePaginationThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "A LIFETIME OF PRIVILEGES",
      description: "Members enjoy a lifetime of unfettered access to all benefits and privileges associated with the membership.",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/542fe3ae73435cc2a7d6030259c78010380ca3ec-952x952.jpg?w=768&auto=format&dpr=2"
    },
    {
      title: "ADD-ON CARD",
      description: "Members can share select privileges with their spouse by availing the complimentary add-on card facility.",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/543b2aac064274a9e2ffedf6d93bb18de388ffb1-1398x1228.jpg?w=768&auto=format&dpr=2"
    },
    {
      title: "PLATINUM MEMBERSHIP OF NEUPASS LOYALTY PROGRAM",
      description: "Members can enjoy the benefits of the highest-tier Platinum membership of the NeuPass Loyalty Program.",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/c591dcf25ba49ae7f8f871cbc6ebc8a73fbd3af8-1398x1228.jpg?w=768&auto=format&dpr=2"
    },
    {
      title: "INVITATIONS TO EXCLUSIVE EVENTS",
      description: "Members enjoy access to ultra-exclusive events curated especially by The Chambers.",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/dcd343a34cb1375a9628906f155d23f44d92c43e-1401x1228.jpg?w=768&auto=format&dpr=2"
    },
    {
      title: "COMPLIMENTARY ROOM UPGRADE",
      description: "Members enjoy priority bookings with complimentary one-level room upgrade, across Taj, SeleQtions and Vivanta hotels.",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/dfbf98f21183274346cded0e3341f6c65f3e7d9d-1398x1228.png?w=768&auto=format&dpr=2"
    },
    {
      title: "DINING & WELLNESS EXPERIENCES",
      description: "Members receive exclusive vouchers for complimentary dining and wellness services across Taj, SeleQtions and Vivanta hotels.",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/187c6ac44a997ec9a7ea5984e5326aa05ce872d0-1398x1228.jpg?w=768&auto=format&dpr=2"
    },
    {
      title: "COMPLIMENTARY ACCESS TO HOTEL FACILITIES",
      description: "Members enjoy complimentary access to the pool and fitness centre across all Taj, SeleQtions and Vivanta hotels worldwide.",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/3c084bf091ded4bd16215467ff6c4acfac46658d-1398x1228.png?w=768&auto=format&dpr=2"
    },
    {
      title: "BUSINESS CENTRE & LOUNGE ACCESS",
      description: "Members enjoy unrestricted access to the business centre and club lounge across all Taj, SeleQtions and Vivanta hotels worldwide.",
      imageUrl: "https://cdn.sanity.io/images/ocl5w36p/prod4/1177babe5b6576c0795724bfc5d5906c0fa2abb4-699x614.png?w=768&auto=format&dpr=2"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 2 : prev - 1));
  };

  const getVisibleSlides = () => {
    const slidesToShow = [];

    // Previous slide (blurred)
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    slidesToShow.push({ ...slides[prevIndex], position: 'left', blurred: true });

    // Current slides (main)
    slidesToShow.push({ ...slides[currentSlide], position: 'center', blurred: false });
    if (currentSlide + 1 < slides.length) {
      slidesToShow.push({ ...slides[currentSlide + 1], position: 'center', blurred: false });
    } else {
      slidesToShow.push({ ...slides[0], position: 'center', blurred: false });
    }

    // Next slide (blurred)
    const nextIndex = currentSlide + 2 >= slides.length ? (currentSlide + 2) % slides.length : currentSlide + 2;
    slidesToShow.push({ ...slides[nextIndex], position: 'right', blurred: true });

    return slidesToShow;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <div className={styles.divider}></div> */}
        <h1 className={styles.title}>
          <span>Unmatched Privileges</span>
          <span></span>
        </h1>
        <p className={styles.subtitle}>
          The Chambers Global Membership brings a bouquet of benefits and enhanced privileges for the discerning elite.
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <button className={`${styles.arrow} ${styles.prevArrow}`} onClick={prevSlide}>
          <span className="sr-only">Previous</span>
        </button>

        <div className={styles.carouselTrack}>
          {getVisibleSlides().map((slide, index) => (
            <div
              key={`${slide.title}-${index}`}
              className={`${styles.slide} ${styles[slide.position]} ${slide.blurred ? styles.blurred : ''}`}
            >
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{slide.title}</h3>
                  {!slide.blurred && (
                    <p className={styles.cardDescription}>{slide.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.nextArrow}`} onClick={nextSlide}>
          <span className="sr-only">Next</span>
        </button>
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: slides.length - 1 }).map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagePaginationThree;