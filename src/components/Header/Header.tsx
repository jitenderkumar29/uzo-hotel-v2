"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styles from './Header.module.css';
import { hotelsList } from '@/app/data';
import { HotelInterface } from "@/interfaces";

interface City {
  cityId: string;
  name: string;
}

const Header: React.FC = () => {
  // const buttonRef = useRef<HTMLAnchorElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentHotels, setCurrentHotels] = useState<HotelInterface[]>([]);  // const [cityData, setCityData] = useState<string | null>(null);

  const cityList: Record<string, City> = {
    agra: { cityId: "1", name: 'Agra' },
    bareliy: { cityId: '2', name: 'Bareliy' },
    chemark: { cityId: '3', name: 'Chennai' },
    hyderabad: { cityId: '4', name: 'Hyderabad' },
    mumbai: { cityId: '5', name: 'Mumbai' },
    bangalore: { cityId: "6", name: 'Bangalore' },
    delhi: { cityId: '7', name: 'Delhi' },
    gurgaon: { cityId: '8', name: 'Gurgaon' },
    goa: { cityId: '9', name: 'Goa' },
    kolkata: { cityId: "10", name: 'Kolkata' },
    noida: { cityId: "11", name: 'Noida' },
    pune: { cityId: "12", name: 'Pune' },
    ghaziabad: { cityId: "13", name: 'Ghaziabad' },
    // cities: { cityId: "14", name: 'All Cities' },
  };

  // const findCityData = (cityId: string): HotelsListInterface | undefined => {
  //   return hotelsList.find(city => city.cityId === cityId);
  // };

  const toggleDropdown = (cityId: string) => {
    // Find the city data
    const foundCity = hotelsList.find(city => city.cityId === cityId);

    if (foundCity) {
      setCurrentHotels(foundCity.hotels);
      setActiveDropdown(activeDropdown === cityId ? null : cityId);
    }
  };
  // const toggleDropdown = (cityId: string) => {
  //   setActiveDropdown(activeDropdown === cityId ? null : cityId);

  //   const cityData = findCityData(cityId);
  //   if (cityData) {
  //     // setCityData(cityData);
  //     console.log("CityID:", cityData.cityId);
  //     console.log("City:", cityData.cityName);
  //     console.log("Hotels:", cityData.hotels);
  //     // setCurrentCity(cityData);
  //   }
  // };

  return (
    <header>
      <section className={styles.find}>
        <div className={styles.container} style={{}}>
          <ul>
            {Object.keys(cityList).map((key, index) => {
              const city = cityList[key];
              return (
                <li key={index} className={styles.cityItem}>
                  <div
                    className={styles.cityWrapper}
                    onMouseEnter={() => toggleDropdown(city.cityId)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href="/hotelBooking" className={styles.cityLink}>
                      {city.name}
                      <FaChevronDown className={styles.chevron} />
                    </Link>

                    {activeDropdown === city.cityId && (
                      <div className={styles.popupCity}>
                        <h3 className={styles.headingCity}>Popular Localities</h3>
                        {currentHotels.slice(0, 10).map((hotel, index) => (
                          <Link
                            key={index}
                            href={`/hotelBooking`}
                            // href={`/hotels-in-${index}-${city.name.toLowerCase()}/`}
                            className={styles.localityItemCity}
                          >
                            {hotel.name}
                          </Link>
                        ))}
                        <div className={styles.allBangaloreCity}>
                          <Link href="/hotelBooking" className={styles.allLinkCity}>
                            All of {city.name}
                            <FaChevronRight className={styles.chevronRight} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                // <li key={index}>
                //   <Link
                //     href={`/`}
                //     className={styles.cityLink}
                //     onMouseEnter={(e) => {
                //       e.preventDefault();
                //       toggleDropdown(city.cityId);
                //     }}
                //     onMouseLeave={() => setActiveDropdown(null)}
                //     ref={buttonRef}
                //   >
                //     {city.name}
                //     <FaChevronDown className={styles.chevron} />
                //   </Link>
                // </li>

              );
            })}
            <li className={styles.cityItem}>
              {/* <Link href="/" className={styles.cityLink}> */}
              <Link href="/allCityList" className={styles.cityLink}>
                All Cities
                {/* <FaChevronDown className={styles.chevron} /> */}
              </Link></li>
          </ul>
        </div>
      </section>

      {/* {activeDropdown && (
        <div className={styles.popupCity}>
          <h3 className={styles.headingCity}>Popular Localities</h3>
          {currentHotels.map((hotel, index) => (
            <Link
              key={index}
              href={`/hotels-in-${index}-bangalore/`}
              className={styles.localityItemCity}
            >
              {hotel.name}
            </Link>
          ))}
          <div className={styles.allBangaloreCity}>
            <Link href="#" className={styles.allLink}>
              All of Bangalore
              <span className={styles.chevronCity}>➔</span>
            </Link>
          </div>
        </div>
      )} */}

    </header>
  );
};

export default Header;