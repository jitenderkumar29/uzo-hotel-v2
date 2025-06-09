"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building,
  Bus,
  Car,
  MapPin,
  Globe,
  Plane,
  Train,
  Palmtree,
} from "lucide-react";
import { ChevronDown, ChevronUp, Plus, X, Upload } from "lucide-react"
import styles from "./CoTravellers.module.css";

const statsData = [
  {
    id: "cities",
    number: 5,
    label: "Cities\nVisited",
    icon: MapPin,
    imgUrl: "/images/cityBG.jpg"
  },
  {
    id: "countries",
    number: 1,
    label: "Countries\nVisited",
    icon: Globe,
    imgUrl: "/images/countriesBG.jpg"

  },
  {
    id: "flights",
    number: 15,
    label: "Flight\nBookings",
    icon: Plane,
    imgUrl: "/images/flightsBG.jpg"
  },
  {
    id: "hotels",
    number: 10,
    label: "Hotel\nBookings",
    icon: Building,
    imgUrl: "/images/hotelsBG.jpg"
  },
  {
    id: "bus",
    number: 50,
    label: "Bus\nBookings",
    icon: Bus,
    imgUrl: "/images/busBG.jpg"
  },
  {
    id: "cab",
    number: 20,
    label: "Cab\nBookings",
    icon: Car,
    imgUrl: "/images/cabBG.jpg"
  },
  {
    id: "train",
    number: 25,
    label: "Train\nBookings",
    icon: Train,
    imgUrl: "/images/trainBG.jpg"
  },
  {
    id: "holidays",
    number: 30,
    label: "Holidays\nBookings",
    icon: Palmtree,
    imgUrl: "/images/holidaysBG.jpg"
  }
];

interface FormData {
  passengerType: string
  title: string
  firstName: string
  lastName: string
  pinCode: string
  address: string
  city: string
  state: string
  dateOfBirth: string
  maritalStatus: string
  anniversary: string
  email: string
  mobile: string
  passportNumber: string
  passportExpiryDate: string
  passportFile: File | null
  visaNumber: string
  visaExpiryDate: string
  visaFile: File | null
  airlineName: string
  frequentFlyerNo: string
  vaccineCount: string
  lastVaccinationDate: string
  vaccinationName: string
  vaccinationFile: File | null
}

interface SectionState {
  addDetails: boolean
  contactDetails: boolean
  passportDetails: boolean
  visaDetails: boolean
  frequentFlyer: boolean
  covidCertificate: boolean
}


export default function CoTravellers() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [showAddCoPassenger, setShowAddCoPassenger] = useState(true);
  const visibleCards = Array.from({ length: 3 }, (_, i) => {
    const index = (visibleIndex + i) % statsData.length;
    return statsData[index];
  });

  const prevCards = () => {
    setVisibleIndex((prev) =>
      (prev - 1 + statsData.length) % statsData.length
    );
  };

  const nextCards = () => {
    setVisibleIndex((prev) => (prev + 1) % statsData.length);
  };

  const [formData, setFormData] = useState<FormData>({
    passengerType: "",
    title: "",
    firstName: "",
    lastName: "",
    pinCode: "",
    address: "",
    city: "",
    state: "",
    dateOfBirth: "",
    maritalStatus: "",
    anniversary: "",
    email: "",
    mobile: "",
    passportNumber: "",
    passportExpiryDate: "",
    passportFile: null,
    visaNumber: "",
    visaExpiryDate: "",
    visaFile: null,
    airlineName: "",
    frequentFlyerNo: "",
    vaccineCount: "",
    lastVaccinationDate: "",
    vaccinationName: "",
    vaccinationFile: null,
  })

  const [expandedSections, setExpandedSections] = useState<SectionState>({
    addDetails: true,
    contactDetails: true,
    passportDetails: true,
    visaDetails: true,
    frequentFlyer: true,
    covidCertificate: true,
  })

  const [showContactInputs, setShowContactInputs] = useState({
    email: false,
    mobile: false,
  })

  const toggleSection = (section: keyof SectionState) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileChange = (field: keyof FormData, file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }))
  }

  const handleSubmit = (section: string) => {
    console.log(`Submitting ${section}:`, formData)
    // Handle form submission logic here
  }

  const passengerTypes = ["Adult", "Child", "Infant"]
  const titles = ["Mr.", "Mrs.", "MS", "Others"]
  const maritalStatuses = ["Married", "Unmarried"]

  const airlines = [
    "Air India",
    "IndiGo",
    "SpiceJet",
    "Go Air",
    "Vistara",
    "AirAsia",
    "Emirates",
    "Qatar Airways",
    "British Airways",
    "Lufthansa",
  ]

  return (
    <>
      <section className={styles.coTravellersSection}>
        <div className={styles.statsContainerWrapper}>
          {/* <button
          className={`${styles.navButton} ${styles.navButtonLeft}`}
          onClick={prevCards}
        >
          <ChevronLeft size={24} />
        </button> */}
          <button
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={prevCards}
            aria-label="Previous cards"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.statsContainer}>
            {visibleCards.map((card) => {
              const Icon = card.icon;
              return (
                <div className={styles.cardContainer} key={card.id}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={card.imgUrl}
                        alt={card.label}
                        fill
                        className={styles.cardImage}
                      />

                      {/* <Image
                      src={card.imgUrl}
                      alt={card.label}
                      width={2417}
                      height={1500}
                      className={styles.cardImage}
                    /> */}
                    </div>
                    <div className={styles.overlay}>
                      <div className={styles.number}>{card.number}</div>
                      <div className={styles.labelCard}>
                        {card.label.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < card.label.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                      <div className={styles.icon}><Icon size={20} /></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={nextCards}
            aria-label="Next cards"
          >
            <ChevronRight size={24} />
          </button>
          {/* <button
          className={`${styles.navButton} ${styles.navButtonRight}`}
          onClick={nextCards}
        >
          <ChevronRight size={24} />
        </button> */}
        </div>

        <div className={styles.footerSection}>
          <div className={styles.footerText}>Add New Co-Passenger</div>
          <button className={styles.addButton} onClick={() => setShowAddCoPassenger(!showAddCoPassenger)}>Add Co-Passenger</button>
        </div>
      </section>
      <section>
        {showAddCoPassenger && (
          <div className={styles.container}>
            <div className={styles.formWrapper}>
              {/* Add Details Section */}
              <div className={styles.section}>
                <div className={styles.sectionHeader} onClick={() => toggleSection("addDetails")}>
                  <h3 className={styles.sectionTitle}>Add Details</h3>
                  {expandedSections.addDetails ? <ChevronUp /> : <ChevronDown />}
                </div>

                {expandedSections.addDetails && (
                  <div className={styles.sectionContent}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Passenger Type <span className={styles.required}>*</span>
                        </label>
                        <select
                          className={styles.select}
                          value={formData.passengerType}
                          onChange={(e) => handleInputChange("passengerType", e.target.value)}
                        >
                          <option value="">Select</option>
                          {passengerTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {formData.passengerType === "Adult" && (
                        <div className={styles.formGroup}>
                          <label className={styles.label}>
                            Title <span className={styles.required}>*</span>
                          </label>
                          <select
                            className={styles.select}
                            value={formData.title}
                            onChange={(e) => handleInputChange("title", e.target.value)}
                          >
                            <option value="">Select</option>
                            {titles.map((title) => (
                              <option key={title} value={title}>
                                {title}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          First Name <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Last Name</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>PinCode</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="PinCode"
                          maxLength={6}
                          value={formData.pinCode}
                          onChange={(e) => handleInputChange("pinCode", e.target.value.replace(/[^0-9]/g, ""))}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Address</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>City</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>State</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="State"
                          value={formData.state}
                          onChange={(e) => handleInputChange("state", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Date Of Birth <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="date"
                          className={styles.input}
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Marital Status</label>
                        <select
                          className={styles.select}
                          value={formData.maritalStatus}
                          onChange={(e) => handleInputChange("maritalStatus", e.target.value)}
                        >
                          <option value="">Select Marital Status</option>
                          {maritalStatuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </div>

                      {formData.maritalStatus === "Married" && (
                        <div className={styles.formGroup}>
                          <label className={styles.label}>Anniversary</label>
                          <input
                            type="date"
                            className={styles.input}
                            value={formData.anniversary}
                            onChange={(e) => handleInputChange("anniversary", e.target.value)}
                          />
                        </div>
                      )}
                    </div>

                    <div className={styles.buttonGroup}>
                      <button className={styles.submitButton} onClick={() => handleSubmit("addDetails")}>
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Details Section */}
              <div className={styles.section}>
                <div className={styles.sectionHeader} onClick={() => toggleSection("contactDetails")}>
                  <h3 className={styles.sectionTitle}>Contact Details</h3>
                  {expandedSections.contactDetails ? <ChevronUp /> : <ChevronDown />}
                </div>

                {expandedSections.contactDetails && (
                  <div className={styles.sectionContent}>
                    <div className={styles.contactGrid}>
                      <div className={styles.contactItem}>
                        <label className={styles.label}>Email Id</label>
                        <button
                          className={styles.addButton}
                          onClick={() => setShowContactInputs((prev) => ({ ...prev, email: !prev.email }))}
                        >
                          <Plus size={16} /> ADD
                        </button>

                        {showContactInputs.email && (
                          <div className={styles.contactInput}>
                            <input
                              type="email"
                              className={styles.input}
                              placeholder="Add Email Id"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                            />
                            <button className={styles.verifyButton}>Verify</button>
                            <button
                              className={styles.closeButton}
                              onClick={() => setShowContactInputs((prev) => ({ ...prev, email: false }))}
                            >
                              <X size={16} />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className={styles.contactItem}>
                        <label className={styles.label}>Mobile No</label>
                        <button
                          className={styles.addButton}
                          onClick={() => setShowContactInputs((prev) => ({ ...prev, mobile: !prev.mobile }))}
                        >
                          <Plus size={16} /> ADD
                        </button>

                        {showContactInputs.mobile && (
                          <div className={styles.contactInput}>
                            <input
                              type="tel"
                              className={styles.input}
                              placeholder="Add Mobile No"
                              maxLength={11}
                              value={formData.mobile}
                              onChange={(e) => handleInputChange("mobile", e.target.value.replace(/[^0-9]/g, ""))}
                            />
                            <button className={styles.verifyButton}>Verify</button>
                            <button
                              className={styles.closeButton}
                              onClick={() => setShowContactInputs((prev) => ({ ...prev, mobile: false }))}
                            >
                              <X size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Passport Details Section */}
              <div className={styles.section}>
                <div className={styles.sectionHeader} onClick={() => toggleSection("passportDetails")}>
                  <h3 className={styles.sectionTitle}>Passport Details</h3>
                  {expandedSections.passportDetails ? <ChevronUp /> : <ChevronDown />}
                </div>

                {expandedSections.passportDetails && (
                  <div className={styles.sectionContent}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Passport Number <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Passport Number"
                          value={formData.passportNumber}
                          onChange={(e) => handleInputChange("passportNumber", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Passport Expiry Date <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="date"
                          className={styles.input}
                          value={formData.passportExpiryDate}
                          onChange={(e) => handleInputChange("passportExpiryDate", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Upload Passport Copy</label>
                        <div className={styles.fileUpload}>
                          <input
                            type="file"
                            id="passportFile"
                            className={styles.fileInput}
                            onChange={(e) => handleFileChange("passportFile", e.target.files?.[0] || null)}
                          />
                          <label htmlFor="passportFile" className={styles.fileLabel}>
                            <Upload size={16} />
                            Choose File
                          </label>
                          {formData.passportFile && (
                            <span className={styles.fileName}>Selected: {formData.passportFile.name}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.buttonGroup}>
                      <button className={styles.submitButton} onClick={() => handleSubmit("passport")}>
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Visa Details Section */}
              <div className={styles.section}>
                <div className={styles.sectionHeader} onClick={() => toggleSection("visaDetails")}>
                  <h3 className={styles.sectionTitle}>Visa Details</h3>
                  {expandedSections.visaDetails ? <ChevronUp /> : <ChevronDown />}
                </div>

                {expandedSections.visaDetails && (
                  <div className={styles.sectionContent}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Visa Number <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Visa Number"
                          value={formData.visaNumber}
                          onChange={(e) => handleInputChange("visaNumber", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Visa Expiry Date <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="date"
                          className={styles.input}
                          value={formData.visaExpiryDate}
                          onChange={(e) => handleInputChange("visaExpiryDate", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Upload Visa Copy</label>
                        <div className={styles.fileUpload}>
                          <input
                            type="file"
                            id="visaFile"
                            className={styles.fileInput}
                            onChange={(e) => handleFileChange("visaFile", e.target.files?.[0] || null)}
                          />
                          <label htmlFor="visaFile" className={styles.fileLabel}>
                            <Upload size={16} />
                            Choose File
                          </label>
                          {formData.visaFile && <span className={styles.fileName}>Selected: {formData.visaFile.name}</span>}
                        </div>
                      </div>
                    </div>

                    <div className={styles.buttonGroup}>
                      <button className={styles.submitButton} onClick={() => handleSubmit("visa")}>
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Frequent Flyer Section */}
              <div className={styles.section}>
                <div className={styles.sectionHeader} onClick={() => toggleSection("frequentFlyer")}>
                  <h3 className={styles.sectionTitle}>Frequent Flyer Detail</h3>
                  {expandedSections.frequentFlyer ? <ChevronUp /> : <ChevronDown />}
                </div>

                {expandedSections.frequentFlyer && (
                  <div className={styles.sectionContent}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Airline Name</label>
                        <select
                          className={styles.select}
                          value={formData.airlineName}
                          onChange={(e) => handleInputChange("airlineName", e.target.value)}
                        >
                          <option value="">Select Airline</option>
                          {airlines.map((airline) => (
                            <option key={airline} value={airline}>
                              {airline}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Frequent Flyer No</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Frequent Flyer No"
                          value={formData.frequentFlyerNo}
                          onChange={(e) => handleInputChange("frequentFlyerNo", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className={styles.buttonGroup}>
                      <button className={styles.submitButton} onClick={() => handleSubmit("frequentFlyer")}>
                        Submit
                      </button>
                      <button
                        className={styles.cancelButton}
                        onClick={() => {
                          handleInputChange("airlineName", "")
                          handleInputChange("frequentFlyerNo", "")
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* COVID-19 Vaccination Section */}
              <div className={styles.section}>
                <div className={styles.sectionHeader} onClick={() => toggleSection("covidCertificate")}>
                  <h3 className={styles.sectionTitle}>Covid-19 Vaccination Certificates</h3>
                  {expandedSections.covidCertificate ? <ChevronUp /> : <ChevronDown />}
                </div>

                {expandedSections.covidCertificate && (
                  <div className={styles.sectionContent}>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          No of Vaccines <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="number"
                          className={styles.input}
                          min="1"
                          max="9"
                          value={formData.vaccineCount}
                          onChange={(e) => handleInputChange("vaccineCount", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Last Vaccination Date <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="date"
                          className={styles.input}
                          value={formData.lastVaccinationDate}
                          onChange={(e) => handleInputChange("lastVaccinationDate", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Vaccination Name <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Vaccination Name"
                          value={formData.vaccinationName}
                          onChange={(e) => handleInputChange("vaccinationName", e.target.value)}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Upload Certificate</label>
                        <div className={styles.fileUpload}>
                          <input
                            type="file"
                            id="vaccinationFile"
                            className={styles.fileInput}
                            onChange={(e) => handleFileChange("vaccinationFile", e.target.files?.[0] || null)}
                          />
                          <label htmlFor="vaccinationFile" className={styles.fileLabel}>
                            <Upload size={16} />
                            Choose File
                          </label>
                          {formData.vaccinationFile && (
                            <span className={styles.fileName}>Selected: {formData.vaccinationFile.name}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.buttonGroup}>
                      <button className={styles.submitButton} onClick={() => handleSubmit("covid")}>
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cancel Button */}
              <div className={styles.finalActions}>
                <button className={styles.cancelAllButton}>Cancel Add Details</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
