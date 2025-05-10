'use client'
import React, { useState } from 'react'
import styles from './RoomHeaderSticky.module.css'
import { FaChevronDown } from 'react-icons/fa'

const roomTypes = [
  {
    name: 'Standard Room',
    price: '₹6,545',
    size: '250 sq.ft',
    active: true,
  },
  {
    name: 'Deluxe Twin Room',
    price: '₹7,326',
    size: '301 sq.ft',
    active: true,
  },
  {
    name: 'Superior Twin Room With Pool View',
    price: '₹8, 225',
    size: '323 sq.ft',
    active: true,
  },
  {
    name: 'Superior King Room With Pool View',
    price: '₹9, 225',
    size: '324 sq.ft',
    active: true,
  },

  {
    name: 'Superior Sea View Balcony Room',
    price: '₹8,139',
    size: '22500 sq.ft',
    active: false,
  },
  {
    name: 'Queens Necklace Suite',
    price: '₹8,359',
    size: '550 sq.ft',
    active: false,
  },
  {
    name: 'Premium Room',
    price: '₹7,359',
    size: '555 sq.ft',
    active: false,
  },
];

const RoomHeaderSticky = () => {
  const [roomTypeOpen, SetRoomTypeOpen] = useState(false);

  const RoomTypeDropdown = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <ul className={styles.dropdownRoom}>
        {roomTypes.map((room, index) => (
          <li
            key={index}
            className={`${styles.roomItemRoom} ${selectedIndex === index ? styles.activeRoom : ''
              }`}
            onClick={() => setSelectedIndex(index)}
          >
            {selectedIndex === index && <div className={styles.activeBarRoom} />}
            <div>
              <p className={`${styles.roomNameRoom} ${selectedIndex === index ? styles.roomNameActiveRoom : ''}`}>
                {room.name}
              </p>
              <p className={styles.roomInfoRoom}>
                Starts at {room.price} | {room.size}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className={styles.roomCard}>
        <div className={styles.roomCardContent}>
          <div className={styles.roomCardLeft}>
            <div className={styles.roomCardHeader} onClick={() => SetRoomTypeOpen(!roomTypeOpen)}>
              <h1>Room Types</h1>
              <FaChevronDown className={styles.chevDownIcon} />
            </div>
            {(roomTypeOpen) && (
              <div className={styles.roomTypeDropdown}
                onClick={() => SetRoomTypeOpen(!roomTypeOpen)}
              >
                <RoomTypeDropdown />
              </div>
            )}
          </div>

          <div className={styles.roomCardRight}>
            <div className={styles.ratePlan}>
              <div className={styles.ratePlanContent}>
                Room Options
              </div>
              <div className={styles.priceContainer}>
                Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomHeaderSticky
