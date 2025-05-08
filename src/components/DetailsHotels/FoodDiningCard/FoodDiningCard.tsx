// components/FoodDiningCard.tsx
'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FoodDiningCard.module.css';
import { faBan, faBowlFood, faBox, faChampagneGlasses, faClock, faDrumstickBite, faMugSaucer, faUtensils } from '@fortawesome/free-solid-svg-icons';

const FoodDiningCard = () => {

  const PropertyRulesCard = () => (
    <section className={styles.rulesSection}>
      <h2>
        Property Rules<span className={styles.subheadingRule}>(For Food & Beverages)</span>
      </h2>
      <div className={styles.cardRule}>
        <div className={styles.cardContentRule}>
          <div className={styles.columnRule}>
            <h3>Allowed</h3>
            <div className={styles.rule}>
              {/* <span className={styles.iconRule}>🍖</span> */}
              <FontAwesomeIcon icon={faDrumstickBite} className={styles.iconRuleAllow} />
              <p>Non-veg food is allowed</p>
            </div>
            <div className={styles.rule}>
              {/* <span className={styles.iconRule}>🍷</span> */}
              <FontAwesomeIcon icon={faChampagneGlasses} className={styles.iconRuleAllow} />
              <p>Alcohol is allowed in the premises</p>
            </div>
          </div>
          <div className={styles.columnRule}>
            <h3>Not Allowed</h3>
            <div className={styles.rule}>
              {/* <span className={styles.iconRule}>🚫</span> */}
              <FontAwesomeIcon icon={faBan} className={styles.iconRuleBan} />
              <p>Food from outside is not allowed</p>
            </div>
            <div className={styles.rule}>
              {/* <span className={styles.iconRule}>📦</span> */}
              <FontAwesomeIcon icon={faBox} className={styles.iconRuleBan} />
              <p>Food delivery is not allowed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );


  return (
    <>
      <section className={styles.foodSection}>
        <h2 className={styles.foodHeading}>Food & Dining</h2>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Cafe Pride (Cafe)</div>
          <div className={styles.cardContent}>
            <div className={styles.info}>
              {/* <span className={styles.icon}>🍽️</span> */}
              <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
              <p>Both Vegetarian & Non-Vegetarian food</p>
            </div>
            <div className={styles.info}>
              {/* <span className={styles.icon}>💰</span> */}
              <FontAwesomeIcon icon={faBowlFood} className={styles.icon} />
              <p>Average meal cost for 1: ₹<strong>2300</strong></p>
            </div>
            <div className={styles.info}>
              {/* <span className={styles.icon}>⏰</span> */}
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
              <p>
                Breakfast <strong>6:30 AM - 10:30 AM</strong> | Lunch <strong>12:00 PM - 3:00 PM</strong> | Dinner <strong>7:00 PM - 11:00 PM</strong>
              </p>
            </div>
            <div className={styles.info}>
              {/* <span className={styles.icon}>🍛</span> */}
              <FontAwesomeIcon icon={faMugSaucer} className={styles.icon} />
              <p>Cuisines: North Indian</p>
            </div>
          </div>
        </div>
      </section>
      <PropertyRulesCard />
    </>
  );
};

export default FoodDiningCard;
