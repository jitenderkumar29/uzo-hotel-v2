'use client';
import React from 'react';
import styles from './VisionChoice.module.css';
import Image from 'next/image';

const VisionChoice = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

          <div className={styles.content}>
            <h2 className={styles.title}>UZO Hotels Group, your first choice</h2>
            <p className={styles.description}>
              Our long-term vision is to be the company of choice for guests, owners and talent. Whenever a guest plans a trip, or an investor or owner is thinking of a partner, or whenever someone is looking for a career in the hospitality industry, they will all think of UZO Hotels Group first.
            </p>
            <h2 className={styles.title}>Our way of being</h2>
            <p className={styles.description}>
              We want to be a leading group in the hotel industry always complying with our values and beliefs
            </p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/12944685/pexels-photo-12944685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Radisson Collection Royal Copenhagen Room"
              width={670}
              height={384}
              className={styles.image}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionChoice;