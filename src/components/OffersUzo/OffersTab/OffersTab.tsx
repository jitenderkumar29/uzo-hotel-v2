'use client'
import React, { useState } from 'react';
import styles from './OffersTab.module.css';
import { Plane, Hotel, Bus, Car, Flame, Clock } from 'lucide-react';
import { FaPiggyBank } from 'react-icons/fa';
import OfferCards from '../OfferCards/OfferCards';
import { BiSolidOffer } from 'react-icons/bi';
import { bankOffers, busOffers, cabOffers, expiredOffers, filterBankCategories, filterBusCategories, filterCabCategories, filterCategories, filterExpiredCategories, filterFlightCategories, filterHotCategories, filterHotelCategories, flightOffers, hotelOffers, hotOffers, mockOffers } from '@/app/data';
import Link from 'next/link';

const OffersTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState('special-offers');

  const tabs = [
    {
      id: 'special-offers',
      label: 'Special Offers',
      icon: <BiSolidOffer className={styles.icon} />,
      href: '/'
    },
    {
      id: 'bank-offers',
      label: 'Bank Offers',
      icon: <FaPiggyBank className={styles.icon} />,
      href: '/',
      hasNotification: true
    },
    {
      id: 'flight-offers',
      label: 'Flight Offers',
      icon: <Plane className={styles.icon} />,
      href: '/'
    },
    {
      id: 'hotel-offers',
      label: 'Hotel Offers',
      icon: <Hotel className={styles.icon} />,
      href: '/'
    },
    {
      id: 'bus-offers',
      label: 'Bus Offers',
      icon: <Bus className={styles.icon} />,
      href: '/'
    },
    {
      id: 'cab-offers',
      label: 'Cab Offers',
      icon: <Car className={styles.icon} />,
      href: '/'
    },
    {
      id: 'hot-deals',
      label: 'Hot Deals',
      icon: <Flame className={styles.icon} />,
      href: '/'
    },
    {
      id: 'expired-offers',
      label: 'Expired Offers',
      icon: <Clock className={styles.icon} />,
      href: '/'
    }
  ];

  return (
    <>
      <section className={styles.container}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <Link
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
              </Link>
            ))}
          </div>
        </div>
      </section>
      {activeTab === "special-offers" && (<>
        <OfferCards offers={mockOffers} filterCategories={filterCategories} /></>)}
      {activeTab === "bank-offers" && (<>
        <OfferCards offers={bankOffers} filterCategories={filterBankCategories} /></>)}
      {activeTab === "flight-offers" && (<>
        <OfferCards offers={flightOffers} filterCategories={filterFlightCategories} /></>)}
      {activeTab === "hotel-offers" && (<>
        <OfferCards offers={hotelOffers} filterCategories={filterHotelCategories} /></>)}
      {activeTab === "bus-offers" && (<>
        <OfferCards offers={busOffers} filterCategories={filterBusCategories} /></>)}
      {activeTab === "cab-offers" && (<>
        <OfferCards offers={cabOffers} filterCategories={filterCabCategories} /></>)}
      {activeTab === "hot-deals" && (<>
        <OfferCards offers={hotOffers} filterCategories={filterHotCategories} /></>)}
      {activeTab === "expired-offers" && (<>
        <OfferCards offers={expiredOffers} filterCategories={filterExpiredCategories} /></>)}
    </>
  );
};

export default OffersTab;