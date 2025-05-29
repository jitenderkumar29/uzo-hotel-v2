// components/HomeStayHotels.tsx
'use client';
import React, { useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HomeStayHotelsHeader.module.css';
import StaySpotlight from './StaySpotlight/StaySpotlight';
import { AsiaPacific, spotlightData } from '@/app/data';
import Link from 'next/link';

const HomeStayHotelsHeader = () => {
  const [activeTab, setActiveTab] = useState('spotlight');

  const tabs = [
    { id: 'spotlight', label: 'Spotlight' },
    { id: 'asia-pacific', label: 'Asia-Pacific' },
    { id: 'the-americas', label: 'The Americas' },
    { id: 'europe', label: 'Europe' },
    { id: 'middle-east-africa', label: 'Middle East & Africa' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.headingTitle}>
          <span>STAY</span>
        </h2>
        <div className={styles.headingContent}>
          <div className={styles.headingDescription}>
            <p>Discover contemporary luxury with signature oriental charm in our meticulously designed hotels and resorts.</p>
            <Link href="/" className={styles.ctaLink}>
              View All Stays <FontAwesomeIcon icon={faChevronRight} className={styles.ctaIcon} />
            </Link>
          </div>
          <div className={styles.headingCta}>
            {/* <a href="/" className={styles.ctaLink}>
              View All Stays <FontAwesomeIcon icon={faChevronRight} className={styles.ctaIcon} />
            </a> */}
          </div>
        </div>
      </div>

      <ul role="tablist" className={styles.tabGroup}>
        <div
          className={styles.tabSlider}
          style={{
            left: `${tabs.findIndex(tab => tab.id === activeTab) * 25}%`,
            width: `${100 / tabs.length}%`
          }}
        ></div>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            role="presentation"
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
          >
            <button
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={styles.tabButton}
            >
              <div className={styles.tabTitle}>
                <span>{tab.label}</span>
              </div>
            </button>

          </li>

        ))}

      </ul>
      {activeTab === "spotlight" && (<StaySpotlight spotlightData={spotlightData} />)}
      {activeTab === "asia-pacific" && (<StaySpotlight spotlightData={AsiaPacific} />)}
      {/* {activeTab === "the-americas" && (<StaySpotlight spotlightData={TheAmericas} />)}
      {activeTab === "europe" && (<StaySpotlight spotlightData={Europe} />)}
      {activeTab === "middle-east-africa" && (<StaySpotlight spotlightData={MiddleEastAfrica} />)} */}
      {/* {activeTab === "asia-pacific" && <StaySpotlight />} */}
    </section>
  );
};

export default HomeStayHotelsHeader;