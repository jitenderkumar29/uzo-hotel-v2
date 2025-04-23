'use client';
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styles from "./CabSearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

// interface DateParts {
//   day: string;
//   month: string;
//   year: string;
// }

const CabSearchBar: React.FC = () => {
  const [cabType, setCabType] = useState<string>("Outstation One-Way");
  const [departure, setDeparture] = useState<string>("Meerut");
  const [destination, setDestination] = useState<string>("Delhi");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>("");
  const [returnTime, setReturnTime] = useState<string>("");

  // Popper Modifier for Date picker
  const popperModifiers = [
    {
      name: 'offset',
      options: { offset: [0, 10] },
      fn: (state: { [key: string]: unknown }) => state,
    },
  ];

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toTimeString().slice(0, 5);
    setTime(formattedTime);
  }, []);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleReturnTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnTime(e.target.value);
  };

  const cabTypes = [
    "Outstation One-Way",
    "Outstation Round Trip",
    "Airport Transfers",
  ];

  const swapCities = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  const formatDate = (date: Date): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // const getDateParts = (date: Date): DateParts => {
  //   if (!date) return { day: "", month: "", year: "" };
  //   return {
  //     day: date.getDate().toString(),
  //     month: date.toLocaleString("default", { month: "short" }) + "'",
  //     year: date.getFullYear().toString().slice(-2),
  //   };
  // };

  // const departureParts = getDateParts(departureDate);
  // const returnParts = getDateParts(returnDate);

  return (
    <div className={styles.searchOptionsCab}>
      {/* Trip Type */}
      <div className={styles.tripType}>
        {cabTypes.map((type) => (
          <div
            className={`${styles.tripOption} ${cabType === type ? styles.active : ""
              }`}
            key={type}
          >
            <input
              type="radio"
              id={type}
              name="trip-type"
              checked={cabType === type}
              onChange={() => setCabType(type)}
            />
            <label htmlFor={type}>
              {type
                .replace("-", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </label>
          </div>
        ))}
      </div>

      {/* Search Fields */}
      <div className={styles.searchFieldsMultipleCab}>
        {/* Departure */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Departure From</label>
          <div className={styles.fieldInput}>
            <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              placeholder="City or Airport"
              className={styles.inputField}
            />
            <div className={styles.fieldSubtext}>
              {departure === "Meerut"
                ? "Meerut Current Place"
                : departure === "Delhi"
                  ? "Rajiv Chowk Delhi"
                  : ""}
            </div>
          </div>
          <button className={styles.swapButton} onClick={swapCities}>
            {/* <i className="fas fa-exchange-alt"></i> */}
            <FontAwesomeIcon className={styles.swapIcon} icon={faRightLeft} />
          </button>
        </div>

        {/* Destination */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Going To</label>
          <div className={styles.fieldInput}>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="City or Airport"
              className={styles.inputField}
            />
            <div className={styles.fieldSubtext}>
              {destination === "Delhi"
                ? "Rajiv Chowk Delhi"
                : destination === "Meerut"
                  ? "Meerut Current Place"
                  : ""}
            </div>
          </div>
        </div>

        {/* Departure Date */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Dep. Pickup Date</label>
          <div className={`${styles.fieldInput} ${styles.dateInput}`}>
            {/* <DatePicker
              selected={departureDate}
              onChange={(date: Date | null) => date && setDepartureDate(date)}
              selectsStart
              startDate={departureDate}
              minDate={new Date()}
              dateFormat="yyyy/MM/dd"
              className={styles.datePickerInput}

            /> */}
            <DatePicker
              selected={departureDate}
              onChange={(date: Date | null) => date && setDepartureDate(date)}
              selectsStart
              startDate={departureDate}
              // endDate={returnDate}
              minDate={new Date()}
              dateFormat="yyyy/MM/dd"
              className={styles.datePickerInput}
              id="checkin"
              popperClassName={styles.datePickerPopper}
              popperPlacement="bottom-start"
              popperModifiers={popperModifiers}
              withPortal
              shouldCloseOnSelect={true}
            />
            <div className={styles.dateDisplay}>
              {/* <div className={styles.dateValue}>
                <span className={styles.dateDay}>{departureParts.day}</span>
                <span className={styles.dateMonth}>{departureParts.month}</span>
                <span className={styles.dateYear}>{departureParts.year}</span>
              </div> */}
              <div className={styles.dateWeekday}>{formatDate(departureDate)}</div>
            </div>
          </div>
        </div>

        {/* Pickup time */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="appt">
            Dep. Pickup Time
          </label>
          <div className={`${styles.fieldInput} ${styles.dateInput}`}>
            <input
              type="time"
              id="appt"
              name="appt"
              className={styles.inputField}
              value={time}
              onChange={handleTimeChange}
            />
            <div className={styles.dateDisplay}>
              <div className={styles.dateValue}></div>
              <div className={styles.dateWeekday}>Time Selected</div>
            </div>
          </div>
        </div>

        {/* Return Date */}
        {cabType === "Outstation Round Trip" && (
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Return Date</label>
            <div className={`${styles.fieldInput} ${styles.dateInput}`}>
              {/* <DatePicker
                selected={returnDate}
                onChange={(date: Date | null) => date && setReturnDate(date)}
                selectsStart
                startDate={returnDate}
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                className={styles.datePickerInput}
              /> */}
              <DatePicker
                selected={returnDate}
                onChange={(date: Date | null) => date && setReturnDate(date)}
                selectsStart
                startDate={returnDate}
                // endDate={returnDate}
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
                className={styles.datePickerInput}
                id="checkOut"
                popperClassName={styles.datePickerPopper}
                popperPlacement="bottom-start"
                popperModifiers={popperModifiers}
                withPortal
                shouldCloseOnSelect={true}
              />
              {returnDate ? (
                <div className={styles.dateDisplay}>
                  {/* <div className={styles.dateValue}>
                    <span className={styles.dateDay}>{returnParts.day}</span>
                    <span className={styles.dateMonth}>{returnParts.month}</span>
                    <span className={styles.dateYear}>{returnParts.year}</span>
                  </div> */}
                  <div className={styles.dateWeekday}>{formatDate(returnDate)}</div>
                </div>
              ) : (
                <div className={styles.returnNote}>
                  Book Round Trip
                  <br />
                  to save extra
                </div>
              )}
            </div>
          </div>
        )}

        {/* Return Pickup time */}
        {cabType === "Outstation Round Trip" && (
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="apptReturn">
              Return Pickup Time
            </label>
            <div className={`${styles.fieldInput} ${styles.dateInput}`}>
              <input
                type="time"
                id="apptReturn"
                name="apptReturn"
                className={styles.inputField}
                value={returnTime}
                onChange={handleReturnTimeChange}
              />
              <div className={styles.dateDisplay}>
                <div className={styles.dateValue}></div>
                <div className={styles.dateWeekday}>Time Selected</div>
              </div>
            </div>
          </div>
        )}

        {/* Search Button */}
        <div className={`${styles.fieldGroup} ${styles.searchButtonContainer}`}>
          <button className={styles.searchButtonMultiple}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default CabSearchBar;