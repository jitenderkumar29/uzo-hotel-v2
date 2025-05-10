'use client';
import React, { useState, useEffect } from 'react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage,] = useState(3);
  const [displayMode, setDisplayMode] = useState<'preview' | 'paginated'>('preview');

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
      name: 'Gopal panchal',
      date: '4 Apr, 2025',
      rating: 1,
      comment: 'unhygienic even not well maintain as per the cost value',
      travelerType: 'group',
      reviewsWritten: 1,
    },
    // Additional example reviews to demonstrate pagination
    {
      id: '6',
      initials: 'JD',
      name: 'John Doe',
      date: '3 Apr, 2025',
      rating: 4,
      comment: 'Very comfortable stay. The staff was very attentive to our needs.',
      travelerType: 'family',
      reviewsWritten: 3,
    },
    {
      id: '7',
      initials: 'MS',
      name: 'Mary Smith',
      date: '1 Apr, 2025',
      rating: 5,
      comment: 'Excellent location and amazing breakfast. Would definitely come back!',
      travelerType: 'business',
      reviewsWritten: 5,
    },
    {
      id: '8',
      initials: 'DD',
      name: 'Drruv Doe',
      date: '3 Apr, 2025',
      rating: 5,
      comment: 'Very comfortable stay. The staff was very attentive to our needs.',
      travelerType: 'family',
      reviewsWritten: 5,
    },
    {
      id: '9',
      initials: 'MS',
      name: 'Mary Smith',
      date: '1 Apr, 2025',
      rating: 4,
      comment: 'Excellent Place and amazing breakfast. Would definitely come back!',
      travelerType: 'business',
      reviewsWritten: 5,
    },
  ];

  // Calculate the indexes of the reviews we want to display
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Calculate total number of pages
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle showing more or less reviews
  const toggleExpanded = () => {
    if (expanded) {
      setDisplayMode('preview');
      setExpanded(false);
    } else {
      setDisplayMode('paginated');
      setExpanded(true);
    }
  };

  // Reset current page when switching between preview and paginated modes
  useEffect(() => {
    setCurrentPage(1);
  }, [displayMode]);

  // Decide which reviews to show based on display mode
  const visibleReviews = displayMode === 'preview' ? reviews.slice(0, 3) : currentReviews;

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

      {reviews.length > 3 && !expanded && (
        <button
          className={styles.showMoreButton}
          onClick={toggleExpanded}
        >
          {`+ ${reviews.length - 3} More`}
        </button>
      )}

      {displayMode === 'paginated' && (
        <>
          <div className={styles.pagination}>
            {/* First Page Button (<<) */}
            <button
              onClick={() => paginate(1)}
              disabled={currentPage === 1}
              className={styles.paginationButton}
              aria-label="First page"
            >
              &lt;&lt;
            </button>

            {/* Previous Page Button (<) */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationButton}
              aria-label="Previous page"
            >
              &lt;
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`${styles.paginationButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
                aria-label={`Page ${i + 1}`}
                aria-current={currentPage === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}

            {/* Next Page Button (>) */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
              aria-label="Next page"
            >
              &gt;
            </button>

            {/* Last Page Button (>>) */}
            <button
              onClick={() => paginate(totalPages)}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
              aria-label="Last page"
            >
              &gt;&gt;
            </button>
          </div>

          <button
            className={styles.showMoreButton}
            onClick={toggleExpanded}
          >
            Show Less
          </button>
        </>
      )}

      {/* {displayMode === 'paginated' && (
        <>
          <div className={styles.pagination}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`${styles.paginationButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              &gt;
            </button>
          </div>

          <button
            className={styles.showMoreButton}
            onClick={toggleExpanded}
          >
            Show Less
          </button>
        </>
      )} */}
    </div>
  );
};

export default TravelerImpressions;