"use client"
import React from "react";
import styles from "./AddOns2.module.css";
import Image from "next/image";
import addOns2Image from "@/assets/images/addOns4.jpg";

const AddOns2 = () => {
  return (
    <section className={styles.slider} aria-label="Hotel booking promotion">
      <div className={styles.imageContainer}>
        <Image
          src={addOns2Image}
          alt="Hotel booking background"
          priority
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1270px"
          fill
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          <span>Book hotels on</span>
          <span>uzohotels.com</span>
        </h1>

        <div className={styles.offer}>
          Get up to <strong>40%</strong> off*
        </div>

        <div className={styles.codeBox}>
          <span className={styles.codeTitle}>Use code</span>
          <span className={styles.code}>UZOSTAY</span>
        </div>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <i className="fas fa-hotel" aria-hidden="true"></i>
            <span>7 lakh+ hotels</span>
            <span className={styles.divider} aria-hidden="true"></span>
            <i className="fas fa-sync-alt" aria-hidden="true"></i>
            <span>Free cancellation</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AddOns2;