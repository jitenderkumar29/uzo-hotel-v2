"use client"
import SummaryHotels from '@/components/SummaryHotels/SummaryHotels'
import React from 'react'
import styles from "./HotelBooking.module.css"
import HotelSearchBarTop from '@/components/SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop'
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import FooterUzo from '@/components/FooterUzo/FooterUzo'
import HotelSearchBy from '@/components/SearchBarMultiple/HotelSearchBarTop/HotelSearchBy'
import { HotelSearchProvider } from '@/app/Context/HotelSearchContext'

const HotelBooking = () => {
  return (
    <div>
      <div className={styles.headerTopBody}>
        <HeaderTop />
      </div>
      <div className={styles.hotelsearchBarHeader} >
        <HotelSearchProvider>
          <HotelSearchBarTop />
        </HotelSearchProvider>
        <HotelSearchBy />
      </div>
      <div className={styles.hotelSummary}>
        <HotelSearchProvider>
          <SummaryHotels />
        </HotelSearchProvider>
      </div>
      <FooterUzo />
    </div>
  )
}

export default HotelBooking
