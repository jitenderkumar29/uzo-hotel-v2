'use client';
import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './SpritualDestination.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import rammandir from '@/assets/images/rammandir.jpg';
import goldentemple from '@/assets/images/goldentemple.jpg';
import jagannathtemple from '@/assets/images/jagannathtemple.jpg';
import vishwanathtemple from '@/assets/images/vishwanathtemple.jpg';
import rishikeshtemple from '@/assets/images/rishikeshtemple.jpg';
import bodhgaya from '@/assets/images/bodhgaya.jpg';
import ajmersharifdargah from '@/assets/images/ajmersharifdargah.jpg';
import mathuravrindavan from '@/assets/images/mathuravrindavan.jpg';
import shirdi from '@/assets/images/shirdi.jpg';

type Destination = {
  name: string;
  code: string;
  properties: number;
  image: string | StaticImageData;
};

const destinations: Destination[] = [
  { name: "Ayodhya", code: "Ram Mandir", properties: 8188, image: rammandir },
  { name: "Amritsar", code: "Golden Temple", properties: 9288, image: goldentemple },
  { name: "Puri", code: "Jagannath Temple", properties: 1388, image: jagannathtemple },
  { name: "Varanasi", code: "Kashi Vishwanath Temple", properties: 2466, image: vishwanathtemple },
  { name: "Rishikesh", code: "Rishikesh Temple", properties: 3528, image: rishikeshtemple },
  { name: "Bodh Gaya", code: "Mahabodhi Temple", properties: 4601, image: bodhgaya },
  { name: "Ajmer", code: "Ajmer Sharif Dargah", properties: 5701, image: ajmersharifdargah },
  { name: "Mathura and Vrindavan", code: "Prem Temple", properties: 501, image: mathuravrindavan },
  { name: "Shirdi", code: "Shirdi Mandir", properties: 1187, image: shirdi },
];

const SpritualDestination = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    sliderRef.current?.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className={styles.container} aria-labelledby="spiritual-destinations-title">
      <h2 id="spiritual-destinations-title" className={styles.title}>
        Explore The Spiritual Destinations in India
      </h2>

      <div className={styles.sliderWrapper}>
        <button className={`${styles.navButton} ${styles.left}`} onClick={() => scroll(-300)} aria-label="Scroll left">
          <FaChevronLeft />
        </button>

        <div className={styles.slider} ref={sliderRef}>
          {destinations.map((dest, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  className={styles.image}
                  placeholder="blur"
                  quality={80}
                  fill
                  sizes="(max-width: 768px) 85vw, 280px"
                />
                <div className={styles.overlay}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cityName}>{dest.name}</h3>
                  <p className={styles.cityCode}>{dest.code}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.navButton} ${styles.right}`} onClick={() => scroll(300)} aria-label="Scroll right">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SpritualDestination;
