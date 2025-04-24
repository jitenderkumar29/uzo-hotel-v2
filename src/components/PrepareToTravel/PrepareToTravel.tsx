'use client';

import React from 'react';
import styles from './PrepareToTravel.module.css';
import Image from 'next/image';
import travel1 from "@/assets/images/travel1.jpg";
import travel2 from "@/assets/images/travel2.jpg";
import travel3 from "@/assets/images/travel3.jpg";


const cards = [
  {
    title: 'BAGGAGE ESSENTIALS',
    text: 'Travel light on worries and heavy on information. Baggage rules decoded.',
    img: travel1,
    link: '/in/en/travel-information/baggage-guidelines.html',
    alt: 'Baggage Essentials',
  },
  {
    title: 'AIRPORT ADVENTURES',
    text: 'Turn layovers into mini vacations—insights on terminals, lounges, amenities and more.',
    img: travel2,
    link: '/in/en/travel-information/airport-information.html',
    alt: 'Airport Adventures',
  },
  {
    title: 'BEFORE YOU FLY',
    text: 'From visa essentials to medical assistance, everything you need to know.',
    img: travel3,
    link: '/in/en/travel-information.html',
    alt: 'Before You Fly',
  },
];

const PrepareToTravel: React.FC = () => {
  return (
    <section className={styles.prepareToTravel} aria-labelledby="prepare-title">
      <div className={styles.prepareToTravelBody}>
        <div className={styles.prepareContent}>
          <h2 id="prepare-title">
            Prepare
            <br />
            To Travel
            <br />
            Your Destination
          </h2>
          <p>
            Helpful hints for everything from packing to paperwork, so you are
            fully prepared.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div className={styles.travelCard} key={index}>
              <a href={card.link} aria-label={card.title}>
                <Image
                  src={card.img}
                  alt={card.alt}
                  className={styles.travelImage}
                  loading="lazy"
                  width={100}
                  height={350}
                />
              </a>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrepareToTravel;
