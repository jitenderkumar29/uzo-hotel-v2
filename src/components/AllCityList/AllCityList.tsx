'use client';
import React, { useState } from 'react';
import styles from './AllCityList.module.css';
import { cities } from '@/app/data/allCityListData';
import { allCityInterface } from '@/interfaces';
import HotelSearchBarTop from '../SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop';
import { HotelSearchProvider } from '@/app/Context/HotelSearchContext';
import HeaderTop from '../Headers/HeaderTop/HeaderTop';

interface StateGroup {
  state: string;
  cities: allCityInterface[];
}

interface ExpandedStates {
  [key: string]: boolean;
}

const AllCityList = () => {
  const [search, setSearch] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [expandedStates, setExpandedStates] = useState<ExpandedStates>({});

  // Get unique countries
  const countries = Array.from(new Set(cities.map(item => item.country))).sort((a, b) => a.localeCompare(b));

  // Get states based on selected country
  const states = Array.from(
    new Set(
      cities
        .filter(city => selectedCountry ? city.country === selectedCountry : true)
        .map(item => item.state)
    )
  ).sort((a, b) => a.localeCompare(b));

  // Get districts for selected state
  const districts = Array.from(
    new Set(
      cities
        .filter(city => selectedState ? city.state === selectedState : false)
        .map(city => city.district)
        .filter(Boolean)
    )
  ).sort((a, b) => a.localeCompare(b));

  // Get filtered cities based on current filters
  const filteredCities = cities.filter(city =>
    (selectedCountry ? city.country === selectedCountry : true) &&
    (selectedState ? city.state === selectedState : true) &&
    (selectedDistrict ? city.district === selectedDistrict : true)
  ).sort((a, b) => a.city.localeCompare(b.city));

  // Get final filtered results
  const getFilteredResults = (): allCityInterface[] => {
    let results = [...cities];

    if (selectedCountry) {
      results = results.filter(city => city.country === selectedCountry);
    }

    if (selectedState) {
      results = results.filter(city => city.state === selectedState);
    }

    if (selectedDistrict) {
      results = results.filter(city => city.district === selectedDistrict);
    }

    if (selectedCity) {
      results = results.filter(city => city.city === selectedCity);
    }

    if (search) {
      const searchTerm = search.toLowerCase();
      results = results.filter(city =>
        city.city.toLowerCase().includes(searchTerm) ||
        (city.district && city.district.toLowerCase().includes(searchTerm)) ||
        city.state.toLowerCase().includes(searchTerm) ||
        city.country.toLowerCase().includes(searchTerm)
      );
    }

    return results;
  };

  // Group results by state
  const getGroupedResults = (): StateGroup[] => {
    const filtered = getFilteredResults();
    const grouped: Record<string, allCityInterface[]> = {};

    filtered.forEach((city: allCityInterface) => {
      if (!grouped[city.state]) grouped[city.state] = [];
      grouped[city.state].push(city);
    });

    return Object.keys(grouped)
      .sort((a, b) => a.localeCompare(b))
      .map(state => ({
        state,
        cities: grouped[state].sort((a, b) => a.city.localeCompare(b.city))
      }));
  };

  const toggleState = (state: string) => {
    setExpandedStates(prev => ({ ...prev, [state]: !prev[state] }));
  };

  const resetFilters = () => {
    setSelectedCountry('');
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedCity('');
    setSearch('');
  };

  return (
    <>
      <div className={styles.headerTopBody}>
        <HeaderTop />
      </div>
      <div className={styles.HotelSearchBarTopBody}>
        <HotelSearchProvider>
          <HotelSearchBarTop />
        </HotelSearchProvider>
      </div>
      <div className={styles.imageContainer}></div>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.filterColumn}>
            <div className={styles.filterBox}>
              <label className={styles.heading}>
                <h3 className={styles.headingSelect}>Select Country:</h3>
                <select
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setSelectedState('');
                    setSelectedDistrict('');
                    setSelectedCity('');
                  }}
                  className={styles.select}
                >
                  <option value="">-- All Countries --</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className={styles.filterBox}>
              <label className={styles.heading}>
                <h3 className={styles.headingSelect}>Select State:</h3>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setSelectedDistrict('');
                    setSelectedCity('');
                  }}
                  className={styles.select}
                  disabled={!selectedCountry}
                >
                  <option value="">-- All States --</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className={styles.filterBox}>
              <label className={styles.heading}>
                <h3 className={styles.headingSelect}>Select District:</h3>
                <select
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                    setSelectedCity('');
                  }}
                  className={styles.select}
                  disabled={!selectedState}
                >
                  <option value="">-- All Districts --</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className={styles.filterBox}>
              <label className={styles.heading}>
                <h3 className={styles.headingSelect}>Select City:</h3>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className={styles.select}
                  disabled={!selectedState}
                >
                  <option value="">-- All Cities --</option>
                  {filteredCities.map((item, index) => (
                    <option key={index} value={item.city}>
                      {item.city} {item.district && `(${item.district})`}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className={styles.searchColumn}>
            <div className={`${styles.filterBoxSelect} ${styles.searchBox}`}>
              <label className={styles.heading}>
                <h3 className={styles.headingSelect}>Search:</h3>
                <input
                  type="text"
                  placeholder="Search By Country, State, District or City..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.input}
                />
              </label>
            </div>
            <button onClick={resetFilters} className={styles.resetButton}>
              Reset Filters
            </button>
          </div>
        </div>

        <div className={styles.stateGroups}>
          {getGroupedResults().map((stateGroup) => (
            <div key={stateGroup.state} className={styles.stateGroup}>
              <h3
                className={styles.stateHeader}
                onClick={() => toggleState(stateGroup.state)}
              >
                {stateGroup.state}
                <span className={styles.toggleIcon}>
                  {expandedStates[stateGroup.state] ? '−' : '+'}
                </span>
              </h3>
              {expandedStates[stateGroup.state] !== false && (
                <ul className={styles.cityList}>
                  {stateGroup.cities.map((city, index) => (
                    <li key={index} className={styles.cityItem}>
                      <span className={styles.cityName}>{city.city}</span>
                      {city.district && (
                        <span className={styles.district}>{city.district}, {city.country}</span>
                      )}
                      {/* <span className={styles.country}>{city.country}</span> */}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCityList;