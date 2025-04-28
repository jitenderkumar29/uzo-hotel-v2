import React, { useState } from "react";
import styles from "./FilterSidebar.module.css";

interface FilterItem {
  id: string;
  label: string;
  count?: number;
}

interface FilterSectionProps {
  title: string;
  items: FilterItem[];
  showAll?: boolean;
  searchable?: boolean;
}

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  items,
  showAll = false,
  searchable = true,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = searchable
    ? items.filter((item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : items;

  return (
    <div className={styles.filterSection}>
      <div
        className={styles.sectionHeader}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`${title}-content`}
      >
        <svg
          viewBox="0 0 16 12"
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ""}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.837 9.571c.642.9 1.688.894 2.326 0l5.674-7.942c.642-.9.268-1.629-.831-1.629H1.994c-1.101 0-1.47.735-.83 1.629z"
          />
        </svg>
        <h4>{title}</h4>
      </div>

      {isOpen && (
        <div id={`${title}-content`}>
          {searchable && (
            <div className={styles.searchBox}>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m15.61 13.731-3.095-3.096a6.84 6.84 0 0 0-1.348-9.084 6.83 6.83 0 0 0-9.166.452 6.84 6.84 0 0 0-.449 9.172 6.83 6.83 0 0 0 9.079 1.346l3.095 3.095c.524.512 1.36.512 1.884 0 .52-.52.52-1.364 0-1.885M6.84 2.008a4.83 4.83 0 0 1 4.83 4.833 4.831 4.831 0 1 1-9.661 0 4.837 4.837 0 0 1 4.83-4.833z" />
              </svg>
              <input
                type="text"
                placeholder={`Search ${title}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label={`Search ${title}`}
              />
            </div>
          )}

          <ul className={styles.filterList}>
            {filteredItems.map((item) => (
              <li key={item.id} className={styles.filterItem}>
                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id={item.id}
                    className={styles.checkboxInput}
                  />
                  <label htmlFor={item.id} className={styles.checkboxLabel}>
                    {item.label}
                  </label>
                </div>
                {item.count !== undefined && (
                  <span className={styles.filterCount}>({item.count})</span>
                )}
              </li>
            ))}
          </ul>

          {showAll && (
            <button className={styles.showAll} aria-label="Show all options">
              + Show All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}
      aria-hidden={!isOpen}
    >
      <div className={styles.filterHeader}>
        <h2 className={styles.filterTitle}>FILTERS</h2>
        <button
          className={styles.clearBtn}
          onClick={onClose}
          aria-label="Clear all filters"
        >
          CLEAR
        </button>
      </div>

      <FilterSection
        title="Popular filters"
        items={[
          { id: "goStays", label: "GoStays", count: 213 },
          { id: "bookAt0", label: "Book @ ₹0", count: 98 },
          { id: "dailyDeal", label: "Daily Steal Deal", count: 9 },
          { id: "earlyBird", label: "Early Bird Deal", count: 617 },
          { id: "coupleFriendly", label: "Couple Friendly", count: 1594 },
          { id: "freeCancellation", label: "Free Cancellation", count: 1658 },
          { id: "freeBreakfast", label: "Free Breakfast", count: 240 },
          { id: "payAtHotel", label: "Pay At Hotel", count: 3 },
        ]}
      />

      <FilterSection
        title="Price"
        items={[
          { id: "price1", label: "₹0 to ₹1500", count: 588 },
          { id: "price2", label: "₹1500 to ₹3000", count: 730 },
          { id: "price3", label: "₹3000 to ₹6000", count: 341 },
        ]}
        showAll={true}
      />

      <FilterSection
        title="Location"
        items={[
          { id: "location1", label: "Karol bagh" },
          { id: "location2", label: "Lajpat Nagar" },
          { id: "location3", label: "Mehrauli" },
        ]}
      />

      <FilterSection
        title="Amenities"
        items={[
          { id: "amenity1", label: "Airport Transfers", count: 1030 },
          { id: "amenity2", label: "Balcony/Terrace", count: 650 },
          { id: "amenity3", label: "Bar", count: 149 },
        ]}
        showAll={true}
        searchable={true}
      />
    </aside>
  );
};

export default FilterSidebar;