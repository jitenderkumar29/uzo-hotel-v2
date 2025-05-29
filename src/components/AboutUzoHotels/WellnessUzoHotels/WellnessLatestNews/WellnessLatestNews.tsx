'use client';
import React from 'react';
import styles from './WellnessLatestNews.module.css';
import { FaLeaf, FaAward, FaStar } from 'react-icons/fa';

const WellnessLatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Global Wellness Day',
      description: 'On 14 June, in celebration of Global Wellness Day, UZO Hotels invites guests around the world to pause and reconnect—with nature, with loved ones, and with themselves.',
      icon: <FaLeaf className={styles.icon} />,
      imageUrl: 'https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/bhaE2HfSGvp5Me2LgrsG.jpg?width=1600&wid=1600&height=900&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0&fp=0.5,0.5&crop=fp',
      link: '/aboutUzoHotels'
    },
    {
      id: 2,
      title: 'World Spa Awards',
      description: 'UZO Hotels is proud to be recognized as the winner of the prestigious World Spa Awards World\'s Best Hotel Spa Brand 2024, affirming our commitment to excellence in wellness.',
      icon: <FaAward className={styles.icon} />,
      imageUrl: 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJzaXRlY29yZSJ9LCJwYXRoIjoibWFuZGFyaW4tb3JpZW50YWwtaG90ZWwtZ3JvdXBcL2ZpbGVcL0xub1RKZEFGUkROakdlVG5zenp0LmpwZyJ9:mandarin-oriental-hotel-group:aDudKIipHI4_thC-MhiCtO6SvuWzr5gNWL8lYFOEH-4?width=1600&wid=1600&height=900&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0&fp=0.5,0.5&crop=fp',
      link: '/aboutUzoHotels'
    },
    {
      id: 3,
      title: 'Forbes Travel Guide 2025',
      description: 'Forbes sets the global benchmark for luxury, recognizing the world\'s finest hotels, restaurants, and spas through meticulous, anonymous inspections. With up to 900 rigorous criteria, only the best earn a coveted star rating. This year, we\'re thrilled to celebrate our highest-ever recognition—12 Forbes Five-Star Spas and 11 Four-Star Spas—a reflection of our unwavering dedication to exceptional wellness.',
      icon: <FaStar className={styles.icon} />,
      imageUrl: 'https://media.ffycdn.net/eu/mandarin-oriental-hotel-group/vGr3jBXjXRJvfTysGYLf.jpg?width=1600&wid=1600&height=900&hei=900&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0&fp=0.5,0.5&crop=fp',
      link: '/aboutUzoHotels'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.headingTitle}>
          <span>LATEST NEWS</span>
        </h2>
      </div>

      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {newsItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                  <h3>{item.title}</h3>
                </div>
                <div className={styles.cardDescription}>
                  <p>{item.description}</p>
                </div>
                <div className={styles.cardCta}>
                  <a href={item.link} className={styles.ctaButton}>
                    <span>See More</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessLatestNews;