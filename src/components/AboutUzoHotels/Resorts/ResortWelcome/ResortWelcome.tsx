// components/ResortWelcome/ResortWelcome.tsx
'use client';
import React from 'react';
import styles from './ResortWelcome.module.css';
import { FaConciergeBell, FaCar, FaTools, FaBroom, FaShieldAlt, FaHome } from 'react-icons/fa';

const ResortWelcome = () => {
  return (
    <section className={styles.teaserLink}>
      <div className={styles.teaserLinkWrapper}>
        <div className={styles.teaserLinkImage}>
          <picture className={styles.imageWrapper}>
            <source
              media="(min-width: 1024px)"
              srcSet="https://images.pexels.com/photos/5764899/pexels-photo-5764899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            {/* <source
              media="(min-width: 768px)"
              srcSet="https://photos.mandarinoriental.com/is/image/MandarinOriental/residences-grand-cayman-outdoor-dining?width=1024&wid=1024&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0"
            />
            <source
              media="(min-width: 0px)"
              srcSet="https://photos.mandarinoriental.com/is/image/MandarinOriental/residences-grand-cayman-outdoor-dining?width=768&wid=768&fmt=jpeg&op_usm=1,1,5,0&resMode=sharp2&fit=crop&qlt=75,0"
            /> */}
            <img
              src="https://images.pexels.com/photos/5764899/pexels-photo-5764899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mandarin Oriental Residences"
              className={styles.image}
            />
          </picture>
        </div>

        <div className={styles.teaserLinkContent}>
          <div className={styles.teaserLinkDescription}>
            <h1 className={styles.title}>
              AT THE RESIDENCES AT UZO Hotels, WE KNOW THE IMPORTANCE OF HOME AND THE EASE OF DAILY LIFE THAT COMES WITH IT.
            </h1>

            <p className={styles.description}>
              Our owners enjoy exclusive access to a dedicated team of full-time UZO Hotels trained residential staff including:
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <FaConciergeBell className={styles.serviceIcon} />
                <span>24-Hour Concierge</span>
              </div>
              <div className={styles.serviceItem}>
                <FaCar className={styles.serviceIcon} />
                <span>Valet</span>
              </div>
              <div className={styles.serviceItem}>
                <FaTools className={styles.serviceIcon} />
                <span>Maintenance</span>
              </div>
              <div className={styles.serviceItem}>
                <FaBroom className={styles.serviceIcon} />
                <span>Housekeeping</span>
              </div>
              <div className={styles.serviceItem}>
                <FaShieldAlt className={styles.serviceIcon} />
                <span>Security</span>
              </div>
            </div>

            <p className={styles.description}>
              From in-residence dining by award-winning chefs to lock up and leave capabilities, the residences offer a wide range of unrivalled services to complement your lifestyle.
            </p>

            <div className={styles.welcomeHome}>
              <FaHome className={styles.homeIcon} />
              <em>WELCOME HOME.</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResortWelcome;