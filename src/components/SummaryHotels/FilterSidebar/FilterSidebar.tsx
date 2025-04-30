import React, { useState } from "react";
import styles from "./FilterSidebar.module.css";
import Map from "@/components/Map";

const locations = [
  {
    position: { lat: -3.745, lng: -38.523 },
    title: 'UZO Hotels',
    content: (
      <div className="bg-blue-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center">
        A
      </div>
    )
  },
  // {
  //   position: { lat: -3.755, lng: -38.533 },
  //   title: 'Location B',
  //   content: 'B' // Will be converted to text node
  // },
  // {
  //   position: { lat: -3.735, lng: -38.513 },
  //   title: 'Location C',
  //   // No content (will use default marker)
  // }
];


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
  maxHeight?: string; // Add maxHeight prop to control scrollable area
}

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  items,
  showAll = false,
  searchable = false,
  maxHeight = "150px", // Default max height
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

          <div
            className={styles.scrollableContent}
            style={{ maxHeight: maxHeight }}
          >
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
          </div>

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
      <div>
        <main className="p-4">
          {/* <h1 className="text-2xl font-bold mb-4">Google Maps with Advanced Markers</h1> */}
          <div className="border rounded-lg overflow-hidden">
            <Map
              center={{ lat: -3.745, lng: -38.523 }}
              zoom={12}
              markers={locations}
              className="h-[150px]"
            />
          </div>
        </main>
      </div>
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
          { id: "uzoStays", label: "UzoStays", count: 213 },
          { id: "dailyDeal", label: "Daily Steal Deal", count: 9 },
          { id: "earlyBird", label: "Early Bird Deal", count: 617 },
          { id: "coupleFriendly", label: "Couple Friendly", count: 1594 },
          { id: "freeCancellation", label: "Free Cancellation", count: 1658 },
          { id: "freeBreakfast", label: "Free Breakfast", count: 240 },
          { id: "payAtHotel", label: "Pay At Hotel", count: 3 },
        ]}
        maxHeight="150px"
      />

      <FilterSection
        title="Price"
        items={[
          { id: "price1", label: "₹ 0 to ₹ 1500", count: 588 },
          { id: "price2", label: "₹ 1500 to ₹ 3000", count: 730 },
          { id: "price3", label: "₹ 3000 to ₹ 6000", count: 341 },
          { id: "price4", label: "₹ 6000 to ₹ 9000", count: 552 },
          { id: "price5", label: "₹ 9000 to ₹ 12000", count: 225 },
          { id: "price6", label: "₹ 12000 to ₹ 15000", count: 999 },
        ]}
        showAll={false}
        maxHeight="150px"
      />

      <FilterSection
        title="Location"
        items={[
          { id: "location1", label: "Karol bagh" },
          { id: "location2", label: "Lajpat Nagar" },
          { id: "location3", label: "Mehrauli" },
          { id: "location4", label: "Bangluru" },
          { id: "location5", label: "Gubbacci" },
          { id: "location6", label: "Akila Mehendi Art" },
          { id: "location7", label: "Popins Holidays" },
        ]}
        maxHeight="150px"
      />

      <FilterSection
        title="Amenities"
        items={[
          { id: "amenity1", label: "Airport Transfers", count: 1030 },
          { id: "amenity2", label: "Balcony/Terrace", count: 650 },
          { id: "amenity3", label: "Bar", count: 149 },
          { id: "amenity4", label: "Free Cancellation", count: 249 },
          { id: "amenity5", label: "24 Hour Front Desk", count: 349 },
          { id: "amenity6", label: "Ac", count: 449 },
          { id: "amenity7", label: "Wifi", count: 549 },
          { id: "amenity8", label: "Breakfast", count: 649 },
        ]}
        showAll={false}
        searchable={false}
        maxHeight="150px"
      />

      <FilterSection
        title="Property Type"
        items={[
          { id: "type1", label: "Hotel", count: 1030 },
          { id: "type2", label: "Villas", count: 650 },
          { id: "type3", label: "resort", count: 149 },
          { id: "type4", label: "resort Property", count: 249 },
          { id: "type5", label: "Inn", count: 349 },
          { id: "type6", label: "Spa & Resort property", count: 449 },
          { id: "type7", label: "Lodge", count: 549 },
          { id: "type8", label: "Guest House", count: 649 },
          { id: "type9", label: "Apartment", count: 749 },
          { id: "type10", label: "Homes", count: 849 },
          { id: "type11", label: "Palace", count: 949 },
        ]}
        showAll={false}
        searchable={false}
        maxHeight="150px"
      />
      <FilterSection
        title="Chains"
        items={[

          { id: "type1", label: "AM Kollection - Larisa Hotels", count: 6 },
          { id: "type2", label: "Accor - Novotel & ibis", count: 8 },
          { id: "type3", label: "Ama Stays & Trails", count: 2 },
          { id: "type4", label: "Amritara", count: 1 },
          { id: "type5", label: "Inn", count: 349 },
          { id: "type6", label: "Ascott, Citadines & Somerset", count: 1 },
          { id: "type7", label: "Bluekite", count: 2 },
          { id: "type8", label: "Club Mahindra", count: 3 },
          { id: "type9", label: "Concept Hospitality", count: 6 },
          { id: "type10", label: "Cygnett Group", count: 1 },
          { id: "type11", label: "EKO STAY", count: 12 },
          { id: "type12", label: "Elivaas", count: 65 },
          { id: "type13", label: "Fab hotels", count: 31 },
          { id: "type14", label: "Fortune", count: 3 },
          { id: "type15", label: "Ginger Hotels", count: 4 },
          { id: "type16", label: "GoStops", count: 3 },
          { id: "type17", label: "Hilton & Doubletree", count: 3 },
        ]}
        showAll={false}
        searchable={false}
        maxHeight="150px"
      />
    </aside>
  );
};

export default FilterSidebar;