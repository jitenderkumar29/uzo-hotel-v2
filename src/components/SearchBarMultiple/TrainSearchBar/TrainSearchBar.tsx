'use client';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./TrainSearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faRightLeft } from "@fortawesome/free-solid-svg-icons";

interface TravelClass {
  name: string;
  id: string;
}
interface TrainStartDates {
  name: string;
  id: string;
}

// interface SpecialOption {
//   id: string;
//   title: string;
//   subtitle: string;
// }

const TrainSearchBar = () => {
  // const [, setActiveTab] = useState<string>("Flights");
  const [ticketType, setTicketType] = useState<string>("Book Train Tickets");
  const [departure, setDeparture] = useState<string>("Faridabad");
  const [trainPNRValue, setTrainPNRValue] = useState<string>("");
  const [liveTrainStatus, setLiveTrainStatus] = useState<string>("");
  const [yourStop, setYourStop] = useState<string>("");
  const [destination, setDestination] = useState<string>("Karnataka");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  // const [returnDate, setReturnDate] = useState<Date>(new Date());
  // const [specialOption, setSpecialOption] = useState<string>("regular");
  // const [nonStop, setNonStop] = useState<boolean>(true);
  // const [, setTravellers] = useState<number>(1);
  // const [, setTravellersChild] = useState<number>(1);
  // const [, setTravellersInfant] = useState<number>(1);

  const today = new Date();

  // Renamed to avoid conflict
  const formatDateString = (date: Date) => {
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getFullYear()}`;
  };

  // Create and format the dates
  const trainStartDates: TrainStartDates[] = [
    {
      name: formatDateString(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2)), // Day Before Yesterday
      id: 'Day Before Yesterday',
    },
    {
      name: formatDateString(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)), // Yesterday
      id: 'Yesterday',
    },
    {
      name: formatDateString(today), // Today
      id: 'Today',
    },
    {
      name: formatDateString(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)), // Tomorrow
      id: 'Tomorrow',
    },
  ];

  const [trainStartDate, setTrainStartDate] = useState<TrainStartDates>({
    name: formatDateString(today),
    id: "Today",
  })
  const [travelClass, setTravelClass] = useState<TravelClass>({
    name: "All Class",
    id: "ALL",
  });
  const [showTravellerModal, setShowTravellerModal] = useState<boolean>(false);
  const [showTrainStartDate, setShowTrainStartDate] = useState<boolean>(false);

  // Popper Modifier for Date picker
  const popperModifiers = [
    {
      name: 'offset',
      options: { offset: [0, 10] },
      fn: (state: { [key: string]: unknown }) => state,
    },
  ];

  // const tabs = [
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
  //   {
  //     id: "senior-citizen",
  //     title: "Senior Citizen",
  //     subtitle: "Extra Discount",
  //   },
  //   {
  //     id: "Doctors-and-Nurses",
  //     title: "Doctor and Nurse",
  //     subtitle: "Extra Discount",
  //   },
  // ];

  const travelTrainClasses: TravelClass[] = [
    { name: "All Class", id: "ALL" },
    { name: "Sleeper Class", id: "SL" },
    { name: "Third AC", id: "3A" },
    { name: "Second AC", id: "2A" },
    { name: "First AC", id: "1A" },
    { name: "Second Seating", id: "2S" },
    { name: "Vistadome AC", id: "EV" },
    { name: "AC Chair Car", id: "CC" },
    { name: "First Class", id: "FC" },
    { name: "Third AC Economy", id: "3E" },
  ];


  // const trainStartDates: TrainStartDates[] = [
  //   { name: dayBeforeYesterday, id: "Day Before Yesterday" },
  //   { name: yesterday, id: "Yesterday" },
  //   { name: today, id: "Today" },
  //   { name: tomorrow, id: "Tomorrow" },

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
        </div>
      );
    }
  );

  CustomInput.displayName = 'CustomInput';

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
          {departure === "Faridabad"
            ? "Faridabad Railway Station"
            : departure === "Karnataka"
              ? "Karnataka Railway Station"
              : ""}
        </div>
      </div>
      <button className={styles.swapButton} onClick={swapCities}>
        {/* <i className="fas fa-exchange-alt"></i> */}
        <FontAwesomeIcon className={styles.swapIcon} icon={faRightLeft} />
      </button>
    </div>
  )

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
          {destination === "Karnataka"
            ? "Karnataka Railway Station"
            : destination === "Faridabad"
              ? "Faridabad Railway Station"
              : ""}
        </div>
      </div>
    </div>
  )
  {/* Departure Date new*/ }
  const DepartureDate = () => (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>Departure Date</label>
      <div className={`${styles.fieldInput} ${styles.dateInput}`}>
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
  )

  // Class
  const Class = () => (
    <div className={`${styles.fieldGroup} ${styles.travellerGroup}`}>
      <label className={styles.fieldLabel}>Class</label>
      <div
        className={`${styles.fieldInput} ${styles.travellerInput}`}
        onClick={() => setShowTravellerModal(true)}
      >
        <div className={styles.travellerValue}>{travelClass.id}</div>
        <div className={styles.travellerValue}>{travelClass.name}</div>
        <FontAwesomeIcon className={styles.travellerArrow} icon={faChevronDown} />
      </div>

      {showTravellerModal && (
        <div className={styles.travellerModal}>
          <div className={styles.modalContent}>
            <div className={styles.classOptions}>
              {travelTrainClasses.map((cls) => (
                <div
                  key={cls.id}
                  className={`${styles.classOption} ${travelClass.name === cls.name ? styles.selected : ""
                    }`}
                  onClick={() => setTravelClass(cls)}
                >
                  {cls.name}
                </div>
              ))}
            </div>

            <button
              className={styles.applyButton}
              onClick={(e) => {
                e.stopPropagation();
                setShowTravellerModal(false);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )

  // Train Start Date
  const TrainStartDate = () => (
    <div className={`${styles.fieldGroup} ${styles.travellerGroup}`}>
      <label className={styles.fieldLabel}>Train Start Date</label>
      <div
        className={`${styles.fieldInput} ${styles.travellerInput}`}
        onClick={() => setShowTrainStartDate(true)}
      >
        <div className={styles.travellerValue}>{trainStartDate.id}</div>
        <div className={styles.travellerValue}>{trainStartDate.name}</div>
        <FontAwesomeIcon className={styles.travellerArrow} icon={faChevronDown} />
      </div>

      {showTrainStartDate && (
        <div className={styles.travellerModal}>
          <div className={styles.modalContent}>
            <div className={styles.classOptions}>
              {trainStartDates.map((cls) => (
                <div
                  key={cls.id}
                  className={`${styles.classOption} ${trainStartDate.name === cls.name ? styles.selected : ""
                    }`}
                  onClick={() => setTrainStartDate(cls)}
                >
                  {cls.name} <br /> {cls.id}
                </div>
              ))}
            </div>

            <button
              className={styles.applyButton}
              onClick={(e) => {
                e.stopPropagation();
                setShowTrainStartDate(false);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const TrainPNRStatus = () => (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>PNR Number</label>
      <div className={styles.fieldInputPNRStatus}>
        <input
          type="text"
          value={trainPNRValue}
          onChange={(e) => setTrainPNRValue(e.target.value)}
          placeholder="Enter Your 10 Digit PNR Number"
          className={styles.inputField}
        />
        {/* <div className={styles.fieldSubtext}>
          {departure === "Faridabad"
            ? "Faridabad Railway Station"
            : departure === "Karnataka"
              ? "Karnataka Railway Station"
              : ""}
        </div> */}
      </div>
      {/* <button className={styles.swapButton} onClick={swapCities}>
        <FontAwesomeIcon className={styles.swapIcon} icon={faRightLeft} />
      </button> */}
    </div>
  )
  const LiveTrainStatus = () => (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>Train Number / Name</label>
      <div className={styles.fieldInputPNR}>
        <input
          type="text"
          value={liveTrainStatus}
          onChange={(e) => setLiveTrainStatus(e.target.value)}
          placeholder="Enter Train Number"
          className={styles.inputFieldPNR}
        />
        {/* <div className={styles.fieldSubtext}>
          {departure === "Faridabad"
            ? "Faridabad Railway Station"
            : departure === "Karnataka"
              ? "Karnataka Railway Station"
              : ""}
        </div> */}
      </div>
      {/* <button className={styles.swapButton} onClick={swapCities}>
        <FontAwesomeIcon className={styles.swapIcon} icon={faRightLeft} />
      </button> */}
    </div>
  )
  const YourStop = () => (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>Your Stop</label>
      <div className={styles.fieldInputPNR}>
        <input
          type="text"
          value={yourStop}
          onChange={(e) => setYourStop(e.target.value)}
          placeholder="Select Station(optional)"
          className={styles.inputFieldPNR}
        />
        {/* <div className={styles.fieldSubtext}>
          {departure === "Faridabad"
            ? "Faridabad Railway Station"
            : departure === "Karnataka"
              ? "Karnataka Railway Station"
              : ""}
        </div> */}
      </div>
      {/* <button className={styles.swapButton} onClick={swapCities}>
        <FontAwesomeIcon className={styles.swapIcon} icon={faRightLeft} />
      </button> */}
    </div>
  )

  const SearchButton = () => (
    < div className={`${styles.fieldGroup} ${styles.searchButtonContainer}`
    }>
      <button className={styles.searchButtonMultiple}>Search</button>
    </ div>
  )


  return (
    <div className={styles.searchOptionsTrain}>
      <div className={styles.searchOptionsTrainBody}>
        <div className={styles.tripType}>
          {["Book Train Tickets", "Check PNR Status", "Live Train Status"].map(
            (type) => (
              <div
                className={`${styles.tripOption} ${ticketType === type ? styles.activeTripOption : ""
                  }`}
                key={type}
              >
                <input
                  type="radio"
                  id={type}
                  name="trip-type"
                  checked={ticketType === type}
                  onChange={() => setTicketType(type)}
                />
                <label htmlFor={type}>
                  {type
                    .replace("-", " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </label>
              </div>
            )
          )}
        </div>

        {ticketType === "Book Train Tickets" && (<div className={styles.searchFieldsMultipleTrain}>
          <DepartureFrom />
          <GoingTo />
          <DepartureDate />
          <Class />
          <SearchButton />
        </div>)}

        {ticketType === "Check PNR Status" && (<div className={styles.searchFieldsMultipleTrainPNR}>
          <TrainPNRStatus />
          <SearchButton />
        </div>)}
        {ticketType === "Live Train Status" && (<div className={styles.searchFieldsMultipleTrainStatus}>
          <LiveTrainStatus />
          <YourStop />
          <TrainStartDate />
          <SearchButton />
        </div>)}


        {/* <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Departure Date</label>
          <div className={styles.fieldInput}>
            <DatePicker
              selected={departureDate}
              onChange={(date: Date | null) => date && setDepartureDate(date)}
              dateFormat="yyyy/MM/dd"
              className={styles.datePickerInput}
              selectsStart
              startDate={departureDate}
              minDate={new Date()}
            />
            <div className={styles.dateDisplay}>
              <div className={styles.dateValue}>
                <span className={styles.dateDay}>{departureParts.day}</span>
                <span className={styles.dateMonth}>{departureParts.month}</span>
                <span className={styles.dateYear}>{departureParts.year}</span>
              </div>
              <div className={styles.dateWeekday}>{formatDate(departureDate)}</div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default TrainSearchBar;