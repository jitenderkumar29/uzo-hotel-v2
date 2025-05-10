import React, { useState } from 'react';
import styles from './RoomTypesMoreDetails.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

interface RoomTypesMoreDetailsProps {
  onClose: () => void;
}

const RoomTypesMoreDetails: React.FC<RoomTypesMoreDetailsProps> = ({ onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState({
    popular: false,
    roomFeatures: false,
    bathroom: false,
  });

  // Sample data - replace with your actual data
  const roomImages = [
    "https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    'https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/room-imgs/201511141311078070-13960-5a219ae6f21c11e885d20242ac110009.jpg',
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/290544/pexels-photo-290544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // Add more image URLs as needed
  ];

  const amenities = {
    popular: [
      'Interconnected Room',
      'Iron/Ironing Board',
      'Mineral Water',
      'Electric Kettle',
      'Bathroom',
      'Daily Housekeeping',
      '24-hour Room Service',
      'Laundry Service',
      'Free Wi-Fi',
      'Air Conditioning',
    ],
    roomFeatures: [
      'Sofa',
      'Fireplace',
      'Hypoallergenic Bedding',
      'Closet',
      'Chair',
      'Work Desk',
      'Clothes Rack',
      'Telephone',
      'Minibar',
      'Coffee Maker',
      'Hairdryer',
      'Mirror',
    ],
    bedsAndBlanket: ['Pillows', 'Woollen Blanket'],
    safety: ['Cupboards with Locks', 'Electronic Safe'],
    media: ['TV'],
    bathroom: [
      'Toilet Paper',
      'Western Toilet Seat',
      'Emergency Cord',
      'Slippers',
      'Shower Cubicle',
      'Bathroom Phone',
      'Hot & Cold Water',
      'Higher Level Toilet',
      'Shower',
      'Bathrobe',
      'Towel',
      'Hairdryer',
      'Toiletries',
      'Scale',
    ],
    other: ['Kettle', 'Newspaper', 'Sound Proofing', 'Alarm Clock'],
  };

  const toggleAmenities = (category: keyof typeof showAllAmenities) => {
    setShowAllAmenities(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % roomImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + roomImages.length) % roomImages.length);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h3>Deluxe Twin Room</h3>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className={styles.closeIcon}
            >
              <path d="M14.299 12.177a.25.25 0 0 1-.073-.177c0-.067.026-.13.073-.177l9.262-9.262A1.5 1.5 0 1 0 21.437.44l-9.26 9.258a.253.253 0 0 1-.355 0L2.561.44A1.5 1.5 0 1 0 .44 2.561l9.26 9.262a.252.252 0 0 1-.001.354L.44 21.439a1.5 1.5 0 0 0 .673 2.51 1.5 1.5 0 0 0 1.449-.389l9.261-9.262a.25.25 0 0 1 .354 0l9.261 9.262a1.5 1.5 0 1 0 2.122-2.12z" />
            </svg> */}
          </button>
        </div>

        <div className={styles.galleryContainer}>
          {roomImages.length > 1 && (
            <>
              <button className={styles.preButton} onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </>
          )}
          <div className={styles.imageWrapper}>
            <Image
              src={roomImages[currentImageIndex]}
              alt={`Room Image ${currentImageIndex + 1}`}
              className={styles.roomImage}
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
          {roomImages.length > 1 && (
            <>
              <button className={styles.nextButton} onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
        </div>

        <div className={styles.roomDetails}>
          <ul className={styles.highlightsList}>
            <li>
              <Image
                src="https://gos3.ibcdn.com/roomSizeBlack-1678093548.png"
                alt="Size"
                width={20}
                height={20}
              />
              <span>301 sq.ft (28 sq.mt)</span>
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

        <div className={styles.aboutRoom}>
          <h4>About the room</h4>
          <p>
            Indulge in a luxurious stay in this room known for city or pool views floor to ceiling
            windows. Be assured of a fun-filled time in your room with amenities like 42-inch LED TV.
            Step straight into your rooms swanky bathroom fitted with Moha bath amenities walk in
            shower.
          </p>
        </div>

        <div className={styles.amenitiesSection}>
          <h4>Amenities</h4>

          <div className={styles.amenitiesGrid}>
            <div className={styles.amenityColumn}>
              <h5>Popular with Guests</h5>
              <ul>
                {amenities.popular
                  .slice(0, showAllAmenities.popular ? amenities.popular.length : 9)
                  .map((item, index) => (
                    <li key={`popular-${index}`}>
                      <span>•</span>
                      {item}
                    </li>
                  ))}
                {amenities.popular.length > 9 && (
                  <button
                    className={styles.viewMoreButton}
                    onClick={() => toggleAmenities('popular')}
                  >
                    {showAllAmenities.popular ? '- Show less' : '+1 more'}
                  </button>
                )}
              </ul>
            </div>

            <div className={styles.amenityColumn}>
              <h5>Room Features</h5>
              <ul>
                {amenities.roomFeatures
                  .slice(0, showAllAmenities.roomFeatures ? amenities.roomFeatures.length : 9)
                  .map((item, index) => (
                    <li key={`features-${index}`}>
                      <span>•</span>
                      {item}
                    </li>
                  ))}
                {amenities.roomFeatures.length > 9 && (
                  <button
                    className={styles.viewMoreButton}
                    onClick={() => toggleAmenities('roomFeatures')}
                  >
                    {showAllAmenities.roomFeatures ? '- Show less' : '+3 more'}
                  </button>
                )}
              </ul>
            </div>

            <div className={styles.amenityColumn}>
              <h5>Beds and Blanket</h5>
              <ul>
                {amenities.bedsAndBlanket.map((item, index) => (
                  <li key={`beds-${index}`}>
                    <span>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.amenityColumn}>
              <h5>Safety and Security</h5>
              <ul>
                {amenities.safety.map((item, index) => (
                  <li key={`safety-${index}`}>
                    <span>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.amenityColumn}>
              <h5>Media and Entertainment</h5>
              <ul>
                {amenities.media.map((item, index) => (
                  <li key={`media-${index}`}>
                    <span>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.amenityColumn}>
              <h5>Bathroom</h5>
              <ul>
                {amenities.bathroom
                  .slice(0, showAllAmenities.bathroom ? amenities.bathroom.length : 9)
                  .map((item, index) => (
                    <li key={`bathroom-${index}`}>
                      <span>•</span>
                      {item}
                    </li>
                  ))}
                {amenities.bathroom.length > 9 && (
                  <button
                    className={styles.viewMoreButton}
                    onClick={() => toggleAmenities('bathroom')}
                  >
                    {showAllAmenities.bathroom ? '- Show less' : '+7 more'}
                  </button>
                )}
              </ul>
            </div>

            <div className={styles.amenityColumn}>
              <h5>Other Facilities</h5>
              <ul>
                {amenities.other.map((item, index) => (
                  <li key={`other-${index}`}>
                    <span>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypesMoreDetails;