'use client';
import { useState } from 'react';
import styles from './RoomCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface RatePlan {
  title: string;
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
            // onMouseEnter={handleButtonHover}
            // onMouseLeave={handleButtonLeave}
            >
              +8 Photos
            </button>
          </div>
          {/* <img src={imageUrl} alt={name} className={styles.roomImage} />
          <button type='button' className={styles.photosButton}>+8 Photos</button> */}
          {/* <h2 className={styles.roomName}>{name}</h2> */}
          <p className={styles.roomType}>{type}</p>
          <ul className={styles.roomAmenities}>
            {amenities.slice(0, showAllAmenities ? amenities.length : 6).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {amenities.length > 6 && (
            <div>
              <button
                className={styles.showMoreBtn}
                onClick={() => setShowAllAmenities(!showAllAmenities)}
              >
                {showAllAmenities ? 'Show Less' : 'More Details'}
              </button>
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
                </ol>
              </div>
              <div className={styles.priceContainer}>
                <div>
                  <p className={styles.priceOriginal}>{plan.originalPrice}</p>
                  <p className={styles.priceCurrent}>{plan.currentPrice}</p>
                  <p className={styles.priceTaxes}>{plan.taxes}</p>
                </div>
                <button className={styles.selectButton}>SELECT ROOM</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}