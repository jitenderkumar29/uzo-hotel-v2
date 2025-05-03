'use client';
import React, { useEffect, useState } from 'react'
import styles from "./DetailsHotels.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { useRouter } from 'next/router';
import { HotelDataInterface } from "@/interfaces"
import mapIcon2 from "@/assets/icons/mapIcon2.png"
import Image from 'next/image';
import HeaderTop from '../HeaderTop/HeaderTop';
import HotelSearchBarTop from '../SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop';
import { useSearchParams } from 'next/navigation';
import FooterUzo from '../FooterUzo/FooterUzo';


export interface HotelRoom {
  id: string;
  name: string;
  guests: number;
  rooms: number;
  amenities: string[];
  price: number;
  discountPrice?: number;
  taxes: number;
  mainImage: string;
  thumbnails: string[];
  totalPhotos: number;
}

const DetailsHotels = () => {
  const [, setCurrentImageIndex] = useState(0);
  const [, setOpenRatingId] = useState<number | null>(null);


  const searchParams = useSearchParams(); // ✅ never null
  const [hotel, setHotel] = useState<HotelDataInterface | null>(null);

  useEffect(() => {
    const data = searchParams!.get('data'); // no need for null check on `searchParams` itself
    if (data) {
      try {
        const parsed: HotelDataInterface = JSON.parse(data);
        setHotel(parsed);
      } catch (err) {
        console.error('Failed to parse hotel data', err);
      }
    }
  }, [searchParams]);

  if (!hotel) return <p></p>;


  // const router = useRouter();
  // console.log("router.query.data DetailsHotels");
  // console.log(router.query.data);

  // const [hotel, setHotel] = useState<HotelDataInterface | null>(null);

  // useEffect(() => {
  //   if (router.query.data) {
  //     try {
  //       const parsed: HotelDataInterface = JSON.parse(router.query.data as string);
  //       setHotel(parsed);
  //     } catch (error) {
  //       console.error('Failed to parse hotel data', error);
  //     }
  //   }
  // }, [router.query.data]);

  // if (!hotel) return <p>Loading...</p>;

  const room: HotelRoom = {
    id: '1',
    name: 'Standard Twin Room',
    guests: 2,
    rooms: 1,
    amenities: [
      'Free toiletries',
      'Parking facility (As Per Availability)',
      'Public Restroom',
      'Iconing facilities',
      'Serving Kit'
    ],
    price: 15868,
    discountPrice: 5885,
    taxes: 730,
    mainImage: 'https://www.ahstatic.com/photos/9470_roskc_01_p_1024x768.jpg',
    thumbnails: [
      'https://www.ahstatic.com/photos/a248_ho_00_p_2048x1536.jpg',
      'https://www.ahstatic.com/photos/a248_ro_01_p_2048x1536.jpg',
      'https://www.ahstatic.com/photos/a248_rs_00_p_2048x1536.jpg'
    ],
    totalPhotos: 33
  };




  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.thumbnails.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? hotel.thumbnails.length - 1 : prev - 1
    );
  };

  const HotelHeader = () => (
    <div className={styles.hotelHeader}>
      <div className={styles.leftHeading}>
        <div className={styles.hotelHeading}>
          <h1 className={styles.hotelName}>{hotel.name}</h1>
          <div className={styles.hotelRating}>
            <span className={styles.badge}>
              {hotel.rating}<span className={styles.star}> ★</span> {hotel.category}
            </span>
          </div>
          {/* <div className={styles.hotelRating}>
            <div className={styles.stars}>{hotel.rating} Hotel</div>
            <div className={styles.hotelType}>· </div>
          </div> */}
        </div>
        <div className={styles.hotelAddress}>

          <div className={styles.addressText}>
            <div><FontAwesomeIcon icon={faLocationDot} className={styles.locationIcon} />
              {hotel.location}</div>
            {/* <div>Aerocity, Delhi 110037</div> */}
            {/* <div className={styles.locationHighlight}>
              <img src="https://gos3.ibcdn.com/idea-1626422541.png" alt="" width="16" />
              <span>4 km drive to Indira Gandhi International Airport</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className={styles.rightHeading}>
        <div className={styles.coupleFriendly}>
          <span>{hotel.commonFeature}</span>
        </div>
        <div className={styles.viewsMap}>
          <div className={styles.mapBadge}>
            <Image
              src={mapIcon2}
              alt="Map Icon"
              className={styles.mapIcon2}
            />
          </div>
          <div>View Map</div>
        </div>
        <div className={styles.reviews} onMouseEnter={() => setOpenRatingId(hotel.id)}
          onMouseLeave={() => setOpenRatingId(null)}>
          <div>
            <span className={styles.ratingTotal}>
              <div>{hotel.ratingCategory} </div>
              <div>{hotel.totalRatings} Ratings{" "}</div>
              {/* <br /> */}

              {/* <span className={styles.rating}></span> */}
            </span>
          </div>
          <div className={styles.ratingBadge}>{hotel.reviewScore}</div>
          {/* <div>
            <span className={styles.ratingTotal}>
              {hotel.ratingCategory} <br />
              {hotel.totalRatings} Ratings{" "}
              <span className={styles.rating}></span>
            </span>
          </div> */}
        </div>
        {/* {openRatingId === hotel.id &&
          (<RatingCard reviewScore={hotel.reviewScore} totalRatings={hotel.totalRatings} breakdown={hotel.breakdown} />)} */}
      </div>
    </div>
  )

  const HotelRoomCard = () => (
    <div className={styles.cardBody}>
      <div className={styles.card}>
        {/* Left Section - Images */}
        <div className={styles.imageSection}>
          <div className={styles.mainImageContainer}>
            <img
              src={hotel.mainImg}
              alt={hotel.name}
              className={styles.mainImage}
            />
            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>
              {/* &lt; */}
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage}>
              {/* &gt; */}
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>


        </div>

        {/* Right Section - Details */}
        <div className={styles.detailsSection}>
          <div className={styles.detailsSectionText}>

            <div className={styles.thumbnailContainer}>
              {hotel.thumbnails.slice(0, 4).map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className={styles.thumbnail}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

            <button className={styles.viewAllPhotos}>
              ALL PHOTOS
            </button>

          </div>
        </div>

      </div>
      <HotelHeader />

    </div>

  )

  // const RatingCard = ({ reviewScore, totalRatings, breakdown }: RatingCardPropsInterFace) => {
  //   return (
  //     <div className={styles.cardRating}
  //       onMouseEnter={() => setOpenRatingId(openRatingId)}
  //       onMouseLeave={() => setOpenRatingId(null)}
  //     >
  //       <div className={styles.leftRating}>
  //         <div className={styles.scoreRating}>{reviewScore}</div>
  //         <div className={styles.totalRating}>{totalRatings} Ratings</div>
  //       </div>
  //       <div className={styles.rightRating}>
  //         {breakdown.map((item) => (
  //           <div key={item.stars} className={styles.ratingRowRating}>
  //             <span className={styles.starLabelRating}>{item.stars} ★</span>
  //             <div className={styles.barContainerRating}>
  //               <div
  //                 className={styles.barFillRating}
  //                 style={{ width: `${(item.count / totalRatings) * 100}%` }}
  //               />
  //             </div>
  //             <span className={styles.countRating}>{item.count}</span>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      {/* <HeaderTop />
      <HotelSearchBarTop /> */}
      <div className={styles.headerTopBody}>
        <HeaderTop />
      </div>
      <div className={styles.hotelsearchBarHeader} >
        <HotelSearchBarTop />
      </div>
      <div className={styles.mainContentBody}>
        <HotelRoomCard />

      </div>
      <FooterUzo />
    </>
  )
}

export default DetailsHotels
