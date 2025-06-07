"use client";
import styles from "./CardsCoupons.module.css";
import { Tag } from "lucide-react";

const CardsCoupons = ({ code = "UZOBTJL", savings = 0 }) => {
  return (
    <div className={styles.couponCard}>
      <div className={styles.header}>Your Coupon</div>
      <div className={styles.divider}></div>
      <div className={styles.detailsRow}>
        <div className={styles.codeSection}>
          <Tag size={16} className={styles.icon} />
          <span className={styles.label}>Coupon Code :</span>
          <span className={styles.code}>{code}</span>
        </div>
        <div className={styles.savingsSection}>
          Total Savings : <span className={styles.savings}>₹ {savings}</span>
        </div>
      </div>
    </div>
  );
};

export default CardsCoupons;
