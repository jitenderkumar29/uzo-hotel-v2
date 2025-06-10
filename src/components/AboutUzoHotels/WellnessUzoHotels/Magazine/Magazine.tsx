// components/Magazine.tsx
import React from 'react';
import styles from './Magazine.module.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Magazine = () => {
  return (
    <section className={styles.magazineSection}>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <div className={styles.logo}>
            <Image
              src="/icons/logo.png"
              alt="UZO Magazine Logo"
              width={120}
              height={120}
            />
          </div>
          <h1 className={styles.titleDesc}>UZO Hotels Magazine</h1>
          <p className={styles.description}>
            Discover more about wellness practices, architecture, and health discussions through the UZO Hotels experience.
          </p>
          <Link href="/aboutUzoHotels" className={styles.primaryLink}>
            <span>See UZO Magazine</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/wellness3.jpg"
              alt="Man hiking in the mountains"
              layout="fill"
              objectFit="cover"
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageContent}>
              <h2 className={styles.title}>Eight quick and easy ways to fight fatigue and boost your energy</h2>
              <Link href="/aboutUzoHotels" className={styles.readMore}>
                <span>Read More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magazine;