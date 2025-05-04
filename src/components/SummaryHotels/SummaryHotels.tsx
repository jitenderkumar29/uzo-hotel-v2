import React, { useState } from "react";
import styles from "./SummaryHotels.module.css";
import HotelCard from "./HotelCard/HotelCard";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import { HotelSearchProvider } from "@/app/Context/HotelSearchContext";


const SummaryHotels: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };




  return (
    <div className={styles.container}>
      {/* Mobile header */}
      {/* <header className={styles.header} aria-label="Page header">
        <h1>Hotels in Delhi</h1>
      </header> */}

      {/* Mobile filter toggle - only visible on mobile */}
      <button
        className={styles.filterToggle}
        onClick={toggleSidebar}
        aria-label="Open filters"
        aria-expanded={sidebarOpen}
      >
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 2h8M6 8h8M6 14h8M2 2h0M2 8h0M2 14h0"></path>
        </svg>
        <span>Filters</span>
      </button>

      {/* <PropertiesSearch /> */}
      <div className={styles.sideBarBody}>
        <aside><FilterSidebar isOpen={sidebarOpen} onClose={toggleSidebar} /></aside>
      </div>


      <main className={styles.mainContent}>
        <HotelSearchProvider>
          <HotelCard />
        </HotelSearchProvider>
        {/* Additional HotelCard components would go here */}
      </main>
    </div>
  );
};

export default SummaryHotels;