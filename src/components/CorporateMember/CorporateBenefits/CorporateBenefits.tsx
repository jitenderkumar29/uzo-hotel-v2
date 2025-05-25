'use client';
import React, { useState } from 'react';
import styles from './CorporateBenefits.module.css';
import { FaCheck, FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


interface CorporateBenefitsProps {
  onClose?: () => void; // Add this line
}


const CorporateBenefits: React.FC<CorporateBenefitsProps> = ({
  onClose, // Destructure it here
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    eligibility: true,
    benefits: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const membershipTiers = [
    {
      name: 'PLATINUM',
      eligibility: '80 room nights or INR 8 lakhs',
      color: '#E5E4E2', // Platinum color
    },
    {
      name: 'GOLD',
      eligibility: '40 room nights or INR 4 lakhs',
      color: '#FFD700', // Gold color
    },
    {
      name: 'SILVER',
      eligibility: '10 room nights or INR 1 lakh',
      color: '#C0C0C0', // Silver color
    },
    {
      name: 'COPPER',
      eligibility: '—',
      color: '#B87333', // Copper color
    },
  ];

  const benefits = [
    {
      name: 'Earn Rate on eligible spends (UZO, SeleQtions, Gateway, Vivanta and amã stays & trails)',
      platinum: '8 UZOCoins per INR 100',
      gold: '7 UZOCoins per INR 100',
      silver: '5 UZOCoins per INR 100',
      copper: '4 UZOCoins per INR 100',
      hasIcon: false,
    },
    {
      name: 'Earn Rate on eligible spends (Ginger)',
      platinum: '4 UZOCoins per INR 100',
      gold: '4 UZOCoins per INR 100',
      silver: '4 UZOCoins per INR 100',
      copper: '4 UZOCoins per INR 100',
      hasIcon: false,
    },
    {
      name: 'Member Rates *',
      platinum: '20% Savings',
      gold: '15% Savings',
      silver: '10% Savings',
      copper: '10% Savings',
      hasIcon: false,
    },
    {
      name: 'Early Check-In and Late Check-Out #',
      platinum: 'Yes',
      gold: 'Yes',
      silver: 'Late checkout only',
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'Room Upgrades ^',
      platinum: 'Unlimited',
      gold: '20',
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'UZO Club Room Upgrade Voucher **',
      platinum: '4',
      gold: '2',
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'Priority Check-In',
      platinum: 'Yes',
      gold: 'Yes',
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'Premium Wi-Fi',
      platinum: 'Yes',
      gold: <FaCheck className={styles.checkIcon} />,
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'Spa',
      platinum: '20% Savings',
      gold: '15% Savings',
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'Food & Beverages',
      platinum: '10% Savings',
      gold: '10% Savings',
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'Happy Hours at designated venue (6 PM to 8 PM)',
      platinum: 'Yes',
      gold: <FaCheck className={styles.checkIcon} />,
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'Special Welcome Amenity',
      platinum: 'Yes',
      gold: <FaCheck className={styles.checkIcon} />,
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: '24/7 Dedicated Concierge Service',
      platinum: 'Yes',
      gold: 'Yes',
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
    {
      name: 'Transfers Included',
      platinum: 'Yes',
      gold: 'Yes',
      silver: <FaCheck className={styles.checkIcon} />,
      copper: <FaCheck className={styles.checkIcon} />,
      hasIcon: true,
    },
  ];

  const footnotes = [
    '* On Best Available Rates',
    '# Subject to availability',
    '^ To next level from the room booked and subject to availability at time of check-in. Up to standard suite. Applicable for a stay of up to 5 nights',
    '** Subject to availability at time of check-in. Applicable for a stay of up to 5 days',
    //  Transfers not included',
    'Membership Benefits Terms and Conditions',
  ];

  return (
    <div className={styles.container}>

      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Corporate Benefits</h1>
          <button onClick={onClose} className={styles.closeButton}>
            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
          </button>
        </div>
        {/* <div className={styles.membershipTiers}>
          {membershipTiers.map((tier, index) => (
            <div key={index} className={styles.tier}>
              <span className={styles.tierName}>{tier.name}</span>
              <div className={styles.tierEligibility}>{tier.eligibility}</div>
            </div>
          ))}
        </div> */}
      </div>


      <div className={styles.sectionHead}>
        <div className={styles.sectionContentHead}>
          <div className={styles.rowHead}>
            <div className={styles.rowTitleHead}>UZO Pass</div>
            <div className={styles.rowValueHead}>PLATINUM</div>
            <div className={styles.rowValueHead}>GOLD</div>
            <div className={styles.rowValueHead}>TITANIUM</div>
            <div className={styles.rowValueHead}>DIAMOND</div>
          </div>
        </div>

      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('eligibility')}>
          <h2>Eligibility</h2>
          {expandedSections.eligibility ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.eligibility && (
          <div className={styles.sectionContent}>
            <div className={styles.row}>
              <div className={styles.rowTitle}>Eligible spends in a year - 365 days</div>
              {membershipTiers.map((tier, index) => (
                <div key={index} className={styles.rowValue}>
                  {tier.eligibility}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('benefits')}>
          <h2>Benefits</h2>
          {expandedSections.benefits ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.benefits && (
          <div className={styles.sectionContent}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.row}>
                <div className={styles.rowTitle}>
                  {benefit.name}
                  {(benefit.name.includes('*') ||
                    benefit.name.includes('#') ||
                    benefit.name.includes('^') ||
                    benefit.name.includes('**')) && (
                      <FaQuestionCircle className={styles.infoIcon} />
                    )}
                </div>
                <div className={`${styles.rowValue} ${benefit.hasIcon ? styles.iconCell : ''}`}>
                  {benefit.platinum}
                </div>
                <div className={`${styles.rowValue} ${benefit.hasIcon ? styles.iconCell : ''}`}>
                  {benefit.gold}
                </div>
                <div className={`${styles.rowValue} ${benefit.hasIcon ? styles.iconCell : ''}`}>
                  {benefit.silver}
                </div>
                <div className={`${styles.rowValue} ${benefit.hasIcon ? styles.iconCell : ''}`}>
                  {benefit.copper}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.footnotes}>
        {footnotes.map((note, index) => (
          <div key={index} className={styles.footnote}>
            {note.includes('Terms and Conditions') ? (
              <Link href="/" target="_blank" rel="noopener noreferrer">
                {note}
              </Link>
            ) : (
              note
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateBenefits;