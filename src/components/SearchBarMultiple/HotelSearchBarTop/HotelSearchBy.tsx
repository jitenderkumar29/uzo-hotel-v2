"use client";
import React, { useState } from 'react';
import styles from "./HotelSearchBarTop.module.css";
import { FaSearch } from 'react-icons/fa';

interface HotelSearchByProps {
  propertyCount?: number;
  location?: string;
  onSearch?: (query: string) => void;
  onSort?: (sortOption: string) => void;
}

const HotelSearchBy: React.FC<HotelSearchByProps> = ({
  propertyCount = 1000,
  location = 'Delhi',
  onSearch,
  onSort
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSort?.(e.target.value);
  };

  return (
    <div className={styles.containerSearch}>
      <div className={styles.contSearchBody}>
        <div className={styles.leftSearch}>
          <span className={styles.countSearch}>{propertyCount}</span> Properties Available in {location}
        </div>
        <div className={styles.rightSearch}>
          <form onSubmit={handleSearchSubmit} className={styles.searchBoxSearch}>
            <FaSearch className={styles.searchIconSearch} />
            <input
              type="text"
              placeholder="Enter hotel name or location"
              className={styles.searchInputSearch}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
          <select
            className={styles.selectBoxSearch}
            onChange={handleSortChange}
          >
            <option value="popularity">Popularity</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchBy;