import React, { useState } from 'react';
import styles from './PaymentSummary.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PaymentSummary = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const hotel = {
    name: 'Pride Plaza Hotel Aerocity New Delhi',
    address: 'Site 627, Aecs Layout, Aerocity | 4 km drive to Indira Gandhi International Airport, 201002',
    checkIn: { day: '29', month: 'Jun', year: '2025' },
    checkOut: { day: '30', month: 'Jun', year: '2025' },
    roomType: 'Deluxe King Or Twin Bed Room',
    breakfast: 'Breakfast not included',
    guests: '1 Room | 2 Adults'
  };

  const traveler = {
    name: 'Alice Kumar',
    email: 'alicebob@gmail.com',
    phone: '9912428794'
  };

  const priceSummary = {
    baseFare: 4993,
    discount: 599,
    priceAfterDiscount: 3940,
    taxes: 491,
    grandTotal: 4431
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className={styles.paymentSummaryContainer}>
      {/* Hotel Booking Summary */}
      <div className={styles.summaryCard}>
        <div className={styles.summaryHeader}>
          <h2>Booking Summary</h2>
        </div>

        <div className={styles.hotelInfo}>
          <h3>{hotel.name}</h3>
          <p className={styles.hotelAddress}>{hotel.address}</p>

          <div className={styles.dateContainer}>
            <div className={styles.dateBox}>
              <div className={styles.dateLabel}>Check-In</div>
              <div className={styles.dateValue}>
                <span className={styles.day}>{hotel.checkIn.day}</span>
                <span className={styles.monthYear}>{hotel.checkIn.month} {hotel.checkIn.year}</span>
              </div>
            </div>

            <div className={styles.dateBox}>
              <div className={styles.dateLabel}>Check-Out</div>
              <div className={styles.dateValue}>
                <span className={styles.day}>{hotel.checkOut.day}</span>
                <span className={styles.monthYear}>{hotel.checkOut.month} {hotel.checkOut.year}</span>
              </div>
            </div>
          </div>

          <div className={styles.guestInfo}>{hotel.guests}</div>
          <div className={styles.roomType}>{hotel.roomType}</div>
          {/* <div className={styles.divider}></div> */}
          <div className={styles.breakfastInfo}>{hotel.breakfast}</div>
          <div className={styles.breakfastInfo}>Lunch not included</div>
          <div className={styles.breakfastInfo}>Cabs not included</div>
        </div>

        <div className={styles.divider}></div>

        {/* Traveler Details */}
        <div className={styles.detailSection}>
          <div className={styles.sectionHeader}>Traveller Details</div>
          <ol className={styles.travelerList}>
            <li>Adult {traveler.name}</li>
            <li>Child Bob</li>
          </ol>
        </div>

        <div className={styles.divider}></div>

        {/* Contact Details */}
        <div className={styles.detailSection}>
          <div className={styles.sectionHeader}>Contact Details</div>
          <div className={styles.contactRow}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{traveler.email}</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.label}>Phone:</span>
            <span className={styles.value}>{traveler.phone}</span>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      <div className={`${styles.summaryCard} ${styles.priceSummary}`}>
        <div className={styles.summaryHeader}>
          <h2>Price Summary</h2>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.priceLabel}>Base Fare</span>
          <span className={styles.priceValue}>{formatCurrency(priceSummary.baseFare)}</span>
        </div>

        <div className={`${styles.priceRow} ${styles.discountRow}`}>
          <span className={styles.priceLabel}>
            Total Discount
            <span
              className={styles.tooltipIcon}
              onMouseEnter={toggleTooltip}
              onMouseLeave={toggleTooltip}
            >
              i
              <div className={`${styles.tooltipContent} ${showTooltip ? styles.show : ''}`}>
                <div className={styles.discountBreakdown}>
                  <div className={styles.breakdownRow}>
                    <span><FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> Hotel Discount</span>
                    <span>₹0</span>
                  </div>
                  <div className={styles.breakdownRow}>
                    <span><FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> EMT Offer</span>
                    <span>₹{priceSummary.discount}</span>
                  </div>
                </div>
              </div>
            </span>
          </span>
          <span className={`${styles.priceValue} ${styles.discountValue}`}>
            - {formatCurrency(priceSummary.discount)}
          </span>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.priceLabel}>Price after Discount</span>
          <span className={styles.priceValue}>{formatCurrency(priceSummary.priceAfterDiscount)}</span>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.priceLabel}>Taxes & Service Fees</span>
          <span className={styles.priceValue}>{formatCurrency(priceSummary.taxes)}</span>
        </div>

        <div className={`${styles.priceRow} ${styles.grandTotal}`}>
          <span className={styles.priceLabel}>Grand Total</span>
          <span className={styles.priceValue}>{formatCurrency(priceSummary.grandTotal)}</span>
        </div>
      </div>
      {/* total pay amount */}
      <div className={`${styles.summaryCard} ${styles.priceSummary}`}>
        {/* <div className={styles.summaryHeader}>
          <h2>Price Summary</h2>
        </div> */}
        <div className={styles.priceTotal}>
          <span className={styles.priceTotalLabel}>Total Bill Pay</span>
          <span className={styles.priceTotalValue}>{formatCurrency(priceSummary.baseFare)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;