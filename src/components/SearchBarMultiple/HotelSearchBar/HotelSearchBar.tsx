'use client';
import React, { useState } from "react";
import styles from "./HotelSearchBar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Filter {
  id: string;
  label: string;
  checked: boolean;
}

const HotelSearchBar: React.FC = () => {
  const [filters, setFilters] = useState<Filter[]>([
    { id: "free-cancellation", label: "Free cancellation", checked: false },
    { id: "five-stars", label: "5 Stars", checked: false },
    { id: "four-stars", label: "4 Stars", checked: false },
    { id: "three-stars", label: "3 Stars", checked: false },
  ]);

  const [showRoomGuestSelector, setShowRoomGuestSelector] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(new Date());
  const [destination, setDestination] = useState("");

  // Popper Modifier for Date picker
  const popperModifiers = [
    {
      name: 'offset',
      options: { offset: [0, 10] },
      fn: (state: { [key: string]: unknown }) => state,
    },
  ];

  const toggleFilter = (id: string) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log({
      destination,
      checkIn,
      checkOut,
      roomCount,
      guestCount,
      childCount,
      filters: filters.filter(f => f.checked).map(f => f.label)
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.searchCard}>
        <div className={styles.searchFields}>
          <div className={`${styles.searchField} ${styles.destination}`}>
            <label htmlFor="destination" className={styles.labelText}>
              Where do you want to stay?
            </label>
            <input
              type="text"
              id="destination"
              className={styles.searchInput}
              placeholder="Search by City, Hotel"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className={styles.divider}></div>

          <div className={`${styles.searchField} ${styles.dateFields}`}>
            <div className={styles.dateField}>
              <label htmlFor="checkin">Check-in</label>
              {/* <DatePicker
                selected={checkIn}
                onChange={(date: Date | null) => date && setCheckIn(date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                className={styles.searchInput}
                id="checkin"
              /> */}

              <DatePicker
                selected={checkIn}
                onChange={(date: Date | null) => date && setCheckIn(date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                className={styles.searchInput}
                id="checkin"
                popperClassName={styles.datePickerPopper}
                popperPlacement="bottom-start"
                popperModifiers={popperModifiers}
                withPortal
                shouldCloseOnSelect={true}
              />
            </div>
            <div className={styles.dateField}>
              <label htmlFor="checkout">Check-out</label>
              {/* <DatePicker
                selected={checkOut}
                onChange={(date: Date | null) => date && setCheckOut(date)}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                minDate={checkIn}
                dateFormat="yyyy/MM/dd"
                className={styles.searchInput}
                id="checkout"
              /> */}
              <DatePicker
                selected={checkOut}
                onChange={(date: Date | null) => date && setCheckOut(date)}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                minDate={checkIn}
                dateFormat="yyyy/MM/dd"
                className={styles.searchInput}
                id="checcheckoutkin"
                popperClassName={styles.datePickerPopper}
                popperPlacement="bottom-start"
                popperModifiers={popperModifiers}
                withPortal
                shouldCloseOnSelect={true}
              />
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={`${styles.searchField} ${styles.guests}`}>
            <label htmlFor="guests">Guests and Rooms</label>
            <div className={`${styles.searchSection} ${styles.guestRooms}`}>
              <div
                className={styles.roomGuestSelector}
                // onClick={() => setShowRoomGuestSelector(!showRoomGuestSelector)}
                // onClick={(e) => {
                //   e.stopPropagation(); // Prevent event bubbling
                //   setShowRoomGuestSelector(prev => !prev); // Use functional update
                // }}
                onClick={(e) => {
                  console.log('Click event triggered'); // Debug log
                  e.stopPropagation();
                  console.log('Current state:', showRoomGuestSelector); // Debug log
                  setShowRoomGuestSelector(prev => {
                    console.log('Updating state to:', !prev); // Debug log
                    return !prev;
                  });
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setShowRoomGuestSelector(prev => !prev)}
              // onKeyDown={(e) =>
              //   e.key === 'Enter' && setShowRoomGuestSelector(!showRoomGuestSelector)
              // }
              >
                <div className={styles.roomGuestItem}>
                  <span>{roomCount} Room{roomCount !== 1 ? 's' : ''}</span>
                </div>
                <div className={styles.roomGuestItem}>
                  <span>{guestCount} Guest{guestCount !== 1 ? 's' : ''}</span>
                </div>
                {childCount >= 0 && (
                  <div className={styles.roomGuestItem}>
                    <span>{childCount} Child{childCount !== 1 ? '' : ''}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <button type="submit" className={styles.searchButton}>
            Search
          </button>

          {showRoomGuestSelector && (
            <div className={styles.travellerModal}>
              <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                  <h3 className={styles.modalHeaderTitle}>Guests, Rooms and Child</h3>
                </div>


                <div className={styles.counter}>
                  <span>Rooms</span>
                  <div className={styles.counterControls}>
                    <button
                      type="button"
                      onClick={() => setRoomCount(Math.max(1, roomCount - 1))}
                      aria-label="Decrease room count"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{roomCount}</span>
                    <button
                      type="button"
                      onClick={() => setRoomCount(roomCount + 1)}
                      aria-label="Increase room count"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>

                <div className={styles.counter}>
                  <span>Guests</span>
                  <div className={styles.counterControls}>
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      aria-label="Decrease guest count"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{guestCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestCount(guestCount + 1)}
                      aria-label="Increase guest count"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <div className={styles.counter}>
                  <span>Child</span>
                  <div className={styles.counterControls}>
                    <button
                      type="button"
                      onClick={() => setChildCount(Math.max(0, childCount - 1))}
                      aria-label="Decrease child count"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{childCount}</span>
                    <button
                      type="button"
                      onClick={() => setChildCount(childCount + 1)}
                      aria-label="Increase child count"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <div className={styles.counter}>
                  <button
                    type="button"
                    className={styles.doneButton}
                    onClick={() => setShowRoomGuestSelector(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* working code for select guest room and child */}
          {/* {showRoomGuestSelector && (
            <div className={styles.roomGuestPopup}>
              <div className={styles.counter}>
                <span>Rooms</span>
                <div className={styles.counterControls}>
                  <button
                    type="button"
                    onClick={() => setRoomCount(Math.max(1, roomCount - 1))}
                    aria-label="Decrease room count"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{roomCount}</span>
                  <button
                    type="button"
                    onClick={() => setRoomCount(roomCount + 1)}
                    aria-label="Increase room count"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>

              <div className={styles.counter}>
                <span>Guests</span>
                <div className={styles.counterControls}>
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    aria-label="Decrease guest count"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{guestCount}</span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(guestCount + 1)}
                    aria-label="Increase guest count"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              <div className={styles.counter}>
                <span>Children</span>
                <div className={styles.counterControls}>
                  <button
                    type="button"
                    onClick={() => setChildCount(Math.max(0, childCount - 1))}
                    aria-label="Decrease child count"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{childCount}</span>
                  <button
                    type="button"
                    onClick={() => setChildCount(childCount + 1)}
                    aria-label="Increase child count"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              <div className={styles.counter}>
                <button
                  type="button"
                  className={styles.doneButton}
                  onClick={() => setShowRoomGuestSelector(false)}
                >
                  Done
                </button>
              </div>
            </div>
          )} */}
        </div>

        <div className={styles.filters}>
          <span className={styles.popularFilter}>Popular Filters:</span>
          {filters.map((filter) => (
            <React.Fragment key={filter.id}>
              <input
                type="checkbox"
                id={filter.id}
                className={styles.filterCheckbox}
                checked={filter.checked}
                onChange={() => toggleFilter(filter.id)}
              />
              <label htmlFor={filter.id} className={styles.filterLabel}>
                <span
                  className={`${styles.customCheckbox} ${filter.checked ? styles.checked : ""
                    }`}
                  aria-hidden="true"
                ></span>
                {filter.label}
              </label>
            </React.Fragment>
          ))}
        </div>
      </form>
    </div>
  );
};

export default HotelSearchBar;