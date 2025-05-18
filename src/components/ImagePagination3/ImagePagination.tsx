// components/ImagePagination/ImagePagination.tsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './ImagePagination.module.css';

interface Slide {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };
  tags: {
    label: string;
    href: string;
  }[];
}

const ImagePagination: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const swiperRef = useRef<NodeJS.Timeout | null>(null);
  const swiperWrapperRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      title: "What Will You Bring Back?",
      description: "Explore our extraordinary hotels and experiences around the world.",
      image: {
        src: "https://cache.marriott.com/is/image/marriotts7prod/pdt-Travel-Shapes-us-434086295474461",
        alt: "Woman Travelling",
        title: "Woman Travelling"
      },
      tags: [
        { label: "Explore More", href: "/en-us/marriott-brands/portfolio/where-can-we-take-you.mi" }
      ]
    },
    {
      title: "Orlando",
      description: "Stay close to theme parks, nature reserves and celebrated restaurants.",
      image: {
        src: "https://cache.marriott.com/is/image/marriotts7prod/rz-mcorz-family-pool-38046",
        alt: "Poolside family - The Ritz-Carlton",
        title: "Poolside family - The Ritz-Carlton"
      },
      tags: [
        { label: "Family Travel", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Orlando&destinationAddress.stateProvince=FL&destinationAddress.country=US&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&activities=family" },
        { label: "Pool", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Orlando&destinationAddress.stateProvince=FL&destinationAddress.country=US&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&amenities=pool" },
        { label: "Resort", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Orlando&destinationAddress.stateProvince=FL&destinationAddress.country=US&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&hotelType=resort" },
        { label: "Spa", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Orlando&destinationAddress.stateProvince=FL&destinationAddress.country=US&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&activities=spa" }
      ]
    },
    {
      title: "Aruba",
      description: "Escape to white-sand beaches, resort-style pools and relaxing spas.",
      image: {
        src: "https://cache.marriott.com/is/image/marriotts7prod/mc-auaar-atardi-aruba-20319",
        alt: "Beachfront dining",
        title: "Beachfront dining"
      },
      tags: [
        { label: "Family Travel", href: "/search/findHotels.mi?destinationAddress.destination=Aruba&destinationAddress.country=AW&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&activities=family" },
        { label: "Pool", href: "/search/findHotels.mi?destinationAddress.destination=Aruba&destinationAddress.country=AW&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&amenities=pool" },
        { label: "Resort", href: "/search/findHotels.mi?destinationAddress.destination=Aruba&destinationAddress.country=AW&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&hotelType=resort" },
        { label: "Spa", href: "/search/findHotels.mi?destinationAddress.destination=Aruba&destinationAddress.country=AW&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&activities=spa" }
      ]
    },
    {
      title: "Phoenix",
      description: "Find sparkling pools, kid-friendly activities and serene spas in Phoenix.",
      image: {
        src: "https://cache.marriott.com/content/dam/marriott-renditions/PHXPC/phxpc-pool-5655-hor-wide.jpg",
        alt: "Pool Resort in Scottsdale AZ",
        title: "Pool Resort in Scottsdale AZ"
      },
      tags: [
        { label: "Family Travel", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Phoenix&destinationAddress.stateProvince=AZ&destinationAddress.country=US&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&activities=family" },
        { label: "Pool", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Phoenix&destinationAddress.stateProvince=AZ&destinationAddress.country=US&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&amenities=pool" },
        { label: "Resort", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Phoenix&destinationAddress.stateProvince=AZ&destinationAddress.country=US&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&hotelType=resort" },
        { label: "Spa", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Phoenix&destinationAddress.stateProvince=AZ&destinationAddress.country=US&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&activities=spa" }
      ]
    },
    {
      title: "Cancun",
      description: "Explore all-inclusive resorts made for family vacations and spa retreats.",
      image: {
        src: "https://cache.marriott.com/is/image/marriotts7prod/lc-cunim-almare-cunim-299-36095",
        alt: "Spa massage tables",
        title: "Spa massage tables"
      },
      tags: [
        { label: "Family Travel", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Cancun&destinationAddress.country=MX&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&activities=family" },
        { label: "All-Inclusive", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Cancun&destinationAddress.country=MX&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&hotelType=all-inclusive" },
        { label: "Resort", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Cancun&destinationAddress.country=MX&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&hotelType=resort" },
        { label: "Spa", href: "/search/findHotels.mi?searchType=InCity&destinationAddress.city=Cancun&destinationAddress.country=MX&view=list&showFullPrice=false&showAvailableHotels=false&currency=default&activities=spa" }
      ]
    }
  ];

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    resetAutoplay();
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoplay();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAutoplay = () => {
    if (swiperRef.current) {
      clearInterval(swiperRef.current);
    }
    if (isPlaying) {
      swiperRef.current = setInterval(nextSlide, 5000);
    }
  };

  useEffect(() => {
    if (swiperWrapperRef.current) {
      swiperWrapperRef.current.style.transform = `translate3d(-${activeSlide * 100}%, 0px, 0px)`;
    }
  }, [activeSlide]);

  useEffect(() => {
    if (isPlaying) {
      swiperRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (swiperRef.current) {
        clearInterval(swiperRef.current);
      }
    };
  }, [isPlaying, slides.length]);

  return (
    <div className={styles.containerFullbleed}>
      <div className={styles.swiperContainer}>
        <div
          className={styles.swiperWrapper}
          ref={swiperWrapperRef}
          style={{ transitionDuration: '300ms' }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.swiperSlide} ${index === activeSlide ? styles.active : ''}`}
              role="group"
              aria-label={`${index + 1} / ${slides.length}`}
              data-swiper-slide-index={index}
            >
              <div className={styles.postcardHolder}>
                <div className={styles.postcardBackground}>
                  <picture>
                    <source
                      media="(min-width: 992px)"
                      srcSet={`${slide.image.src}:Classic-Hor?wid=1100&fit=constrain, ${slide.image.src}:Classic-Hor?wid=2200&fit=constrain 2x`}
                    />
                    <source
                      media="(min-width: 576px)"
                      srcSet={`${slide.image.src}:Wide-Hor?wid=992&fit=constrain, ${slide.image.src}:Wide-Hor?wid=1984&fit=constrain 2x`}
                    />
                    <source
                      media="(max-width: 767px)"
                      srcSet={`${slide.image.src}:Classic-Ver?wid=576&fit=constrain, ${slide.image.src}:Classic-Ver?wid=1152&fit=constrain 2x`}
                    />
                    <img
                      src={slide.image.src}
                      className={styles.postcardImage}
                      alt={slide.image.alt}
                      title={slide.image.title}
                      loading="lazy"
                    />
                  </picture>
                  {/* Mobile overlay */}
                  <div className={styles.imageOverlayMobile}>
                    <h3 className={styles.overlayTitle}>{slide.title}</h3>
                    <p className={styles.overlayDescription}>{slide.description}</p>
                  </div>
                </div>
                <div className={styles.postcardContent}>
                  <h3 className={styles.postcardTitle}>{slide.title}</h3>
                  <p className={styles.postcardDescription}>{slide.description}</p>
                  <div className={styles.postcardButtons}>
                    {slide.tags.map((tag, tagIndex) => (
                      <a
                        key={tagIndex}
                        href={tag.href}
                        className={styles.postcardButton}
                        data-tracking-description={`hpPostcardCard${index + 1}${slide.title.replace(/\s+/g, '')}`}
                      >
                        {tag.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop arrows */}
        <div className={styles.carouselArrowsDesktop}>
          <button
            type="button"
            className={styles.carouselArrowLeft}
            onClick={prevSlide}
            aria-label="Previous"
          >
            <span className={styles.iconArrowLeft}></span>
          </button>
          <button
            type="button"
            className={styles.carouselArrowRight}
            onClick={nextSlide}
            aria-label="Next"
          >
            <span className={styles.iconArrowRight}></span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className={styles.paginationControls}>
          <button
            type="button"
            className={styles.playPauseButton}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <span className={isPlaying ? styles.iconPause : styles.iconPlay}></span>
          </button>

          <button
            type="button"
            className={styles.carouselArrowMobile}
            onClick={prevSlide}
            aria-label="Previous"
          >
            <span className={styles.iconArrowLeft}></span>
          </button>

          <div className={styles.paginationDots}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${index === activeSlide ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.carouselArrowMobile}
            onClick={nextSlide}
            aria-label="Next"
          >
            <span className={styles.iconArrowRight}></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePagination;