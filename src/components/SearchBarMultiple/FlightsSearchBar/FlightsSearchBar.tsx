'use client';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FlightsSearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMinus, faRightLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

// interface FlightsSearchBarProps {
//   searchMode?: string;
// }

interface SpecialOption {
  id: string;
  title: string;
  subtitle: string;
}

const FlightsSearchBar: React.FC = () => {
  // const FlightsSearchBar: React.FC<FlightsSearchBarProps> = ({ searchMode }) => {
  const [activeTab] = useState<string>("Flights");
  const [tripType, setTripType] = useState<string>("one-way");
  const [departure, setDeparture] = useState<string>("New Delhi");
  const [destination, setDestination] = useState<string>("Mumbai");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [specialOption, setSpecialOption] = useState<string>("regular");
  const [nonStop, setNonStop] = useState<boolean>(true);
  const [travellers, setTravellers] = useState<number>(1);
  const [travellersChild, setTravellersChild] = useState<number>(0);
  const [travellersInfant, setTravellersInfant] = useState<number>(0);
  const [travelClass, setTravelClass] = useState<string>("Economy");
  const [showTravellerModal, setShowTravellerModal] = useState<boolean>(false);

  // Popper Modifier for Date picker
  const popperModifiers = [
    {
      name: 'offset',
      options: { offset: [0, 10] },
      fn: (state: { [key: string]: unknown }) => state,
    },
  ];

  const specialOptions: SpecialOption[] = [
    { id: "regular", title: "Regular", subtitle: "Regular Fares" },
    { id: "student", title: "Student", subtitle: "Extra Baggage" },
    { id: "armed-forces", title: "Armed Forces", subtitle: "Extra Discount" },
    { id: "senior-citizen", title: "Senior Citizen", subtitle: "Extra Discount" },
    // { id: "Doctors-and-Nurses", title: "Doctor and Nurse", subtitle: "Extra Discount" },
  ];
  // const specialOptions: SpecialOption[] = [
  //   { id: "regular", title: "Regular", subtitle: "Regular Fares" },
  //   { id: "student", title: "Student", subtitle: "Extra Baggage" },
  //   { id: "armed-forces", title: "Armed Forces", subtitle: "Extra Discount" },
  //   { id: "senior-citizen", title: "Senior Citizen", subtitle: "Extra Discount" },
  //   { id: "Doctors-and-Nurses", title: "Doctor and Nurse", subtitle: "Extra Discount" },
  // ];

  const travelClasses: string[] = [
    "Economy",
    "Premium Economy",
    "Business",
    "First Class",
  ];

  const swapCities = (): void => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  const formatDate = (date: Date): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const handleTravellerChange = (type: "increase" | "decrease"): void => {
    setTravellers(prev => type === "increase" ? Math.min(prev + 1, 9) : Math.max(prev - 1, 1));
  };

  const handleTravellerChangeChild = (type: "increase" | "decrease"): void => {
    setTravellersChild(prev => type === "increase" ? Math.min(prev + 1, 9) : Math.max(prev - 1, 0));
  };

  const handleTravellerChangeInfant = (type: "increase" | "decrease"): void => {
    setTravellersInfant(prev => type === "increase" ? Math.min(prev + 1, 9) : Math.max(prev - 1, 0));
  };


  const CustomInput = React.forwardRef(({ value, onClick }: any, ref) => {
    const [day, monthYear] = value.split(/ (.+)/); // Split "25 Apr, 2025"

    return (
      <div onClick={onClick} ref={ref as any} style={{ cursor: "pointer" }}>
        <span style={{ fontSize: "28px", fontWeight: "bold" }}>{day}</span>{" "}
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>{monthYear}</span>
      </div >
    );
  });
  // const handleActiveTab = (activeTabSelected: string): void => {
  //   setActiveTab(activeTabSelected);
  // };
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
          {departure === "New Delhi"
            ? "DEL, Indira Gandhi International"
            : departure === "Mumbai"
              ? "BOM, Chhatrapati International"
              : ""}
        </div>
      </div>
      <button className={styles.swapButton} onClick={swapCities}>
        <FontAwesomeIcon className={styles.swapIcon} icon={faRightLeft} />
      </button>
    </div>
  );
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
          {destination === "Mumbai"
            ? "BOM, Chhatrapati International"
            : destination === "New Delhi"
              ? "DEL, Indira Gandhi International"
              : ""}
        </div>
      </div>
    </div>
  );
  const DepartureDate = () => (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>Departure Date</label>
      <div className={`${styles.fieldInput} ${styles.dateInput}`}>
        <DatePicker
          selected={departureDate}
          onChange={(date: Date | null) => date && setDepartureDate(date)}
          selectsStart
          startDate={departureDate}
          endDate={returnDate}
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
          <div className={styles.dateWeekday}>
            {formatDate(departureDate)}
          </div>
        </div>
      </div>
    </div>
  )

  const Returndate = () => (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>Return Date</label>
      <div className={`${styles.fieldInput} ${styles.dateInput}`}>

        <DatePicker
          selected={returnDate}
          onChange={(date: Date | null) => date && setReturnDate(date)}
          selectsStart
          startDate={departureDate}
          endDate={returnDate}
          minDate={new Date()}
          dateFormat="dd MMM, yyyy"
          className={styles.datePickerInput}
          id="checkout"
          popperClassName={styles.datePickerPopper}
          popperPlacement="bottom-start"
          popperModifiers={popperModifiers}
          withPortal
          shouldCloseOnSelect={true}
          customInput={<CustomInput />}
        />
        {returnDate ? (
          <div className={styles.dateDisplay}>
            <div className={styles.dateWeekday}>
              {formatDate(returnDate)}
            </div>
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
  )

  const TravellerAndClass = () => (
    <div className={`${styles.fieldGroup} ${styles.travellerGroup}`}>
      <label className={styles.fieldLabel}>Travellers & Class</label>
      <div
        className={`${styles.fieldInput} ${styles.travellerInput}`}
        onClick={() => setShowTravellerModal(true)}
      >
        <div className={styles.travellerValue}>
          {travellers} Traveller{travellers > 1 ? "s" : ""}
        </div>
        {travellersChild > 0 && (
          <div className={styles.travellerValue}>
            {travellersChild} Child{travellersChild !== 1 ? "ren" : ""}
          </div>
        )}
        {travellersInfant > 0 && (
          <div className={styles.travellerValue}>
            {travellersInfant} Infant{travellersInfant !== 1 ? "s" : ""}
          </div>
        )}
        <div className={styles.fieldSubtext}>{travelClass}</div>
        <FontAwesomeIcon className={styles.travellerArrow} icon={faChevronDown} />
      </div>

      {showTravellerModal && (
        <div className={styles.travellerModal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Travellers & Class</h3>
              <button
                className={styles.closeModal}
                onClick={() => setShowTravellerModal(false)}
              >
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
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className={styles.classOptions}>
              {travelClasses.map((cls) => (
                <div
                  key={cls}
                  className={`${styles.classOption} ${travelClass === cls ? styles.selected : ""
                    }`}
                  onClick={() => setTravelClass(cls)}
                >
                  {cls}
                </div>
              ))}
            </div>
            <div className={styles.groupBooking}>
              For group bookings (more than 9 passengers) visit
              <div className={styles.checkboxOption}>
                <input
                  type="checkbox"
                  id="non-stop"
                  checked={nonStop}
                  onChange={() => setNonStop(!nonStop)}
                />
                <label htmlFor="non-stop" className={styles.uzoGroupLabel}>
                  UzoHotels Group Bookings
                </label>
              </div>
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

  const SearchButton = () => (
    <div className={`${styles.fieldGroup} ${styles.searchButtonContainer}`}>
      <button className={styles.searchButtonMultiple}>Search</button>
    </div>
  )

  const OptionsTitle = () => {
    return (
      <div className={styles.specialOptions}>
        {specialOptions.map((option) => (
          <div
            className={`${styles.optionChip} ${specialOption === option.id ? styles.active : ""
              }`}
            key={option.id}
            onClick={() => setSpecialOption(option.id)}
          >
            <input
              type="radio"
              id={option.id}
              name="special-option"
              checked={specialOption === option.id}
              readOnly
            />
            <div>
              <div className={styles.optionTitle}>{option.title}</div>
            </div>
          </div>
        ))}
        <div className={styles.checkboxOption}>
          <input
            type="checkbox"
            id="non-stop" className={styles.inputNonStop}
            checked={nonStop}
            onChange={() => setNonStop(!nonStop)}
          />
          <label htmlFor="non-stop">Non-Stop Flights</label>
        </div>
      </div>)
  }

  return (
    <div className={styles.containerFlights}>
      <div className={styles.searchContainerFlights}>
        {activeTab === "Flights" && (
          <>
            <div className={styles.searchOptions}>
              <div className={styles.tripType}>
                {["one-way", "round-trip", "multi-city"].map((type) => (
                  <div
                    className={`${styles.tripOption} ${tripType === type ? styles.oneWay : ""
                      }`}
                    key={type}
                  >
                    <input
                      type="radio"
                      id={type}
                      name="trip-type"
                      checked={tripType === type}
                      onChange={() => setTripType(type)}
                    />
                    <label htmlFor={type}>
                      {type
                        .replace("-", " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </label>
                  </div>
                ))}
              </div>

              {/* one-way */}
              {tripType === "one-way" && (<div className={styles.searchFieldsMultiple}>
                <DepartureFrom />
                <GoingTo />
                <DepartureDate />
                <TravellerAndClass />
                <SearchButton />
              </div>)}

              {/* round-trip */}
              {tripType === "round-trip" && (
                <div className={styles.searchFieldsMultipleRoundTrip}>
                  <DepartureFrom />
                  <GoingTo />
                  <DepartureDate />
                  <Returndate />
                  <TravellerAndClass />
                  <SearchButton />
                </div>)}

              {tripType === "multi-city" && (
                <div className={styles.searchFieldsMultipleMultiCity}>

                  <DepartureFrom />
                  <GoingTo />
                  <DepartureDate />
                  <TravellerAndClass />

                  <DepartureFrom />
                  <GoingTo />
                  <DepartureDate />
                  <SearchButton />

                </div>)}

              <OptionsTitle />

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlightsSearchBar;