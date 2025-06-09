"use client";
import React, { ReactNode, useState } from "react"
import { Plane, Calendar, X, AlertTriangle, Lock } from "lucide-react"
import { FaChevronRight } from "react-icons/fa"
import Image from "next/image"
import styles from "./UserBooking.module.css"

interface BookingTab {
  id: string
  title: string
  subtitle: string
  icon: ReactNode
}

interface BookingData {
  id: string
  title: string
  date: string
  status: string
  amount: string
  image?: string
}

export default function UserBooking() {
  const [activeTab, setActiveTab] = useState("upcoming")
  // const [searchQuery, setSearchQuery] = useState("")

  const bookingTabs: BookingTab[] = [
    {
      id: "upcoming",
      title: "Upcoming",
      subtitle: "0 Active Trip",
      icon: <Plane className={styles.tabIcon} />,
    },
    {
      id: "cancelled",
      title: "Cancelled",
      subtitle: "Check Status",
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
    {
      id: "refunded",
      title: "Refunded",
      subtitle: "Refund Status",
      icon: <Lock className={styles.tabIcon} />,
    },
  ]

  // Sample data for each tab
  const bookingData: Record<string, BookingData[]> = {
    upcoming: [
      {
        id: "UP12345",
        title: "Weekend Getaway to Mountains",
        date: "15-18 June 2023",
        status: "Confirmed",
        amount: "$450",
        image: "/images/mountain.jpg"
      },
      {
        id: "UP67890",
        title: "Business Conference in NY",
        date: "22-25 June 2023",
        status: "Confirmed",
        amount: "$1200"
      }
    ],
    cancelled: [
      {
        id: "CN12345",
        title: "Beach Vacation Cancelled",
        date: "10-15 May 2023",
        status: "Refund Pending",
        amount: "$780"
      }
    ],
    completed: [
      {
        id: "CP12345",
        title: "European Tour",
        date: "1-15 April 2023",
        status: "Completed",
        amount: "$3500"
      },
      {
        id: "CP67890",
        title: "Family Reunion",
        date: "20-25 March 2023",
        status: "Completed",
        amount: "$1200"
      }
    ],
    unsuccessful: [
      {
        id: "US12345",
        title: "Flight to Tokyo",
        date: "5 May 2023",
        status: "Payment Failed",
        amount: "$950"
      }
    ],
    locked: [
      {
        id: "LK12345",
        title: "Honeymoon Package",
        date: "1-10 July 2023",
        status: "Payment Verification",
        amount: "$2500"
      }
    ],
    refunded: [
      {
        id: "RF12345",
        title: "Holiday Package",
        date: "11-20 July 2024",
        status: "Refunded",
        amount: "$3500"
      }
    ]
  }

  const currentBookings = bookingData[activeTab] || []

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          {/* Tabs Grid */}
          <div className={styles.tabsGrid}>
            {bookingTabs.map((tab) => (
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

          {/* Booking Content */}
          <div className={styles.bookingContent}>
            {currentBookings.length > 0 ? (
              <div className={styles.bookingsList}>
                {currentBookings.map((booking) => (
                  <div key={booking.id} className={styles.bookingCard}>
                    {booking.image && (
                      <div className={styles.bookingImage}>
                        <Image
                          src={booking.image}
                          alt={booking.title}
                          width={200}
                          height={150}
                          className={styles.image}
                        />
                      </div>
                    )}
                    <div className={styles.bookingDetails}>
                      <div className={styles.bookingHeader}>
                        <h3 className={styles.bookingTitle}>{booking.title}</h3>
                        <span className={`${styles.bookingStatus} ${styles[booking.status.toLowerCase().replace(' ', '-')]}`}>
                          {booking.status}
                        </span>
                      </div>
                      <div className={styles.bookingMeta}>
                        <div className={styles.bookingDate}>
                          <Calendar className={styles.metaIcon} />
                          <span>{booking.date}</span>
                        </div>
                        <div className={styles.bookingAmount}>
                          <span>Amount:</span>
                          <span className={styles.amount}>{booking.amount}</span>
                        </div>
                      </div>
                      <div className={styles.bookingActions}>
                        <button className={styles.viewDetailsBtn}>
                          View Details <FaChevronRight className={styles.actionIcon} />
                        </button>
                        {activeTab === 'upcoming' && (
                          <button className={styles.cancelBtn}>
                            Cancel Booking
                          </button>
                        )}
                        {activeTab === 'cancelled' && (
                          <button className={styles.refundBtn}>
                            Track Refund
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noBookingsContainer}>
                <div className={styles.noBookingsContent}>
                  <div className={styles.illustrationWrapper}>
                    <div className={styles.imageOverlayWrapper}>
                      <p className={styles.overlayText}>
                        {activeTab === 'upcoming'
                          ? "You have no upcoming trips booked yet."
                          : activeTab === 'completed'
                            ? "No completed trips found."
                            : `No ${activeTab} bookings found.`}
                      </p>
                    </div>
                  </div>
                  {activeTab === 'upcoming' && (
                    <button className={styles.exploreBtn}>
                      Explore Destinations
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <div className={styles.rightSection}>
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
                <Image src="/icons/qrCode.png" alt="QR Code" className={styles.qrCode} width={150} height={150} />
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}