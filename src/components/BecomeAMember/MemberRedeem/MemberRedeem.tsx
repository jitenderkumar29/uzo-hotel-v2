import React from 'react';
import styles from './MemberRedeem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface RedeemOption {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  altText: string;
}

const MemberRedeem: React.FC = () => {
  const redeemOptions: RedeemOption[] = [
    {
      id: 'airline-miles',
      title: 'Airline Miles',
      description: 'Redeem your points for airline miles, and get your free flight faster with one of our airline partners.',
      imageUrl: '/images/MemberRedeem1.jpg',
      link: '/',
      altText: 'Radisson Rewards - web & offers - Full Size Points Redemption Airline Miles conversion'
    },
    {
      id: 'priority-pass',
      title: 'Priority Pass',
      description: 'Receive access to over 1,500 airport lounges in 500 cities across 130 countries with the Priority Pass.',
      imageUrl: '/images/MemberRedeem2.jpg',
      link: '/',
      altText: 'Radisson Rewards - web & offers - Full Size Points Redemption Priority Pass'
    },
    {
      id: 'sos-children',
      title: 'SOS Children\'s Villages',
      description: 'Donate your points to enable SOS Children\'s Villages and extend a helping hand to these vulnerable children and provide the care, love and support they need.',
      imageUrl: '/images/MemberRedeem3.jpg',
      link: '/',
      altText: 'Radisson Rewards - Mozambique'
    },
    {
      id: 'first-climate',
      title: 'First Climate',
      description: 'Donate your points to First Climate to help support climate protection projects.',
      imageUrl: '/images/MemberRedeem4.jpg',
      link: '/',
      altText: 'Responsible Business - BRUZT RH Earth Hour x Landing Page Original'
    },
    {
      id: 'carbon-compensated',
      title: 'Carbon Compensated Stays',
      description: 'Compensate your carbon footprint with just 325 points per night.',
      imageUrl: '/images/MemberRedeem5.jpg',
      link: '/',
      altText: 'Responsible Business - Making a difference'
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const slidesToShow = 4;

  const nextSlide = () => {
    if (currentIndex < redeemOptions.length - slidesToShow && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <section className={styles.memberRedeem}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Redeem with our partners</h2>
          <div className={styles.controls}>
            <button
              className={`${styles.controlButton} ${currentIndex === 0 ? styles.disabled : ''}`}
              onClick={prevSlide}
              disabled={currentIndex === 0 || isTransitioning}
              aria-label="Previous slide"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className={`${styles.controlButton} ${currentIndex >= redeemOptions.length - slidesToShow ? styles.disabled : ''}`}
              onClick={nextSlide}
              disabled={currentIndex >= redeemOptions.length - slidesToShow || isTransitioning}
              aria-label="Next slide"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <div
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none',
              width: `${(redeemOptions.length * 100) / slidesToShow}%`
            }}
          >
            {redeemOptions.map((option) => (
              <div
                key={option.id}
                className={styles.slide}
              // style={{
              //   width: `${100 / slidesToShow}%`
              // }}
              >
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image
                      src={option.imageUrl}
                      alt={option.altText}
                      className={styles.image}
                      loading="lazy"
                      height={384}
                      width={670}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{option.title}</h3>
                    <p className={styles.cardDescription}>{option.description}</p>
                    <a href={option.link} className={styles.cardLink}>
                      See more <FontAwesomeIcon icon={faArrowRight} className={styles.linkIcon} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberRedeem;