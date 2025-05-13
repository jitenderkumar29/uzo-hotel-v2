import React, { useState } from 'react';
import styles from './PropertyHotelTripSecureMore.module.css';
import { Check, ChevronDown, X } from 'lucide-react';

interface BenefitItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

interface BenefitCategory {
  title: string;
  benefits: BenefitItem[];
}

const PropertyHotelTripSecureMore: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    medical: true,
    travel: true,
    other: true
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const medicalBenefits: BenefitItem[] = [
    {
      icon: '/icons/emergency-assistance.png',
      title: 'Emergency Medical Assistance',
      subtitle: '24*7 SUPPORT',
      description: 'Covers Ambulance Assistance, House call-doctor and teleconsultations'
    },
    {
      icon: '/icons/inpatient-care.png',
      title: 'In-Patient Care',
      subtitle: 'Rs 5,00,000',
      description: 'Covers emergency hospitalization or medical expenses for any illness/injury during the trip'
    },
    {
      icon: '/icons/medical-evacuation.png',
      title: 'Medical Evacuation',
      subtitle: 'Rs 50,000',
      description: 'Covers expenses of arranging transportation/evacuation for medical emergencies'
    },
    {
      icon: '/icons/opd-expenses.png',
      title: 'OPD Expenses for illness or Injury',
      subtitle: 'Rs 25,000',
      description: 'Covers outpatient expenses for illness or injury during the trip'
    }
  ];

  const travelBenefits: BenefitItem[] = [
    {
      icon: '/icons/bounced-booking.png',
      title: 'Bounced Booking',
      subtitle: 'Rs 20,000',
      description: 'Covers additional amount paid for alternate accommodation in case hotel denies check-in'
    },
    {
      icon: '/icons/hotel-cancellation.png',
      title: 'Hotel Cancellation',
      subtitle: 'Rs 15,000',
      description: 'Covers cancellation charges if cancelled due to any illness or natural calamities'
    },
    {
      icon: '/icons/loss-baggage.png',
      title: 'Loss of Laptop/Tablet/Hand Baggage',
      subtitle: 'Rs 25,000',
      description: 'Covers you in case of loss of laptop/Tablet/Hand baggage'
    },
    {
      icon: '/icons/emergency-hotel.png',
      title: 'Emergency Hotel Accommodation',
      subtitle: 'Rs 15,000',
      description: 'Emergency Hotel Accommodation for immediate family member in case the insured is hospitalized'
    }
  ];

  const otherBenefits: BenefitItem[] = [
    {
      icon: '/icons/compassionate-visit.png',
      title: 'Compassionate Visit',
      subtitle: 'Rs 10,000',
      description: 'Cover the expense of your family member when they visit you during hospitalization.'
    },
    {
      icon: '/icons/personal-accident.png',
      title: 'Personal Accident',
      subtitle: 'Rs 10,00,000',
      description: 'Financial support in case of death or disability due to accident'
    },
    {
      icon: '/icons/repatriation.png',
      title: 'Repatriation of Mortal Remains',
      subtitle: 'Rs 50,000',
      description: 'Covers transportation and funeral expenses of mortal remains back to the place of residence'
    },
    {
      icon: '/icons/home-burglary.png',
      title: 'Home Content Burglary',
      subtitle: 'Rs 1,00,000',
      description: 'Covers you in case there is burglary at your place of residence while you are on trip except cash and Jewellery'
    },
    {
      icon: '/icons/personal-liability.png',
      title: 'Personal Liability',
      subtitle: 'Rs 25,000',
      description: 'Covers you against claims resulting due to injuries/damages caused to a third party during trip'
    },
    {
      icon: '/icons/identity-theft.png',
      title: 'Identity Document theft',
      subtitle: 'Rs 10,000',
      description: 'Covers loss of any identity document like Aadhar, passport, PAN Card'
    }
  ];

  const categories: BenefitCategory[] = [
    { title: '4 Medical Benefits', benefits: medicalBenefits },
    { title: '4 Travel Benefits', benefits: travelBenefits },
    { title: '6 Other Benefits', benefits: otherBenefits }
  ];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>14 Benefits</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X />
            {/* <img src="/icons/close.png" alt="Close" width={28} height={28} /> */}
          </button>
        </header>

        <div className={styles.modalBody}>
          <div className={styles.planHeader}>
            <h3 className={styles.planSubtitle}>ASSURANCE</h3>
            <h2 className={styles.planTitle}>Trip Secure</h2>
            <p className={styles.planProvider}>
              <span>Powered by</span> Across Assist + TATA AIG
            </p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tncLink}
            >
              T&amp;C
            </a>
            <p className={styles.planInfo}>Non-Refundable | Coverage excludes 60+ years</p>
          </div>

          {categories.map((category, index) => (
            <div key={index} className={styles.benefitCategory}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <hr className={styles.categoryDivider} />
                <button
                  className={styles.toggleButton}
                  onClick={() => toggleCategory(Object.keys(expandedCategories)[index])}
                >
                  <ChevronDown />
                  {/* <img
                    src="/icons/collapse.png"
                    alt="toggle"
                    width={24}
                    height={24}
                    className={`${styles.toggleIcon} ${expandedCategories[Object.keys(expandedCategories)[index]] ? styles.expanded : ''}`}
                  /> */}
                </button>
              </div>

              {expandedCategories[Object.keys(expandedCategories)[index]] && (
                <div className={styles.benefitsList}>
                  {category.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className={styles.benefitItem}>
                      <div className={styles.benefitIcon}>
                        <Check className={styles.checkIcon} />
                        {/* <img src={benefit.icon} alt="benefit_icon" width={16} height={16} /> */}
                      </div>
                      <div className={styles.benefitContent}>
                        <div className={styles.benefitContentHead}>
                          <p className={styles.benefitTitle}>{benefit.title}</p>
                          <p className={styles.benefitSubtitle}>
                            <strong>{benefit.subtitle}</strong>
                          </p>
                        </div>
                        <p className={styles.benefitDescription}>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className={styles.modalFooter}>
          <div className={styles.footerContent}>
            <div className={styles.priceContainer}>
              <span className={styles.price}>₹79</span>
              <span className={styles.priceLabel}>Per person</span>
            </div>
            <button className={styles.addButton} onClick={onClose}>ADD</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PropertyHotelTripSecureMore;