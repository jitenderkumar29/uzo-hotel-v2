"use client"
import React from "react";
import styles from "./FooterStates.module.css";

interface StatCardProps {
  value: string;
  description: string;
  highlight?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, description, highlight = false }) => {
  return (
    <div className={highlight ? `${styles.statCard} ${styles.highlight}` : styles.statCard}>
      <h2>{value}</h2>
      <p>{description}</p>
    </div>
  );
};

const FooterStates: React.FC = () => {
  const statsData = [
    {
      value: "74,000+",
      description: "Luxury\nHotels",
      highlight: true
    },
    {
      value: "70+",
      description: "Domestic\nDestinations"
    },
    {
      value: "20+",
      description: "International\nDestinations"
    },
    {
      value: "400 Mn+",
      description: "Happy\nCustomers"
    },
    {
      value: "300+",
      description: "Corporate\nBranch Offices"
    }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.statsWrapper}>
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              description={stat.description}
              highlight={stat.highlight}
            />
          ))}
        </div>
      </div>
      <div className={styles.overlapWithFooter} aria-hidden="true"></div>
    </section>
  );
};

export default FooterStates;