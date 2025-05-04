"use client"
import DetailsHotels from '@/components/DetailsHotels/DetailsHotels'
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import HotelSearchBarTop from '@/components/SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop'
import { useSearchParams } from 'next/navigation'
import React from 'react'
// import styles "./HotelDetails.module.css"
import styles from "./HotelDetails.module.css"
import FooterUzo from '@/components/FooterUzo/FooterUzo'
import { HotelSearchProvider } from '@/app/Context/HotelSearchContext'


const HotelDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id") ?? undefined; console.log("searchMode in book");
  console.log("Iddddddddddddd");
  console.log(id);


  return (
    <div>
      <div >
        <HeaderTop />
      </div>
      <div className={styles.HotelSearchBarTopBody}>
        <HotelSearchProvider>
          <HotelSearchBarTop />
        </HotelSearchProvider>
      </div>
      <div>
        <HotelSearchProvider>
          <DetailsHotels id={id} />
        </HotelSearchProvider>
      </div>
      <div>
        <FooterUzo />
      </div>
    </div>
  )
}

export default HotelDetails
