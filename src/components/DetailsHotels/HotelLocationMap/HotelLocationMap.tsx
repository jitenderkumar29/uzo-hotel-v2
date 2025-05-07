'use client';
import React, { useState } from 'react';
import styles from './HotelLocationMap.module.css';
import Map from '@/components/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLocationDot, faMagnifyingGlass, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const HotelLocationMap = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>('Key Landmarks');
  const [showAllNearby, setShowAllNearby] = useState(false);

  const categories = [
    {
      name: 'Key Landmarks',
      items: [
        { name: 'Sankat Mochan Hanuman Mandir', distance: '2.8Km', type: 'Religious Place' },
        { name: 'Indira Gandhi International Airport', distance: '4Km', type: 'Airport' },
        { name: 'Fun N Food Village Water Park', distance: '7.9Km', type: 'Tourist Attraction' },
        { name: 'National Rail Museum', distance: '13Km', type: 'Tourist Attraction' },
      ],
    },
    {
      name: 'Attractions',
      items: [
        { name: 'Air Force Museum', distance: '6.5Km', type: 'Tourist Attraction' },
        { name: 'Neela Hauz', distance: '8.6Km', type: 'Tourist Attraction' },
        { name: 'Bhool Bhulaiya', distance: '9.1Km', type: 'Tourist Attraction' },
      ],
    },
    {
      name: 'Transport',
      items: [
        { name: 'Indira Gandhi International Airport', distance: '4Km', type: 'Airport' },
        { name: 'T3 - Delhi Airport (IGI)', distance: '4.4Km', type: 'Airport' },
        { name: 'T2 - Delhi Airport (IGI Airport)', distance: '5Km', type: 'Airport' },
      ],
    },
    {
      name: 'Restaurants',
      items: [
        { name: 'Lemon Tree Premier, Delhi Airport', distance: '0.54Km', type: 'Restaurants' },
      ],
    },
    {
      name: 'Other Landmarks',
      items: [
        { name: 'Aero City Metro Station', distance: '0.96Km', type: 'Transit Point' },
        { name: 'V2 Retail Limited', distance: '1.6Km', type: 'Shopping' },
        { name: 'V2 Mega Mart', distance: '1.6Km', type: 'Shopping' },
        { name: 'Shiv Murti Complex', distance: '2Km', type: 'Shopping' },
      ],
    },
  ];

  const center = {
    lat: 37.7749,
    lng: -122.4194
  };
  const zoom = 12;

  // Define markers with positions and optional content
  const markers = [
    {
      position: { lat: 37.7749, lng: -122.4194 },
      title: 'San Francisco',
      content: (
        <div className="bg-white p-2 rounded shadow-md">
          <h3 className="font-bold">San Francisco</h3>
          <p>City by the Bay</p>
        </div>
      )
    },
    {
      position: { lat: 37.7947, lng: -122.3947 },
      title: 'Fisherman\'s Wharf',
      content: <div className="bg-white p-2 rounded">Fisherman&apos;s Wharf</div>
    }
  ];

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <section className={styles.locationMap}>
      <div className={styles.locationHeader}>
        <h2>Location of Pride Plaza Hotel Aerocity New Delhi</h2>
        <p className={styles.address}>
          {/* <FontAwesomeIcon icon={faMap} className={styles.locationIcon} /> */}
          <FontAwesomeIcon icon={faMapLocationDot} className={styles.locationIcon} />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            height="16"
            className={styles.locationIcon}
          >
            <g fill="none" fillRule="evenodd">
              <path
                fill="#2276E3"
                d="M9.333 6a.667.667 0 0 0 1.334 0V2.21a.167.167 0 0 1 .263-.134l2.933 2.093a.33.33 0 0 1 .137.27v1.56A.666.666 0 1 0 15.333 6V4.095c0-.323-.156-.626-.418-.814L10.582.187a.995.995 0 0 0-1.163 0L5.552 2.949a.33.33 0 0 1-.4-.007L1.618.214A1 1 0 0 0 .563.1 1 1 0 0 0 0 1v9.924c0 .314.149.61.4.8l4.338 3.254a1 1 0 0 0 1.18.013l2.917-2.084a.666.666 0 0 0-.774-1.084l-1.794 1.284a.17.17 0 0 1-.172.012.17.17 0 0 1-.092-.145V4.438c0-.108.052-.209.14-.271l2.933-2.093a.167.167 0 0 1 .263.133zm-4.666 6.924c0 .063-.036.12-.092.149a.17.17 0 0 1-.175-.016l-2.933-2.2a.33.33 0 0 1-.134-.266V2.018c0-.063.036-.12.092-.15a.17.17 0 0 1 .175.017L4.533 4.15a.33.33 0 0 1 .134.267z"
              ></path>
              <path
                fill="#FF3A5C"
                d="M12.667 7.333a3.34 3.34 0 0 0-3.334 3.334c0 2.114 2.972 5.109 3.098 5.236a.335.335 0 0 0 .472 0c.126-.127 3.097-3.122 3.097-5.236a3.337 3.337 0 0 0-3.333-3.334m0 4.5a1.166 1.166 0 1 1-.002-2.332 1.166 1.166 0 0 1 .002 2.332"
              ></path>
            </g>
          </svg> */}
          Asset 5-A, Hospitality District, Aerocity, Indra Gandhi International Airport, New Delhi 110037
        </p>
      </div>

      <div className={styles.searchContainer}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className={styles.searchIcon}
        >
          <title>search</title>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          {/* <path d="M31.179 28.825l-8.705-8.705c4.139-5.441 3.084-13.207-2.357-17.347s-13.207-3.084-17.347 2.357c-4.139 5.441-3.084 13.207 2.357 17.347 4.429 3.369 10.561 3.369 14.989 0l8.705 8.705c0.656 0.64 1.702 0.64 2.357 0v0c0.65-0.651 0.65-1.706 0-2.357zM3.667 12.667v0c0-4.971 4.029-9 9-9s9 4.029 9 9c0 4.971-4.029 9-9 9v0c-4.968-0.006-8.994-4.032-9-9z"></path> */}
        </svg>
        <input
          type="text"
          placeholder="Search Area, Landmark or Transit nearby"
          className={styles.searchInput}
        />
      </div>

      <section className={styles.mapSection}>


        <div className={styles.mapContainer}>
          <div className={styles.map}>
            {/* This would be replaced with an actual map component like Google Maps */}
            <div className={styles.mapPlaceholder}>
              <Map
                center={center}
                zoom={zoom}
                markers={markers}
                className="w-full h-full rounded border border-gray-300"
              />
              {/* <img
                src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='62' viewBox='0 0 52 62' fill='none'%3E%3Cpath d='M26.32 3C12.91 3 2 12.975 2 25.234c0 13.453 16.908 28.752 22.096 33.122a3.447 3.447 0 0 0 4.45 0c5.186-4.372 22.094-19.674 22.094-33.122C50.64 12.974 39.73 3 26.32 3z' fill='%231958B6'/%3E%3Cpath d='M29.215 18.213h3.474c.96 0 1.737.786 1.737 1.755 0 .97-.778 1.756-1.737 1.756h-3.474c-.96 0-1.738-.786-1.738-1.756s.778-1.755 1.738-1.755z' fill='%23fff'/%3E%3Cpath d='M40.216 34.01c0 .97-.778 1.756-1.737 1.756-.96 0-1.737-.786-1.737-1.756v-1.755c0-.646-.519-1.17-1.158-1.17h-18.53c-.64 0-1.158.524-1.158 1.17v1.755c0 .97-.778 1.756-1.737 1.756-.96 0-1.737-.786-1.737-1.756v-6.436c0-1.939 1.555-3.51 3.474-3.51h19.688c.64 0 1.158-.524 1.158-1.17v-5.267c0-.969.777-1.755 1.737-1.755.96 0 1.737.786 1.737 1.755V34.01z' fill='%23fff'/%3E%3C/svg%3E"
                alt="Map marker"
                className={styles.mapMarker}
              /> */}
            </div>
            {/* <div className={styles.mapControls}>
              <button className={styles.zoomIn}>+</button>
              <span className={styles.zoomDivider}></span>
              <button className={styles.zoomOut}>-</button>
            </div> */}
            {/* <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleMapsLink}
            >
              <img
                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 69 29'%3E%3Cg opacity='.6' fill='%23fff' stroke='%23fff' stroke-width='1.5'%3E%3Cpath d='M17.4706 7.33616L18.0118 6.79504 17.4599 6.26493C16.0963 4.95519 14.2582 3.94522 11.7008 3.94522c-4.613699999999999 0-8.50262 3.7551699999999997-8.50262 8.395779999999998C3.19818 16.9817 7.0871 20.7368 11.7008 20.7368 14.1712 20.7368 16.0773 19.918 17.574 18.3689 19.1435 16.796 19.5956 14.6326 19.5956 12.957 19.5956 12.4338 19.5516 11.9316 19.4661 11.5041L19.3455 10.9012H10.9508V14.4954H15.7809C15.6085 15.092 15.3488 15.524 15.0318 15.8415 14.403 16.4629 13.4495 17.1509 11.7008 17.1509 9.04835 17.1509 6.96482 15.0197 6.96482 12.341 6.96482 9.66239 9.04835 7.53119 11.7008 7.53119 13.137 7.53119 14.176 8.09189 14.9578 8.82348L15.4876 9.31922 16.0006 8.80619 17.4706 7.33616z'/%3E%3Cpath d='M24.8656 20.7286C27.9546 20.7286 30.4692 18.3094 30.4692 15.0594 30.4692 11.7913 27.953 9.39011 24.8656 9.39011 21.7783 9.39011 19.2621 11.7913 19.2621 15.0594c0 3.25 2.514499999999998 5.6692 5.6035 5.6692zM24.8656 12.8282C25.8796 12.8282 26.8422 13.6652 26.8422 15.0594 26.8422 16.4399 25.8769 17.2905 24.8656 17.2905 23.8557 17.2905 22.8891 16.4331 22.8891 15.0594 22.8891 13.672 23.853 12.8282 24.8656 12.8282z'/%3E%3Cpath d='M35.7511 17.2905v0H35.7469C34.737 17.2905 33.7703 16.4331 33.7703 15.0594 33.7703 13.672 34.7343 12.8282 35.7469 12.8282 36.7608 12.8282 37.7234 13.6652 37.7234 15.0594 37.7234 16.4439 36.7554 17.2962 35.7511 17.2905zM35.7387 20.7286C38.8277 20.7286 41.3422 18.3094 41.3422 15.0594 41.3422 11.7913 38.826 9.39011 35.7387 9.39011 32.6513 9.39011 30.1351 11.7913 30.1351 15.0594 30.1351 18.3102 32.6587 20.7286 35.7387 20.7286z'/%3E%3Cpath d='M51.953 10.4357V9.68573H48.3999V9.80826C47.8499 9.54648 47.1977 9.38187 46.4808 9.38187 43.5971 9.38187 41.0168 11.8998 41.0168 15.0758 41.0168 17.2027 42.1808 19.0237 43.8201 19.9895L43.7543 20.0168 41.8737 20.797 41.1808 21.0844 41.4684 21.7772C42.0912 23.2776 43.746 25.1469 46.5219 25.1469 47.9324 25.1469 49.3089 24.7324 50.3359 23.7376 51.3691 22.7367 51.953 21.2411 51.953 19.2723v-8.8366zm-7.2194 9.9844L44.7334 20.4196C45.2886 20.6201 45.878 20.7286 46.4808 20.7286 47.1616 20.7286 47.7866 20.5819 48.3218 20.3395 48.2342 20.7286 48.0801 21.0105 47.8966 21.2077 47.6154 21.5099 47.1764 21.7088 46.5219 21.7088 45.61 21.7088 45.0018 21.0612 44.7336 20.4201zM46.6697 12.8282C47.6419 12.8282 48.5477 13.6765 48.5477 15.084 48.5477 16.4636 47.6521 17.2987 46.6697 17.2987 45.6269 17.2987 44.6767 16.4249 44.6767 15.084 44.6767 13.7086 45.6362 12.8282 46.6697 12.8282zM55.7387 5.22083v-.75H52.0788V20.4412H55.7387V5.220829999999999z'/%3E%3Cpath d='M63.9128 16.0614L63.2945 15.6492 62.8766 16.2637C62.4204 16.9346 61.8664 17.3069 61.0741 17.3069 60.6435 17.3069 60.3146 17.2088 60.0544 17.0447 59.9844 17.0006 59.9161 16.9496 59.8498 16.8911L65.5497 14.5286 66.2322 14.2456 65.9596 13.5589 65.7406 13.0075C65.2878 11.8 63.8507 9.39832 60.8278 9.39832 57.8445 9.39832 55.5034 11.7619 55.5034 15.0676 55.5034 18.2151 57.8256 20.7369 61.0659 20.7369 63.6702 20.7369 65.177 19.1378 65.7942 18.2213L66.2152 17.5963 65.5882 17.1783 63.9128 16.0614zM61.3461 12.8511L59.4108 13.6526C59.7903 13.0783 60.4215 12.7954 60.9017 12.7954 61.067 12.7954 61.2153 12.8161 61.3461 12.8511z'/%3E%3C/g%3E%3Cpath d='M11.7008 19.9868C7.48776 19.9868 3.94818 16.554 3.94818 12.341 3.94818 8.12803 7.48776 4.69522 11.7008 4.69522 14.0331 4.69522 15.692 5.60681 16.9403 6.80583L15.4703 8.27586C14.5751 7.43819 13.3597 6.78119 11.7008 6.78119 8.62108 6.78119 6.21482 9.26135 6.21482 12.341 6.21482 15.4207 8.62108 17.9009 11.7008 17.9009 13.6964 17.9009 14.8297 17.0961 15.5606 16.3734 16.1601 15.7738 16.5461 14.9197 16.6939 13.7454h-4.9931V11.6512h7.0298C18.8045 12.0207 18.8456 12.4724 18.8456 12.957 18.8456 14.5255 18.4186 16.4637 17.0389 17.8434 15.692 19.2395 13.9838 19.9868 11.7008 19.9868z' fill='%234285F4'/%3E%3Cpath d='M29.7192 15.0594C29.7192 17.8927 27.5429 19.9786 24.8656 19.9786 22.1884 19.9786 20.0121 17.8927 20.0121 15.0594 20.0121 12.2096 22.1884 10.1401 24.8656 10.1401 27.5429 10.1401 29.7192 12.2096 29.7192 15.0594zM27.5922 15.0594C27.5922 13.2855 26.3274 12.0782 24.8656 12.0782S22.1391 13.2937 22.1391 15.0594C22.1391 16.8086 23.4038 18.0405 24.8656 18.0405S27.5922 16.8168 27.5922 15.0594z' fill='%23E94235'/%3E%3Cpath d='M40.5922 15.0594C40.5922 17.8927 38.4159 19.9786 35.7387 19.9786 33.0696 19.9786 30.8851 17.8927 30.8851 15.0594 30.8851 12.2096 33.0614 10.1401 35.7387 10.1401 38.4159 10.1401 40.5922 12.2096 40.5922 15.0594zM38.4734 15.0594C38.4734 13.2855 37.2087 12.0782 35.7469 12.0782 34.2851 12.0782 33.0203 13.2937 33.0203 15.0594 33.0203 16.8086 34.2851 18.0405 35.7469 18.0405 37.2087 18.0487 38.4734 16.8168 38.4734 15.0594z' fill='%23FABB05'/%3E%3Cpath d='M51.203 10.4357v8.8366C51.203 22.9105 49.0595 24.3969 46.5219 24.3969 44.132 24.3969 42.7031 22.7955 42.161 21.4897L44.0417 20.7095C44.3784 21.5143 45.1997 22.4588 46.5219 22.4588 48.1479 22.4588 49.1499 21.4487 49.1499 19.568V18.8617H49.0759C48.5914 19.4612 47.6552 19.9786 46.4808 19.9786 44.0171 19.9786 41.7668 17.8352 41.7668 15.0758 41.7668 12.3 44.0253 10.1319 46.4808 10.1319 47.6552 10.1319 48.5914 10.6575 49.0759 11.2323H49.1499V10.4357H51.203zM49.2977 15.084C49.2977 13.3512 48.1397 12.0782 46.6697 12.0782 45.175 12.0782 43.9267 13.3429 43.9267 15.084 43.9267 16.8004 45.175 18.0487 46.6697 18.0487 48.1397 18.0487 49.2977 16.8004 49.2977 15.084z' fill='%234285F4'/%3E%3Cpath d='M54.9887 5.22083V19.6912H52.8288V5.220829999999999H54.9887z' fill='%2334A853'/%3E%3Cpath d='M63.4968 16.6854L65.1722 17.8023C64.6301 18.6072 63.3244 19.9869 61.0659 19.9869 58.2655 19.9869 56.2534 17.827 56.2534 15.0676 56.2534 12.1439 58.2901 10.1483 60.8278 10.1483 63.3818 10.1483 64.6301 12.1768 65.0408 13.2773L65.2625 13.8357 58.6843 16.5623C59.1853 17.5478 59.9737 18.0569 61.0741 18.0569 62.1746 18.0569 62.9384 17.5067 63.4968 16.6854zM58.3312 14.9115L62.7331 13.0884C62.4867 12.4724 61.764 12.0454 60.9017 12.0454 59.8012 12.0454 58.2737 13.0145 58.3312 14.9115z' fill='%23E94235'/%3E%3C/svg%3E"
                alt="Google Maps"
                className={styles.googleLogo}
              />
            </a> */}
          </div>
          <div className={styles.mapActionContainer}>
            <button
              className={`${styles.mapActionButton} ${showAllNearby ? styles.active : ''}`}
              onClick={() => setShowAllNearby(!showAllNearby)}
            >
              Show All Nearby Places
            </button>
          </div>
        </div>



        <div className={styles.landmarksList}>
          {categories.map((category) => (
            <div key={category.name} className={styles.category}>
              <div
                className={styles.categoryHeader}
                onClick={() => toggleCategory(category.name)}
              >
                <div className={styles.categoryTitle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="#647A97"
                    className={styles.categoryIcon}
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                    {/* <path
                      fill="#46484D"
                      d="M8.66 0C3.883 0 0 3.552 0 7.917c0 4.79 6.02 10.237 7.868 11.793a1.23 1.23 0 0 0 1.584 0c1.846-1.557 7.867-7.005 7.867-11.793C17.319 3.552 13.434 0 8.659 0z"
                    ></path> */}
                    {/* <circle cx="8.5" cy="8.5" r="3.5" fill="#fff"></circle> */}
                  </svg>
                  <h4>{category.name}</h4>
                </div>
                <FontAwesomeIcon icon={faChevronDown} className={`${styles.arrowIcon} ${activeCategory === category.name ? styles.arrowUp : ''
                  }`} />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className={`${styles.arrowIcon} ${activeCategory === category.name ? styles.arrowUp : ''
                    }`}
                >
                  <path d="M16 26a3.07 3.07 0 0 1-2.305-1.04L.614 10.091A2.462 2.462 0 0 1 4.312 6.84l11.439 13.003a.334.334 0 0 0 .501 0L27.691 6.84a2.462 2.462 0 1 1 3.697 3.251L18.311 24.955A3.08 3.08 0 0 1 16.002 26z"></path>
                </svg> */}
              </div>
              <div
                className={`${styles.categoryItems} ${activeCategory === category.name ? styles.active : ''
                  }`}
              >
                {category.items.map((item, index) => (
                  <div key={index} className={styles.landmarkItem}>
                    <div className={styles.landmarkInfo}>
                      <span className={styles.dot}></span>
                      <span className={styles.landmarkName}>{item.name}</span>
                      <a className={styles.landmarkDistance}>{item.distance}</a>
                    </div>
                    <p className={styles.landmarkType}>{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HotelLocationMap;