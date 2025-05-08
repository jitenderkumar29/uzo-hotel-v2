import React from 'react';
import styles from './PropertyPoliciesPopUp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const PropertyPoliciesPopUp = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <h3 className={styles.sectionHeader}>Property Policies</h3>
        <button className={styles.closeButton}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" height="2rem" width="2rem" fill="#141823">
            <g fill="none">
              <path d="M-2-2h16v16H-2z"></path>
              <path d="M.854 9.814a.641.641 0 0 0 .905.906l3.952-3.952a.1.1 0 0 1 .076-.031q.044 0 .075.031l3.952 3.952a.64.64 0 1 0 .905-.905L6.768 5.862a.1.1 0 0 1-.031-.075q0-.045.031-.076L10.72 1.76a.64.64 0 1 0-.906-.905l-3.952 3.95a.1.1 0 0 1-.075.032.1.1 0 0 1-.076-.032L1.76.855a.64.64 0 0 0-.905.904l3.951 3.952q.031.031.032.076a.1.1 0 0 1-.032.075L.855 9.814z"></path>
            </g>
          </svg> */}
          <FontAwesomeIcon icon={faXmark} className={styles.crossIcon} />
        </button>
      </div>

      <div className={styles.policyContent}>
        {/* Must Read Rules */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>Must Read Rules</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="warning"
              text="Primary guest should be atleast 18 years of age"
            />
            <PolicyItem
              iconType="warning"
              text="Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)"
            />
            <PolicyItem
              iconType="warning"
              text="Pets are not allowed"
            />
            <PolicyItem
              iconType="warning"
              text="Optional : Rollaway bed fee: INR 400.0 per night"
            />
          </ul>
        </div>

        {/* Guest Profile */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>Guest Profile</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="check"
              text="Unmarried couples allowed"
            />
            <PolicyItem
              iconType="remove"
              text="Primary guest should be atleast 18 years of age"
            />
          </ul>
        </div>

        {/* ID Proof Related */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>ID Proof Related</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="warning"
              text="Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)"
            />
            <PolicyItem
              iconType="check"
              text="Local ids are allowed"
            />
          </ul>
        </div>

        {/* Smoking/Alcohol Rules */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>Smoking/Alcohol consumption Rules</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="remove"
              text="Alcohol consumption is not allowed within the property premises."
            />
            <PolicyItem
              iconType="check"
              text="Smoking within the premises is allowed"
            />
          </ul>
        </div>

        {/* Food Arrangement */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>Food Arrangement</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="check"
              text="Non veg food is allowed"
            />
            <PolicyItem
              iconType="check"
              text="Outside food is allowed"
            />
            <PolicyItem
              iconType="check"
              text="Food Delivery is available"
            />
            <PolicyItem
              iconType="check"
              text="In room dining available"
            />
          </ul>
        </div>

        {/* Property Accessibility */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>Property Accessibility</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="remove"
              text="This property is not accessible to guests who use a wheelchair. Please make arrangements accordingly."
            />
          </ul>
        </div>

        {/* Pets Related */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>Pet(s) Related</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="remove"
              text="Pets are not allowed"
            />
            <PolicyItem
              iconType="remove"
              text="There are no pets living on the property"
            />
          </ul>
        </div>

        {/* Other Rules */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>Other Rules</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="remove"
              text="Does not allow private parties or events"
            />
          </ul>
        </div>

        {/* Child & Extra Bed Policy */}
        <div className={styles.policySection}>
          <h4 className={styles.policyHeading}>Child & Extra Bed Policy</h4>
          <ul className={styles.policyList}>
            <PolicyItem
              iconType="warning"
              text="An extra bed will be provided to accommodate any child included in the booking for a charge mentioned below."
            />
            <PolicyItem
              iconType="warning"
              text="INR 500 will be charged for an extra mattress per child. (To be paid at the property)"
            />
            <PolicyItem
              iconType="warning"
              text="An extra bed will be provided to accommodate any additional guest included in the booking for a charge mentioned below."
            />
            <PolicyItem
              iconType="warning"
              text="INR 750 will be charged for an extra mattress per guest. (To be paid at the property)"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const PolicyItem = ({ iconType, text }: { iconType: 'check' | 'warning' | 'remove', text: string }) => {
  const getIcon = () => {
    switch (iconType) {
      case 'check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1.5rem" width="1.5rem" fill="#46484d">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m3.73 4.171a.86.86 0 0 0-.788.357L7.507 9.213a.18.18 0 0 1-.126.07.17.17 0 0 1-.135-.05L5.622 7.846A.859.859 0 0 0 4.408 9.06l2.473 2.234c.16.162.38.252.607.252h.069a.86.86 0 0 0 .626-.348l4.144-5.655a.862.862 0 0 0-.596-1.372z"></path>
          </svg>
        );
      case 'warning':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1.5rem" width="1.5rem" fill="#46484d">
            <path fill="#EE2E24" fillRule="evenodd" d="M7.989.002a8.14 8.14 0 0 0-5.673 2.435A7.86 7.86 0 0 0 .001 8.139 7.851 7.851 0 0 0 7.867 16h.142a8.073 8.073 0 0 0 7.99-8.138A7.84 7.84 0 0 0 7.99.002zM7 11.029a.98.98 0 0 1 .27-.713.98.98 0 0 1 .696-.307h.018c.547 0 .995.433 1.015.98a.983.983 0 0 1-.966 1.019h-.018A1.02 1.02 0 0 1 7 11.028zm.334-2.695v-4a.666.666 0 1 1 1.333.001v4a.667.667 0 0 1-1.333-.002z"></path>
          </svg>
        );
      case 'remove':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1.5rem" width="1.5rem" fill="#46484d">
            <path d="M13.654 2.34a8 8 0 0 0-11.312.005A8 8 0 0 0 13.654 13.66a8.013 8.013 0 0 0 0-11.318zm-2.52 7.847a.667.667 0 0 1-.94.944L8.119 9.057a.167.167 0 0 0-.236 0L5.81 11.13a.68.68 0 0 1-.944 0 .67.67 0 0 1 0-.944L6.94 8.113a.163.163 0 0 0 0-.235L4.866 5.804a.668.668 0 0 1 .94-.944L7.88 6.934c.031.031.074.05.118.05s.087-.019.118-.05L10.19 4.86a.669.669 0 0 1 .944.944L9.059 7.878a.166.166 0 0 0 0 .235z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <li className={styles.policyListItem}>
      <span className={styles.iconWrapper}>
        {getIcon()}
      </span>
      <p className={styles.policyText}>{text}</p>
    </li>
  );
};

export default PropertyPoliciesPopUp;