'use client';
import React, { useState } from 'react'
import styles from './RatingCard.module.css'
import { RatingCardPropsInterFace } from "@/interfaces"


const RatingCard = ({ reviewScore, totalRatings, breakdown }: RatingCardPropsInterFace) => {
  const [openRatingId, setOpenRatingId] = useState(false);

  return (
    <div className={styles.cardRating}
      onMouseEnter={() => setOpenRatingId(!openRatingId)}
      onMouseLeave={() => setOpenRatingId(!openRatingId)}
    >
      <div className={styles.leftRating}>
        <div className={styles.scoreRating}>{reviewScore}</div>
        <div className={styles.totalRating}>{totalRatings} Ratings</div>
      </div>
      <div className={styles.rightRating}>
        {breakdown.map((item) => (
          <div key={item.stars} className={styles.ratingRowRating}>
            <span className={styles.starLabelRating}>{item.stars} ★</span>
            <div className={styles.barContainerRating}>
              <div
                className={styles.barFillRating}
                style={{ width: `${(item.count / totalRatings) * 100}%` }}
              />
            </div>
            <span className={styles.countRating}>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCard
