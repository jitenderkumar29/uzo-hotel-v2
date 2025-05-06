'use client';
import React, { useState } from 'react';
import styles from './Amenities.module.css';
import amenitiesData from '@/app/data/amenitiesData';
import { AmenitiesData } from '@/interfaces';

const Amenities: React.FC = () => {
  const { title, sections } = amenitiesData as AmenitiesData;
  const [showAll, setShowAll] = useState(false);

  // Show first 5 sections initially, all when expanded
  const visibleSections = showAll ? sections : sections.slice(0, 5);

  // For each section, show max 5 items initially, all when expanded
  const processedSections = visibleSections.map(section => ({
    ...section,
    items: showAll ? section.items : section.items.slice(0, 5)
  }));

  const hasMoreSections = sections.length > 5;
  const hasMoreItems = sections.some(section => section.items.length > 5);

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>{title}</h1>
      <div className={`${styles.amenitySection} ${styles.popularAmenities}`}>
        <h2>POPULAR AMENITIES</h2>
        <ul className={styles.amenityList}>
          <li><strong>Jacuzzi</strong></li>
          <li>Spa</li>
          <li>Swimming Pool</li>
          <li>Gym</li>
        </ul>
      </div>
      <div className={styles.amenitiesGrid}>
        {processedSections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <ul className={styles.itemsList}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Empty divs to maintain 5-column grid when sections count isn't divisible by 5 */}
        {!showAll && Array.from({ length: 5 - Math.min(5, sections.length) }).map((_, i) => (
          <div key={`empty-${i}`} className={styles.emptySection} aria-hidden="true" />
        ))}
      </div>

      {(hasMoreSections || hasMoreItems) && (
        <button
          className={styles.toggleButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show All Amenities'}
        </button>
      )}
    </div>
  );
};

export default Amenities;