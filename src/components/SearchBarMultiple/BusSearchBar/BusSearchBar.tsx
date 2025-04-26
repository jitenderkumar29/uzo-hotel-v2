'use client';
import React, { useState } from "react";
import styles from "./BusSearchBar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

// interface Tab {
//   icon: string;
//   label: string;
// }

// interface SpecialOption {
//   id: string;
//   title: string;
//   subtitle: string;
// }

const BusSearchBar: React.FC = () => {
  // const [, setActiveTab] = useState<string>("Flights");
  // const [tripType, setTripType] = useState<string>("one-way");
  const [departure, setDeparture] = useState<string>("Ghaziabad");
  const [destination, setDestination] = useState<string>("Banglore");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  // const [returnDate,] = useState<Date>(new Date());
  // const [specialOption, setSpecialOption] = useState<string>("regular");
  // const [nonStop, setNonStop] = useState<boolean>(true);
  // const [, setTravellers] = useState<number>(1);
  // const [, setTravellersChild] = useState<number>(1);
  // const [, setTravellersInfant] = useState<number>(1);
  // const [travelClass, setTravelClass] = useState<string>("Economy");
  // const [showTravellerModal, setShowTravellerModal] = useState<boolean>(false);

  // Popper Modifier for Date picker
  const popperModifiers = [
    {
      name: 'offset',
      options: { offset: [0, 10] },
      fn: (state: { [key: string]: unknown }) => state,
    },
  ];

  // const CustomInput = React.forwardRef(({ value, onClick }: any, ref) => {
  //   const [day, monthYear] = value.split(/ (.+)/); // Split "25 Apr, 2025"

  //   return (
  //     <div onClick={onClick} ref={ref as any} style={{ cursor: "pointer" }}>
  //       <span style={{ fontSize: "28px", fontWeight: "bold", padding: "0px 0px 0px 10px" }}>{day}</span>{" "}
  //       <span style={{ fontSize: "20px", fontWeight: "bold" }}>{monthYear}</span>
  //     </div >
  //   );
  // });


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
            gap: "4px"
          }}
        >
          <span style={{ fontSize: "28px", fontWeight: "bold" }}>{day}</span>
          <span style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "-5px" }}>{monthYear}</span>
        </div>
      );
    }
  );

  CustomInput.displayName = 'CustomInput';

  // const tabs: Tab[] = [
  //   { icon: "plane", label: "Flights" },
  //   { icon: "hotel", label: "Hotels" },
  //   { icon: "bus", label: "Bus" },
  //   { icon: "train", label: "Trains" },
  //   { icon: "umbrella-beach", label: "Holidays" },
  //   { icon: "taxi", label: "Cabs" },
  // ];

  // const specialOptions: SpecialOption[] = [
  //   { id: "regular", title: "Regular", subtitle: "Regular Fares" },
  //   { id: "student", title: "Student", subtitle: "Extra Baggage" },
  //   { id: "armed-forces", title: "Armed Forces", subtitle: "Extra Discount" },
  //   { id: "senior-citizen", title: "Senior Citizen", subtitle: "Extra Discount" },
  //   { id: "Doctors-and-Nurses", title: "Doctor and Nurse", subtitle: "Extra Discount" },
  // ];

  // const travelClasses: string[] = [
  //   "Economy",
  //   "Premium Economy",
  //   "Business",
  //   "First Class",
  // ];

  const swapCities = (): void => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  const formatDate = (date: Date): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // const getDateParts = (date: Date): { day: number; month: string; year: string } => {
  //   if (!date) return { day: 0, month: "", year: "" };
  //   return {
  //     day: date.getDate(),
  //     month: date.toLocaleString("default", { month: "short" }) + "'",
  //     year: date.getFullYear().toString().slice(-2),
  //   };
  // };

  // const handleTravellerChange = (type: "increase" | "decrease"): void => {
  //   if (type === "increase") {
  //     setTravellers((prev) => Math.min(prev + 1, 9));
  //   } else {
  //     setTravellers((prev) => Math.max(prev - 1, 1));
  //   }
  // };

  // const handleTravellerChangeChild = (type: "increase" | "decrease"): void => {
  //   if (type === "increase") {
  //     setTravellersChild((prev) => Math.min(prev + 1, 9));
  //   } else {
  //     setTravellersChild((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  // const handleTravellerChangeInfant = (type: "increase" | "decrease"): void => {
  //   if (type === "increase") {
  //     setTravellersInfant((prev) => Math.min(prev + 1, 9));
  //   } else {
  //     setTravellersInfant((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  // const handleActiveTab = (activeTabSelected: string): void => {
  //   setActiveTab(activeTabSelected);
  // };

  // const departureParts = getDateParts(departureDate);
  // const returnParts = getDateParts(returnDate);

  return (
    <div className={styles.searchOptionsBus}>
      <div className={styles.searchFieldsMultipleBus}>
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
              {departure === "Ghaziabad"
                ? "Ghaziabad Bus Stand"
                : departure === "Banglore"
                  ? "Banglore Bus Stand"
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
              {destination === "Banglore"
                ? "Banglore Bus Stand"
                : destination === "Ghaziabad"
                  ? "Ghaziabad Bus Stand"
                  : ""}
            </div>
          </div>
        </div>

        {/* Departure Date */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Departure Date</label>
          <div className={`${styles.fieldInput} ${styles.dateInput}`}>
            {/* <DatePicker
              selected={departureDate}
              onChange={(date: Date | null) => date && setDepartureDate(date)}
              selectsStart
              startDate={departureDate}
              dateFormat="yyyy/MM/dd"
              className={styles.inputField}
            /> */}
            <DatePicker
              selected={departureDate}
              onChange={(date: Date | null) => date && setDepartureDate(date)}
              selectsStart
              startDate={departureDate}
              minDate={new Date()}
              dateFormat="dd MMM, yyyy"
              className={styles.inputField}
              id="checkin"
              popperClassName={styles.datePickerPopper}
              popperPlacement="bottom-start"
              popperModifiers={popperModifiers}
              withPortal
              shouldCloseOnSelect={true}
              customInput={<CustomInput />}

            />

            <div className={styles.dateDisplay}>
              <div className={styles.dateWeekday}>{formatDate(departureDate)}</div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className={`${styles.fieldGroup} ${styles.searchButtonContainer}`}>
          <button className={styles.searchButtonMultiple}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default BusSearchBar;