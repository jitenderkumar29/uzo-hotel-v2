"use client";
import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import styles from "./SettingsUser.module.css"

interface NotificationSettings {
  newsletter: boolean
  updates: boolean
  whatsapp: boolean
  pushNotifications: boolean
}

interface FareAlert {
  id: string
  origin: string
  destination: string
  date: string
  priceFrom: number
  priceTo: number
}

export default function SettingsUser() {
  const [isNotificationsExpanded, setIsNotificationsExpanded] = useState(true)
  const [showFareAlertForm, setShowFareAlertForm] = useState(true)
  const [notifications, setNotifications] = useState<NotificationSettings>({
    newsletter: true,
    updates: false,
    whatsapp: false,
    pushNotifications: false,
  })
  const [fareAlerts, setFareAlerts] = useState<FareAlert[]>([])
  const [fareAlertForm, setFareAlertForm] = useState({
    origin: "",
    destination: "",
    date: "",
    priceFrom: "",
    priceTo: "",
  })

  const toggleNotification = (key: keyof NotificationSettings) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleFareAlertSubmit = () => {
    if (fareAlertForm.origin && fareAlertForm.destination && fareAlertForm.date) {
      const newAlert: FareAlert = {
        id: Date.now().toString(),
        origin: fareAlertForm.origin,
        destination: fareAlertForm.destination,
        date: fareAlertForm.date,
        priceFrom: Number(fareAlertForm.priceFrom) || 0,
        priceTo: Number(fareAlertForm.priceTo) || 0,
      }
      setFareAlerts((prev) => [...prev, newAlert])
      setFareAlertForm({
        origin: "",
        destination: "",
        date: "",
        priceFrom: "",
        priceTo: "",
      })
      setShowFareAlertForm(false)
    }
  }

  const cancelFareAlert = () => {
    setFareAlertForm({
      origin: "",
      destination: "",
      date: "",
      priceFrom: "",
      priceTo: "",
    })
    setShowFareAlertForm(false)
  }

  return (
    <div className={styles.settingsContainer}>
      {/* Notifications Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader} onClick={() => setIsNotificationsExpanded(!isNotificationsExpanded)}>
          <h2 className={styles.sectionTitle}>Notifications</h2>
          {isNotificationsExpanded ? (
            <ChevronUp className={styles.chevron} />
          ) : (
            <ChevronDown className={styles.chevron} />
          )}
        </div>

        {isNotificationsExpanded && (
          <div className={styles.notificationsList}>
            <div className={styles.notificationItem}>
              <div className={styles.notificationContent}>
                <h3 className={styles.notificationTitle}>Tips, offers and Newsletter</h3>
                <p className={styles.notificationDescription}>
                  Inspire your next trip with personalised recommendations, news & special offers.
                </p>
              </div>
              <div className={styles.toggleContainer}>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={notifications.newsletter}
                    onChange={() => toggleNotification("newsletter")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.notificationItem}>
              <div className={styles.notificationContent}>
                <h3 className={styles.notificationTitle}>UZO Hotels updates and Latest News</h3>
                <p className={styles.notificationDescription}>Stay up to date on the latest news from UZO Hotels</p>
              </div>
              <div className={styles.toggleContainer}>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={notifications.updates}
                    onChange={() => toggleNotification("updates")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.notificationItem}>
              <div className={styles.notificationContent}>
                <h3 className={styles.notificationTitle}>WhatsApp Notification</h3>
                <p className={styles.notificationDescription}>Stay up to date on the latest news from UZO Hotels</p>
              </div>
              <div className={styles.toggleContainer}>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={notifications.whatsapp}
                    onChange={() => toggleNotification("whatsapp")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.notificationItem}>
              <div className={styles.notificationContent}>
                <h3 className={styles.notificationTitle}>Push Notifications</h3>
                <p className={styles.notificationDescription}>Stay up to date on the latest news from UZO Hotels</p>
              </div>
              <div className={styles.toggleContainer}>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={notifications.pushNotifications}
                    onChange={() => toggleNotification("pushNotifications")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fare Alert Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Fare Alert</h2>
          <button className={styles.addButton} onClick={() => setShowFareAlertForm(true)}>
            Add New Alert
          </button>
        </div>

        {showFareAlertForm && (
          <div className={styles.fareAlertForm}>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Choose Origin</label>
                <input
                  type="text"
                  className={styles.fieldInput}
                  placeholder="Choose Origin"
                  value={fareAlertForm.origin}
                  onChange={(e) => setFareAlertForm((prev) => ({ ...prev, origin: e.target.value }))}
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Choose Destination</label>
                <input
                  type="text"
                  className={styles.fieldInput}
                  placeholder="Choose Destination"
                  value={fareAlertForm.destination}
                  onChange={(e) => setFareAlertForm((prev) => ({ ...prev, destination: e.target.value }))}
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Choose Date</label>
                <input
                  type="date"
                  className={styles.fieldInput}
                  value={fareAlertForm.date}
                  onChange={(e) => setFareAlertForm((prev) => ({ ...prev, date: e.target.value }))}
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Price From</label>
                <input
                  type="number"
                  className={styles.fieldInput}
                  placeholder="Enter Price"
                  value={fareAlertForm.priceFrom}
                  onChange={(e) => setFareAlertForm((prev) => ({ ...prev, priceFrom: e.target.value }))}
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Price UpTo</label>
                <input
                  type="number"
                  className={styles.fieldInput}
                  placeholder="Enter Price"
                  value={fareAlertForm.priceTo}
                  onChange={(e) => setFareAlertForm((prev) => ({ ...prev, priceTo: e.target.value }))}
                />
              </div>
            </div>

            <div className={styles.formActions}>
              <button className={styles.submitButton} onClick={handleFareAlertSubmit}>
                Submit
              </button>
              <button className={styles.cancelButton} onClick={cancelFareAlert}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {fareAlerts.length > 0 && (
          <div className={styles.fareAlertsList}>
            {fareAlerts.map((alert) => (
              <div key={alert.id} className={styles.fareAlertItem}>
                <div className={styles.alertRoute}>
                  {alert.origin} → {alert.destination}
                </div>
                <div className={styles.alertDetails}>
                  <span>Date: {alert.date}</span>
                  <span>
                    Price: ₹{alert.priceFrom} - ₹{alert.priceTo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
