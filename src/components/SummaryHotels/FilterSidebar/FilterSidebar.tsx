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
    <>
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
    </>
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
          title="Theme"
          items={[
            { id: "usedFilter", label: "Luxury stays" },

          ]}
        />

        <FilterSection
          title="Popular filters"
          items={[
            { id: "flexibleCheckin", label: "Flexible checkin", count: 9 },
            { id: "coupleFriendly", label: "Couple friendly", count: 617 },
            { id: "freeCancellation", label: "Free cancellation", count: 1594 },
            { id: "freeBreakfast", label: "Free breakfast", count: 1658 },
            { id: "breakfastAndLunch", label: "Breakfast and lunch", count: 240 },
            { id: "allMealsIncluded", label: "All meals included", count: 3 },
            { id: "earlyBirdDeals", label: "Early bird deals", count: 3 },
            { id: "cabFacilities", label: "Cab facilities", count: 3 },
            { id: "womenfriendly", label: "Women friendly", count: 3 },
            { id: "longStays", label: "Long stays", count: 3 },
            { id: "entireProperty", label: "Entire property", count: 3 },
          ]}
          showAll={true}
        />

        <FilterSection
          title="Star category"
          items={[
            { id: "star1", label: "5 Star", count: 958 },
            { id: "star2", label: "4 Star", count: 545 },
            { id: "star3", label: "3 Star", count: 147 },
          ]}
          showAll={false}
          searchable={false}
        />

        <FilterSection
          title="Price"
          items={[
            { id: "price1", label: "₹ 0 to ₹ 2000", count: 588 },
            { id: "price2", label: "₹ 2000 to ₹ 6000", count: 730 },
            { id: "price3", label: "₹ 6000 to ₹ 12000", count: 730 },
            { id: "price4", label: "₹ 12000 to ₹ 20000", count: 341 },
            { id: "price5", label: "₹ 20000 to ₹ 40000", count: 552 },
            { id: "price6", label: "₹ 40000 to ₹ 60000", count: 225 },
            { id: "price7", label: "₹ 60000 to ₹ 80000", count: 999 },
            { id: "price8", label: "₹ 80000 to Above", count: 999 },
          ]}
          showAll={true}
        />

        <FilterSection
          title="User Ratings"
          items={[
            { id: "star1", label: "5+", count: 741 },
            { id: "star2", label: "4.5+", count: 852 },
            { id: "star3", label: "4+", count: 963 },
            { id: "star4", label: "3.5+", count: 789 },
            { id: "star5", label: "3+", count: 456 },
          ]}
          showAll={false}
          searchable={false}
        />

        <FilterSection
          title="UZO Brand hotels"
          items={[
            { id: "type1", label: "Star hotel", count: 1030 },
            { id: "type2", label: "Resorts", count: 650 },
            { id: "type3", label: "Villa & Bungalow", count: 149 },
            { id: "type4", label: "Apart hotel & suites", count: 249 },
            { id: "type5", label: "Luxury home", count: 349 },
            { id: "type6", label: "Cottage", count: 449 },
            { id: "type7", label: "Farmhouse", count: 549 },
            { id: "type8", label: "Apartment", count: 649 },
            { id: "type9", label: "Heritage hotel", count: 749 },
            { id: "type10", label: "Beach hut", count: 849 },
            { id: "type11", label: "Tree house", count: 949 },
            { id: "type12", label: "Houseboat", count: 949 },
          ]}
          showAll={false}
          searchable={false}
        />

        <FilterSection
          title="Chain hotels"
          items={[
            { id: "chain1", label: "IHG Hotel", count: 6 },
            { id: "chain2", label: "OBEROI Hotel", count: 8 },
            { id: "chain3", label: "ITC Hotel", count: 2 },
            { id: "chain4", label: "HILTON Hotel", count: 1 },
            { id: "chain5", label: "LEELA Hotel", count: 349 },
            { id: "chain6", label: "LALIT Hotel", count: 1 },
            { id: "chain7", label: "SAROVOR Hotel", count: 2 },
            { id: "chain8", label: "PRIDE Hotel", count: 3 },
            { id: "chain9", label: "ACCOR Hotel", count: 6 },
            { id: "chain10", label: "BLOOM Hotel", count: 1 },
            { id: "chain11", label: "PARK Hotel", count: 12 },
            { id: "chain12", label: "GINGER Hotel", count: 65 },
            { id: "chain13", label: "RADISSON Hotel", count: 31 },
            { id: "chain14", label: "MARRIOT Hotel", count: 3 },
            { id: "chain15", label: "TAJ Hotel", count: 4 },
            { id: "chain16", label: "Hyatt Hotel", count: 3 },
            { id: "chain17", label: "Wyndham Hotel", count: 5 },
            { id: "chain17", label: "Lemontree Hotel", count: 8 },
            { id: "chain17", label: "Royal orchid Hotel", count: 7 },
            { id: "chain17", label: "Club mahindra Hotel", count: 9 },
          ]}
          showAll={true}
          searchable={false}
        />

        <FilterSection
          title="Payment Mode"
          items={[
            { id: "payment1", label: "Book now pay later" },
            { id: "payment2", label: "Prepaid" },
            { id: "payment3", label: "Pay at hotel" },
          ]}
          showAll={false}
          searchable={false}
        />

        <FilterSection
          title="Hotel rules"
          items={[
            { id: "hotelRules1", label: "Smoking allowed" },
            { id: "hotelRules2", label: "Unmarried couples" },
            { id: "hotelRules3", label: "Alcohol allowed" },
            { id: "hotelRules4", label: "Pet allowed" },

          ]}
        />

        <FilterSection
          title="Room view"
          items={[
            { id: "roomView1", label: "Beach view" },
            { id: "roomView2", label: "City view" },
            { id: "roomView3", label: "Pool view" },
            { id: "roomView4", label: "Garden view" },

          ]}
        />

        <FilterSection
          title="Amenities"
          items={[
            { id: "amenity1", label: "Kitchenette", count: 1030 },
            { id: "amenity2", label: "Fireplace", count: 650 },
            { id: "amenity3", label: "Jacuzzi & Spa", count: 149 },
            { id: "amenity4", label: "Bathtub", count: 249 },
            { id: "amenity5", label: "Swimming pool", count: 349 },
            { id: "amenity6", label: "Cook & butier service", count: 449 },
            { id: "amenity7", label: "Inter connected room", count: 549 },
            { id: "amenity8", label: "Living area", count: 649 },
            { id: "amenity9", label: "Smoking room", count: 549 },
            { id: "amenity10", label: "Cab facilities", count: 449 },
            { id: "amenity11", label: "Laundry service", count: 349 },
            { id: "amenity12", label: "Parking", count: 159 },
            { id: "amenity13", label: "Fitness and gym", count: 753 },
            { id: "amenity14", label: "Restaurant", count: 852 },
            { id: "amenity15", label: "Ac & Wi-Fi", count: 147 },
            { id: "amenity16", label: "Security and CCTV", count: 369 },
            { id: "amenity17", label: "Facilities for kids", count: 183 },
            { id: "amenity18", label: "Nonsmoking room", count: 729 },
            { id: "amenity19", label: "Room service", count: 943 },
            { id: "amenity20", label: "Outdoor activities", count: 649 },
            { id: "amenity21", label: "Night club& Bar", count: 761 },
            { id: "amenity22", label: "Private pool", count: 791 },
            { id: "amenity23", label: "Business meeting room", count: 483 },
            { id: "amenity24", label: "Barbeque facilities", count: 378 },
            { id: "amenity25", label: "Indoor games", count: 172 },
            { id: "amenity26", label: "EV Charging", count: 544 },

          ]}
          showAll={false}
          searchable={false}
        />
        <FilterSection
          title="Area & attraction"
          items={[
            { id: "location1", label: "Humayuns Tomb" },
            { id: "location2", label: "Safdarjungs Tomb" },
            { id: "location3", label: "Red Fort" },
            { id: "location4", label: "India Gate" },
            { id: "location5", label: "National Museum" },
            { id: "location6", label: "Delhi National Museum" },
            { id: "location7", label: "Jantar Mantar" },
            { id: "location7", label: "Qutub Minar" },
            { id: "location7", label: "Raj Ghat" },
            { id: "location7", label: "Lotus Temple" },
            { id: "location7", label: "Pitampura TV Tower" },
            { id: "location7", label: "Old Fort (Purana Qila)" },
            { id: "location7", label: "Jama Masjid" },
            { id: "location7", label: "Laxminarayan Temple" },
            { id: "location7", label: "ISKCON Temple" },
            { id: "location7", label: "Akshardham Temple" },
            { id: "location7", label: "Birla Mandir Temple" },
            { id: "location7", label: "Gurudwara Sis Ganj Temple" },
            { id: "location7", label: "Teen Murti Bhavan" },
            { id: "location7", label: "Shankars Dolls Museum" },
            { id: "location7", label: "St. James Church" },
            { id: "location7", label: "National Gandhi Museum" },
            { id: "location7", label: "National Crafts Museum" },
            { id: "location7", label: "IGI Airport" },
          ]}
          showAll={false}
          searchable={false}
        />
        <FilterSection
          title="Localities"
          items={[

            { id: "location1", label: "Cannaught Place" },
            { id: "location2", label: "Paharganj" },
            { id: "location3", label: "Karolbagh" },
            { id: "location4", label: "Nehru Place" },
            { id: "location5", label: "Mahipalpur" },
            { id: "location6", label: "Aerocity" },
            { id: "location7", label: "Greater Kailash" },
            { id: "location8", label: "Mg Road" },
            { id: "location9", label: "Vasant Vihar" },
            { id: "location10", label: "Vasant Kunj" },
            { id: "location11", label: "Dwarka" },
            { id: "location12", label: "Rajouri Garden" },
            { id: "location13", label: "Old Delhi" },
            { id: "location14", label: "Chandani Chowk" },
            { id: "location15", label: "Chattarpur" },
            { id: "location16", label: "Paschim Vihar" },
            { id: "location17", label: "New Friends" },
            { id: "location18", label: "Mayur Vihar" },
            { id: "location19", label: "Ip Extension" },
            { id: "location20", label: "Chanakyapuri" },
            { id: "location21", label: "Green Park" },
            { id: "location22", label: "Rohini" },
            { id: "location23", label: "Safdarjung Enclave" },
            { id: "location24", label: "Hauz Khas" },
            { id: "location25", label: "Pitampura" },
            { id: "location26", label: "West Delhi" },
            { id: "location27", label: "East Delhi" },
            { id: "location28", label: "South Delhi" },
            { id: "location29", label: "North Delhi" },
            { id: "location30", label: "Airport Zone" },
            { id: "location31", label: "Saket Delhi" },
            { id: "location32", label: "Kapashera Delhi" },
            { id: "location33", label: "Jasola, Delhi" },
            { id: "location34", label: "South Extension" },
            { id: "location35", label: "Neeti Bagh" },
            { id: "location36", label: "Panchshila park" },
            { id: "location37", label: "South Extension li" },
            { id: "location38", label: "Barakhamba Road" },
            { id: "location39", label: "Sunder Nagar" },
            { id: "location40", label: "India Gate" },
            { id: "location41", label: "Rajendra Place" },
            { id: "location42", label: "Jangpura" },
            { id: "location43", label: "Dallupura" },
            { id: "location44", label: "Karolbagh, Delhi" },
            { id: "location45", label: "MAlviya Nagar" },
            { id: "location46", label: "Central Delhi" },
            { id: "location47", label: "Patel Nagar" },
            { id: "location48", label: "Sector 17 Dwarka" },
            { id: "location49", label: "Lajpat nagar, delhi" },
            { id: "location50", label: "Aya Nagar" },
            { id: "location51", label: "Kashmere Gate" },
            { id: "location52", label: "Nangli Poona" },
            { id: "location53", label: "Naraina Vihar" },
            { id: "location54", label: "Bijwasan" },
            { id: "location55", label: "Shahdara" },
            { id: "location56", label: "Vivek Vihar" },
            { id: "location57", label: "Shakurpur, Delhi" },
            { id: "location58", label: "Janakpuri" },
            { id: "location59", label: "Rajouri Garden" },
            { id: "location60", label: "Dwarka Sector 13 Metro" },
            { id: "location61", label: "Sahadra, New Delhi" },
            { id: "location62", label: "Okhla Industrila Area" },
            { id: "location63", label: "Chittaranjan Park" },
            { id: "location64", label: "Anand Vihar" },
            { id: "location65", label: "Civil Lines" },
            { id: "location66", label: "Samalka" },
            { id: "location67", label: "Golf Course" },
            { id: "location68", label: "Vasant Kunk" },
            { id: "location69", label: "Maan Singh Road" },
            { id: "location70", label: "Ashok Vihar" },
            { id: "location71", label: "Ashram" },
            { id: "location71", label: "Sarita Vihar" },
            { id: "location71", label: "Punjabi Bagh West" },
            { id: "location71", label: "Uttam Nagar" },
            { id: "location71", label: "Laxmi Nagar" },
            { id: "location71", label: "Defence Colony" },
            { id: "location71", label: "Yashobhoomi" },
            { id: "location71", label: "Convention Center" },

            // { id: "location1", label: "Government Museum" },
            // { id: "location2", label: "Visvesvaraya Industrial" },
            // { id: "location2", label: "Technological Museum" },
            // { id: "location3", label: "Tipus Summer Palace" },
            // { id: "location4", label: "Bull Temple" },
            // { id: "location5", label: "ISKCON Temple" },
            // { id: "location6", label: "Bangalore Palace" },
            // { id: "location7", label: "St. Morys Basilica" },
            // { id: "location8", label: "Banglore Cave Temple" },
            // { id: "location9", label: "Devanahalli Fort" },
            // { id: "location10", label: "St. Marks Cathedral" },
            // { id: "location11", label: "National Gallary Of Modern Art" },
            // { id: "location12", label: "The Heritage Center" },
            // { id: "location13", label: "Aerospace Museum" },
            // { id: "location14", label: "Kempegowda International Airport" },

          ]}
          showAll={false}
          searchable={false}
        />

      </aside>
    </>
  );
};

export default FilterSidebar;