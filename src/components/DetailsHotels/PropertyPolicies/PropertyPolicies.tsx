'use client';
import React, { useState } from 'react';
import styles from './PropertyPolicies.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import PropertyPoliciesPopUp from './PropertyPoliciesPopUp/PropertyPoliciesPopUp';

const PropertyPolicies = () => {
  const [showAllPolicies, setShowAllPolicies] = useState(false);

  const policies = [
    "Primary guest should be at least 18 years of age",
    "Passport, Aadhar and Driving License are accepted as ID proof(s)",
    "Pets are not allowed",
    "Outside food is not allowed",
    // "Optional : Fee for buffet breakfast: approximately INR 850 for adults and INR 425 for children",
    // "Early check-in is available for a fee (subject to availability)",
    // "Late check-out is available for a fee (subject to availability)",
    // "Rollaway bed fee: INR 1500.0 per night",
    // Add more policies here to reach 20 if needed
  ];

  const displayedPolicies = showAllPolicies ? policies : policies.slice(0, 4);

  return (
    <div className={styles.policyContainer}>
      <div className={styles.policyHeader}>
        <h2 className={styles.headerText}>Property Policies</h2>
        <div className={styles.timingWrapper}>
          <span>Check-in Time: <strong>2 PM</strong></span>
          <span>Check-out Time: <strong>12 PM</strong></span>
        </div>
      </div>

      <div className={styles.policyContent}>
        <ul className={styles.policyList}>
          {displayedPolicies.map((policy, index) => (
            <li key={index} className={styles.policyItem}>

              <FontAwesomeIcon icon={faCircleCheck} className={styles.checkIcon} />
              <p className={styles.policyText}>{policy}</p>
            </li>
          ))}
        </ul>

        {policies.length > 3 && (
          <button
            className={styles.viewAllButton}
            onClick={() => setShowAllPolicies(!showAllPolicies)}
          >
            {showAllPolicies ? 'Show fewer policies' : `View all property policies`}
            {/* {showAllPolicies ? 'Show fewer policies' : `View all ${policies.length} property policies`} */}
          </button>
        )}
        {showAllPolicies && (
          <>
            <div className={styles.overlay} />
            <div className={styles.popupContainer} onClick={() => setShowAllPolicies(!showAllPolicies)}>
              <PropertyPoliciesPopUp />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyPolicies;