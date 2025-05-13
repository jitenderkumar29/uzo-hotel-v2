import React, { useState } from 'react';
import styles from './PropertyHotelGuestDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface GuestDetails {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  gstEnabled: boolean;
  gstNumber: string;
  companyName: string;
  businessEmail: string;
  companyAddress: string;
  companyPhone: string;
  adminEmail: string;
}

const statesList: string[] = [
  'Andaman and Nicobar',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Outside India',
];

const PropertyHotelGuestDetails: React.FC = () => {
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    title: 'Mr',
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '91',
    phoneNumber: '',
    gstEnabled: false,
    gstNumber: '',
    companyName: '',
    businessEmail: '',
    companyAddress: '',
    companyPhone: '',
    adminEmail: ''
  });

  const [isExpanded, setIsExpanded] = useState(true);


  const countryCodes = [
    { value: '91', label: '+91 India' },
    { value: '1', label: '+1 United States' },
    { value: '44', label: '+44 United Kingdom' },
    { value: '971', label: '+971 United Arab Emirates' },
    { value: '65', label: '+65 Singapore' },
    { value: '60', label: '+60 Malaysia' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGuestDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleGstDetails = () => {
    setGuestDetails(prev => ({
      ...prev,
      gstEnabled: !prev.gstEnabled
    }));
  };


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={styles.guestDetailsContainer}>
        <div className={styles.header} onClick={toggleExpand}>
          <h4 className={styles.sectionTitle}>GUEST DETAILS</h4>
          <div className={styles.arrowIcon}>
            <FontAwesomeIcon icon={faChevronDown} className={`${styles.arrowSvg} ${isExpanded ? styles.arrowUp : ''}`} />
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={styles.arrowDown}>
              <path d="M16 26a3.07 3.07 0 0 1-2.305-1.04L.614 10.091A2.462 2.462 0 0 1 4.312 6.84l11.439 13.003a.334.334 0 0 0 .501 0L27.691 6.84a2.462 2.462 0 1 1 3.697 3.251L18.311 24.955A3.08 3.08 0 0 1 16.002 26z"></path>
            </svg> */}
          </div>
        </div>

        {isExpanded && (
          <div className={styles.formSection}>
            <div className={styles.personalDetails}>
              <div className={styles.nameFields}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Title</label>
                  <select
                    name="title"
                    value={guestDetails.title}
                    onChange={handleInputChange}
                    className={`${styles.selectInput} ${styles.titleSelect}`}
                    required
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={guestDetails.firstName}
                    onChange={handleInputChange}
                    className={`${styles.textInput} ${styles.textBox}`}
                    maxLength={50}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={guestDetails.lastName}
                    onChange={handleInputChange}
                    className={`${styles.textInput} ${styles.textBox}`}
                    maxLength={50}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.labelWithNote}>
                  <label className={styles.inputLabel}>Email Address</label>
                  <span className={styles.noteText}>(Your booking voucher will be sent to this email address)</span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={guestDetails.email}
                  onChange={handleInputChange}
                  className={styles.textInput}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Mobile Number</label>
                <div className={styles.phoneInput}>
                  <select
                    name="countryCode"
                    value={guestDetails.countryCode}
                    onChange={handleInputChange}
                    className={styles.countryCodeSelect}
                  >
                    {countryCodes.map(code => (
                      <option key={code.value} value={code.value}>{code.label}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    value={guestDetails.phoneNumber}
                    onChange={handleInputChange}
                    className={styles.phoneNumberInput}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.gstToggle}>
              <input
                type="checkbox"
                id="gstToggle"
                checked={guestDetails.gstEnabled}
                onChange={toggleGstDetails}
                className={styles.checkbox}
              />
              <div className={styles.labelWithNote}>
                <label htmlFor="gstToggle" className={styles.inputLabel}>Enter GST Details</label>
                <span className={styles.noteText}>(Optional)</span>
              </div>
            </div>

            {guestDetails.gstEnabled && (
              <div className={styles.businessDetails}>
                <h4 className={`${styles.sectionTitle} ${styles.businessTitle}`}>BUSINESS PROFILE</h4>

                <div className={styles.businessFields}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>GST Number</label>
                    <input
                      type="text"
                      name="gstNumber"
                      placeholder="EG: 06BZAHM6385P6Z2"
                      value={guestDetails.gstNumber}
                      onChange={handleInputChange}
                      className={styles.textInput}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Enter Company Name"
                      value={guestDetails.companyName}
                      onChange={handleInputChange}
                      className={styles.textInput}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Business Email ID</label>
                  <input
                    type="email"
                    name="businessEmail"
                    placeholder="Enter Email Address"
                    value={guestDetails.businessEmail}
                    onChange={handleInputChange}
                    className={styles.textInput}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Company Address</label>
                  <input
                    type="text"
                    name="companyAddress"
                    placeholder="Enter Company Address"
                    value={guestDetails.companyAddress}
                    onChange={handleInputChange}
                    className={styles.textInput}
                  />
                </div>

                <div className={styles.businessFields}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Company Phone Number</label>
                    <input
                      type="tel"
                      name="companyPhone"
                      placeholder="Enter Phone Number"
                      value={guestDetails.companyPhone}
                      onChange={handleInputChange}
                      className={styles.textInput}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Admin Email ID</label>
                    <input
                      type="email"
                      name="adminEmail"
                      placeholder="Enter Email Address"
                      value={guestDetails.adminEmail}
                      onChange={handleInputChange}
                      className={styles.textInput}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>)}
      </div>
      <PinState />
    </>
  );
};

const PinState: React.FC = () => {
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [saveToProfile, setSaveToProfile] = useState(false);
  const [state, setState] = useState('Uttar Pradesh')

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only numbers
    setPincode(value.slice(0, 6)); // Limit to 6 digits
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log({
      address,
      pincode,
      state,
      saveToProfile
    });
    // You could add your submission logic here
  };

  return (
    <div className={styles.billingWrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>YOUR PINCODE AND STATE</h2>
        <p className={styles.subtitle}>
          (Required for GST purpose on your tax invoice. You can edit this anytime later in your profile section.)
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.pinState}>
            <div className={styles.inputContainer}>
              <div className={styles.inputWrapper}>
                <input
                  id="BillingAddress"
                  type="text"
                  className={`${styles.input} ${address ? styles.hasValue : ''}`}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <label htmlFor="BillingAddress" className={styles.label}>
                  Enter Billing Address
                </label>
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.inputWrapper}>
                <input
                  id="Pincode"
                  type="tel"
                  maxLength={6}
                  className={`${styles.input} ${pincode ? styles.hasValue : ''}`}
                  value={pincode}
                  onChange={handlePincodeChange}
                  required
                />
                <label htmlFor="Pincode" className={styles.label}>
                  Enter Pincode
                </label>
              </div>
            </div>


            <div className={styles.stateInputContainer}>
              {/* <label htmlFor="state-select" className={styles.stateLabel}>
                State
              </label> */}
              <div className={styles.selectWrapper}>
                <select
                  id="state-select"
                  className={styles.stateValue}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">Select a state</option>
                  {statesList.map((stateName) => (
                    <option key={stateName} value={stateName}>
                      {stateName}
                    </option>
                  ))}
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>

          </div>
          {/* <div className={styles.inputContainer}>
            <div className={styles.stateWrapper}>
              <div className={styles.stateDisplay}>
                <label className={styles.stateLabel}>State</label>
                <p className={styles.stateValue}>{state}</p>
              </div>
            </div>
          </div> */}

          <div className={styles.checkboxContainer}>
            <div>
              <span className={styles.checkboxWrapper}>
                <input
                  id="confirm_check"
                  type="checkbox"
                  name="confirm_check"
                  className={styles.checkbox}
                  checked={saveToProfile}
                  onChange={(e) => setSaveToProfile(e.target.checked)}
                />
                <b>&nbsp;</b>
              </span>
            </div>
            <label htmlFor="confirm_check" className={styles.checkboxLabel}>
              Confirm and save billing details to your profile
            </label>
          </div>

          {/* <button type="submit" className={styles.submitButton}>
            Save Details
          </button> */}
        </form>
      </div>
    </div>
  );
};


export default PropertyHotelGuestDetails;