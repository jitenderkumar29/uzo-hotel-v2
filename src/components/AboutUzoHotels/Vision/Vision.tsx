import React from 'react';
import styles from './Vision.module.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Vision = () => {
  return (
    <section className={styles.visionSection}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://images.pexels.com/photos/3931447/pexels-photo-3931447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mandarin Oriental Meeting Setup"
          fill
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>UZO Hotels Group Vision</h2>
        <p className={styles.description}>
          Our goal is to seamlessly blend tradition with innovation — preserving the timeless warmth of genuine hospitality while embracing cutting-edge technology to enhance convenience, personalization, and operational efficiency.
        </p>
        <p className={styles.description}>
          Ultimately, we seek to build a legacy of distinction where every visit leaves our guests inspired, refreshed, and eager to return — not only because of what we offer, but because of how we make them feel: valued, cared for, and at home.
        </p>
        <Link href="/aboutUzoHotels" className={styles.button}>
          See Details <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Vision;