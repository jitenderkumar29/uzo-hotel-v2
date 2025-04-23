"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import styles from "./InternationalDestination.module.css";
// Import all Images
import thailand from "@/assets/images/thailand.jpg";
import maldives from "@/assets/images/maldives.jpg";
import bali from "@/assets/images/bali.jpg";
import singapore from "@/assets/images/singapore.jpg";
import dubai from "@/assets/images/dubai.jpg";
import vietnam from "@/assets/images/vietnam.jpg";
import srilanka from "@/assets/images/srilanka.jpg";


interface Destination {
  name: string;
  code: string;
  properties: number;
  image: string | StaticImageData;
}

const InternationalDestination: React.FC = () => {
  const destinations: Destination[] = [
    {
      name: "Thailand",
      code: "Starting at ₹66400 per person",
      properties: 8188,
      image: thailand,
    },
    {
      name: "Maldives",
      code: "Starting at ₹93400 per person",
      properties: 9288,
      image: maldives,
    },
    {
      name: "Bali",
      code: "Starting at ₹106600 per person",
      properties: 1388,
      image: bali,
    },
    {
      name: "Singapore",
      code: "Starting at ₹59500 per person",
      properties: 2466,
      image: singapore,
    },
    {
      name: "Dubai",
      code: "Starting at ₹79600 per person",
      properties: 3528,
      image: dubai,
    },
    {
      name: "Vietnam",
      code: "Starting at ₹17600 per person",
      properties: 4601,
      image: vietnam,
    },
    {
      name: "Srilanka",
      code: "Starting at ₹59600 per person",
      properties: 5701,
      image: srilanka,
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.destinationsContainer}>
      <h2 className={styles.sectionTitle}>Explore The International Destinations</h2>

      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.navButton} ${styles.left}`}
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.destinationsSlider} ref={sliderRef}>
          {destinations.map((destination, index) => (
            <div key={index} className={styles.destinationCard}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={destination.image}
                  alt={destination.name}
                  className={styles.destinationImage}
                  width={280}
                  height={315}
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cityName}>{destination.name}</h3>
                  <div className={styles.propertiesCount}>
                    {destination.properties.toLocaleString()} Properties →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.right}`}
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default InternationalDestination;