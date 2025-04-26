'use client';
import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import styles from "./SearchBarMultiple.module.css";
import FlightsSearchBar from "./FlightsSearchBar/FlightsSearchBar";
import BusSearchBar from "./BusSearchBar/BusSearchBar";
import TrainSearchBar from "./TrainSearchBar/TrainSearchBar";
import HolidaySearchBar from "./HolidaySearchBar/HolidaySearchBar";
import CabSearchBar from "./CabSearchBar/CabSearchBar";
import SummaryHotels from "../SummaryHotels/SummaryHotels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faCalendar, faFilm, faHotel, faPlane, faShip, faTasks, faTaxi, faTrain, faUmbrellaBeach, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import HotelSearchBarTwo from "./HotelSearchBarTwo/HotelSearchBarTwo";
// import { useRouter } from "next/router";
// import HotelSearch from "../hotelSearch/HotelSearch";
// import BusSearchBar from "./busSearchBar/BusSearchBar";
// import TrainSearchBar from "./trainSearchBar/TrainSearchBar";
// import HolidaySearchBar from "./holidaySearchBar/HolidaySearchBar";
// import CabSearchBar from "./cabSearchBar/CabSearchBar";
// import FlightsSearchBar from "./flightsSearchBar/FlightsSearchBar";

interface SearchBarMultipleProps {
  searchMode?: string; // Add question mark to make it optional
}

// interface Tab {
//   icon: string;
//   label: string;
// }

// interface DateParts {
//   day: number;
//   month: string;
//   year: string;
// }

// interface SpecialOption {
//   id: string;
//   title: string;
//   subtitle: string;
// }

const SearchBarMultiple: React.FC<SearchBarMultipleProps> = ({ searchMode }) => {
  const [activeTab, setActiveTab] = useState<string>("Flights");
  // const [tripType, setTripType] = useState<string>("one-way");
  // const [departure, setDeparture] = useState<string>("New Delhi");
  // const [destination, setDestination] = useState<string>("Mumbai");
  // const [departureDate, setDepartureDate] = useState<Date>(new Date());
  // const [returnDate, setReturnDate] = useState<Date>(new Date());
  // const [specialOption, setSpecialOption] = useState<string>("regular");
  // const [nonStop, setNonStop] = useState<boolean>(true);
  // const [, setTravellers] = useState<number>(1);
  // const [, setTravellersChild] = useState<number>(1);
  // const [, setTravellersInfant] = useState<number>(1);
  // const [travelClass, setTravelClass] = useState<string>("Economy");
  // const [showTravellerModal, setShowTravellerModal] = useState<boolean>(false);
  // const searchParams = useSearchParams();
  // const searchModeData = searchParams?.get('searchMode'); // "Flights"
  const searchModeData = "Flightsssssssssssss";
  // const router = useRouter();
  // const { searchModeData } = router.query; // Access query parameter

  console.log("searchMode Props");
  console.log(searchMode);
  console.log("searchModeData");
  console.log(searchModeData);
  useEffect(() => {
    setActiveTab(searchMode || "");
    console.log("useEffect..........");
  }, [searchMode]);

  // const tabs: Tab[] = [
  //   { icon: "plane", label: "Flights" },
  //   { icon: "hotel", label: "Hotels" },
  //   { icon: "bus", label: "Bus" },
  //   { icon: "train", label: "Trains" },
  //   { icon: "umbrella-beach", label: "Holidays" },
  //   { icon: "taxi", label: "Cabs" },
  //   { icon: "tasks", label: "Activities" },
  //   { icon: "calendar", label: "Events" },
  // ];
  interface Tab {
    icon: IconDefinition;
    label: string;
  }
  const tabs: Tab[] = [
    { icon: faPlane, label: "Flights" },
    { icon: faHotel, label: "Hotels" },
    { icon: faBus, label: "Bus" },
    { icon: faTrain, label: "Trains" },
    { icon: faUmbrellaBeach, label: "Holidays" },
    { icon: faTaxi, label: "Cabs" },
    { icon: faTasks, label: "Activities" },
    { icon: faCalendar, label: "Events" },
    { icon: faShip, label: "Cruise" },
    { icon: faFilm, label: "Movies" },
  ];

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

  // const swapCities = (): void => {
  //   const temp = departure;
  //   setDeparture(destination);
  //   setDestination(temp);
  // };

  // const formatDate = (date: Date): string => {
  //   if (!date) return "";
  //   return date.toLocaleDateString("en-US", { weekday: "long" });
  // };

  // const getDateParts = (date: Date): DateParts => {
  //   if (!date) return { day: 0, month: "", year: "" };
  //   return {
  //     day: date.getDate(),
  //     month: date.toLocaleString("default", { month: "short" }) + "'",
  //     year: date.getFullYear().toString().slice(-2),
  //   };
  // };

  // const handleTravellerChange = (type: string): void => {
  //   if (type === "increase") {
  //     setTravellers((prev) => Math.min(prev + 1, 9));
  //   } else {
  //     setTravellers((prev) => Math.max(prev - 1, 1));
  //   }
  // };

  // const handleTravellerChangeChild = (type: string): void => {
  //   if (type === "increase") {
  //     setTravellersChild((prev) => Math.min(prev + 1, 9));
  //   } else {
  //     setTravellersChild((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  // const handleTravellerChangeInfant = (type: string): void => {
  //   if (type === "increase") {
  //     setTravellersInfant((prev) => Math.min(prev + 1, 9));
  //   } else {
  //     setTravellersInfant((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  const handleActiveTab = (activeTabSelected: string): void => {
    setActiveTab(activeTabSelected);
  };

  // const departureParts: DateParts = getDateParts(departureDate);
  // const returnParts: DateParts = getDateParts(returnDate);

  return (
    <>
      <div className={styles.containerMultiple}>
        <div className={styles.containerMultipleHeader}>
          <div className={styles.searchContainerMutiple}>
            {/* Tabs */}
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <>
                  <div
                    key={tab.label}
                    className={`${styles.tab} ${activeTab === tab.label ? styles.active : ""}`}
                    onClick={() => handleActiveTab(tab.label)}
                  >
                    {/* <i className={`fas fa-${tab.icon} ${styles.tabIcon}`}></i> */}
                    <FontAwesomeIcon icon={tab.icon} className={`${styles.tabIcon}`} />
                    {/* <FontAwesomeIcon icon={tab.icon} className={styles.tabIcon} /> */}
                    <span>{tab.label}</span>
                  </div>
                </>
              ))}
            </div>

            {/* design icon */}
            {/* <div>
              <span className="pro-icon-box"><span className="slk-ico hotel-icon "></span> </span>
            </div> */}

            {/* Search Options */}
            {activeTab === "Flights" && (
              <div>
                <h3 className={styles.searchHotels}>Search Flights</h3>
                <FlightsSearchBar />
              </div>
            )}

            {activeTab === "Hotels" && (
              <div>
                <h3 className={styles.searchHotels}>Search Hotels</h3>
                <HotelSearchBarTwo />
              </div>
            )}

            {activeTab === "Bus" && (
              <div>
                <h3 className={styles.searchHotels}>Search Bus</h3>
                <BusSearchBar />
              </div>
            )}

            {activeTab === "Trains" && (
              <div>
                <h3 className={styles.searchHotels}>Search Trains</h3>
                <TrainSearchBar />
              </div>
            )}

            {activeTab === "Holidays" && (
              <div>
                <h3 className={styles.searchHotels}>Search Holidays</h3>
                <HolidaySearchBar />
              </div>
            )}

            {activeTab === "Cabs" && (
              <div>
                <h3 className={styles.searchHotels}>Search Cabs</h3>
                <CabSearchBar />
              </div>
            )}

            {activeTab === "Activities" && (
              <div>
                <h3 className={styles.searchHotels}>Search Activities</h3>
                <p className={styles.searchHotelsPara}>Coming Soon...</p>
              </div>
            )}

            {activeTab === "Events" && (
              <div>
                <h3 className={styles.searchHotels}>Search Events</h3>
                <p className={styles.searchHotelsPara}>Coming Soon...</p>
              </div>
            )}
            {activeTab === "Cruise" && (
              <div>
                <h3 className={styles.searchHotels}>Search Cruise</h3>
                <p className={styles.searchHotelsPara}>Coming Soon...</p>
              </div>
            )}
            {activeTab === "Movies" && (
              <div>
                <h3 className={styles.searchHotels}>Search Movies</h3>
                <p className={styles.searchHotelsPara}>Coming Soon...</p>
              </div>
            )}
          </div>
        </div>

      </div>
      <div className={styles.containerMultipleSummary}>
        {
          activeTab === "Hotels" && (
            <div>
              <SummaryHotels />
            </div>
          )
        }
      </div>
    </>
  );
};

export default SearchBarMultiple;
