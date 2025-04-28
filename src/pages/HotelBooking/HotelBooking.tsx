"use client"
import HotelSearchBar from '@/components/SearchBarMultiple/HotelSearchBar/HotelSearchBar'
import SummaryHotels from '@/components/SummaryHotels/SummaryHotels'
import React from 'react'
import styles from "./HotelBooking.module.css"

const HotelBooking = () => {
  return (
    <div>
      {/* <HeaderTop /> */}
      <div className={styles.hotelsearchBarHeader}>
        <HotelSearchBar />
      </div>
      <div className={styles.hotelSummary}>
        <SummaryHotels />
      </div>
    </div>
  )
}

export default HotelBooking
