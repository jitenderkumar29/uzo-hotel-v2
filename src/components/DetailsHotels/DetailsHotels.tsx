'use client';
import React, { useEffect, useState } from 'react'
import styles from "./DetailsHotels.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { HotelDataInterface } from "@/interfaces"
import { RatingCardPropsInterFace } from "@/interfaces"
import mapIcon2 from "@/assets/icons/mapIcon2.png"
import Image from 'next/image';
import { hotelData } from "@/app/data"
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

interface IDProps {
  id?: string; // Add question mark to make it optional
}

const DetailsHotels: React.FC<IDProps> = ({ id }) => {
  const [, setCurrentImageIndex] = useState(0);
  const [openRatingId, setOpenRatingId] = useState<number | null>(null);
  // const [hotelId, setHotelId] = useState<number | null>(null);
  const [hotel, setHotel] = useState<HotelDataInterface | null>(null);


  console.log("id in Details hotel")
  console.log(typeof (id))
  console.log(hotelData)

  // When you need to set the hotel:
  const handleSetHotel = (hotelId: string) => {
    const id = Number(hotelId);
    if (isNaN(id)) {
      console.error('Invalid hotel ID');
      setHotel(null); // Explicitly set to null if invalid
      return;
    }

    const foundHotel = hotelData.find(hotel => hotel.id === id);
    setHotel(foundHotel || null); // Handle undefined case by falling back to null
    console.log("foundHotel")
    console.log(hotel)
  };

  useEffect(() => {
    if (id) {
      handleSetHotel(id);
    }
  }, [id]);

  if (!hotel) {
    return <p></p>;
  }

  // const searchParams = useSearchParams(); // ✅ never null

  // useEffect(() => {

  //   const data = searchParams!.get('data'); // no need for null check on `searchParams` itself
  //   if (data) {
  //     try {
  //       const parsed: HotelDataInterface = JSON.parse(data);
  //       setHotel(parsed);
  //     } catch (err) {
  //       console.error('Failed to parse hotel data', err);
  //     }
  //   }
  // }, [searchParams]);

  // if (!hotel) return <p>Loading...</p>;


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
    setCurrentImageIndex((prev) => (prev + 1) % hotel.thumbnails.length);
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
          <span>👩‍👧 Women Friendly</span>
        </div>
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
        {openRatingId === hotel.id &&
          (<RatingCard reviewScore={hotel.reviewScore} totalRatings={hotel.totalRatings} breakdown={hotel.breakdown} />)}
      </div>
    </div>
  )

  const HotelRoomCard = () => (
    <div className={styles.cardBody}>
      <HotelHeader />
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

          <div className={styles.thumbnailContainer}>
            {hotel.thumbnails.slice(0, 3).map((thumb, index) => (
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
            ALL PHOTOS {hotel.thumbnails.length}+
            {/* SEE ALL {room.totalPhotos} PHOTOS */}
          </button>
        </div>

        {/* Right Section - Details */}
        <div className={styles.detailsSection}>
          <div className={styles.detailsSectionText}>
            <div className={styles.roomInfo}>
              <h3 className={styles.roomName}>{hotel.name}</h3>
              <div className={styles.guestInfo}>
                <span>{room.guests} x Guest</span>
                <span>{room.rooms} x Room</span>
              </div>

              <div className={styles.amenities}>
                <ul>
                  {hotel.tags.slice(0, 4).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                  {hotel.moreTags.slice(0, 2).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {hotel.moreTags.length > 2 && (
                  <button className={styles.moreAmenities}>More Amenities</button>
                )}
              </div>

              {/* <button className={styles.selectRoomButton}>
            Select Rooms
          </button> */}
            </div>

            <div className={styles.pricing}>
              {room.discountPrice && (
                <div className={styles.originalPrice}>
                  {hotel.oldPrice}
                </div>
              )}
              {/* oldPrice: "₹4,000",
            newPrice: "₹3,600",
            taxes: "+₹432 taxes & fees per night", */}
              <div className={styles.discountPrice}>
                {hotel.newPrice}
                {/* ₹{room.discountPrice ? room.discountPrice.toLocaleString() : room.price.toLocaleString()} */}
              </div>
              <div className={styles.taxes}>{hotel.taxes}</div>
              {/* <div className={styles.basePrice}>Base price (Per Night)</div> */}
              {/* <div className={styles.taxes}>+ ₹{hotel.taxes} Taxes & fees</div>
            <div className={styles.basePrice}>Base price (Per Night)</div> */}

              <button className={styles.bookNowButton}>
                Book Now
              </button>
            </div>
          </div>
          {/* <div>
          <button className={styles.bookNowButton}>
            Book Now
          </button>
        </div> */}
        </div>
      </div>
    </div>
  )

  const RatingCard = ({ reviewScore, totalRatings, breakdown }: RatingCardPropsInterFace) => {
    return (
      <div className={styles.cardRating}
        onMouseEnter={() => setOpenRatingId(openRatingId)}
        onMouseLeave={() => setOpenRatingId(null)}
      >
        <div className={styles.leftRating}>
          <div className={styles.scoreRating}>{reviewScore}</div>
          <div className={styles.totalRating}>{totalRatings} Ratings</div>
        </div>
        <div className={styles.rightRating}>
          {breakdown.map((item) => (
            <div key={item.stars} className={styles.ratingRowRating}>
              <span className={styles.starLabelRating}>{item.stars} ★</span>
              <div className={styles.barContainerRating}>
                <div
                  className={styles.barFillRating}
                  style={{ width: `${(item.count / totalRatings) * 100}%` }}
                />
              </div>
              <span className={styles.countRating}>{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* <HeaderTop />
      <HotelSearchBarTop /> */}
      <div className={styles.mainContentBody}>
        <HotelRoomCard />
      </div>
    </>
  )
}

export default DetailsHotels