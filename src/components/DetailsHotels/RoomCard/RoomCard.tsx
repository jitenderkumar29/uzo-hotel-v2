'use client';
import { useState } from 'react';
import styles from './RoomCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import CancellationPolicy from './CancellationPolicy/CancellationPolicy';
import { policy1 } from '@/app/data/cancellationPolicyData'; // Adjust the path as needed
import OverlayContainer from '@/components/OverlayContainer/OverlayContainer';
import RoomTypesMoreDetails from './RoomTypesMoreDetails/RoomTypesMoreDetails';
import Image from 'next/image';

interface RatePlan {
  title: string;
  discount: string
  originalPrice: string;
  currentPrice: string;
  taxes: string;
  features: string[];
}

interface RoomData {
  name: string;
  type: string;
  imageUrl: string;
  amenities: string[];
  ratePlans: RatePlan[];
}

interface Props {
  roomData: RoomData[]; // Now accepts an array of RoomData
}

export default function RoomCard({ roomData }: Props) {
  return (
    <div className={styles.roomCardsContainer}>
      {roomData.map((room, index) => (
        <SingleRoomCard key={index} roomData={room} />
      ))}
    </div>
  );
}

function SingleRoomCard({ roomData }: { roomData: RoomData }) {
  const { name, type, imageUrl, amenities, ratePlans } = roomData;
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  // const [showRoomTypesMore, setShowRoomTypesMore] = useState(false);
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);

  const today = new Date();
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  const formattedDate = dayAfterTomorrow.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={styles.roomCard}>
      <div className={styles.roomCardContent}>
        <div className={styles.roomCardLeft}>
          <h2 className={styles.roomName}>{name}</h2>

          {/* <h1>Day use room (10 am to 4 pm) Maximum 6 hrs stay.</h1> */}
          <div className={styles.container}>
            <img
              src={imageUrl}
              alt={name}
              className={styles.roomImage}
            />
            <button
              type="button"
              className={styles.photosButton}
              onClick={() => setShowAllAmenities(true)}
            // onMouseEnter={handleButtonHover}
            // onMouseLeave={handleButtonLeave}
            >
              +8 Photos
            </button>

            {/* {showRoomTypesMore && (
              <OverlayContainer
                show={showRoomTypesMore}
                onClose={() => setShowRoomTypesMore(false)}>
                <RoomTypesMoreDetails onClose={() => setShowRoomTypesMore(false)} />
              </OverlayContainer>
            )} */}

          </div>

          {/* <img src={imageUrl} alt={name} className={styles.roomImage} />
          <button type='button' className={styles.photosButton}>+8 Photos</button> */}
          {/* <h2 className={styles.roomName}>{name}</h2> */}
          {/* <p className={styles.roomType}>{type}</p> */}

          <div className={styles.roomDetails}>
            <ul className={styles.highlightsList}>
              <li>
                <Image
                  src="https://gos3.ibcdn.com/roomSizeBlack-1678093548.png"
                  alt="Size"
                  width={20}
                  height={20}
                />
                <span>{type}</span>
                {/* <span>301 sq.ft (28 sq.mt)</span> */}
              </li>
              <li>
                <Image
                  src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/bed.png"
                  alt="Bed"
                  width={20}
                  height={20}
                />
                <span>2 twin beds</span>
              </li>
              <li>
                <Image
                  src="https://gos3.ibcdn.com/paxBlackIcon-1678093500.png"
                  alt="Guests"
                  width={20}
                  height={20}
                />
                <span>Max 3 Guests</span>
              </li>
              <li>
                <Image
                  src="https://gos3.ibcdn.com/roomViewIcon-1678093525.png"
                  alt="View"
                  width={20}
                  height={20}
                />
                <span>City View</span>
              </li>
            </ul>
          </div>

          {/* <ul className={styles.roomAmenities}>
            {amenities.slice(0, showAllAmenities ? amenities.length : 6).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul> */}
          {amenities.length > 6 && (
            <div>
              <button
                className={styles.showMoreBtn}
                onClick={() => setShowAllAmenities(!showAllAmenities)}
              >
                {showAllAmenities ? 'Show Less' : 'More Details'}
              </button>
              {showAllAmenities && (
                <OverlayContainer
                  show={showAllAmenities}
                  onClose={() => setShowAllAmenities(false)}>
                  <RoomTypesMoreDetails onClose={() => setShowAllAmenities(false)} />
                </OverlayContainer>
              )}

            </div>
          )}

        </div>


        <div className={styles.roomCardRight}>
          {ratePlans.map((plan, i) => (
            <div className={styles.ratePlan} key={i}>
              <div className={styles.ratePlanContent}>
                <ol className={styles.ratePlanList}>
                  <h3 className={styles.roomHeadingType}>{i + 1}. {plan.title}</h3>
                  {plan.features.map((feat, j) => (
                    <li key={j}>
                      <FontAwesomeIcon icon={faCheck} className={styles.listIcon} />
                      {feat}</li>
                  ))}
                  <li className={styles.cancelIconList}>
                    <FontAwesomeIcon icon={faCheck} className={styles.cancelIcon} /> Free Cancellation before {formattedDate} 01:59 PM
                  </li>

                  <li className={styles.cancelPolicy} onClick={() => setShowCancellationPolicy(true)}>View plan details & policies</li>
                </ol>
              </div>
              {showCancellationPolicy && (
                <OverlayContainer
                  show={showCancellationPolicy}
                  onClose={() => setShowCancellationPolicy(false)}>
                  <CancellationPolicy {...policy1} onClose={() => setShowCancellationPolicy(false)} />
                </OverlayContainer>
              )}
              <div className={styles.priceContainer}>
                <div>
                  <div className={styles.discountTag}>{plan.discount} % off</div>
                  {/* <div className={styles.discountTag}>10 % off</div> */}
                  <p className={styles.priceOriginal}>{plan.originalPrice}</p>
                  <p className={styles.priceCurrent}>{plan.currentPrice}</p>
                  <p className={styles.priceTaxes}>{plan.taxes}</p>
                </div>
                <button className={styles.selectButton}>SELECT ROOM</button>
                <button className={styles.loginButton}>Login Now to unlock best deals and offers!</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}