import { useState } from 'react';
import styles from './ImagePaginationTwo.module.css';
import Image from 'next/image';

export default function ImagePaginationTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: '1',
      title: 'CELEBRATED CHEFS',
      description: 'A distinguished roster of world-class talent that embodies culinary excellence with expertise, creativity and precision.',
      imageUrl: '/images/ImagePaginationTwo22.jpg'
    },
    {
      id: '2',
      title: 'LEGENDARY RESTAURANTS',
      description: 'A collection of restaurants recognised for unparalleled dining experiences, authentic culinary traditions, exemplary service and immersive ambience.',
      imageUrl: '/images/ImagePaginationTwo21.jpg'
    },
    {
      id: '3',
      title: 'SIGNATURE RECIPES',
      description: 'Each a testament to our culinary passion and honed over years of dedication. These dishes transcend mere sustenance and weave a tapestry of flavors that leaves a lasting impression.',
      imageUrl: '/images/ImagePaginationTwo3.jpg'
    },
    {
      id: '4',
      title: 'PREMIER GLOBAL CUISINES',
      description: 'Experience the best of local and world flavours where authentic ingredients and techniques blend seamlessly for unparalleled culinary harmony.',
      imageUrl: '/images/ImagePaginationTwo4.jpg'
    },
    {
      id: '5',
      title: 'BEYOND THE ORDINARY',
      description: 'Elegant and intricately crafted experiences embellished with bespoke service, opulent settings and a repertoire of gourmet offerings.',
      imageUrl: '/images/ImagePaginationTwo5.jpg'
    },
    {
      id: '6',
      title: 'PREMIER GLOBAL',
      description: 'Elegant and intricately crafted experiences embellished with bespoke service, opulent settings and a repertoire of gourmet offerings.',
      imageUrl: '/images/ImagePaginationTwo6.jpg'
    },
    {
      id: '7',
      title: 'Luxury GLOBAL',
      description: 'Elegant and intricately crafted experiences embellished with bespoke service, opulent settings and a repertoire of gourmet offerings.',
      imageUrl: '/images/ImagePaginationTwo7.jpg'
    },
    {
      id: '8',
      title: 'ORDINARY GLOBAL',
      description: 'Elegant and intricately crafted experiences embellished with bespoke service, opulent settings and a repertoire of gourmet offerings.',
      imageUrl: '/images/ImagePaginationTwo8.jpg'
    },
    {
      id: '9',
      title: 'GLOBAL CUISINES',
      description: 'Elegant and intricately crafted experiences embellished with bespoke service, opulent settings and a repertoire of gourmet offerings.',
      imageUrl: '/images/ImagePaginationTwo9.jpg'
    },
    {
      id: '10',
      title: 'GLOBAL SIGNATURE',
      description: 'Elegant and intricately crafted experiences embellished with bespoke service, opulent settings and a repertoire of gourmet offerings.',
      imageUrl: '/images/ImagePaginationTwo10.jpg'
    },
    {
      id: '11',
      title: 'GLOBAL RESTAURANTS',
      description: 'Elegant and intricately crafted experiences embellished with bespoke service, opulent settings and a repertoire of gourmet offerings.',
      imageUrl: '/images/ImagePaginationTwo11.jpg'
    },
    // {
    //   id: '12',
    //   title: 'GLOBAL LEGENDARY',
    //   description: 'Elegant and intricately crafted experiences embellished with bespoke service, opulent settings and a repertoire of gourmet offerings.',
    //   imageUrl: '/images/ImagePaginationTwo12.jpg'
    // },
  ];

  const displayCount = 3;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Get the visible items, always showing exactly 3
  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < displayCount; i++) {
      const itemIndex = (currentIndex + i) % items.length;
      visibleItems.push(items[itemIndex]);
    }
    return visibleItems;
  };

  return (
    <div className={styles.containerBody}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <hr className={styles.divider} />
          <h2 className={styles.title}>Fine Dining at Uzo Restaurants</h2>
          <hr className={styles.divider} />
        </div>
        <div className={styles.headerDescription}>
          <p className={styles.subtitle}>
            Embark on a journey of exquisite experiences for the discerning connoisseur,
            seamlessly woven together with impeccable service, sophisticated ambience and
            masterful culinary artistry.
          </p>
        </div>

        {/* Carousel Section */}
        <div className={styles.carousel}>
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className={styles.arrowButton}
            aria-label="Previous slide"
          >
            <div className={styles.arrowPrev} />
          </button>

          {/* Cards Container */}
          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {getVisibleItems().map((item, idx) => (
                <div key={`${item.id}-${idx}`} className={styles.card}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.cardImage}
                    loading="lazy"
                    width={1600}
                    height={900}
                  // width={3200}
                  // height={3433}
                  />
                  <div className={styles.cardContent}>
                    {/* <hr className={styles.cardDivider} /> */}
                    <div className={styles.cardText}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <div className={styles.cardDescription}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className={styles.arrowButton}
            aria-label="Next slide"
          >
            <div className={styles.arrowNext} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.pagination}>
          {items.map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationDot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}