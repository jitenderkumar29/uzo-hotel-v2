'use client'
// components/SimilarHotels.tsx
import React, { useRef, useState } from 'react';
import styles from './SimilarHotels.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  amenities: string[];
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  isCurrent?: boolean;
}

const SimilarHotels: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hotels: Hotel[] = [
    {
      id: '1',
      name: 'Pride Plaza Hotel Aerocity New Delhi',
      location: 'Aerocity',
      rating: 5,
      amenities: ['Air Conditioning', 'Restaurant/Coffee Shop', 'Swimming Pool', 'Health-Spa'],
      originalPrice: 4000,
      discountedPrice: 3600,
      imageUrl: "https://r1imghtlak.ibcdn.com/77e0ce4e32da11eaaef30242ac110004.jpeg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
      isCurrent: true
    },
    {
      id: '2',
      name: 'Deventure Sarovar Portico, New Delhi',
      location: 'Delhi',
      rating: 4,
      amenities: ['Air Conditioning', 'Restaurant/Coffee Shop', 'Swimming Pool', 'Health-Spa'],
      originalPrice: 6000,
      discountedPrice: 5400,
      imageUrl: 'https://r1imghtlak.ibcdn.com/c8a6cdc8-2d3b-429d-a051-37246dddef53.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=webp'
    },
    {
      id: '3',
      name: 'ibis Aerocity - An Accor Brand',
      location: 'Aerocity',
      rating: 5,
      amenities: ['Air Conditioning', 'Restaurant/Coffee Shop', 'Swimming Pool', 'Health-Spa'],
      originalPrice: 4889,
      discountedPrice: 3889,
      imageUrl: 'https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201407242019374758-f2b4ed59-462d-4852-8965-714b6b1b9dd7.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp'
    },
    {
      id: '4',
      name: 'Taurus Sarovar Portico',
      location: 'Mahipalpur',
      rating: 4,
      amenities: ['Air Conditioning', 'Restaurant/Coffee Shop', 'Swimming Pool', 'Health-Spa'],
      originalPrice: 5499,
      discountedPrice: 5224,
      imageUrl: 'https://r1imghtlak.ibcdn.com/a4b4abb0-5fb0-43cc-acc7-e7c28affe7b2.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp'
    },
    {
      id: '5',
      name: 'Aloft New Delhi Aerocity',
      location: 'Aerocity',
      rating: 3,
      amenities: ['Air Conditioning', 'Restaurant/Coffee Shop', 'Swimming Pool', 'Health-Spa'],
      originalPrice: 8000,
      discountedPrice: 6999,
      imageUrl: 'https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202304121711397953-2f87ced8cbef11eeac400a58a9feac02.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp'
    }
  ];

  const scrollToHotel = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index] as HTMLElement;
      carouselRef.current.scrollTo({
        left: card.offsetLeft - carouselRef.current.offsetLeft,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollPrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToHotel(newIndex);
  };

  const scrollNext = () => {
    const newIndex = Math.min(hotels.length - 1, currentIndex + 1);
    scrollToHotel(newIndex);
  };

  return (
    <section className={styles.similarHotels}>
      <div className={styles.header}>
        <h2>Similar Properties to Pride Plaza Hotel Aerocity New Delhi</h2>
        <div className={styles.controls}>
          <button
            onClick={scrollPrev}
            className={styles.arrowButton}
            disabled={currentIndex === 0}
            aria-label="Previous hotel"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={scrollNext}
            className={styles.arrowButton}
            disabled={currentIndex === hotels.length - 1}
            aria-label="Next hotel"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div ref={carouselRef} className={styles.carousel}>
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className={`${styles.hotelCard} ${hotel.isCurrent ? styles.currentHotel : ''}`}
            >
              <div className={styles.hotelCardInner}>
                <div className={styles.hotelImage}>
                  <Image
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    fill // This makes the image fill the container
                    style={{
                      objectFit: 'cover' // This ensures the image covers the area while maintaining aspect ratio
                    }}
                    sizes="(max-width: 768px) 200vw, 150vw" // Responsive sizing
                  // width={520}
                  // height={350}
                  // layout="responsive"
                  />
                </div>
                <div className={styles.hotelDetails}>
                  <div className={styles.rating}>
                    {/* {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="15"
                        height="14"
                        className={i < hotel.rating ? styles.starFilled : styles.starEmpty}
                      >
                        <path d="m7.15 11.622 3.469 2.13c.635.39 1.412-.187 1.245-.917l-.92-4.004 3.068-2.699c.56-.492.259-1.425-.477-1.484L9.5 4.3 7.92.515a.831.831 0 0 0-1.537 0l-1.58 3.776-4.036.348C.031 4.7-.27 5.632.29 6.124l3.067 2.698-.92 4.005c-.166.73.61 1.307 1.246.916z" />
                      </svg>
                    ))} */}
                    <div className={styles.hotelTypeButton}> {hotel.rating} <span className={styles.star}>★ </span>Hotel</div>
                    {/* <div> Rating Review</div> */}
                    <div className={styles.reviews}>
                      <div>
                        <span className={styles.ratingTotal}>
                          <div>Excellent </div>
                          <div>3125 Ratings{" "}</div>
                          {/* <br /> */}

                          {/* <span className={styles.rating}></span> */}
                        </span>
                      </div>
                      <div className={styles.ratingBadge}>4/5</div>
                      {/* <span className={styles.hotelType}> {hotel.rating} ★ Hotel</span> */}
                    </div>
                  </div>
                  <h3 className={styles.hotelName}>{hotel.name}</h3>
                  <p className={styles.location}>{hotel.location}</p>

                  <div className={styles.amenities}>
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className={styles.amenity}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.checkIcon} />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.pricingContainer}>
                    <div className={styles.pricing}>
                      {hotel.discountedPrice < hotel.originalPrice && (
                        <span className={styles.originalPrice}>₹{hotel.originalPrice.toLocaleString()}</span>
                      )}
                      <span className={styles.discountedPrice}>₹{hotel.discountedPrice.toLocaleString()}</span>
                      <p className={styles.perNight}><strong>1 room</strong> per night</p>
                    </div>
                    <button className={styles.bookButton}>BOOK NOW</button>
                  </div>
                </div>
              </div>
              {hotel.isCurrent && <span className={styles.currentBadge}>Current Hotel</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarHotels;
