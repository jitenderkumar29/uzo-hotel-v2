import React, { useState } from 'react';
import styles from './OffersTab.module.css';
import { Plane, Hotel, Bus, Car, Flame, Clock } from 'lucide-react';
import { FaPiggyBank } from 'react-icons/fa';
import OfferCards from '../OfferCards/OfferCards';
import { BiSolidOffer } from 'react-icons/bi';
import { bankOffers, filterBankCategories, filterCategories, mockOffers } from '@/app/data';

const OffersTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState('special-offers');

  const tabs = [
    {
      id: 'special-offers',
      label: 'Special Offers',
      icon: <BiSolidOffer className={styles.icon} />,
      href: 'https://www.easemytrip.com/deals.html'
    },
    {
      id: 'bank-offers',
      label: 'Bank Offers',
      icon: <FaPiggyBank className={styles.icon} />,
      href: 'https://www.easemytrip.com/offers/bank-deals.html',
      hasNotification: true
    },
    {
      id: 'flight-offers',
      label: 'Flight Offers',
      icon: <Plane className={styles.icon} />,
      href: 'https://www.easemytrip.com/offers/flights.html'
    },
    {
      id: 'hotel-offers',
      label: 'Hotel Offers',
      icon: <Hotel className={styles.icon} />,
      href: 'https://www.easemytrip.com/offers/hotels.html'
    },
    {
      id: 'bus-offers',
      label: 'Bus Offers',
      icon: <Bus className={styles.icon} />,
      href: 'https://www.easemytrip.com/offers/bus.html'
    },
    {
      id: 'cab-offers',
      label: 'Cab Offers',
      icon: <Car className={styles.icon} />,
      href: 'https://www.easemytrip.com/offers/cab.html'
    },
    {
      id: 'hot-deals',
      label: 'Hot Deals',
      icon: <Flame className={styles.icon} />,
      href: 'https://www.easemytrip.com/offers/hot-deals.html'
    },
    {
      id: 'expired-offers',
      label: 'Expired Offers',
      icon: <Clock className={styles.icon} />,
      href: 'https://www.easemytrip.com/offers/expired.html'
    }
  ];

  return (
    <>
      <section className={styles.container}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.href}
                className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
              >
                {tab.icon && <span className={styles.iconContainer}>{tab.icon}</span>}
                <span className={styles.label}>{tab.label}</span>
                {tab.hasNotification && <span className={styles.notificationDot}></span>}
              </a>
            ))}
          </div>
        </div>
      </section>
      {activeTab === "special-offers" && (<>
        <OfferCards offers={mockOffers} filterCategories={filterCategories} /></>)}
      {activeTab === "bank-offers" && (<>
        <OfferCards offers={bankOffers} filterCategories={filterBankCategories} /></>)}
      {/* {activeTab === "flight-offers" && (<>
        <OfferCards offers={flightOffers} filterCategories={filterFlightCategories} /></>)} */}
      {/* {activeTab === "hotel-offers" && (<>
        <OfferCards offers={hotelOffers} filterCategories={filterHotelCategories} /></>)} */}
    </>
  );
};

export default OffersTab;