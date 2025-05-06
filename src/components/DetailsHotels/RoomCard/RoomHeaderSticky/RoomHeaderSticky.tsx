'use client'
import React from 'react'
import styles from './RoomHeaderSticky.module.css'

const RoomHeaderSticky = () => {
  return (
    <div>
      <div className={styles.roomCard}>
        <div className={styles.roomCardContent}>
          <div className={styles.roomCardLeft}>
            Room Types
          </div>
          <div className={styles.roomCardRight}>
            <div className={styles.ratePlan}>
              <div className={styles.ratePlanContent}>
                Room Options
              </div>
              <div className={styles.priceContainer}>
                Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomHeaderSticky
