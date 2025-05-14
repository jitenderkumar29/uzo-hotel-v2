import React from "react";
import styles from "./PropertyHotelInfoPrice.module.css";
import { ChevronDown, ChevronUp, Gift } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PropertyHotelInfoPrice = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Price Summary</h3>
        <button className={styles.toggleButton} onClick={toggleExpand}>
          {/* <span>View Full Breakup</span> */}
          <div className={`${styles.arrowDownMinMax} ${!isExpanded ? styles.arrowUpMinMax : ''}`}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </div>
        </button>
      </div>

      <div
        className={`${styles.priceDetails} ${isExpanded ? styles.expanded : styles.collapsed
          }`}
      >
        <div className={styles.baseDiscount}>
          <div className={styles.priceRow}>
            <div className={styles.priceLabel}>Base Price (1 room x 1 night)</div>
            <div className={styles.priceValue}>₹5,940</div>
          </div>

          <div className={styles.priceRow}>
            <div className={styles.priceLabel}>
              Total Discount
              <div className={styles.discountBadge}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span className={styles.discountCode}>UZOSTAY</span>
                <span>applied</span>
              </div>
            </div>
            <div className={`${styles.priceValue} ${styles.discountValue}`}>
              -₹450
            </div>
          </div>
          {isExpanded && (<>
            <div className={styles.priceRow}>
              <div className={styles.priceLabel}>
                Discount by the Property
              </div>
              <div className={`${styles.priceValue}`}>
                ₹400
              </div>
            </div>
            <div className={styles.priceRow}>
              <div className={styles.priceLabel}>
                UZODEAL
              </div>
              <div className={`${styles.priceValue}`}>
                ₹153
              </div>
            </div></>)}
        </div>

        <div className={styles.divider} />

        <div className={styles.priceDiscount}>
          <div className={styles.priceRow}>
            <div className={styles.priceLabel}>Price after Discount</div>
            <div className={styles.priceValue}>₹5,490</div>
          </div>

          <div className={styles.priceRow}>
            <div className={styles.priceLabel}>Taxes & Service Fees</div>
            <div className={styles.priceValue}>₹1,127</div>
          </div>
          {isExpanded && (<>
            <div className={styles.priceRow}>
              <div className={styles.priceLabel}>Hotel GST</div>
              <div className={styles.priceValue}>₹432</div>
            </div>
            <div className={styles.priceRow}>
              <div className={styles.priceLabel}>Platform Fees</div>
              <div className={styles.priceValue}>₹424</div>
            </div>
          </>)}
        </div>

        <div className={styles.divider} />

        <div className={`${styles.priceRow} ${styles.totalRow}`}>
          <div className={styles.totalLabel}>Total Amount to be paid</div>
          <div className={styles.totalValue}>₹6,617</div>
        </div>
      </div>


      <div className={styles.loginPrompt}>
        <Gift className={styles.offerIcon} />
        <button className={styles.loginLink}>Login in now & get a lower price</button>
      </div>
    </div>
  );
};

export default PropertyHotelInfoPrice;