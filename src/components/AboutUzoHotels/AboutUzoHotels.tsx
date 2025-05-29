'use client';
import React, { useState, useRef } from 'react';
import styles from './AboutUzoHotels.module.css';
import { FaHotel, FaHome, FaUtensils, FaSpa, FaMapMarkedAlt, FaGift } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import HeaderTop from '../HeaderTop/HeaderTop';
import HomeStayHotelsHeader from './HomeStayHotels/HomeStayHotelsHeader';
import WellnessUzoHotels from './WellnessUzoHotels/WellnessUzoHotels';

const AboutUzoHotels = () => {
  const [isVideoPlaying,] = useState(true);
  const [activeTab, setActiveTab] = useState('HOTELS');

  // Create refs for each section
  const hotelsRef = useRef<HTMLDivElement>(null);
  const residencesRef = useRef<HTMLDivElement>(null);
  const homesRef = useRef<HTMLDivElement>(null);
  const dineRef = useRef<HTMLDivElement>(null);
  const wellnessRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const celebrateRef = useRef<HTMLDivElement>(null);
  const giftRef = useRef<HTMLDivElement>(null);

  // const toggleVideo = () => {
  //   setIsVideoPlaying(!isVideoPlaying);
  // };

  const handleTabClick = (title: string) => {
    setActiveTab(title);

    // Scroll to the corresponding section
    switch (title) {
      case 'HOTELS':
        hotelsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'RESIDENCES':
        residencesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'EXCEPTIONAL HOMES':
        homesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'DINE':
        dineRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'WELLNESS':
        wellnessRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'EXPLORE':
        exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'CELEBRATE':
        celebrateRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'GIFT':
        giftRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        hotelsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { title: 'HOTELS', icon: <FaHotel />, link: '/', ref: hotelsRef },
    { title: 'RESIDENCES', icon: <FaHome />, link: '/', ref: residencesRef },
    { title: 'EXCEPTIONAL HOMES', icon: <FaHome />, link: '/', ref: homesRef },
    { title: 'DINE', icon: <FaUtensils />, link: '/', ref: dineRef },
    { title: 'WELLNESS', icon: <FaSpa />, link: '/', ref: wellnessRef },
    { title: 'EXPLORE', icon: <FaMapMarkedAlt />, link: '/', ref: exploreRef },
    { title: 'CELEBRATE', icon: <GiPartyPopper />, link: '/', ref: celebrateRef },
    { title: 'GIFT', icon: <FaGift />, link: '/', ref: giftRef }
  ];

  return (
    <>
      <div className={styles.headerTopBody}>
        <HeaderTop />
      </div>
      {/* <div className={styles.HotelSearchBarTopBody}>
        <HotelSearchProvider>
          <HotelSearchBarTop />
        </HotelSearchProvider>
      </div> */}
      <section className={styles.masthead}>
        <div className={styles.mastheadWrapper}>
          <div className={styles.mastheadVideo}>
            <div className={styles.videoWrapper} tabIndex={-1}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}
              >
                <source src="https://photos.mandarinoriental.com/is/content/MandarinOriental/mohg-spring-global-home-video-desktop" type="video/mp4" />
                This video format is not supported by your browser
              </video>
            </div>
          </div>

          <div className={styles.mastheadNav}>
            {navItems.map((item, index) => (
              <button
                type='button'
                key={index}
                // className={styles.navItem}
                className={`${styles.navItem} ${activeTab === item.title ? styles.activeNavItem : ''}`}
                onClick={() => handleTabClick(item.title)}
              >
                <div className={styles.navItemWrapper}>
                  <div className={styles.navIcon}>{item.icon}</div>
                  <div className={styles.navTitle}>{item.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={styles.mastheadDescription}>
          <p className={styles.descriptionText}>
            UZO Oriental&apos;s acclaimed collection of luxury hotels, resorts and private homes awaits you.
            Perfectly located in the world&apos;s most prestigious destinations, Mandarin Oriental welcomes you
            with legendary service and 21st-century luxury that is steeped in the values of the Orient.
          </p>
        </div>
      </section>

      {/* Add refs to your sections */}
      <div ref={hotelsRef}>
        {activeTab === "HOTELS" && <HomeStayHotelsHeader />}
      </div>

      <div ref={wellnessRef}>
        {activeTab === "WELLNESS" && <WellnessUzoHotels />}
      </div>

      {/* You'll need to add similar refs and components for other tabs */}
      {/* For example: */}
      {/* <div ref={dineRef}>
        {activeTab === "DINE" && <DineComponent />}
      </div> */}
    </>
  );
};

export default AboutUzoHotels;