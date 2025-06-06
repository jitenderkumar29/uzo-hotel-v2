import React, { useState } from 'react'
import styles from "./UserProfile.module.css"
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Globe,
  Plane,
  Building,
  Bus,
  Car,
  Train,
  Palmtree,
  Plus,
  Check,
} from "lucide-react"
const Account = () => {
  const [activeSection, setActiveSection] = useState<string>("general");
  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? "" : section);
  };
  return (
    <div className={styles.rightPanel}>
      {/* Stats Cards */}
      <div className={styles.statsContainer}>
        <div className={styles.statsCard}>
          <div className={styles.statsNumber}>0</div>
          <div className={styles.statsLabel}>
            Cities
            <br />
            Visited
          </div>
          <MapPin className={styles.statsIcon} />
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsNumber}>0</div>
          <div className={styles.statsLabel}>
            Countries
            <br />
            Visited
          </div>
          <Globe className={styles.statsIcon} />
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsNumber}>0</div>
          <div className={styles.statsLabel}>
            Flight
            <br />
            Bookings
          </div>
          <Plane className={styles.statsIcon} />
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsNumber}>0</div>
          <div className={styles.statsLabel}>
            Hotel
            <br />
            Bookings
          </div>
          <Building className={styles.statsIcon} />
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsNumber}>0</div>
          <div className={styles.statsLabel}>
            Bus
            <br />
            Bookings
          </div>
          <Bus className={styles.statsIcon} />
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsNumber}>0</div>
          <div className={styles.statsLabel}>
            Cab
            <br />
            Bookings
          </div>
          <Car className={styles.statsIcon} />
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsNumber}>0</div>
          <div className={styles.statsLabel}>
            Train
            <br />
            Bookings
          </div>
          <Train className={styles.statsIcon} />
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsNumber}>0</div>
          <div className={styles.statsLabel}>
            Holidays
            <br />
            Bookings
          </div>
          <Palmtree className={styles.statsIcon} />
        </div>
      </div>

      {/* Form Sections */}
      <div className={styles.formSections}>
        {/* General Details */}
        <div className={styles.formSection}>
          <div className={styles.sectionHeader} onClick={() => toggleSection("general")}>
            <h2 className={styles.sectionTitle}>General Details</h2>
            {activeSection === "general" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {activeSection === "general" && (
            <div className={styles.sectionContent}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Passenger Type <span className={styles.required}>*</span>
                  </label>
                  <select className={styles.formSelect}>
                    <option value="">Select</option>
                    <option value="adult">Adult</option>
                    <option value="child">Child</option>
                    <option value="infant">Infant</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input type="text" placeholder="First Name" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input type="text" placeholder="Last Name" className={styles.formInput} />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Date of Birth <span className={styles.required}>*</span>
                  </label>
                  <input type="date" className={styles.formInput} />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Address</label>
                  <input type="text" placeholder="Address" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>City</label>
                  <input type="text" placeholder="City" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>State</label>
                  <input type="text" placeholder="State" className={styles.formInput} />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>PinCode</label>
                  <input type="text" placeholder="Pincode" className={styles.formInput} maxLength={6} />
                </div>
              </div>

              <div className={styles.formActions}>
                <button className={styles.updateButton}>Update</button>
              </div>
            </div>
          )}
        </div>

        {/* Contact Details */}
        <div className={styles.formSection}>
          <div className={styles.sectionHeader} onClick={() => toggleSection("contact")}>
            <h2 className={styles.sectionTitle}>Contact Details</h2>
            {activeSection === "contact" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {activeSection === "contact" && (
            <div className={styles.sectionContent}>
              <div className={styles.contactRow}>
                <div className={styles.contactColumn}>
                  <div className={styles.contactHeader}>
                    <h3 className={styles.contactTitle}>Email Id</h3>
                    <button className={styles.addButton}>
                      <Plus size={16} /> Add
                    </button>
                  </div>
                </div>

                <div className={styles.contactColumn}>
                  <div className={styles.contactHeader}>
                    <h3 className={styles.contactTitle}>Mobile No</h3>
                    <button className={styles.addButton}>
                      <Plus size={16} /> Add
                    </button>
                  </div>
                  <div className={styles.verifiedContact}>
                    <span>7042341856</span>
                    <span className={styles.verifiedBadge}>
                      <Check size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Passport Details */}
        <div className={styles.formSection}>
          <div className={styles.sectionHeader} onClick={() => toggleSection("passport")}>
            <h2 className={styles.sectionTitle}>Passport Details</h2>
            {activeSection === "passport" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {activeSection === "passport" && (
            <div className={styles.sectionContent}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Passport Number <span className={styles.required}>*</span>
                  </label>
                  <input type="text" placeholder="Passport Number" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Passport Expiry Date <span className={styles.required}>*</span>
                  </label>
                  <input type="date" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Upload Passport Copy</label>
                  <div className={styles.fileUpload}>
                    <button className={styles.fileButton}>
                      Choose File
                    </button>
                    <input type="file" className={styles.fileInput} />
                  </div>
                </div>
              </div>

              <div className={styles.formActions}>
                <button className={styles.updateButton}>Update</button>
              </div>
            </div>
          )}
        </div>

        {/* Visa Details */}
        <div className={styles.formSection}>
          <div className={styles.sectionHeader} onClick={() => toggleSection("visa")}>
            <h2 className={styles.sectionTitle}>Visa Details</h2>
            {activeSection === "visa" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {activeSection === "visa" && (
            <div className={styles.sectionContent}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Visa Number <span className={styles.required}>*</span>
                  </label>
                  <input type="text" placeholder="Visa Number" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Visa Expiry Date <span className={styles.required}>*</span>
                  </label>
                  <input type="date" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Upload Visa Copy</label>
                  <div className={styles.fileUpload}>
                    <button className={styles.fileButton}>
                      Choose File
                    </button>
                    <input type="file" className={styles.fileInput} />
                  </div>
                </div>
              </div>

              <div className={styles.formActions}>
                <button className={styles.updateButton}>Update</button>
              </div>
            </div>
          )}
        </div>

        {/* Frequent Flyer Detail */}
        <div className={styles.formSection}>
          <div className={styles.sectionHeader} onClick={() => toggleSection("frequentFlyer")}>
            <h2 className={styles.sectionTitle}>Frequent Flyer Detail</h2>
            {activeSection === "frequentFlyer" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {activeSection === "frequentFlyer" && (
            <div className={styles.sectionContent}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Airline Name</label>
                  <select className={styles.formSelect}>
                    <option value="">Select Airline</option>
                    <option value="air_india">Air India</option>
                    <option value="indigo">IndiGo</option>
                    <option value="emirates">Emirates</option>
                    <option value="lufthansa">Lufthansa</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Frequent Flyer No</label>
                  <input type="text" placeholder="Frequent Flyer No" className={styles.formInput} />
                </div>
              </div>

              <div className={styles.formActions}>
                <button className={styles.updateButton}>Submit</button>
              </div>
            </div>
          )}
        </div>

        {/* Covid-19 Vaccination Certificates */}
        <div className={styles.formSection}>
          <div className={styles.sectionHeader} onClick={() => toggleSection("covid")}>
            <h2 className={styles.sectionTitle}>Covid-19 Vaccination Certificates</h2>
            {activeSection === "covid" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {activeSection === "covid" && (
            <div className={styles.sectionContent}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    No of Vaccines <span className={styles.required}>*</span>
                  </label>
                  <input type="number" min="1" max="9" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Last Vaccination Date <span className={styles.required}>*</span>
                  </label>
                  <input type="date" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Vaccination Name <span className={styles.required}>*</span>
                  </label>
                  <input type="text" placeholder="Vaccination Name" className={styles.formInput} />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Upload Certificate</label>
                  <div className={styles.fileUpload}>
                    <button className={styles.fileButton}>
                      Choose File
                    </button>
                    <input type="file" className={styles.fileInput} />
                  </div>
                </div>
              </div>

              <div className={styles.formActions}>
                <button className={styles.updateButton}>Update</button>
              </div>
            </div>
          )}
        </div>

        {/* IRCTC Profile */}
        <div className={styles.formSection}>
          <div className={styles.sectionHeader} onClick={() => toggleSection("irctc")}>
            <h2 className={styles.sectionTitle}>IRCTC Profile</h2>
            {activeSection === "irctc" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {activeSection === "irctc" && (
            <div className={styles.sectionContent}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>IRCTC User Name</label>
                  <input type="text" placeholder="IRCTC UserId" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Select Prefered Seat</label>
                  <select className={styles.formSelect}>
                    <option value="">Select Berth Preference</option>
                    <option value="lower">Lower</option>
                    <option value="upper">Upper</option>
                    <option value="middle">Middle</option>
                    <option value="side_lower">Side Lower</option>
                    <option value="side_upper">Side Upper</option>
                  </select>
                </div>
              </div>

              <div className={styles.formActions}>
                <button className={styles.updateButton}>Update</button>
              </div>

              <div className={styles.irctcLinks}>
                <button className={styles.irctcLink}>
                  Create IRCTC Account
                </button>
                <button className={styles.irctcLink}>
                  Forgot IRCTC User ID
                </button>
                <button className={styles.irctcLink}>
                  Reset IRCTC Password
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.deactivateAccount}>
          <button className={styles.deactivateButton}>
            De-Activate Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account
