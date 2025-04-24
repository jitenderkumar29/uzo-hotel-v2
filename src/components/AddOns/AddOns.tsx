"use client";
import React from "react";
import Image from "next/image";
import styles from "./AddOns.module.css";
import addOnsImage from "@/assets/images/heroGallaryCard2.jpg";

interface AddOnItem {
  title: string;
  price: string;
  description: string;
}

const AddOns: React.FC = () => {
  const addonList: AddOnItem[] = [
    {
      title: "Discount On Booking",
      price: "₹899",
      description: "Members Rate",
    },
    {
      title: "Earn Free Nights and Free Breakfast",
      price: "₹1515",
      description: "Get Free Voucher",
    },
    {
      title: "Faster Check-In Check-Out",
      price: "₹150",
      description: "Priority Check-Out & Get Bill On Your Email and Whatsapp",
    },
  ];

  return (
    <section className={styles.addOnsContainer} aria-labelledby="addons-heading">
      {/* Banner with optimized Image component */}
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerOverlayContainer}>
          <Image
            src={addOnsImage}
            alt="Special offers for Indigo members"
            className={styles.bannerImage}
            fill
            priority
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1300px"
          />
          <div className={styles.overlayContent}>
            <div className={styles.addonsHeader2}>
              <span className={styles.addonsHeader2span}>
                Add more add-Ons{" "}
              </span>{" "}
              <br />
              <span>Join Our Loyalty Journey</span>
            </div>
            <div className={styles.addonsHeaderMember}>
              <span>Become a Member</span>
              <br />
              <button
                type="button"
                className={styles.addOns2Button}
                aria-label="Join Indigo loyalty program"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cardsContainer}>
        <h2 id="addons-heading" className="sr-only">
          Available Add-Ons
        </h2>
        <div className={styles.addonsGrid} role="list">
          {addonList.map((addon, index) => (
            <div
              key={`addon-${index}`}
              className={styles.addonCard}
              role="listitem"
            >
              <div>
                <h3 className={styles.addonTitle}>{addon.title}</h3>
              </div>
              <div className={styles.addonDescription}>
                <span className={styles.highlight}>{addon.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;