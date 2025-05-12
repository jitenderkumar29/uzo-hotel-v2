'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './RoomHeaderSticky.module.css'
import { FaChevronDown } from 'react-icons/fa'

const roomTypes = [
  {
    name: 'Day Use Room, 6 hrs stay',
    price: '₹3,700',
    size: '250 sq.ft',
    active: true,
  },
  {
    name: 'Deluxe King Room',
    price: '₹₹5,700',
    size: '301 sq.ft',
    active: true,
  },
  {
    name: 'Superior Room Double',
    price: '₹9,821',
    size: '323 sq.ft',
    active: true,
  },
  {
    name: 'Premium Room',
    price: '₹9,921',
    size: '324 sq.ft',
    active: true,
  },

  // {
  //   name: 'Superior Sea View Balcony Room',
  //   price: '₹8,139',
  //   size: '22500 sq.ft',
  //   active: false,
  // },
  // {
  //   name: 'Queens Necklace Suite',
  //   price: '₹8,359',
  //   size: '550 sq.ft',
  //   active: false,
  // },
  // {
  //   name: 'Premium Room',
  //   price: '₹7,359',
  //   size: '555 sq.ft',
  //   active: false,
  // },
];

const RoomHeaderSticky = () => {
  const [roomTypeOpen, setRoomTypeOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null); // Properly typed ref

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRoomTypeOpen(false);
      }
    };

    if (roomTypeOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [roomTypeOpen]);

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
          <div className={styles.roomCardLeft} ref={dropdownRef}>
            {/* <RoomTypesDropdown /> */}
            <div className={styles.roomCardHeader} onClick={() => setRoomTypeOpen(!roomTypeOpen)}>
              <h1>4 Room Types</h1>
              <FaChevronDown className={styles.chevDownIcon} />
            </div>
            {(roomTypeOpen) && (
              <div className={styles.roomTypeDropdown}
                onClick={() => setRoomTypeOpen(!roomTypeOpen)}
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


// const RoomTypesDropdown = () => {
//   const [selected, setSelected] = useState("Latest first");
//   const sortOptions = ["Latest first", "Helpful first", "Positive first", "Negative first"];
//   return (
//     <div className={styles.dropdownWrapper}>
//       <div className={styles.sortByLabel}>
//         <span>Sort By:</span>
//         <span className={styles.selected}>{selected}</span>
//         <FontAwesomeIcon icon={faChevronDown} className={styles.iconSort} />
//       </div>

//       <div className={styles.dropdown}>
//         {/* <div className={styles.title}>Sort By</div> */}
//         {sortOptions.map((option) => (
//           <label key={option} className={styles.option}>
//             <input
//               type="radio"
//               name="sort"
//               readOnly
//               checked={selected === option}
//               onClick={() => setSelected(option)}
//             />
//             <span>{option}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }
export default RoomHeaderSticky
