import React from 'react';
import styles from './Group.module.css';
import Image from 'next/image';
import HeaderAboutUzo from '@/components/Headers/HeaderAboutUzo/HeaderAboutUzo';
import GroupBanner from './GroupBanner/GroupBanner';
import FooterUzo from '@/components/FooterUzo/FooterUzo';

const Group = () => {
  return (
    <>
      <div className={styles.aboutUzoHotels}>
        <div className={styles.headerTopBody}>
          <HeaderAboutUzo />
          {/* <HeaderTransparent /> */}
          {/* <HeaderTop /> */}
        </div>
        <section className={styles.groupContainer}>
          <div className={styles.imageOverlay}>
            <Image
              src="https://images.pexels.com/photos/31090084/pexels-photo-31090084/free-photo-of-aerial-view-of-marmaris-beachfront-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Group"
              fill
              className={styles.groupImage}
              priority
            />
            <div className={styles.contentOverlay}>
              <div className={styles.textBlock}>
                <h1 className={styles.title}>Group</h1>
                <h2 className={styles.subtitle}>
                  We are far more than a worldwide leader. We are more than 360,000 Talents placing people at the heart of what we do, and nurturing real passion for service and achievement beyond limits.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <GroupBanner
          title="Welcome From Our Chairman & CEO"
          heading="At UZO Hotels, we anticipate opportunities, and constantly innovate, adapt, and pioneer to bring to life our vision of responsible hospitality."
          authorName="Sébastien Bazin"
          authorTitle="Chairman & CEO of UZO Hotels"
          imageUrl="/images/CEOprofile.jpg"
          imageAlt="Sébastien Bazin, Chairman & CEO of UZO Hotels"
        />
        {/* <GroupSlide /> */}
        <div className={styles.footerBox}>
          <FooterUzo />
        </div>
      </div>
    </>
  );
};

export default Group;