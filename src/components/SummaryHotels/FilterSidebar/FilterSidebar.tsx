import React, { useState } from "react";
import styles from "./FilterSidebar.module.css";
import mapicon from "@/assets/icons/mapicon.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllItems, setShowAllItems] = useState(false);

  const filteredItems = searchable
    ? items.filter((item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : items;

  // Automatically show "Show All" if there are more than 5 items
  const shouldShowAll = items.length > 5;
  const displayItems = shouldShowAll && !showAllItems ? filteredItems.slice(0, 5) : filteredItems;

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

          <div className={styles.filterListContainer}>
            <ul className={styles.filterList}>
              {displayItems.map((item) => (
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

          {(shouldShowAll || showAll) && (
            <button
              className={styles.showAll}
              aria-label={showAllItems ? "Show less options" : "Show all options"}
              onClick={() => setShowAllItems(!showAllItems)}
            >
              {showAllItems ? "- Show Less" : "+ Show All"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={styles.mapIconBody}>
        <div className={`border rounded-lg overflow-hidden ${styles.mapIconContainer}`}>
          <Image
            src={mapicon}
            alt="Map Icon"
            className={styles.mapIconImage}
          />
          <div className={styles.mapIconButton}>
            <div><FontAwesomeIcon icon={faLocationDot} className={styles.locationIcon} /></div>
            <button type="button">Show on map</button>
          </div>
        </div>
      </div>

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
            CLEAR ALL
          </button>
        </div>

        <FilterSection
          title="Previously Used Filters"
          items={[
            { id: "usedFilter", label: "Luxury Stays" },

          ]}
        />

        <FilterSection
          title="Popular filters"
          items={[
            { id: "dailyDeal", label: "Daily Steal Deal", count: 9 },
            { id: "earlyBird", label: "Early Bird Deal", count: 617 },
            { id: "coupleFriendly", label: "Couple Friendly", count: 1594 },
            { id: "freeCancellation", label: "Free Cancellation", count: 1658 },
            { id: "freeBreakfast", label: "Free Breakfast", count: 240 },
            { id: "payAtHotel", label: "Pay At Hotel", count: 3 },
          ]}
          showAll={true}
        />

        <FilterSection
          title="Price"
          items={[
            { id: "price1", label: "₹ 0 to ₹ 2000", count: 588 },
            { id: "price2", label: "₹ 2000 to ₹ 6000", count: 730 },
            { id: "price3", label: "₹ 12000 to ₹ 20000", count: 341 },
            { id: "price4", label: "₹ 30000 to ₹ 40000", count: 552 },
            { id: "price5", label: "₹ 50000 to ₹ 60000", count: 225 },
            { id: "price6", label: "₹ 70000 to ₹ 80000", count: 999 },
            { id: "price7", label: "Above ₹ 80000", count: 999 },
          ]}
          showAll={true}
        />

        <FilterSection
          title="Show Properties with"
          items={[
            { id: "propertiesWith1", label: "Free Breakfast" },
            { id: "propertiesWith2", label: "Free Parking" },

          ]}
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
        />

        <FilterSection
          title="Chains"
          items={[
            { id: "chain1", label: "AM Kollection - Larisa Hotels", count: 6 },
            { id: "chain2", label: "Accor - Novotel & ibis", count: 8 },
            { id: "chain3", label: "Ama Stays & Trails", count: 2 },
            { id: "chain4", label: "Amritara", count: 1 },
            { id: "chain5", label: "Inn", count: 349 },
            { id: "chain6", label: "Ascott, Citadines & Somerset", count: 1 },
            { id: "chain7", label: "Bluekite", count: 2 },
            { id: "chain8", label: "Club Mahindra", count: 3 },
            { id: "chain9", label: "Concept Hospitality", count: 6 },
            { id: "chain10", label: "Cygnett Group", count: 1 },
            { id: "chain11", label: "EKO STAY", count: 12 },
            { id: "chain12", label: "Elivaas", count: 65 },
            { id: "chain13", label: "Fab hotels", count: 31 },
            { id: "chain14", label: "Fortune", count: 3 },
            { id: "chain15", label: "Ginger Hotels", count: 4 },
            { id: "chain16", label: "GoStops", count: 3 },
            { id: "chain17", label: "Hilton & Doubletree", count: 3 },
          ]}
          showAll={true}
          searchable={false}
        />
        <FilterSection
          title="Star Rating"
          items={[
            { id: "star1", label: "3 Star", count: 258 },
            { id: "star2", label: "4 Star", count: 545 },
            { id: "star3", label: "5 Star", count: 947 },
          ]}
          showAll={false}
          searchable={false}
        />
        <FilterSection
          title="User Rating"
          items={[
            { id: "star1", label: "3+", count: 741 },
            { id: "star2", label: "3.5+", count: 852 },
            { id: "star3", label: "4", count: 963 },
            { id: "star4", label: "4.5", count: 789 },
            { id: "star5", label: "5", count: 456 },
          ]}
          showAll={false}
          searchable={false}
        />
        <FilterSection
          title="Payment Mode"
          items={[
            { id: "payment1", label: "Prepaid" },
            { id: "payment2", label: "Pay Later" },
            { id: "payment3", label: "Pay at Hotel" },
          ]}
          showAll={false}
          searchable={false}
        />
        <FilterSection
          title="Meals"
          items={[
            { id: "meal1", label: "Breakfast Included" },
            { id: "meal2", label: "Lunch Included" },
            { id: "meal3", label: "Dinner Included" },
          ]}
          showAll={false}
          searchable={false}
        />
      </aside>
    </>
  );
};

export default FilterSidebar;