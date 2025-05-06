'use client';
import React, { useState } from 'react';
import styles from './TravelerImpressions.module.css';

interface Review {
  id: string;
  initials: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  travelerType?: string;
  reviewsWritten?: number;
}

const TravelerImpressions: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const aiSummary = `This property boasts a prime location near the airport, making it a preferred choice for travelers. Guests appreciate the spacious and well-furnished rooms, supportive staff, and delicious breakfast options. The ambiance is highlighted as a strong point, alongside the polite service. Many guests recommend the property for its cleanliness and value for money. However, check-in and check-out processes could be quicker. Overall, it continues to receive positive feedback for a comfortable and convenient stay.`;

  const reviews: Review[] = [
    {
      id: '1',
      initials: 'A',
      name: 'Ay',
      date: '2 May, 2025',
      rating: 5,
      comment: 'good',
    },
    {
      id: '2',
      initials: 'BA',
      name: 'Bhavesh Abrol',
      date: '30 Apr, 2025',
      rating: 5,
      comment: 'Stay was fabulous',
    },
    {
      id: '3',
      initials: 'BK',
      name: 'Beauty Konwar',
      date: '29 Apr, 2025',
      rating: 5,
      comment: 'Nice stay',
    },
    {
      id: '4',
      initials: 'SG',
      name: 'Sanjeev Gupta',
      date: '28 Apr, 2025',
      rating: 4,
      comment: '1. We have booked Pool view Room But hotel not provide this type room 2 we have booked Premier room But hotel providing same room normal',
      reviewsWritten: 1,
    },
    {
      id: '5',
      initials: 'GP',
      name: 'gopal panchal',
      date: '4 Apr, 2025',
      rating: 1,
      comment: 'unhygienic even not well maintain as per the cost value',
      travelerType: 'group',
      reviewsWritten: 1,
    },
  ];

  const visibleReviews = expanded ? reviews : reviews.slice(0, 2);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <img
            src="https://go-assets.ibcdn.com/u/GI/images/1742967762081-AIpersuasion.png"
            alt="AI Icon"
            className={styles.aiIcon}
          />
          <div>
            <h2 className={styles.title}>Traveller Impressions</h2>
            <p className={styles.subtitle}>Powered by Generative AI using recent user reviews</p>
          </div>
        </div>
      </div>

      <div className={styles.aiSummary}>
        <p>{aiSummary}</p>
      </div>

      <div className={styles.reviewsContainer}>
        {visibleReviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <div className={styles.userAvatar}>
                <span>{review.initials}</span>
              </div>
              <div className={styles.userInfo}>
                <div className={styles.nameAndDate}>
                  <span className={styles.userName}>{review.name}</span>
                  <span className={styles.stayDate}>(Stayed {review.date})</span>
                </div>
                {(review.travelerType || review.reviewsWritten) && (
                  <div className={styles.metaInfo}>
                    {review.travelerType && (
                      <span className={styles.travelerType}>{review.travelerType} Traveller</span>
                    )}
                    {review.reviewsWritten && (
                      <span className={styles.reviewsCount}>{review.reviewsWritten} Reviews Written</span>
                    )}
                  </div>
                )}
              </div>
              <div className={styles.rating}>
                <span className={styles.ratingValue}>{review.rating}</span>
                <span className={styles.ratingMax}>/5</span>
              </div>
            </div>
            <div className={styles.reviewContent}>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 2 && (
        <button
          className={styles.showMoreButton}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : `+ ${reviews.length - 2} More`}
        </button>
      )}
    </div>
  );
};

export default TravelerImpressions;