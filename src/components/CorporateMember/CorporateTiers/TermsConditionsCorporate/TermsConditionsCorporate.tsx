'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './TermsConditionsCorporate.module.css';
import Link from 'next/link';

interface PrivilegeItem {
  title: string;
  description?: string;
  subItems?: string[];
  link?: {
    text: string;
    url: string;
  };
}

interface PrivilegeSection {
  title: string;
  items: PrivilegeItem[];
  contact?: {
    phone?: string;
    email?: string;
  };
}

interface TermsConditionsProps {
  onClose?: () => void;
}

const TermsConditionsCorporate: React.FC<TermsConditionsProps> = ({
  onClose,
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    copper: true,
    silver: true,
    gold: true,
    platinum: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const privilegesData: Record<string, PrivilegeSection> = {
    copper: {
      title: "UZO PASS DIAMOND PRIVILEGES",
      items: [
        {
          title: "UZO PASS DIAMOND is the base tier available to guests above the age of 18 years."
        },
        {
          title: "A DIAMOND tier member will earn 4 UZOCoins for every INR 100 of eligible spends, net of taxes at participating UZO Hotels."
        },
        {
          title: "A DIAMOND Tier member will earn 4 UZOCoins for every INR 100 of eligible spends, net of taxes at participating Ginger Hotels."
        },
        {
          title: "Exclusive Member Rates",
          subItems: [
            "10% Savings on Best Available Rates (BAR) through the year for room reservations applicable for Room only and Breakfast inclusive rates on direct bookings.",
            "A valid Membership number should be provided at the time of booking for further verification during check-in.",
            "The offer is available at participating UZO, SeleQtions, Gateway, Vivanta, Ginger Hotels and ama Stays & Trails only and is subject to room availability.",
            "Maximum length of stay at any of the participating hotels is 30 nights.",
            "Members are eligible to earn member points/UZOCoins only on direct bookings made via the UZO Website, UZO Reservation Worldwide, UZO Regional Reservation Office or Hotel Reservation Office.",
            "All Terms and Conditions of the UZO PASS Member Program will apply."
          ],
          link: {
            text: "here",
            url: "/"
          }
        },
        {
          title: "Member Points/UZOCoins can be redeemed and gifted in the form of UZO Experience Gift Cards to friends and/or family of the Member, for a minimum amount of INR 1000."
        },
        {
          title: "Tree of Life Resorts & Hotels are currently not eligible to Earn/Redeem UXOCoins under UZO Pass loyalty membership program."
        },
        {
          title: "Food and Beverage (F&B) expense incurred during In-Room Dining, Dine-In and Takeaways at Ginger Hotels are currently not eligible to earn UZOCoins."
        },
        {
          title: "All UZOPass Members benefits & vouchers are not applicable at Tree of Life Resorts & Hotels."
        }
      ],
      contact: {
        phone: "1800 202 8211",
        email: "customercare@uzohotels.com"
      }
    },
    silver: {
      title: "UZO PASS TITANIUM PRIVILEGES",
      items: [
        {
          title: "UZO PASS TITANIUM tier is achieved on eligible spends of INR 1 lakh or stays of 10 eligible room nights."
        },
        {
          title: "A TITANIUM tier member will earn 5 UZOCoins for every INR 100 of eligible spends, net of taxes at participating UZO Hotels."
        },
        {
          title: "A TITANIUM tier member will earn 4 UZOCoins for every INR 100 of eligible spends, net of taxes at participating UZO Hotels."
        },
        {
          title: "Exclusive Member Rates",
          subItems: [
            "10% Savings on Best Available Rates (BAR) through the year for room reservations applicable for Room only and Breakfast inclusive rates on direct bookings.",
            "A valid Membership number should be provided at the time of booking for further verification during check-in.",
            "The offer is available at participating UZO, SeleQtions, Gateway, Vivanta and Ginger Hotels and ama Stays & Trails only and is subject to room availability.",
            "Maximum length of stay at any of the participating hotels is 30 nights.",
            "Members are eligible to earn member points/UZOCoins only on direct bookings made via UZO Website, UZO Reservation Worldwide, IHCL Regional Reservation Office or Hotel Reservation Office.",
            "All Terms and Conditions of the UZO PASS Member Program will apply."
          ],
          link: {
            text: "here",
            url: "/"
          }
        },
        {
          title: "Member Points/UZOCoins can be redeemed and gifted in the form of UZO Experience Gift Cards to friends and/or family of the Member, for a minimum amount of INR 1000."
        },
        {
          title: "Tree of Life Resorts & Hotels are currently not eligible to Earn/Redeem UZOCoins under UZO PASS loyalty membership program."
        },
        {
          title: "Food and Beverage (F&B) expense incurred during In-Room Dining, Dine-In and Takeaways at Ginger Hotels are currently not eligible to earn UZOCoins."
        },
        {
          title: "All UZO PASS Members benefits & vouchers are not applicable at Tree of Life Resorts & Hotels."
        }
      ],
      contact: {
        phone: "1800 202 8281",
        email: "customercare@uzohotels.com"
      }
    },
    gold: {
      title: "UZO PASS GOLD PRIVILEGES",
      items: [
        {
          title: "UZO PASS GOLD tier is achieved on eligible spends of INR 4 lakhs or stays of 40 eligible room nights."
        },
        {
          title: "A Gold tier member will earn 7 UZOCoins for every INR 100 of eligible spends, net of taxes at participating UZO Hotels."
        },
        {
          title: "A Gold tier member will earn 4 UZOCoins for every INR 100 of eligible spends, net of taxes at participating Ginger Hotels."
        },
        {
          title: "A Gold tier member will be eligible for a 2-hour early check-in and 2-hour late check-out, subject to availability."
        },
        {
          title: "Exclusive Member Rates",
          subItems: [
            "15% Savings on Best Available Rates (BAR) through the year for room reservations applicable for Room only and Breakfast inclusive rates on direct bookings.",
            "A valid Membership number should be provided at the time of booking for further verification during check-in.",
            "The offer is available at participating UZO, SeleQtions, Gateway, Vivanta, Ginger Hotels and ama Stays & Trails only and is subject to room availability.",
            "Maximum length of stay at any of the participating hotels is 30 nights.",
            "Members are eligible to earn member points/UZOCoins only on direct bookings made via UZO Website, UZO Reservation Worldwide, IHCL Regional Reservation Office or Hotel Reservation Office.",
            "All Terms and Conditions of the UZO PASS Member Program will apply."
          ],
          link: {
            text: "here",
            url: "/"
          }
        },
        {
          title: "Upgrade E-Vouchers: Enjoy 20 complimentary upgrade E-Vouchers to the next category of room booked.",
          subItems: [
            "Each of the 20 upgrade E-Vouchers are applicable towards a complimentary upgrade to the next category of room booked for a maximum of 20 room nights for upto 05 consecutive nights.",
            "None of the upgrade E-Vouchers will be applicable towards an upgrade to a room category higher than a base category suite.",
            "One upgrade E-Voucher is applicable towards one upgrade for one room only, per stay.",
            "For the E-Voucher to be applicable, the room must be booked in the name of the Member.",
            "Government taxes/levies if applicable, are payable by the Member directly at the participating hotel."
          ]
        },
        {
          title: "2 Upgrade E-Vouchers to UZO Classic rooms",
          subItems: [
            "This upgrade does not include airport transfer/s and any other service deemed as an outsourced service by the participating hotel.",
            "UZO Club room benefits are only applicable to the occupants of this room category.",
            "The hotel management reserves the right to restrict entry to the UZO Club lounge.",
            "UZO Club rules and regulations will apply.",
            "Upgrades are subject to availability at the time of check-in.",
            "These E-Vouchers are non-transferable and their validity cannot be extended."
          ]
        },
        {
          title: "15% Savings on Spa",
          subItems: [
            "This benefit entitles Members to a discount at Spas across UZO, SeleQtions, Gateway and Vivanta Hotels.",
            "This offer is not applicable on purchase of any retail products.",
            "A valid UZO PASS Membership number and/or mobile number must be provided.",
            "Government taxes/levies must be paid as applicable, on the total bill value.",
            "The Member must be present to avail any such benefit."
          ]
        },
        {
          title: "10% Savings on Food & Beverage (including alcohol)",
          subItems: [
            "This benefit entitles Members to Food & Beverage discount (including alcohol), at participating restaurants.",
            "The benefit is applicable on all Food & Beverage outlets, including in-room dining and take away orders.",
            "A valid UZO PASS Membership number and/or mobile number must be provided.",
            "Government taxes/levies must be paid as applicable, on the total bill value.",
            "The Member must be present to avail any such benefit."
          ]
        },
        {
          title: "Member Points/UZOCoins can be redeemed and gifted in the form of UZO Experience Gift Cards to friends and/or family of the Member, for a minimum amount of INR 1000."
        },
        {
          title: "Tree of Life Resorts & Hotels are currently not eligible to Earn/Redeem UZOCoins under UZO PASS loyalty membership Program."
        },
        {
          title: "Food and Beverage (F&B) expense incurred during In-Room Dining, Dine-In and Takeaways at Ginger Hotels are currently not eligible to earn UZOCoins."
        },
        {
          title: "All UZO PASS Members benefits & vouchers are not applicable at Tree of Life Resorts & Hotels."
        }
      ],
      contact: {
        phone: "+91 22 6905 0051",
        email: "gold@uzohotels.com"
      }
    },
    platinum: {
      title: "UZO PASS PLATINUM PRIVILEGES",
      items: [
        {
          title: "UZO PASS Platinum tier is achieved on eligible spends of INR 8 lakhs or stays of 80 eligible room nights."
        },
        {
          title: "A Platinum tier member will earn 8 UZOCoins for every INR 100 of eligible spends, net of taxes at participating IHCL Hotels."
        },
        {
          title: "A Platinum tier member will earn 4 UZOCoins for every INR 100 of eligible spends, net of taxes at participating Ginger Hotels."
        },
        {
          title: "A Platinum tier member will be eligible for a 2 hour early check-in and 2-hour late check-out, subject to availability."
        },
        {
          title: "Priority check-in and the convenience of an in-room check-in is subject to availability at the participating hotels."
        },
        {
          title: "Exclusive Member Rates",
          subItems: [
            "20% Savings on Best Available Rates (BAR) through the year for room reservations applicable for Room only and Breakfast inclusive rates on direct bookings.",
            "A valid Membership number should be provided at the time of booking for further verification during check-in.",
            "The offer is available at participating UZO, SeleQtions, Gateway, Vivanta, Ginger Hotels and ama Stays & Trails only and is subject to room availability.",
            "Maximum Length of stay at any of the participating hotels is 30 nights.",
            "Members are eligible to earn member points/UZOCoins only on direct bookings made via UZO Website, UZO Reservation Worldwide, UZO Regional Reservation Office or Hotel Reservation Office.",
            "All Terms and Conditions of the UZO PASS Member Program will apply."
          ],
          link: {
            text: "here",
            url: "/"
          }
        },
        {
          title: "Unlimited Upgrade E-Vouchers: Enjoy complimentary upgrade E-Vouchers to the next category of room booked.",
          subItems: [
            "Each of the upgrade benefits are applicable for a complimentary upgrade to the next category of room booked for a maximum of 20 room nights for up to 05 consecutive nights.",
            "None of the upgrade E-Vouchers will be applicable towards an upgrade to a room category higher than a base category suite.",
            "One upgrade E-Voucher is applicable towards one upgrade for one room only, per stay.",
            "For the E-Voucher to be applicable, the room must be booked in the name of the Member.",
            "Government taxes/levies if applicable, are payable by the Member directly at the participating hotel."
          ]
        },
        {
          title: "4 upgrade E-Vouchers to UZO Classic rooms",
          subItems: [
            "This upgrade does not include airport transfer/s and any other service deemed as an outsourced service by the participating hotel.",
            "UZO Classic room benefits are only applicable to the occupants of this room category.",
            "The hotel management reserves the right to restrict entry to the UZO Classic lounge.",
            "UZO Classic rules and regulations will apply.",
            "Upgrades are subject to availability at the time of check-in.",
            "These E-Vouchers are non-transferable and their validity cannot be extended."
          ]
        },
        {
          title: "20% Savings on Spa",
          subItems: [
            "This benefit entitles members to a discount at Spas across UZO, SeleQtions, Gateway and Vivanta hotels.",
            "This offer is not applicable on purchase of any retail products.",
            "A valid UZO Pass Membership number and/or mobile number must be provided.",
            "Government taxes/levies must be paid as applicable, on the total bill value.",
            "The Member must be present to avail any such benefit."
          ]
        },
        {
          title: "10% Savings on Food & Beverage (including alcohol)",
          subItems: [
            "This benefit entitles Members to Food & Beverage discount (including alcohol), at participating restaurants.",
            "The benefit is applicable on all Food & Beverage outlets, including in-room dining and take away orders.",
            "A valid UZO Pass Membership number and/or mobile number must be provided.",
            "Government taxes/levies must be paid as applicable, on the total bill value.",
            "The Member must be present to avail any such benefit."
          ]
        },
        {
          title: "Happy Hours at designated lounge/bars across all participating hotels",
          subItems: [
            "Complimentary alcohol hours for the Member and partner only, whilst the member is staying in-house.",
            "This benefit is applicable on alcoholic and non-alcoholic beverages only and will entitle the Member to one complimentary round of drinks.",
            "This benefit is valid on beverages that are served by a standard peg measure or by the glass.",
            "The last order under this benefit has to be placed by 8.00pm.",
            "Members must present their Membership number and/or room number beforehand to avail such benefit."
          ]
        },
        {
          title: "Member Points/UZOCoins can be redeemed and gifted in the form of UZO Experience Gift Cards to friends and/or family of the Member, for a minimum amount of INR 1000."
        },
        {
          title: "Tree of Life Resorts & Hotels are currently not eligible to Earn/Redeem UZOCoins under UZO Pass loyalty membership Program."
        },
        {
          title: "Food and Beverage (F&B) expense incurred during In-Room Dining, Dine-In and Takeaways at Ginger Hotels are currently not eligible to earn UZOCoins."
        },
        {
          title: "All UZO Pass Members benefits & vouchers are not applicable at Tree of Life Resorts & Hotels."
        }
      ],
      contact: {
        phone: "1800 11 4821",
        email: "platinum@uzohotels.com"
      }
    }
  };

  return (
    <div className={styles.termsConditionsContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.mainTitle}>General Terms and Conditions
          <button onClick={onClose} className={styles.closeButton}>
            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
          </button>
        </h1>
        <p className={styles.subtitle}>
          We welcome you to our website and related websites, and urge you to read the terms of use as outlined below.
        </p>
      </div>

      <div className={styles.membershipSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Membership Benefits</h2>
          <h2 className={styles.sectionTitle}>Terms and Conditions</h2>
          {/* <div className={styles.downloadLink}>
            <a href="https://cdn.sanity.io/files/ocl5w36p/prod4/0d91b0d58cd09d3f4c80e4ca5c55ac1983f96188.pdf" className={styles.downloadBtn}>
              <Download size={16} />
              <span>DOWNLOAD PDF</span>
            </a>
          </div> */}
        </div>

        <div className={styles.privilegesContainer}>
          {Object.entries(privilegesData).map(([key, section]) => (
            <div key={key} className={`${styles.privilegeSection} ${expandedSections[key] ? styles.expanded : ''}`}>
              <button
                className={styles.privilegeHeader}
                onClick={() => toggleSection(key)}
                aria-expanded={expandedSections[key]}
                aria-controls={`${key}-content`}
              >
                <h3 className={styles.privilegeTitle}>{section.title}</h3>
                <span className={styles.toggleIcon}>
                  {expandedSections[key] ? <ChevronUp size={25} /> : <ChevronDown size={25} />}
                </span>
              </button>

              <div
                id={`${key}-content`}
                className={`${styles.privilegeContent} ${expandedSections[key] ? styles.visible : ''}`}
              >
                <ul className={styles.privilegeItems}>
                  {section.items.map((item, index) => (
                    <li key={index} className={styles.privilegeItem}>
                      <p className={styles.itemTitle}>{item.title}</p>
                      {item.subItems && (
                        <ul className={styles.subItems}>
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className={styles.subItem}>
                              {subItem}
                              {index === 3 && item.link && subIndex === 0 && (
                                <Link href={item.link.url} className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
                                  {item.link.text}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.link && !item.subItems && (
                        <Link href={item.link.url} className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
                          {item.link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {section.contact && (
                  <div className={styles.contactInfo}>
                    <p>For Member Service Assistance, please call
                      <Link href={`tel:${section.contact.phone}`} className={styles.contactLink}>
                        {section.contact.phone}
                      </Link>
                      or write to us at
                      <Link href={`mailto:${section.contact.email}`} className={styles.contactLink}>
                        {section.contact.email}
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsCorporate;