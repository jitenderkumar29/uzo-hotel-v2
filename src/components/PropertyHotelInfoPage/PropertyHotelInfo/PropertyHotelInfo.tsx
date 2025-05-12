import React, { useState } from 'react';
import styles from './PropertyHotelInfo.module.css';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPerson } from '@fortawesome/free-solid-svg-icons';
import OverlayContainer from '@/components/OverlayContainer/OverlayContainer';
import CancellationPolicy from '@/components/DetailsHotels/RoomCard/CancellationPolicy/CancellationPolicy';
import { policy2 } from '@/app/data/cancellationPolicyData'; // Adjust the path as needed



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

            <div className={styles.hotelDetails}>
              <div className={styles.rating}>
                {[...Array(4)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="14">
                    <g fill="none" fillRule="evenodd">
                      <path d="M-5-5h24v24H-5z"></path>
                      <path fill="#FDBA00" d="m7.15 11.622 3.469 2.13c.635.39 1.412-.187 1.245-.917l-.92-4.004 3.068-2.699c.56-.492.259-1.425-.477-1.484L9.5 4.3 7.92.515a.831.831 0 0 0-1.537 0l-1.58 3.776-4.036.348C.031 4.7-.27 5.632.29 6.124l3.067 2.698-.92 4.005c-.166.73.61 1.307 1.246.916z"></path>
                    </g>
                  </svg>
                ))}
              </div>

              <h4 className={styles.hotelName}>Pride Plaza Hotel Aerocity New Delhi</h4>
              {/* <h4 className={styles.hotelName}>Hyatt Centric Janakpuri, New Delhi</h4> */}

              <div className={styles.location}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M22.301 24.38a1.334 1.334 0 1 0-.224 2.658 40 40 0 0 1 5.035.697.333.333 0 0 1 0 .651A53.4 53.4 0 0 1 16 29.334a53.4 53.4 0 0 1-11.111-.948.333.333 0 0 1 0-.651 39 39 0 0 1 4.981-.693 1.333 1.333 0 0 0-.227-2.656c-9.644.815-9.644 2.815-9.644 3.673 0 3.557 11.089 3.941 16 3.941s16-.384 16-3.941c0-.859 0-2.859-9.699-3.679zM16 28.8c.455 0 .878-.232 1.123-.615 2.611-4.084 8.683-14.048 8.683-18.381 0-5.416-4.391-9.807-9.807-9.807S6.192 4.388 6.192 9.804c0 4.333 6.072 14.299 8.684 18.381.244.385.669.617 1.124.615M11.333 9.333A4.667 4.667 0 1 1 16 14a4.667 4.667 0 0 1-4.667-4.667"></path>
            </svg> */}
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