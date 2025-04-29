"use client"
import SummaryHotels from '@/components/SummaryHotels/SummaryHotels'
import React from 'react'
import styles from "./HotelBooking.module.css"
import HotelSearchBarTop from '@/components/SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop'
import HeaderTop from '@/components/HeaderTop/HeaderTop'

const HotelBooking = () => {
  return (
    <div>
      <HeaderTop />
      <div className={styles.hotelsearchBarHeader}>
        <HotelSearchBarTop />
      </div>
      <div className={styles.hotelSummary}>
        <SummaryHotels />
      </div>
    </div>
  )
}

export default HotelBooking
