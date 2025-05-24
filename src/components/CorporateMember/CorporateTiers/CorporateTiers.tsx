import React from 'react';
import styles from './CorporateTiers.module.css';
import { FaCrown, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import { ChevronRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CorporateTiers = () => {
  const tiers = [
    {
      name: 'PLATINUM',
      icon: <FaCrown className={styles.tierIcon} />,
      color: '#E5E4E2', // Platinum color
      imgUrl: "/icons/card1.png",
      cardNumber: "1111  1111  1111  1111",
      description: "UZO INNERCIRCLE",
    },
    {
      name: 'GOLD',
      icon: <FaMedal className={styles.tierIcon} />,
      color: '#FFD700', // Gold color
      imgUrl: "/icons/card2.png",
      cardNumber: "1111  1111  1111  1111",
      description: "UZO INNERCIRCLE",
    },
    {
      name: 'SILVER',
      icon: <FaAward className={styles.tierIcon} />,
      color: '#C0C0C0', // Silver color
      imgUrl: "/icons/card3.png",
      cardNumber: "1111  1111  1111  1111",
      description: "UZO INNERCIRCLE",

    },
    {
      name: 'COPPER',
      icon: <FaStar className={styles.tierIcon} />,
      color: '#B87333', // Copper color
      imgUrl: "/icons/card4.png",
      cardNumber: "1111  1111  1111  1111",
      description: "UZO INNERCIRCLE",

    },
  ];

  return (
    <>
      <section className={styles.container} id="loyalty.group-4-cards-with-comperative-specifications">
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <hr className={styles.divider} />
            <h2 className={styles.title}>
              <span>UZO One</span>
              <span>Corporate Tiers</span>
            </h2>
            <hr className={styles.divider} />
          </div>
          <p className={styles.subtitle}>
            Welcome to a world of tailored privileges and benefits, designed to enhance and enrich your experience.
          </p>
        </div>

        <div className={styles.tiersContainer} id="membershipSpecs">
          <div className={styles.tiersGrid}>
            {tiers.map((tier, index) => (
              <div key={index} className={styles.tierCard}>
                {/* <div className={styles.tierCircle} style={{ backgroundColor: tier.color }}>
                {tier.icon}
              </div> */}
                <Image src={tier.imgUrl} width={500} height={500} alt="Card" className={styles.imgCard} />
                <div className={styles.textOverlay}>
                  <p className={styles.cardNumber}>
                    <div>{tier.cardNumber}</div>
                    <div className={styles.expiry}>Exp: 12/24</div>
                  </p>
                  <p className={styles.description}>{tier.description}</p>
                  <h4 className={styles.tierName}>
                    <div>{tier.name}</div>
                    {/* <div className={styles.cardType}>UZO One</div> */}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Link href="/en-in/neupass/benefits" className={styles.benefitsButton}>
            VIEW BENEFITS
            <ChevronRight className={styles.buttonIcon} />
          </Link>
        </div>
      </section>
      <div>
        <ContactSupport />
      </div>
    </>
  );
};


const ContactSupport = () => (
  <div className={styles.containerContact}>
    <div className={styles.contentWrapperContact}>
      <div className={styles.contentContact}>
        <p className={styles.supportTextContact}>
          For any assistance please contact UZO One Customer Care at
        </p>

        <div className={styles.contactItemsContact}>
          <a href="tel:18002028282" className={styles.contactLinkContact}>
            <Phone className={styles.iconContact} size={16} />
            <span>1800 202 8211</span>
          </a>

          <span className={styles.separatorContact}>or</span>

          <a href="mailto:customercare@uzohotels.com" className={styles.contactLinkContact}>
            <Mail className={styles.iconContact} size={16} />
            <span>customercare@uzohotels.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);


export default CorporateTiers;