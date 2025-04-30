import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AddOnsImageSlide.module.css';
import addOnsImageSlide1 from "@/assets/images/hero111.jpg";
import addOnsImageSlide2 from "@/assets/images/hero111.jpg";


const AddOnsImageSlide = () => {
  const [isHovering, setIsHovering] = useState(false);

  const sections = [
    {
      title: 'TIMELESS',
      hoverText: 'Embrace a timeless elegance that embodies sophistication and an unwavering commitment to refined excellence.'
    },
    {
      title: 'ICONIC',
      hoverText: 'Indulge in enduring distinction, extraordinary experiences and a legacy of unparalleled hospitality.'
    },
    {
      title: 'AUTHENTIC',
      hoverText: 'Dive into a legacy of impeccable service where true refinement unfolds in every moment of your stay.'
    },
    {
      title: 'SOULFUL',
      hoverText: 'Cultivate cherished memories and embrace a distinctive sense of belonging through personalised, immersive experiences.'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.divider}></div>
        <h1 className={styles.title}>Global Icon of Indian Hospitality</h1>
        <div className={styles.divider}></div>
        <p className={styles.description}>
          Enter a realm of storied halls, sophisticated delights and unrivalled indulgence.
          Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.
        </p>
      </div>

      <div
        className={styles.imageContainer}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Main full-width image */}
        <div className={`${styles.image} ${isHovering ? styles.hidden : ''}`}>
          <Image
            src={addOnsImageSlide1}
            alt="Indian Hospitality"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Hover full-width image */}
        <div className={`${styles.image} ${!isHovering ? styles.hidden : ''}`}>
          <Image
            src={addOnsImageSlide2}
            alt="Indian Hospitality Hover"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Interactive sections */}
        <div className={styles.imageSections}>
          {sections.map((section, index) => (
            <div key={index} className={styles.imageSection}>
              <div className={styles.sectionContent}>
                <h3>{section.title}</h3>
              </div>
              <div className={styles.sectionHoverContent}>
                <h3>{section.title}</h3>
                <p>{section.hoverText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOnsImageSlide;