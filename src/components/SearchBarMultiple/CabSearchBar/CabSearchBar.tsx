'use client';
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styles from "./CabSearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faRightLeft, faTimes } from "@fortawesome/free-solid-svg-icons";

// interface DateParts {
//   day: string;
//   month: string;
//   year: string;
// }
interface HoursClass {
  name: string;
  id: string;
}

const CabSearchBar: React.FC = () => {
  const [cabType, setCabType] = useState<string>("Outstation One Way");
  const [departure, setDeparture] = useState<string>("Meerut");
  const [destination, setDestination] = useState<string>("Delhi");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>("");
  const [returnTime, setReturnTime] = useState<string>("");
  const [showHoursModal, setShowHoursModal] = useState<boolean>(false);
  const [hoursClass, setHoursClass] = useState<HoursClass>({
    name: "2",
    id: "1",
  });
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
    "Outstation One Way",
    "Airport Transfers",
    "Hourly",
  ];

  const hourlyClasses: HoursClass[] = [
    { name: "2", id: "1" },
    { name: "4", id: "2" },
    { name: "6", id: "3" },
    { name: "8", id: "4" },
    { name: "10", id: "5" },
    { name: "12", id: "6" },

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


  interface CustomInputProps {
    value?: string;
    onClick?: () => void;
  }

  const CustomInput = React.forwardRef<HTMLDivElement, CustomInputProps>(
    ({ value = '', onClick }, ref) => {
      // Split the date string into day and month/year parts
      const [day = '', monthYear = ''] = value.split(/ (.+)/);

      return (
        <div
          onClick={onClick}
          ref={ref}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginLeft: "10px"
          }}
        >
          <span style={{ fontSize: "28px", fontWeight: "bold" }}>{day}</span>
          <span style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "-5px" }}>{monthYear}</span>
        </div >
      );
    }
  );

  CustomInput.displayName = 'CustomInput';

  {/* Departure */ }
  const DepartureFrom = () => (
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
        <FontAwesomeIcon className={styles.swapIcon} icon={faRightLeft} />
      </button>
    </div>
  )

  {/* Destination */ }
  const GoingTo = () => (
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
  )
  {/* Departure Date */ }
  const DepPickupDate = () => (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>Dep. Pickup Date</label>
      <div className={`${styles.fieldInput} ${styles.dateInput}`}>
        <DatePicker
          selected={departureDate}
          onChange={(date: Date | null) => date && setDepartureDate(date)}
          selectsStart
          startDate={departureDate}
          minDate={new Date()}
          dateFormat="dd MMM, yyyy"
          className={styles.datePickerInput}
          id="checkin"
          popperClassName={styles.datePickerPopper}
          popperPlacement="bottom-start"
          popperModifiers={popperModifiers}
          withPortal
          shouldCloseOnSelect={true}
          customInput={<CustomInput />}
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
  )
  {/* Pickup time */ }
  const DepPickupTime = () => (
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
  )

  const Hourly = () => (
    <div className={`${styles.fieldGroup} ${styles.travellerGroup}`}>
      <label className={styles.fieldLabel}>Rent For</label>
      <div
        className={`${styles.fieldInput} ${styles.travellerInput}`}
        onClick={() => setShowHoursModal(true)}
      >
        {/* <div className={styles.travellerValue}>{hoursClass.id}</div> */}
        <div className={styles.travellerValue}>{hoursClass.name} Hours.</div>
        {/* <i className={`fas fa-chevron-down ${styles.travellerArrow}`}></i> */}
        <FontAwesomeIcon className={styles.travellerArrow} icon={faChevronDown} />
      </div>

      {showHoursModal && (
        <div className={styles.travellerModal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Select Hours</h3>
              <button
                className={styles.closeModal}
                onClick={() => setShowHoursModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className={styles.classOptions}>
              {hourlyClasses.map((cls) => (
                <div
                  key={cls.id}
                  className={`${styles.classOption} ${hoursClass.name === cls.name ? styles.selected : ""
                    }`}
                  onClick={() => setHoursClass(cls)}
                >
                  {cls.name} Hours.
                </div>
              ))}
            </div>

            <button
              className={styles.applyButton}
              onClick={(e) => {
                e.stopPropagation();
                setShowHoursModal(false);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const SearchButton = () => (
    <div className={`${styles.fieldGroup} ${styles.searchButtonContainer}`}>
      <button className={styles.searchButtonMultiple}>Search</button>
    </div>
  )

  return (
    <div className={styles.searchOptionsCab}>
      <div className={styles.searchOptionsCabBody}>
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
        {cabType === "Outstation One Way" && (<div className={styles.searchFieldsMultipleCab}>
          <DepartureFrom />
          <GoingTo />
          <DepPickupDate />
          <DepPickupTime />
          <SearchButton />
        </div>)}
        {cabType === "Airport Transfers" && (<div className={styles.searchFieldsMultipleCab}>
          <DepartureFrom />
          <GoingTo />
          <DepPickupDate />
          <DepPickupTime />
          <SearchButton />
        </div>)}

        {cabType === "Hourly" && (<div className={styles.searchFieldsMultipleCabHourly}>
          <DepartureFrom />
          <GoingTo />
          <DepPickupDate />
          <DepPickupTime />
          <Hourly />
          <SearchButton />
        </div>)}

        {/* Return Date */}
        {/* {cabType === "Outstation Round Trip" && (
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Return Date</label>
              <div className={`${styles.fieldInput} ${styles.dateInput}`}>
                <DatePicker
                  selected={returnDate}
                  onChange={(date: Date | null) => date && setReturnDate(date)}
                  selectsStart
                  startDate={returnDate}
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
          )} */}

        {/* Return Pickup time */}
        {/* {cabType === "Outstation Round Trip" && (
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
          )} */}

      </div>
    </div>
  );
};

export default CabSearchBar;