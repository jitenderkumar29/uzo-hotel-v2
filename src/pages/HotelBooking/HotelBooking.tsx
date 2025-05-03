"use client"
import SummaryHotels from '@/components/SummaryHotels/SummaryHotels'
import React from 'react'
import styles from "./HotelBooking.module.css"
import HotelSearchBarTop from '@/components/SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop'
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import FooterUzo from '@/components/FooterUzo/FooterUzo'
import HotelSearchBy from '@/components/SearchBarMultiple/HotelSearchBarTop/HotelSearchBy'

const HotelBooking = () => {
  return (
    <div>
      <div className={styles.headerTopBody}>
        <HeaderTop />
      </div>
      <div className={styles.hotelsearchBarHeader} >
        <HotelSearchBarTop />
        <HotelSearchBy />
      </div>
      <div className={styles.hotelSummary}>
        <SummaryHotels />
      </div>
      <FooterUzo />
    </div>
  )
}

export default HotelBooking
