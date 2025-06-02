'use client';
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import styles from "./ExclusiveJourneys.module.css"

export default function ExclusiveJourneys() {
  return (
    <section className={styles.carousel}>
      <div className={styles.container}>
        <div className={styles.slide}>
          <div className={styles.slideImage}>
            <Image
              src="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="The Luminaire - Mountain landscape with golden sunset"
              fill
              className={styles.image}
              priority
            />
            <div className={styles.imageOverlay}>
              <div className={styles.brandingTop}>THE LUMINAIRE</div>
              {/* <div className={styles.fanIcon}>
                <svg viewBox="0 0 100 60" className={styles.fan}>
                  <path d="M50 60 L10 10 Q50 0 90 10 Z" fill="white" />
                  <path d="M50 60 L15 15 Q50 5 85 15 Z" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M50 60 L20 20 Q50 10 80 20 Z" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M50 60 L25 25 Q50 15 75 25 Z" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M50 60 L30 30 Q50 20 70 30 Z" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M50 60 L35 35 Q50 25 65 35 Z" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M50 60 L40 40 Q50 30 60 40 Z" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
              </div> */}
              <div className={styles.brandingBottom}>
                <div className={styles.brandLine}></div>
                <div className={styles.brandText}>UZO HOTELS</div>
                <div className={styles.brandSubtext}>THE HOTEL GROUP</div>
              </div>
            </div>
          </div>

          <div className={styles.slideContent}>
            <div className={styles.contentWrapper}>
              <div className={styles.slideTitle}>EXCLUSIVE JOURNEYS</div>

              <div className={styles.slideDescription}>
                Experience the world through a new lens with The Luminaire, our luxury travel partner, curating
                expert-led, multi-day journeys exclusively for Mandarin Oriental guests. Offering immersive cultural
                explorations with behind-the-scenes access and renowned specialists, each journey is crafted to inspire,
                enrich, and indulge your curiosity—ensuring an unforgettable adventure in the world&apos;s most extraordinary
                destinations.
              </div>

              <div className={styles.slideUtility}>
                <button className={styles.slideCta}>
                  See The Journeys
                  <ArrowRight className={styles.ctaIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
