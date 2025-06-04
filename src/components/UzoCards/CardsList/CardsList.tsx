// components/CardsList.tsx
'use client';
import React from 'react';
import styles from './CardsList.module.css';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    imgSrc: '/icons/uzoCards1.png',
    alt: 'Bank Of Baroda Debit Card',
    link: '/'
  },
  {
    id: 2,
    imgSrc: '/icons/uzoCards2.png',
    alt: 'Standard Chartered Credit Card',
    link: '/'
  },
  {
    id: 3,
    imgSrc: '/icons/uzoCards3.png',
    alt: 'Digibank Debit Card',
    link: '/'
  },
  {
    id: 4,
    imgSrc: '/icons/uzoCards4.png',
    alt: 'Punjab National Bank Credit Card',
    link: '/'
  },
];

const CardsList: React.FC = () => {
  return (
    <section className={styles.cardsSection} id="Applynow">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Don&apos;t Miss Out</p>
          <h2 className={styles.title}>Get Your Co-Branded Cards Now</h2>
        </div>
        <div className={styles.cardsWrapper}>
          {cardData.map(card => (
            <div className={styles.card} key={card.id}>
              <div className={styles.cardImage}>
                <Image src={card.imgSrc} alt={card.alt} width={280} height={200} />
              </div>
              <a className={styles.applyButton} href={card.link} target="_blank" rel="noopener noreferrer">
                Apply Now <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsList;
