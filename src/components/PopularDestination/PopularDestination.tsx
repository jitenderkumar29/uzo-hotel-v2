"use client";
// components/PopularDestination/PopularDestination.tsx
import React, { useRef } from "react";
import styles from "./PopularDestination.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

// Import images (consider optimizing with next/image and public folder)
import agra from "@/assets/images/agra.jpg";
import shimla from "@/assets/images/shimla.jpg";
import delhiindiagate from "@/assets/images/delhiindiagate.jpg";
import mumbaitaj from "@/assets/images/mumbaitaj.jpg";
import goabeach from "@/assets/images/goabeach.jpg";
import chennai from "@/assets/images/chennai.jpg";
import noidamall from "@/assets/images/noidamall.jpg";
import jaipur from "@/assets/images/jaipur.jpg";
import bangalore from "@/assets/images/bangalore.jpg";

interface Destination {
  name: string;
  code: string;
  properties: number;
  image: string | StaticImageData;
}

const PopularDestination: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const destinations: Destination[] = [
    { name: "Agra", code: "Uttar Pradesh", properties: 488, image: agra },
    { name: "Shimla", code: "Himachal Pradesh", properties: 4588, image: shimla },
    { name: "New Delhi", code: "DELHI", properties: 4688, image: delhiindiagate },
    { name: "Mumbai", code: "Maharashtra", properties: 1766, image: mumbaitaj },
    { name: "Goa", code: "GOA", properties: 4728, image: goabeach },
    { name: "Chennai", code: "Tamil Nadu", properties: 1801, image: chennai },
    { name: "Noida", code: "Uttar Pradesh", properties: 101, image: noidamall },
    { name: "Jaipur", code: "Rajasthan", properties: 501, image: jaipur },
    { name: "Bangalore", code: "Karnataka", properties: 1187, image: bangalore },
  ];

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container} aria-labelledby="popular-destinations-heading">
      <div className={styles.headContainer}>
        <h2 id="popular-destinations-heading" className={styles.title}>
          Popular Indian Destinations
        </h2>
        <div className={styles.buttonContainer}>
          <button className={`${styles.navButtonLeft}`} onClick={() => scroll("left")} aria-label="Scroll Left">
            {/* <button className={`${styles.navButton} ${styles.left}`} onClick={() => scroll("left")} aria-label="Scroll Left"> */}
            <FaChevronLeft />
          </button>
          <button className={`${styles.navButton}`} onClick={() => scroll("right")} aria-label="Scroll Right">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.sliderWrapper}>


        <div className={styles.slider} ref={sliderRef}>
          {destinations.map((destination, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={destination.image}
                  alt={`View of ${destination.name}`}
                  className={styles.image}
                  placeholder="blur"
                  sizes="(max-width: 768px) 85vw, 280px"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.overlay}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cityName}>{destination.name}</h3>
                  {/* <p className={styles.cityCode}>{destination.code}</p> */}
                  <span className={styles.properties}>
                    {destination.properties.toLocaleString()} Properties →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default PopularDestination;
