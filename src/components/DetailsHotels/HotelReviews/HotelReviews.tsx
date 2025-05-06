'use client';
import React from 'react';
import styles from './HotelReviews.module.css';

const HotelReviews = () => {
  // Rating data
  const ratings = [
    { stars: 5, count: 1546 },
    { stars: 4, count: 849 },
    { stars: 3, count: 314 },
    { stars: 2, count: 182 },
    { stars: 1, count: 268 },
  ];

  const totalRatings = 3159;
  const totalReviews = 1058;
  const averageRating = 4.5;

  // Guest mentions
  const guestMentions = [
    { text: 'Courteous Staff', count: 266 },
    { text: 'Good Stay', count: 181 },
    { text: 'Good Room', count: 173 },
    { text: 'Great Food', count: 96 },
    { text: 'Great Location', count: 94 },
    { text: 'Near Metro city Station', count: 67 },
  ];

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.header}>
        <h2>Guest Reviews & Ratings</h2>
        {/* <h2>Guest Reviews & Rating for Pride Plaza Hotel Aerocity New Delhi</h2> */}
        <div className={styles.sortBy}>
          <span className={styles.sortLabel}>Sort By:</span>
          <span className={styles.sortOption}>
            Latest first
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="1rem"
              height="1rem"
              className={styles.sortIcon}
            >
              <path d="M16 26a3.07 3.07 0 0 1-2.305-1.04L.614 10.091A2.462 2.462 0 0 1 4.312 6.84l11.439 13.003a.334.334 0 0 0 .501 0L27.691 6.84a2.462 2.462 0 1 1 3.697 3.251L18.311 24.955A3.08 3.08 0 0 1 16.002 26z"></path>
            </svg>
          </span>
        </div>
      </div>

      <div className={styles.reviewsContent}>
        <div className={styles.ratingSummary}>
          <div className={styles.ratingBlock}>
            <p className={styles.ratingLabel}>UZO Rating</p>
            <p className={styles.averageRating}>
              <span className={styles.ratingValue}>{averageRating}</span>
              <span className={styles.ratingMax}>/5</span>
            </p>
            <p className={styles.ratingCount}>{totalRatings} Ratings</p>
            <div className={styles.reviewCount}>{totalReviews} Reviews</div>
          </div>

          <div className={styles.ratingsBreakdown}>
            {ratings.map((rating) => (
              <div key={rating.stars} className={styles.ratingRow}>
                <span className={styles.starLabel}>{rating.stars} ★</span>
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBar}>
                    <span
                      className={styles.progressFill}
                      style={{
                        width: `${(rating.count / totalRatings) * 100}%`,
                        backgroundColor: getProgressBarColor(rating.stars),
                      }}
                    ></span>
                  </div>
                </div>
                <div className={styles.ratingCount}>{rating.count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.guestMentions}>
          <h3 className={styles.mentionsTitle}>What our guests say?</h3>
          <div className={styles.mentionsGrid}>
            {guestMentions.map((mention, index) => (
              <span
                key={index}
                className={`${styles.mentionTag} ${index === guestMentions.length - 1 ? styles.yellowTag : styles.greenTag
                  }`}
              >
                {mention.text} ({mention.count})
              </span>
            ))}
            <span className={`${styles.mentionTag} ${styles.moreTag}`}>+ 6 more</span>
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper function to determine progress bar color based on rating
const getProgressBarColor = (stars: number): string => {
  switch (stars) {
    case 5:
      return '#11998e';
    case 4:
      return '#1ca54f';
    case 3:
      return '#f59d00';
    case 2:
      return '#f39c12';
    case 1:
      return '#e74c3c';
    default:
      return '#11998e';
  }
};

export default HotelReviews;