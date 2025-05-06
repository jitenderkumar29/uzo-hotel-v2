'use client';
import { useEffect, useState } from 'react';
import styles from './HotelTabNavigationBar.module.css';
import AboutHotel from '../AboutHotel/AboutHotel';
import RoomsPage from '../RoomCard/RoomsPage';
import Amenities from '../Amenities/Amenities';
import FoodDiningCard from '../FoodDiningCard/FoodDiningCard';
import HotelReviews from '../HotelReviews/HotelReviews';
import TravelerImpressions from '../HotelReviews/TravelerImpressions/TravelerImpressions';

const sections = [
  { id: 'hotel-options', label: 'About Hotel', content: 'Details about hotel.' },
  { id: 'room-options', label: 'Room Options', content: 'Details about different room types available.' },
  { id: 'amenities', label: 'Amenities', content: 'List of available amenities like WiFi, pool, etc.' },
  { id: 'food-dining', label: 'Food & Dining', content: 'Information about dining options and menus.' },
  { id: 'guest-reviews', label: 'Guest Reviews', content: 'Ratings and reviews by past guests.' },
  { id: 'policies', label: 'Property Policies', content: 'Rules and policies of the property.' },
  { id: 'location', label: 'Location', content: 'Map and details of the hotel location.' },
  { id: 'similar', label: 'Similar Properties', content: 'Other hotels similar to this one.' }
];

export default function HotelTabNavigationBar() {
  const [activeId, setActiveId] = useState('room-options');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveId(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={styles.tabNav}>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${styles.tabLink} ${activeId === id ? styles.active : ''}`}
          >
            {label}
          </a>
        ))}
      </nav>

      <main className={styles.mainContentBody}>
        {sections.map(({ id }) => (
          // {sections.map(({ id, label, content }) => (
          <section key={id} id={id} className={styles.section}>

            {id === "hotel-options" && (<AboutHotel />)}
            {id === "room-options" && (<RoomsPage />)}
            {id === "amenities" && (<Amenities />)}
            {id === "food-dining" && (<FoodDiningCard />)}
            {id === "guest-reviews" && (<><HotelReviews />
              <TravelerImpressions /></>)}
            {/* {id === "policies" && (<PropertyPolicies />)} */}
            {/* <h2>{label}</h2>
            <p>{content}</p> */}
          </section>

        ))}
        {/* <AboutHotel /> */}
      </main>
    </>
  );
}
