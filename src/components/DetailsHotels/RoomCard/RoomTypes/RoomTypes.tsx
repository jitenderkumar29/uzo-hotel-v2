'use client';
import React, { useState } from 'react'
import styles from './RoomTypes.module.css'

const RoomTypes = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const roomTypes = [
    'Super Package',
    'Breakfast Included',
    'Breakfast & Lunch/Dinner Included',
    'All Meal',
    // Add more if needed
  ];


  const handleSelect = (type: string) => {
    setSelectedType(type === selectedType ? null : type);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <strong>Filter Type</strong>
          {/* <FaChevronDown className={styles.icon} /> */}
        </div>
        <div className={styles.tagList}>
          {roomTypes.map((type, index) => (
            <>
              <div className={`${styles.tag} ${selectedType === type ? styles.selected : ''}`}>
                <input
                  type="checkbox"
                  checked={selectedType === type}
                  className={styles.checkboxfilter}
                // onChange={() => setSelectedCode(offer.code)}
                // onClick={(e) => e.stopPropagation()} // prevent double-firing
                />
                <button
                  key={index}
                  // className={styles.tag}
                  className={`${styles.tagButton} ${selectedType === type ? styles.selected : ''}`}
                  onClick={() => handleSelect(type)}
                >
                  {type}

                </button>
              </div>
            </>
          ))}
        </div>
      </div>



    </div>
  )
}

export default RoomTypes
