import React, { useState } from 'react';
import styles from './PropertyHotelInfo.module.css';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPerson } from '@fortawesome/free-solid-svg-icons';
import OverlayContainer from '@/components/OverlayContainer/OverlayContainer';
import CancellationPolicy from '@/components/DetailsHotels/RoomCard/CancellationPolicy/CancellationPolicy';
import { policy2 } from '@/app/data/cancellationPolicyData'; // Adjust the path as needed

import { HotelDataInterface } from "@/interfaces";
import RatingCard from '../RatingCard/RatingCard';

export const hotelData: HotelDataInterface[] = [
  {
    id: 1,
    // name: "Pride Plaza Hotel Aerocity",
    name: "Pride Plaza Hotel Aerocity New Delhi",
    rating: "5",
    category: "Hotel",
    location: "Aerocity | 4 km drive to Indira Gandhi International Airport",
    tags: ["Gym", "Restaurant"],
    moreTags: [
      "Free Wi-Fi",
      "24-hr Room",
      "Jacuzzi",
      "Spa",
      "Swimming Pool",
      "Restaurant",
      "Fireplace",
      "Lounge",
      "Bar",
      "Steam & Sauna",
    ],
    commonFeature: "👫 Couple Friendly",
    features: [
      // "👫 Couple Friendly",
      "Free Cancellation",
      "Book @ $0 Available",
      "Breakfast available at extra charges",
    ],
    mainImg: "https://www.ahstatic.com/photos/9470_roskc_01_p_1024x768.jpg",
    thumbnails: [
      "https://www.ahstatic.com/photos/a248_ho_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/a248_ro_01_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/a248_rs_00_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/a248_rs_03_p_2048x1536.jpg",
      "https://www.ahstatic.com/photos/a248_ho_05_p_2048x1536.jpg",
    ],
    totalRatings: 3145,
    reviewScore: "4.5/5",
    ratingCategory: "Excellent",
    breakdown: [
      { stars: 5, count: 6587 },
      { stars: 4, count: 1700 },
      { stars: 3, count: 510 },
      { stars: 2, count: 230 },
      { stars: 1, count: 293 },
    ],
    leftRoom: 4,
    oldPrice: "₹4,000",
    newPrice: "₹3,600",
    taxes: "+₹432 taxes & fees per night",
  }]


// First, define a type for your room data
type Room = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  amenities: string[];
  ratePlans: {
    roomId: number;
    title: string;
    discount: string;
    originalPrice: string;
    currentPrice: string;
    taxes: string;
    features: string[];
  }[];
};

// If using TypeScript interfaces
interface PropertyHotelInfoProps {
  foundRoom: Room; // Use your Room type from earlier
  roomId?: string;
}

const PropertyHotelInfo = ({ foundRoom, roomId }: PropertyHotelInfoProps) => {
  console.log("PropertyHotelInfo")
  console.log(foundRoom, roomId)
  const [isExpanded, setIsExpanded] = useState(true);
  const [openRatingId, setOpenRatingId] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggleExpand}>
        <h3 className={styles.sectionTitle}>PROPERTY INFO</h3>
        <div className={`${styles.arrowDownMinMax} ${!isExpanded ? styles.arrowUpMinMax : ''}`}>
          {isExpanded ? <ChevronDown /> : <ChevronUp />}
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" transform="rotate(180)">
            <path d="M16 26a3.07 3.07 0 0 1-2.305-1.04L.614 10.091A2.462 2.462 0 0 1 4.312 6.84l11.439 13.003a.334.334 0 0 0 .501 0L27.691 6.84a2.462 2.462 0 1 1 3.697 3.251L18.311 24.955A3.08 3.08 0 0 1 16.002 26z"></path>
          </svg> */}
        {/* </div> */}
      </div>
      {isExpanded && (
        <div className={styles.hotelnfoBody}>
          <div className={styles.hotelInfo}>
            <div className={styles.hotelImage}>
              <img
                src="https://r1imghtlak.ibcdn.com/082f1ae6330211eb9c050242ac110004.jpg"
                alt="Hyatt Centric Janakpuri, New Delhi"
              />
            </div>
            <div className={styles.hotelInfoCont}>
              <div className={styles.hotelDetails}>
                <div className={styles.hotelNameCont}>
                  <h4 className={styles.hotelName}>Pride Plaza Hotel Aerocity New Delhi</h4>
                  <div className={styles.hotelRating}>
                    <span className={styles.badge}>
                      5<span className={styles.star}> ★</span> Hotels
                    </span>
                  </div>
                </div>
                <div className={styles.reviews} onMouseEnter={() => setOpenRatingId(true)}
                  onMouseLeave={() => setOpenRatingId(false)}
                >
                  <div>
                    <span className={styles.ratingTotal}>
                      <div>Excellent</div>
                      <div>3145 Ratings{" "}</div>
                    </span>
                  </div>
                  <div className={styles.ratingBadge}>4/5</div>
                </div>
                {openRatingId &&
                  (
                    <div>
                      <RatingCard reviewScore={hotelData[0].reviewScore} totalRatings={hotelData[0].totalRatings} breakdown={hotelData[0].breakdown} />
                    </div>)}
                {/* <div className={styles.location}>
                  <MapPin className={styles.mapIcon} />
                  <span>Janakpuri District Centre Complex, New Delhi, Delhi, India, 110058</span>
                </div> */}
              </div>
              <div className={styles.location}>
                <MapPin className={styles.mapIcon} />
                <span>Janakpuri District Centre Complex, New Delhi, Delhi, India, 110058</span>
              </div>
            </div>
          </div>
          <div className={styles.durationBlock}>
            <div className={styles.checkInOut}>
              <span>Check In</span>
              <p>Sat, 17 May, 2025</p>
              <span>2 PM</span>
            </div>

            <div className={styles.checkInOut}>
              <span>Check Out</span>
              <p>Sun, 18 May, 2025</p>
              <span>12 PM</span>
            </div>

            <div className={styles.checkInOut}>
              <span>Guests</span>
              <p>2 Adults</p>
              <span>1 Night</span>
            </div>
          </div>

          <RoomDetails />
          {/* <div className={styles.roomDetails}>
          <div className={styles.roomHeader}>
            <p className={styles.savingText}>Great Choice! You are saving ₹450 with your booking</p>
            <p className={styles.roomCount}>1 Room</p>
          </div>
          <div className={styles.roomInfo}>
            <div className={styles.roomLeft}>
              <p className={styles.roomType}>1 x 2 TWIN BEDS</p>
              <div className={styles.guestInfo}>
                <FontAwesomeIcon icon={faPerson} />
                <FontAwesomeIcon icon={faPerson} />
                <span>2 Adults</span>
              </div>
              <div className={styles.roomAmenities}>
                <span>Room Only</span>
                <span className={styles.nonRefundable}>Non-Refundable</span>
              </div>
              <a className={styles.policyLink}>View Booking & Cancellation Policy</a>
            </div>
            <div className={styles.roomRight}>
              <div className={styles.roomFeature}>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                <span>Room Only</span>
              </div>
            </div>
          </div>
        </div> */}

        </div>)}

    </div>
  );
};

const RoomDetails = () => {
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);

  return (
    <section className={styles.roomDetails}>
      <div className={styles.headerRoom}>
        <p className={styles.subHeader}>Great Choice! You are saving ₹400 with your booking</p>
        <p className={styles.mainHeader}>1 Room</p>
      </div>

      <ul className={styles.detailsList}>
        <li className={styles.detailItem}>
          <div className={styles.leftBlock}>
            <p className={styles.roomType}>1 x Day use room (10 am to 4 pm) Maximum 6 hrs stay.</p>

            <div className={styles.guestInfo}>
              <div className={styles.guests}>
                <FontAwesomeIcon icon={faPerson} />
                <FontAwesomeIcon icon={faPerson} />
                <span className={styles.guestCount}>2 Adults</span>
              </div>

              <div className={styles.amenities}>
                <span className={styles.mealPlan}>Room Only</span>
              </div>
              <div className={styles.refundable}>
                <span className={styles.refundPolicy}>Non-Refundable</span>
              </div>
            </div>

            <button className={styles.policyLink} onClick={() => setShowCancellationPolicy(true)}>View Booking & Cancellation Policy</button>


            {showCancellationPolicy && (
              <OverlayContainer
                show={showCancellationPolicy}
                onClose={() => setShowCancellationPolicy(false)}>
                <CancellationPolicy {...policy2} onClose={() => setShowCancellationPolicy(false)} />
              </OverlayContainer>
            )}

          </div>
          <div className={styles.rightBlock}>
            <ul className={styles.featuresList}>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <span>Room Only</span>
              </li>
            </ul>
          </div>
        </li>
      </ul >
    </section >
  );
};



export default PropertyHotelInfo;