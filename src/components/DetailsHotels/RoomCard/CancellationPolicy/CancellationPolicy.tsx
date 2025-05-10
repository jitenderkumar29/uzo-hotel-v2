import React from 'react';
import styles from './CancellationPolicy.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

interface PolicyItem {
  date: string;
  fee: string;
}

interface CancellationPolicyProps {
  planType: string;
  roomType: string;
  freeCancellationDeadline: string;
  // checkInTime: string;
  policies: PolicyItem[];
  amenities?: string[];
  onClose?: () => void; // Add this line
}

const CancellationPolicy: React.FC<CancellationPolicyProps> = ({
  planType,
  roomType,
  freeCancellationDeadline,
  // checkInTime,
  policies,
  amenities = [],
  onClose, // Destructure it here
}) => {

  const CancellationPolicy = () => {
    return (
      <div className={styles.wrapper}>
        {/* <h4 className={styles.heading}>Cancellation Policy</h4> */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timeline}>
            <span className={styles.labelNow}>Now</span>

            <div className={styles.timeline}>
              <div className={`${styles.bar} ${styles.refundable}`}>
                <span className={`${styles.oval} ${styles.left}`}></span>
                <span className={styles.barLabel}>100% Refund</span>
                {/* <div className={styles.timeLabel}>
                  <span>11 May</span>
                  <span>01:59 PM</span>
                </div> */}
              </div>

              <div className={`${styles.bar} ${styles.nonRefundable}`}>
                <span className={styles.barLabel}>Non Refundable</span>
                {/* <div className={styles.timeLabel}>
                  <span>12 May</span>
                  <span>01:59 PM</span>
                  <span className={styles.subLabel}>Check-in</span>
                </div> */}
                <span className={`${styles.oval} ${styles.right}`}></span>
              </div>
            </div>

          </div>

        </div>
        <div className={styles.timeLabelWrapper}>
          <div className={styles.refundableLeft}>
            <div className={styles.currentTime}>Now</div>
            <div className={styles.timeLabel}>
              <span>18 May</span>
              <span>01:59 PM</span>
            </div>
          </div>
          <div className={styles.nonRefundableRight}>
            <div className={styles.timeLabel}>
              <span>19 May</span>
              <span>01:59 PM</span>
              <span className={styles.subLabel}>Check-in</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        {/* <div className={styles.planTag}>Plan Details & Policies</div> */}

        <div className={styles.headerSection}>
          <div className={styles.headerText}>

            <h3>{planType}</h3>
            <p>{roomType}</p>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
            {/* <button onClick={onClose} className="close-button"> */}
            {/* ✕ Or "Close" */}
            {/* </button> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" height="2rem" width="2rem" fill="#141823">
              <g fill="none">
                <path d="M-2-2h16v16H-2z"></path>
                <path d="M.854 9.814a.641.641 0 0 0 .905.906l3.952-3.952a.1.1 0 0 1 .076-.031q.044 0 .075.031l3.952 3.952a.64.64 0 1 0 .905-.905L6.768 5.862a.1.1 0 0 1-.031-.075q0-.045.031-.076L10.72 1.76a.64.64 0 1 0-.906-.905l-3.952 3.95a.1.1 0 0 1-.075.032.1.1 0 0 1-.076-.032L1.76.855a.64.64 0 0 0-.905.904l3.951 3.952q.031.031.032.076a.1.1 0 0 1-.032.075L.855 9.814z"></path>
              </g>
            </svg> */}
          </button>
        </div>

        {amenities.length > 0 && (
          <div className={styles.amenitiesSection}>
            <ul className={styles.amenitiesList}>
              {amenities.map((amenity, index) => (
                <li key={index}>
                  <div className={styles.amenityItem}>
                    <p className={styles.amenityTitle}>
                      <FontAwesomeIcon icon={faCircle} className={styles.policyIcon} />{amenity}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.cancellationSection}>
          <div className={styles.cancellationHeader}>
            <p>Cancellation Policy</p>
          </div>
          <CancellationPolicy />
          {/* <div className={styles.timelineContainer}>
            <div className={styles.timelineBar}>
              <div className={styles.timelineContent}>
                <span className={styles.nowText}>Now</span>
                <div className={styles.timelineBarInner}>
                  <div className={`${styles.timelineSegment} ${styles.greenSegment}`}>
                    <span className={styles.segmentText}>100% Refund</span>
                    <div className={styles.segmentDates}>
                      <span>{freeCancellationDeadline.split(',')[0]}</span>
                      <span>{freeCancellationDeadline.split(',')[1]}</span>
                      <span className={styles.checkInText}>Check-in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <ul className={styles.policyList}>
            <li>
              {/* <span className={styles.dot}></span> */}
              <FontAwesomeIcon icon={faCircle} className={styles.policyIcon} />
              <span className={styles.policyText}>
                <b>Free Cancellation(100% refund) if you cancel this booking before {freeCancellationDeadline}</b>
              </span>
            </li>

            <div className={styles.policyDetails}>
              <p className={styles.policySubHeader}>
                <b>Cancellations post that will be subject to a fee as follows</b>
              </p>

              <div className={styles.policyTable}>
                <div className={styles.tableHeader}>
                  <span>DATE</span>
                  <span>FEE</span>
                </div>

                {policies.map((policy, index) => (
                  <div key={index} className={styles.tableRow}>
                    <span>{policy.date}</span>
                    <span>{policy.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            <li>
              {/* <span className={styles.dot}></span> */}
              <FontAwesomeIcon icon={faCircle} className={styles.policyIcon} />
              <span className={styles.policyText}>
                Cancellations are only allowed before the Check-In Time. All time mentioned above is in Destination Time.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default CancellationPolicy;