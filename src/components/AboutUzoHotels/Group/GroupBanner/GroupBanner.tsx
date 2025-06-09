import React from 'react';
import styles from './GroupBanner.module.css';
import Image from 'next/image';

interface GroupBannerProps {
  title: string;
  heading: string;
  authorName: string;
  authorTitle: string;
  imageUrl: string;
  imageAlt?: string;
}

const GroupBanner: React.FC<GroupBannerProps> = ({
  title,
  heading,
  authorName,
  authorTitle,
  imageUrl,
  imageAlt = ''
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.authorName}>{authorName}</p>
          <p className={styles.authorTitle}>{authorTitle}</p>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className={styles.image}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBanner;