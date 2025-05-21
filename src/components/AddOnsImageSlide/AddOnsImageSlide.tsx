import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AddOnsImageSlide.module.css';
import addOnsImageSlide1 from "@/assets/images/addOnsImageSlide1.jpg";
import addOnsImageSlide2 from "@/assets/images/addOnsImageSlide2.jpg";
import addOnsImageSlide3 from "@/assets/images/addOnsImageSlide3.jpg";
import addOnsImageSlide4 from "@/assets/images/addOnsImageSlide4.jpg";

const AddOnsImageSlide = () => {
  const [hoveredSection,] = useState<number | null>(null);
  const [sectionId, setSectionId] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      title: 'TIMELESS',
      hoverText: 'Embrace a timeless elegance that embodies sophistication and an unwavering commitment to refined excellence.'
    },
    {
      id: 2,
      title: 'ICONIC',
      hoverText: 'Indulge in enduring distinction, extraordinary experiences and a legacy of unparalleled hospitality.'
    },
    {
      id: 3,
      title: 'AUTHENTIC',
      hoverText: 'Dive into a legacy of impeccable service where true refinement unfolds in every moment of your stay.'
    },
    {
      id: 4,
      title: 'SOULFUL',
      hoverText: 'Cultivate cherished memories and embrace a distinctive sense of belonging through personalised, immersive experiences.'
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.divider}></div>
          {/* <h1 className={styles.title}>------ Global Icon of Indian Hospitality -------</h1> */}
          <h1 className={styles.title}>
            <span className={styles.titleText}>Global Icon of Indian Hospitality</span>
          </h1>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Enter a realm of storied halls, sophisticated delights and unrivalled indulgence.
            Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.
          </p>
        </div>

        <div className={styles.imageContainer}>
          {/* Base Image */}

          {sectionId === 1 && (
            <div className={styles.image}>
              <Image
                src={addOnsImageSlide1}
                alt="Indian Hospitality"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          {sectionId === 2 && (
            <div className={styles.image}>
              <Image
                src={addOnsImageSlide2}
                alt="Indian Hospitality"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          {sectionId === 3 && (
            <div className={styles.image}>
              <Image
                src={addOnsImageSlide3}
                alt="Indian Hospitality"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          {sectionId === 4 && (
            <div className={styles.image}>
              <Image
                src={addOnsImageSlide4}
                alt="Indian Hospitality"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}

          {/* Hover Image - Only shown when a section is hovered */}
          {/* {hoveredSection !== null && (
          <div className={styles.hoverImage}>
            <Image
              src={addOnsImageSlide2}
              alt="Indian Hospitality Hover"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )} */}

          {/* Interactive sections */}
          <div className={styles.imageSections}>
            {sections.map((section, index) => (
              <div
                key={index}
                className={styles.imageSection}
                onMouseEnter={() => {
                  setSectionId(section.id);
                  // console.log("section.id", section.id) 
                }}
              // onMouseLeave={() => setHoveredSection(1)}
              // onMouseEnter={() => setHoveredSection(index)}
              // onMouseLeave={() => setHoveredSection(null)}
              >
                <div className={`${styles.sectionContent} ${hoveredSection === index ? styles.hidden : ''}`}>
                  <h3>{section.title}</h3>
                </div>
                <div className={`${styles.sectionHoverContent} ${hoveredSection === index ? '' : styles.hidden}`}>
                  <h3>{section.title}</h3>
                  <p>{section.hoverText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOnsImageSlide;