'use client';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./HolidaySearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMinus, faPlus, faRightLeft, faTimes } from "@fortawesome/free-solid-svg-icons";

interface HotelTypeClass {
  name: string;
  id: string;
}

// interface Tab {
//   icon: string;
//   label: string;
// }

// interface SpecialOption {
//   id: string;
//   title: string;
//   subtitle: string;
// }

const HolidaySearchBar = () => {
  // const [, setActiveTab] = useState<string>("Flights");
  // const [tripType, setTripType] = useState<string>("one-way");
  const [departure, setDeparture] = useState<string>("Noida");
  const [destination, setDestination] = useState<string>("Kashmir");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  // const [returnDate,] = useState<Date>(new Date());
  // const [specialOption, setSpecialOption] = useState<string>("regular");
  // const [nonStop, setNonStop] = useState<boolean>(true);
  const [travellers, setTravellers] = useState<number>(1);
  const [travellersChild, setTravellersChild] = useState<number>(1);
  const [travellersInfant, setTravellersInfant] = useState<number>(1);
  const [hotelTypeClass, setHotelTypeClass] = useState<HotelTypeClass>({
    name: "5",
    id: "(13)",
  });
  const [showRoomGuestModal, setShowRoomGuestModal] = useState<boolean>(false);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  const min = 2;
  const max = 9;
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);

  const minBudget = 2000;
  const maxBudget = 92000;
  const [minBudgetVal, setMinBudgetVal] = useState<number>(minBudget);
  const [maxBudgetVal, setMaxBudgetVal] = useState<number>(maxBudget);

  // Popper Modifier for Date picker
  const popperModifiers = [
    {
      name: 'offset',
      options: { offset: [0, 10] },
      fn: (state: { [key: string]: unknown }) => state,
    },
  ];

  // Prevent overlap
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
  };

  const handleMinBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxBudgetVal - 1000);
    setMinBudgetVal(value);
  };

  const handleMaxBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minBudgetVal + 1000);
    setMaxBudgetVal(value);
  };

  const hotelTypeClasses: HotelTypeClass[] = [
    { name: "<3", id: "(0)" },
    { name: "3", id: "(15)" },
    { name: "4", id: "(35)" },
    { name: "5", id: "(13)" },
  ];

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

  const formatDate = (dateString: Date): string => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return dateString.toLocaleDateString("en-US", options);
  };

  // const getDateParts = (dateString: Date): { day: number; month: string; year: string } => {
  //   if (!dateString) return { day: 0, month: "", year: "" };
  //   return {
  //     day: dateString.getDate(),
  //     month: dateString.toLocaleString("default", { month: "short" }) + "'",
  //     year: dateString.getFullYear().toString().slice(-2),
  //   };
  // };

  const handleTravellerChange = (type: "increase" | "decrease"): void => {
    if (type === "increase") {
      setTravellers((prev) => Math.min(prev + 1, 9));
    } else {
      setTravellers((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleTravellerChangeChild = (type: "increase" | "decrease"): void => {
    if (type === "increase") {
      setTravellersChild((prev) => Math.min(prev + 1, 9));
    } else {
      setTravellersChild((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleTravellerChangeInfant = (type: "increase" | "decrease"): void => {
    if (type === "increase") {
      setTravellersInfant((prev) => Math.min(prev + 1, 9));
    } else {
      setTravellersInfant((prev) => Math.max(prev - 1, 0));
    }
  };

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
        </div >
      );
    }
  );

  CustomInput.displayName = 'CustomInput';


  return (
    <div className={styles.searchOptionsHoliday}>
      <div className={styles.searchFieldsMultipleHoliday}>
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
              {departure === "Noida"
                ? "Noida Sector 15"
                : departure === "Kashmir"
                  ? "Kashmir Hill Station"
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
              {destination === "Kashmir"
                ? "Kashmir Hill Station"
                : destination === "Noida"
                  ? "Noida Sector 15"
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
              dateFormat="dd MMMM yyyy"
            /> */}
            <DatePicker
              selected={departureDate}
              onChange={(date: Date | null) => date && setDepartureDate(date)}
              selectsStart
              startDate={departureDate}
              // endDate={returnDate}
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
              <div className={styles.dateValue}></div>
              <div className={styles.dateWeekday}>{formatDate(departureDate)}</div>
            </div>
          </div>
        </div>

        {/* Rooms & Guests */}
        <div className={`${styles.fieldGroup} ${styles.travellerGroup}`}>
          <label className={styles.fieldLabel}>Rooms & Guests</label>
          <div
            className={`${styles.fieldInput} ${styles.travellerInput}`}
            onClick={() => setShowRoomGuestModal(true)}
          >
            <div className={styles.travellerValue}>
              {travellers} Traveller{travellers > 1 ? "s" : ""}
            </div>
            <div className={styles.travellerValue}>
              {travellersChild} Child{travellersChild > 0 ? "" : ""}
            </div>
            <div className={styles.fieldSubtext}>
              {travellersInfant} Infant{travellersInfant > 0 ? "" : ""}
            </div>
            {/* <i className={`fas fa-chevron-down ${styles.travellerArrow}`}></i> */}
            <FontAwesomeIcon className={styles.travellerArrow} icon={faChevronDown} />
          </div>

          {showRoomGuestModal && (
            <div className={styles.travellerModal}>
              <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                  <h3>Rooms & Guests</h3>
                  <button
                    className={styles.closeModal}
                    onClick={() => setShowRoomGuestModal(false)}
                  >
                    {/* <i className="fas fa-times"></i> */}
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <div className={styles.travellerControl}>
                  <label>
                    Adults
                    <br /> <p>Above 12 Years</p>
                  </label>
                  <div className={styles.counter}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChange("decrease");
                      }}
                      disabled={travellers <= 1}
                    >
                      {/* <i className="fas fa-minus"></i> */}
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{travellers}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChange("increase");
                      }}
                      disabled={travellers >= 9}
                    >
                      {/* <i className="fas fa-plus"></i> */}
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <div className={styles.travellerControl}>
                  <label>
                    Child
                    <br /> <p>2-12 Years</p>
                  </label>
                  <div className={styles.counter}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChangeChild("decrease");
                      }}
                      disabled={travellersChild <= 0}
                    >
                      {/* <i className="fas fa-minus"></i> */}
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{travellersChild}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChangeChild("increase");
                      }}
                      disabled={travellersChild >= 9}
                    >
                      {/* <i className="fas fa-plus"></i> */}
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <div className={styles.travellerControl}>
                  <label>
                    Infant
                    <br /> <p>0-2 Years</p>
                  </label>
                  <div className={styles.counter}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChangeInfant("decrease");
                      }}
                      disabled={travellersInfant <= 0}
                    >
                      {/* <i className="fas fa-minus"></i> */}
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{travellersInfant}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTravellerChangeInfant("increase");
                      }}
                      disabled={travellersInfant >= 9}
                    >
                      {/* <i className="fas fa-plus"></i> */}
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <button
                  className={styles.applyButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRoomGuestModal(false);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Filter */}
        <div className={`${styles.fieldGroup} ${styles.travellerGroup}`}>
          <label className={styles.fieldLabel}>Filters</label>
          <div
            className={`${styles.fieldInput} ${styles.travellerInput}`}
            onClick={() => setShowFilterModal(true)}
          >
            <div className={styles.travellerValue}>
              {/* <small> */}
              ({minVal}N - {maxVal}N) Nights
              {/* </small> */}
            </div>
            <div className={styles.travellerValue}>
              <small>
                ({minBudgetVal}N - {maxBudgetVal}N)
              </small>
            </div>
            <div className={styles.fieldSubtext}>
              {hotelTypeClass.name} ★ {hotelTypeClass.id}
            </div>
            {/* <i className={`fas fa-chevron-down ${styles.travellerArrow}`}></i> */}
            <FontAwesomeIcon className={styles.travellerArrow} icon={faChevronDown} />
          </div>

          {showFilterModal && (
            <div className={styles.travellerModal}>
              <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                  <h3>Filters</h3>
                  <button
                    className={styles.closeModal}
                    onClick={() => setShowFilterModal(false)}
                  >
                    {/* <i className="fas fa-times"></i> */}
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <div className={styles.sliderContainerFilter}>
                  <div className={styles.labelFilter}>
                    <strong>Duration (in Nights)</strong>
                    <small>
                      {" "}
                      ({minVal}N - {maxVal}N)
                    </small>
                  </div>

                  <div className={styles.rangeSliderFilter}>
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={minVal}
                      onChange={handleMinChange}
                      className={styles.thumb}
                    />
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={maxVal}
                      onChange={handleMaxChange}
                      className={styles.thumb}
                    />

                    <div className={styles.sliderTrackFilter}></div>
                    <div
                      className={styles.sliderRangeFilter}
                      style={{
                        left: `${((minVal - min) / (max - min)) * 100}%`,
                        width: `${((maxVal - minVal) / (max - min)) * 100}%`,
                      }}
                    />
                  </div>

                  <div className={styles.valueLabelsFilter}>
                    <span>{minVal}N</span>
                    <span>{maxVal}N</span>
                  </div>
                </div>
                {/* Budget per person */}
                <div className={styles.sliderContainerFilter}>
                  <div className={styles.labelFilter}>
                    <strong>Budget (per person)</strong>
                    <small>
                      {" "}
                      ({minBudgetVal}N - {maxBudgetVal}N)
                    </small>
                  </div>

                  <div className={styles.rangeSliderFilter}>
                    <input
                      type="range"
                      min={minBudget}
                      max={maxBudget}
                      value={minBudgetVal}
                      onChange={handleMinBudgetChange}
                      className={styles.thumb}
                    />
                    <input
                      type="range"
                      min={minBudget}
                      max={maxBudget}
                      value={maxBudgetVal}
                      onChange={handleMaxBudgetChange}
                      className={styles.thumb}
                    />

                    <div className={styles.sliderTrackFilter}></div>
                    <div
                      className={styles.sliderRangeFilter}
                      style={{
                        left: `${((minBudgetVal - minBudget) / (maxBudget - minBudget)) *
                          100
                          }%`,
                        width: `${((maxBudgetVal - minBudgetVal) /
                          (maxBudget - minBudget)) *
                          100
                          }%`,
                      }}
                    />
                  </div>

                  <div className={styles.valueLabelsFilter}>
                    <span>{minBudgetVal}N</span>
                    <span>{maxBudgetVal}N</span>
                  </div>
                </div>
                {/* Hotel category */}
                <div className={styles.sliderContainerFilter}>
                  <div className={styles.labelFilterHotel}>
                    <strong>Hotel Category</strong>
                  </div>

                  <div className={styles.rangeSliderFilterHotel}>
                    <div className={styles.classOptionsFilter}>
                      {hotelTypeClasses.map((cls) => (
                        <div
                          key={cls.id}
                          className={`${styles.classOptionFilter} ${hotelTypeClass.name === cls.name ? styles.selected : ""
                            }`}
                          onClick={() => setHotelTypeClass(cls)}
                        >
                          {cls.name}★{cls.id}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Apply Button */}
                <button
                  className={styles.applyButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowFilterModal(false);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className={`${styles.fieldGroup} ${styles.searchButtonContainer}`}>
          <button className={styles.searchButtonMultiple}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HolidaySearchBar;