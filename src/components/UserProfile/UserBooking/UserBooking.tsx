"use client";
import React, { ReactNode, useState } from "react"
import { Search, Plane, Calendar, X, AlertTriangle, Lock } from "lucide-react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Image from "next/image"
import styles from "./UserBooking.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

interface BookingTab {
  id: string
  title: string
  subtitle: string
  icon: ReactNode
}

export default function UserBooking() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [searchQuery, setSearchQuery] = useState("")
  const [startIndex, setStartIndex] = useState(0)

  const bookingTabs: BookingTab[] = [
    {
      id: "upcoming",
      title: "Upcoming",
      subtitle: "0 Active Trip",
      icon: <Plane className={styles.tabIcon} />,
    },
    {
      id: "cancelled",
      title: "Cancelled/Refunded",
      subtitle: "Check/Refund Status",
      icon: <X className={styles.tabIcon} />,
    },
    {
      id: "completed",
      title: "Completed",
      subtitle: "Check Previous Trips",
      icon: <Calendar className={styles.tabIcon} />,
    },
    {
      id: "unsuccessful",
      title: "Unsuccessful",
      subtitle: "Check Pending Trips",
      icon: <AlertTriangle className={styles.tabIcon} />,
    },
    {
      id: "locked",
      title: "Locked",
      subtitle: "Check Locked Trips",
      icon: <Lock className={styles.tabIcon} />,
    },
  ]

  const visibleTabs = bookingTabs.slice(startIndex, startIndex + 3)

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1)
  }

  const handleNext = () => {
    if (startIndex + 3 < bookingTabs.length) setStartIndex(startIndex + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles.tabsContainer}>
            <div className={styles.carouselWrapper}>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={handlePrev}
                disabled={startIndex === 0}
              >
                <FaChevronLeft />
              </button>
              <div className={styles.tabsWrapper}>
                {visibleTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className={styles.tabIconWrapper}>{tab.icon}</div>
                    <div className={styles.tabContent}>
                      <div className={styles.tabTitle}>{tab.title}</div>
                      <div className={styles.tabSubtitle}>{tab.subtitle}</div>
                    </div>
                  </button>
                ))}
              </div>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={handleNext}
                disabled={startIndex + 3 >= bookingTabs.length}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className={styles.noBookingsContainer}>
            <div className={styles.noBookingsContent}>
              <div className={styles.illustrationWrapper}>
                <div className={styles.imageOverlayWrapper}>
                  <Image
                    src="/images/paginationThree1.jpg"
                    alt="No bookings illustration"
                    width={1536}
                    height={1536}
                    className={styles.illustration}
                  />
                  <p className={styles.overlayText}>Currently You Have No Bookings.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.rightSection}>
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Search Bookings</h3>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Enter Booking ID"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} />
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <div className={styles.walletContainer}>
              <div className={styles.walletHeader}>
                <div className={styles.walletTitle}>Wallet</div>
                <div className={styles.walletAmount}>
                  <span className={styles.cashLabel}>Cash</span>
                  <span className={styles.amount}>0</span>
                </div>
              </div>
              <div className={styles.walletSubtitle}>Account Balance</div>
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <div className={styles.travelAppContainer}>
              <div className={styles.travelAppContent}>
                <div className={styles.travelAppHeader}>
                  <span className={styles.travelAppTitle}>Your Handy Travel App</span>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} />
                  {/* <span className={styles.arrow}>→</span> */}
                </div>
                <div className={styles.featuresList}>
                  <div className={styles.feature}>
                    <Plane className={styles.featureIcon} />
                    <span>Book tickets in few clicks.</span>
                  </div>
                  <div className={styles.feature}>
                    <Calendar className={styles.featureIcon} />
                    <span>Access Live Journey Update.</span>
                  </div>
                </div>
              </div>
              <div className={styles.qrCodeContainer}>
                {/* <QrCode className={styles.qrCode} /> */}
                <Image src="/icons/qrCode.png" alt="QR Code" className={styles.qrCode} width={150} height={150} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
