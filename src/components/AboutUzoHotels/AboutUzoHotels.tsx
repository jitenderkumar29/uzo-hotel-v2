'use client';
import React, { useState, useRef } from 'react';
import styles from './AboutUzoHotels.module.css';
import { FaHotel, FaHome, FaUtensils, FaSpa, FaMapMarkedAlt, FaGift, FaInvision } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import HeaderTop from '../HeaderTop/HeaderTop';
import HomeStayHotelsHeader from './HomeStayHotels/HomeStayHotelsHeader/HomeStayHotelsHeader';
import StayEvenBetter from './HomeStayHotels/StayEvenBetter/StayEvenBetter';
import StaySpotlight from './HomeStayHotels/StaySpotlight/StaySpotlight';
import { apartHotelsData, michelinStarredData, ResidencesOperationData, UpcomingResidencesData } from '@/app/data';
import ResortWelcome from './Resorts/ResortWelcome/ResortWelcome';
import ApartHotels from './ApartHotels/ApartHotels';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import WellnessLatestNews from './WellnessUzoHotels/WellnessLatestNews/WellnessLatestNews';

const AboutUzoHotels = () => {
  const [isVideoPlaying,] = useState(true);
  const [activeTab, setActiveTab] = useState('HOTELS');

  // Create refs for each section
  const hotelsRef = useRef<HTMLDivElement>(null);
  const residencesRef = useRef<HTMLDivElement>(null);
  const homesRef = useRef<HTMLDivElement>(null);
  const dineRef = useRef<HTMLDivElement>(null);
  const wellnessRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
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
      case 'RESORTS':
        residencesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'APARTHOTELS':
        homesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'DINE':
        dineRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'WELLNESS':
        wellnessRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'VISION':
        visionRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    { title: 'RESORTS', icon: <FaHome />, link: '/', ref: residencesRef },
    { title: 'APARTHOTELS', icon: <FaHome />, link: '/', ref: homesRef },
    { title: 'DINE', icon: <FaUtensils />, link: '/', ref: dineRef },
    { title: 'WELLNESS', icon: <FaSpa />, link: '/', ref: wellnessRef },
    { title: 'VISION', icon: <FaInvision />, link: '/', ref: visionRef },
    { title: 'EXPLORE', icon: <FaMapMarkedAlt />, link: '/', ref: exploreRef },
    { title: 'CELEBRATE', icon: <GiPartyPopper />, link: '/', ref: celebrateRef },
    { title: 'GIFT', icon: <FaGift />, link: '/', ref: giftRef }
  ];

  return (
    <>
      <div className={styles.headerTopBody}>
        {/* <HeaderTransparent /> */}
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
              {activeTab === "HOTELS" && (<video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}>
                <source src="https://photos.mandarinoriental.com/is/content/MandarinOriental/mohg-spring-global-home-video-desktop" type="video/mp4" />
                This video format is not supported by your browser
              </video>)}
              {activeTab === "RESORTS" && (<video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}>

                <source src="https://photos.mandarinoriental.com/is/content/MandarinOriental/residences-lifestyle-video-without-title-credits" type="video/mp4" />
                This video format is not supported by your browser
              </video>)}
              {activeTab === "APARTHOTELS" && (<video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}>

                <source src="https://photos.mandarinoriental.com/is/content/MandarinOriental/exclusive-homes-desktop-video" />
                This video format is not supported by your browser
              </video>)}
              {activeTab === "DINE" && (<video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}>

                <source src="https://photos.mandarinoriental.com/is/content/MandarinOriental/mohg-global-fb-video-desktop" />
                This video format is not supported by your browser
              </video>)}
              {activeTab === "WELLNESS" && (<video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}>

                <source src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJzaXRlY29yZSJ9LCJwYXRoIjoibWFuZGFyaW4tb3JpZW50YWwtaG90ZWwtZ3JvdXBcL2ZpbGVcL3VKOU1hVUt2UTF2Mm14RkdVMkdDLm1wNCJ9:mandarin-oriental-hotel-group:CpljMIp8WPWOSSkzhJ2WJbUDB6Q3tABNMY-q6qf8mRE?format=mp4" />
                This video format is not supported by your browser
              </video>)}
              {activeTab === "VISION" && (<video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}>

                <source src="https://photos.mandarinoriental.com/is/content/MandarinOriental/mohg-global-meet-video-desktop" />
                This video format is not supported by your browser
              </video>)}
              {activeTab === "EXPLORE" && (<video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}>

                <source src="https://photos.mandarinoriental.com/is/content/MandarinOriental/mohg-global-explore-video-desktop" />
                This video format is not supported by your browser
              </video>)}
              {activeTab === "CELEBRATE" && (<video
                autoPlay
                muted
                loop
                playsInline
                className={isVideoPlaying ? styles.playing : styles.paused}>

                <source src="https://photos.mandarinoriental.com/is/content/MandarinOriental/mohg-global-celebrate-video-desktop" />
                This video format is not supported by your browser
              </video>)}
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
          {activeTab === "HOTELS" && (
            <p className={styles.descriptionText}>
              UZO Oriental&apos;s acclaimed collection of luxury hotels, resorts and private homes awaits you.
              Perfectly located in the world&apos;s most prestigious destinations, Mandarin Oriental welcomes you
              with legendary service and 21st-century luxury that is steeped in the values of the Orient.
            </p>)}
          {activeTab === "RESORTS" && (
            <p className={styles.descriptionText}>
              A truly unique lifestyle with the best of both worlds; the comforts of a private home combined with the unsurpassed amenities and legendary service of Mandarin Oriental.
            </p>)}
          {activeTab === "APARTHOTELS" && (
            <p className={styles.descriptionText}>
              Mandarin Oriental’s acclaimed collection of luxury hotels, resorts and private homes awaits you. Perfectly located in the world’s most prestigious destinations, Mandarin Oriental welcomes you with legendary service and 21st-century luxury that is steeped in the values of the Orient.
            </p>)}
          {activeTab === "DINE" && (
            <p className={styles.descriptionText}>
              A truly unique lifestyle with the best of both worlds; the comforts of a private home combined with the unsurpassed amenities and legendary service of Mandarin Oriental.
            </p>)}
          {activeTab === "WELLNESS" && (
            <p className={styles.descriptionText}>
              Mandarin Oriental’s award-winning spa and wellness facilities are dedicated to providing an exceptional experience. Rooted in oriental philosophy and authentic rituals, our serene sanctuaries combine ancient techniques with modern innovations to create a personalised journey of renewal and tranquillity.
            </p>)}
          {activeTab === "VISION" && (
            <p className={styles.descriptionText}>
              At Hotel Vision, our mission is to craft immersive, tailored experiences through innovation, sustainability, and world-class service. We aim to be the destination of choice for discerning travelers who seek more than just a place to stay.
            </p>)}
          {activeTab === "EXPLORE" && (
            <p className={styles.descriptionText}>
              Go deeper with unique curated experiences, tours, workshops, and cultural journeys.
            </p>)}
          {activeTab === "CELEBRATE" && (
            <p className={styles.descriptionText}>
              We can assure you a day that combines panache with peace of mind. And while we’re busy planning your day, our spas and gracious service provide you with every opportunity to relax and anticipate the celebration.
            </p>)}
        </div>
      </section>

      {/* Add refs to your sections */}
      {/* <div ref={hotelsRef}>
      </div> */}
      {activeTab === "HOTELS" && (<><HomeStayHotelsHeader />
        <StayEvenBetter />
      </>)}
      {/* <div ref={hotelsRef}>
      </div> */}
      {activeTab === "RESORTS" && (<>
        <div className={styles.rasBody}>
          <div className={styles.residencesContainer}>
            <h2 className={styles.rasHeading}>Residences in Operation</h2>
            <StaySpotlight spotlightData={ResidencesOperationData} />
          </div>
          <div>
            <ResortWelcome />
          </div>
          <div className={styles.residencesContainer}>
            <h2 className={styles.rasHeading}>Upcoming Residences</h2>
            <StaySpotlight spotlightData={UpcomingResidencesData} />
          </div>
        </div>
      </>)}
      {activeTab === "APARTHOTELS" && (<>
        <div className={styles.rasBody}>
          <div className={styles.residencesContainer}>
            <h2 className={styles.rasHeading}>APART HOTELS</h2>
            <StaySpotlight spotlightData={apartHotelsData} />
          </div>
          <div>
            <ApartHotels />
          </div>
          {/* <div className={styles.residencesContainer}>
            <h2 className={styles.rasHeading}>Upcoming Residences</h2>
            <StaySpotlight spotlightData={UpcomingResidencesData} />
          </div> */}
        </div>
      </>)}
      {activeTab === "DINE" && (<>
        <div className={styles.dineBody}>
          {/* <div className={styles.residencesContainer}>
            <h2 className={styles.rasHeading}>Michelin-Starred</h2>
            <StaySpotlight spotlightData={michelinStarred} />
          </div> */}

          <div className={styles.headingWrapper}>
            <h2 className={styles.headingTitle}>
              <span>Michelin-Starred</span>
            </h2>
            <div className={styles.headingContent}>
              <div className={styles.headingDescription}>
                <p>With 28 stars awarded to 18 of our establishments, we’re not the only ones who think our restaurants are amongst the best in the world.</p>
                <Link href="/" className={styles.ctaLink}>
                  View All Stays <FontAwesomeIcon icon={faChevronRight} className={styles.ctaIcon} />
                </Link>
              </div>
              <div className={styles.headingCta}>

              </div>
            </div>
          </div>
          <StaySpotlight spotlightData={michelinStarredData} />

          {/* <Dining />
          <div className={styles.headingWrapper}>
            <h2 className={styles.headingTitle}>
              <span>Amazing Bars</span>
            </h2>
            <div className={styles.headingContent}>
              <div className={styles.headingDescription}>
                <p>Stunning spaces to savor every sip.</p>
                <Link href="/" className={styles.ctaLink}>
                  View All Stays <FontAwesomeIcon icon={faChevronRight} className={styles.ctaIcon} />
                </Link>
              </div>
              <div className={styles.headingCta}>

              </div>
            </div>
          </div>
          <StaySpotlight spotlightData={amazingBarsData} /> */}


          {/* <div>
            <ApartHotels />
          </div> */}
          {/* <div className={styles.residencesContainer}>
            <h2 className={styles.rasHeading}>Upcoming Residences</h2>
            <StaySpotlight spotlightData={UpcomingResidencesData} />
          </div> */}
        </div>
      </>)}

      {/* <div ref={wellnessRef}>
      </div> */}
      {activeTab === "WELLNESS" && (
        <>
          <WellnessLatestNews />
        </>)}

      {/* You'll need to add similar refs and components for other tabs */}
      {/* For example: */}
      {/* <div ref={dineRef}>
        {activeTab === "DINE" && <DineComponent />}
      </div> */}
    </>
  );
};

export default AboutUzoHotels;