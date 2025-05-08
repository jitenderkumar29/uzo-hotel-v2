'use client';
import React, { useState } from 'react';
import styles from './Amenities.module.css';
import amenitiesData from '@/app/data/amenitiesData';
import { AmenitiesData } from '@/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faHotTubPerson, faSpa, faWaterLadder } from '@fortawesome/free-solid-svg-icons';
import SectionedAmenitiesDisplay from './SectionedAmenitiesDisplay';

const Amenities: React.FC = () => {
  const { title, sections } = amenitiesData as AmenitiesData;
  const [showAll, setShowAll] = useState(false);

  // Show first 5 sections initially, all when expanded
  const visibleSections = showAll ? sections : sections.slice(0, 5);

  // For each section, show max 5 items initially, all when expanded
  const processedSections = visibleSections.map(section => ({
    ...section,
    items: showAll ? section.items : section.items.slice(0, 4)
  }));





  const hasMoreSections = sections.length > 5;
  const hasMoreItems = sections.some(section => section.items.length > 5);

  // working example of all Amenities
  // const AmenitiesDisplayAll = () => {
  //   const allItems = amenitiesData.sections.flatMap(section => section.items);
  //   return (
  //     <div className={styles.amenitiesContainerAll}>
  //       <h1 className="text-2xl font-bold mb-6">{amenitiesData.title}</h1>

  //       <ul className={styles.multiColumnList}>
  //         {allItems.map((item, index) => (
  //           <li key={index} className={styles.item}>
  //             <span className="mr-2">•</span>
  //             <span>{item}</span>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };
  const AmenitiesHeader = () => (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={`${styles.amenitySection} ${styles.popularAmenities}`}>
        <p className={styles.amenityHeading}>POPULAR AMENITIES</p>
        <ul className={styles.amenityList}>
          <li><FontAwesomeIcon icon={faHotTubPerson} className={styles.pAIcon} /><strong>Jacuzzi</strong></li>
          <li><FontAwesomeIcon icon={faSpa} className={styles.pAIcon} /><strong>Spa</strong></li>
          <li><FontAwesomeIcon icon={faWaterLadder} className={styles.pAIcon} /><strong>Swimming Pool</strong></li>
          <li><FontAwesomeIcon icon={faDumbbell} className={styles.pAIcon} /><strong>Gym</strong></li>
        </ul>
      </div>
    </div >
  )
  const AmenitiesDisplayLess = () => (
    <div className={styles.container}>

      <div className={styles.amenitiesGrid}>
        {processedSections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <ul className={styles.itemsList} >
              {section.items.map((item, itemIndex) => (
                <>
                  <li key={itemIndex} className={styles.item}><span className={styles.bullet}>•</span>
                    {item}
                  </li>
                </>
              ))}
            </ul>
          </div>
        ))}

        {/* Empty divs to maintain 5-column grid when sections count isn't divisible by 5 */}
        {!showAll && Array.from({ length: 5 - Math.min(5, sections.length) }).map((_, i) => (
          <div key={`empty-${i}`} className={styles.emptySection} aria-hidden="true" />
        ))}
      </div>

      {/* {(hasMoreSections || hasMoreItems) && (
        <button
          className={styles.toggleButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show All Amenities'}
        </button>
      )} */}
    </div>
  )

  return (
    <>
      <div className={styles.container}>
        {showAll && (
          <>
            <AmenitiesHeader />
            <SectionedAmenitiesDisplay />
          </>
        )}

        {!showAll && (
          <>
            <AmenitiesHeader />
            <AmenitiesDisplayLess />
          </>)}
        {/* <SectionedAmenitiesDisplay /> */}
        {(hasMoreSections || hasMoreItems) && (
          <button
            className={styles.toggleButton}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show All Amenities'}
          </button>
        )}
      </div>
    </>
  );
};

export default Amenities;