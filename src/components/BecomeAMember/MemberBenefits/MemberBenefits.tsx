// components/MemberBenefits/MemberBenefits.tsx
'use client';
import React from 'react';
import styles from './MemberBenefits.module.css';
import Link from 'next/link';
import {
  faPercent,
  faUtensils,
  faClock,
  faBed,
  faHeart,
  faTags,
  faCoffee,
  faStar,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoosterBenefits from './BoosterBenefits/BoosterBenefits';

const MemberBenefits = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.benefitsSection}>
          {/* <div className={styles.progressBar}></div> */}
          <h2 className={styles.sectionTitle}>Exclusive benefits for members</h2>
          <p className={styles.sectionDescription}>
            Each tier offers you a world of member-only benefits to explore, indulge, and enjoy.&nbsp;
            <br />
            Learn more about our benefits in our Terms & Conditions{' '}
            <Link href="/" title="SEO - TERMS AND CONDITIONS" className={styles.link}>
              here
            </Link>.
          </p>

          <div className={styles.benefitsCards}>
            {/* Club Tier */}
            <div className={`${styles.tierCard} ${styles.clubTier}`}>
              <div className={`${styles.tierHeader} ${styles.clubHeader}`}>
                <h3 className={styles.tierTitle}>UZO ONE Classic</h3>
                <p className={styles.tierSubtitle}>Best Deals!</p>
              </div>
              <div className={styles.benefitsList}>

                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faPercent} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>Member Only Rate</h4>
                    <p className={styles.benefitDescription}>Members get up to 15% discount</p>
                  </div>
                </div>

                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>Discount on Food and Beverages</h4>
                    <p className={styles.benefitDescription}>Discount on food and beverages</p>
                  </div>
                </div>

                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faClock} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>Priority Line</h4>
                    <p className={styles.benefitDescription}>Save waiting time during check-in and check-out</p>
                  </div>
                </div>
              </div>
              <div className={styles.moreBenefits}>
                <button className={styles.moreButton}>
                  +2 more benefits<span className={styles.arrowIcon}></span>
                </button>
              </div>
            </div>

            {/* Premium Tier */}
            <div className={`${styles.tierCard} ${styles.premiumTier}`}>
              <div className={`${styles.tierHeader} ${styles.premiumHeader}`}>
                <h3 className={styles.tierTitle}>UZO ONE Milania</h3>
                <p className={styles.tierSubtitle}>5 nights/3 stays</p>
              </div>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faBed} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>Free Room Upgrade</h4>
                    <p className={styles.benefitDescription}>Members enjoy a free room upgrade (upon availability)</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>My Favorite Hotel</h4>
                    <p className={styles.benefitDescription}>Select your favorite Radisson Hotel</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faTags} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>Discount Booster</h4>
                    <p className={styles.benefitDescription}>Enjoy up to 20% discount</p>
                  </div>
                </div>
              </div>

              <div className={styles.moreBenefits}>
                <button className={styles.moreButton}>
                  +10 more benefits<span className={styles.arrowIcon}></span>
                </button>
              </div>
            </div>

            {/* VIP Tier */}
            <div className={`${styles.tierCard} ${styles.vipTier}`}>
              <div className={`${styles.tierHeader} ${styles.vipHeader}`}>
                <h3 className={styles.tierTitle}>UZO ONE Royal</h3>
                <p className={styles.tierSubtitle}>30 nights/20 stays</p>
              </div>
              <div className={styles.benefitsList}>

                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>Free Breakfast for two</h4>
                    <p className={styles.benefitDescription}>Members enjoy free breakfast for two</p>
                  </div>
                </div>

                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>Exclusive VIP access</h4>
                    <p className={styles.benefitDescription}>VIP guests enjoy access to exclusive areas</p>
                  </div>
                </div>

                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
                  </div>
                  <div className={styles.benefitText}>
                    <h4 className={styles.benefitTitle}>24-hour VIP Contact Center</h4>
                    <p className={styles.benefitDescription}>VIP members enjoy exclusive access to VIP Contact Center</p>
                  </div>
                </div>


              </div>
              <div className={styles.moreBenefits}>
                <button className={styles.moreButton}>
                  +14 more benefits<span className={styles.arrowIcon}></span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div>
        <MemberTiersBenefits />
      </div> */}
      <div>
        <BoosterBenefits />
      </div>
      {/* <div>
        <UzoRewards />
      </div> */}
    </>
  );
};

export default MemberBenefits;