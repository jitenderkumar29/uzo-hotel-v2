"use client"
import { useState } from "react"
import styles from "./RewardsBalance.module.css"
import { Gift, MousePointerClick, Star, FileX2Icon as X2, XIcon as X3 } from "lucide-react"

// interface PointsActivity {
//   date: string
//   activity: string
//   points: number
// }

interface RedeemOption {
  amount: string
  points: number
}

export default function RewardsBalance() {
  const [pointsBalance] = useState(1000)
  const [couponCode] = useState("UZOSTAY")
  const [copied, setCopied] = useState(false)

  // const pointsActivity: PointsActivity[] = [
  //   { date: "4/14/2023", activity: "Skin Quiz", points: 100 },
  //   { date: "4/12/2023", activity: "Points Redeemed", points: -500 },
  //   { date: "4/12/2023", activity: "Testing", points: 500 },
  // ]

  const redeemOptions: RedeemOption[] = [
    { amount: "Hotels", points: 50 },
    { amount: "Flights", points: 50 },
    { amount: "Bus", points: 100 },
    { amount: "Trains", points: 200 },
    { amount: "Holidays", points: 250 },
    { amount: "Cabs", points: 500 },
    { amount: "Activities", points: 200 },
    { amount: "Events", points: 300 },
    { amount: "Cruise", points: 400 },
    { amount: "Movies", points: 100 },
  ]

  const waysToEarn = [
    { icon: <Gift size={24} />, points: 500, label: "Referral" },
    { icon: <MousePointerClick size={24} />, points: 500, label: "Sign Up" },
    { icon: <Star size={24} />, points: 200, label: "Review" },
    { icon: <X2 size={24} />, points: "2x", label: "Double Points Day" },
    { icon: <X3 size={24} />, points: "3x", label: "Triple Points Day" },
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Rewards</h1>

      <div className={styles.rewardsCard}>
        <div className={styles.balanceSection}>
          <div className={styles.pointsBox}>
            <h2 className={styles.pointsValue}>{pointsBalance}</h2>
            <p className={styles.pointsLabel}>POINTS BALANCE</p>
          </div>

          <div className={styles.couponsSection}>
            <h3 className={styles.sectionTitle}>Available Coupons</h3>
            <div className={styles.couponItem}>
              <span className={styles.couponAmount}>$5 off</span>
              <span className={styles.couponCode}>{couponCode}</span>
              <button className={styles.copyButton} onClick={handleCopy} aria-label="Copy coupon code">
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.redeemSection}>
          <h3 className={styles.sectionTitle}>Redeem Points For Rewards</h3>
          <div className={styles.redeemOptions}>
            {redeemOptions.map((option, index) => (
              <div key={index} className={styles.redeemCard}>
                <div className={styles.redeemInfo}>
                  <span className={styles.redeemAmount}>{option.amount}</span>
                  <span className={styles.redeemPoints}>{option.points.toLocaleString()} Points</span>
                </div>
                <button className={styles.redeemButton}>REDEEM</button>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={styles.activitySection}>
          <h3 className={styles.sectionTitle}>Points Activity</h3>
          <div className={styles.activityTable}>
            <div className={styles.tableHeader}>
              <div className={styles.headerDate}>Date</div>
              <div className={styles.headerActivity}>Activity</div>
              <div className={styles.headerPoints}>Points</div>
            </div>
            {pointsActivity.map((activity, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.cellDate}>{activity.date}</div>
                <div className={styles.cellActivity}>{activity.activity}</div>
                <div className={`${styles.cellPoints} ${activity.points > 0 ? styles.positive : styles.negative}`}>
                  {activity.points > 0 ? `+${activity.points}` : activity.points}
                </div>
              </div>
            ))}
          </div>
        </div> */}

      </div>

      <div className={styles.waysToEarnSection}>
        <h2 className={styles.waysToEarnTitle}>Ways to Earn</h2>
        <div className={styles.waysToEarnGrid}>
          {waysToEarn.map((way, index) => (
            <div key={index} className={styles.earnCard}>
              <div className={styles.earnIcon}>{way.icon}</div>
              <div className={styles.earnPoints}>{way.points} Points</div>
              <div className={styles.earnLabel}>{way.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
