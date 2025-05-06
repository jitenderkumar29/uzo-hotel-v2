'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AboutHotel.module.css';
import { faLocationDot, faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';

const AboutHotel = () => {
  return (
    <section className={styles.aboutHotel}>
      <h2 className={styles.heading}>About the Hotel</h2>
      <p className={styles.subtitle}>
        Experience the perfect blend of style, comfort and convenience at our hotel near New Delhi Airport.
      </p>
      <div className={styles.features}>
        <div className={styles.featureBox}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          {/* <FontAwesomeIcon icon={faStar} className={styles.icon} /> */}
          {/* <div className={styles.icon}>⭐</div> */}
          <p className={styles.featureText}>
            Our convenient location, delectable dining options, and high-quality amenities make us a top choice for travelers.
          </p>
        </div>
        <div className={styles.featureBox}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          {/* <div className={styles.icon}>📍</div> */}
          <p className={styles.featureText}>
            We are just 20km from Qutub Minar and close to many other popular attractions.
          </p>
        </div>
        <div className={styles.featureBox}>
          <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
          {/* <div className={styles.icon}>🍽️</div> */}
          <p className={styles.featureText}>
            Discover delicious culinary experiences in our in-house Bar-Be-Que and 24-hour multi-cuisine restaurant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHotel;
