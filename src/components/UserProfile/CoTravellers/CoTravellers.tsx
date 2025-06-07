"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building,
  Bus,
  Car,
} from "lucide-react";
import styles from "./CoTravellers.module.css";

const statsData = [
  {
    id: "hotels",
    number: 0,
    label: "Hotel\nBookings",
    icon: Building,
    imgUrl: "/images/hotelsBG.jpg",
  },
  {
    id: "bus",
    number: 0,
    label: "Bus\nBookings",
    icon: Bus,
    imgUrl: "/images/busBG.jpg",
  },
  {
    id: "cab",
    number: 0,
    label: "Cab\nBookings",
    icon: Car,
    imgUrl: "/images/cabBG.jpg",
  },
];

export default function CoTravellers() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const visibleCards = Array.from({ length: 3 }, (_, i) => {
    const index = (visibleIndex + i) % statsData.length;
    return statsData[index];
  });

  const prevCards = () => {
    setVisibleIndex((prev) =>
      (prev - 1 + statsData.length) % statsData.length
    );
  };

  const nextCards = () => {
    setVisibleIndex((prev) => (prev + 1) % statsData.length);
  };


  return (
    <section className={styles.coTravellersSection}>
      <div className={styles.statsContainerWrapper}>
        {/* <button
          className={`${styles.navButton} ${styles.navButtonLeft}`}
          onClick={prevCards}
        >
          <ChevronLeft size={24} />
        </button> */}
        <button
          className={`${styles.navButton} ${styles.navButtonLeft}`}
          onClick={prevCards}
          aria-label="Previous cards"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.statsContainer}>
          {visibleCards.map((card) => {
            const Icon = card.icon;
            return (
              <div className={styles.cardContainer} key={card.id}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={card.imgUrl}
                      alt={card.label}
                      fill
                      className={styles.cardImage}
                    />

                    {/* <Image
                      src={card.imgUrl}
                      alt={card.label}
                      width={2417}
                      height={1500}
                      className={styles.cardImage}
                    /> */}
                  </div>
                  <div className={styles.overlay}>
                    <div className={styles.number}>{card.number}</div>
                    <div className={styles.label}>
                      {card.label.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.label.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                    <div className={styles.icon}><Icon size={20} /></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className={`${styles.navButton} ${styles.navButtonRight}`}
          onClick={nextCards}
          aria-label="Next cards"
        >
          <ChevronRight size={24} />
        </button>
        {/* <button
          className={`${styles.navButton} ${styles.navButtonRight}`}
          onClick={nextCards}
        >
          <ChevronRight size={24} />
        </button> */}
      </div>

      <div className={styles.footerSection}>
        <div className={styles.footerText}>Add New Co-Passenger</div>
        <button className={styles.addButton}>Add Co-Passenger</button>
      </div>
    </section>
  );
}
