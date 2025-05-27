'use client';
import styles from './BecomeMemberCards.module.css';
import { FaCrown, FaMedal, FaAward } from 'react-icons/fa';
import Image from 'next/image';
const BecomeMemberCards = () => {
  // const [showCorporateBenefits, setShowCorporateBenefits] = useState(false);
  const tiers = [
    {
      name: 'UZO ONE Classic',
      icon: <FaCrown className={styles.tierIcon} />,
      color: '#E5E4E2',
      imgUrl: "/icons/card1.png",
      cardNumber: "1598472635847586",
      description: "Rahul Kumar Sharma",
      expiry: "12/31"
    },
    {
      name: 'UZO ONE Milania',
      icon: <FaMedal className={styles.tierIcon} />,
      color: '#FFD700',
      imgUrl: "/icons/card2.png",
      cardNumber: "1598763254147895",
      description: "Rahul Kumar Sharma",
      expiry: "12/36"
    },
    {
      name: 'UZO ONE Royal',
      icon: <FaAward className={styles.tierIcon} />,
      color: '#C0C0C0',
      imgUrl: "/icons/card3.png",
      cardNumber: "7532145896587412",
      description: "Rahul Kumar Sharma",
      expiry: "12/33"
    }
  ];

  return (
    <>
      <section className={styles.container} id="membership-cards">
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <hr className={styles.divider} />
            <h2 className={styles.title}>
              <span>UZO PASS Membership Cards</span>
            </h2>
            <hr className={styles.divider} />
          </div>
          <p className={styles.subtitle}>
            Welcome to a world of tailored privileges and benefits, designed to enhance your experience.
          </p>
        </div>

        <div className={styles.tiersContainer}>
          <div className={styles.tiersGrid}>
            {tiers.map((tier, index) => (
              <div key={index} className={styles.tierCard}>
                <Image src={tier.imgUrl} width={500} height={500} alt={`${tier.name} card`} className={styles.imgCard} />
                <div className={styles.textOverlay}>
                  <div>
                    <p className={styles.cardType}>
                      <div className={styles.cardName}>{tier.name}</div>
                      <div className={styles.expiry}>UZO PASS</div>
                    </p>
                  </div>
                  <div className={styles.cardBottom}>
                    <p className={styles.cardNumber}>
                      {tier.cardNumber.match(/.{1,4}/g)?.map((group, index) => (
                        <span key={index} className={styles.cardNumberGroup}>
                          {group}
                        </span>
                      ))}
                    </p>
                    <p className={styles.description}>
                      <div className={styles.expiry}>Valid From: 05/24</div>
                      <div className={styles.expiry}>Valid Thru: {tier.expiry}</div>
                    </p>
                    <h4 className={styles.tierName}>
                      <div>{tier.description}</div>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={styles.buttonContainer}>
          <button type='button' className={styles.benefitsButton} onClick={() => setShowCorporateBenefits(true)}>
            VIEW BENEFITS
            <ChevronRight className={styles.buttonIcon} />
          </button>
        </div>

        {showCorporateBenefits && (
          <OverlayContainer
            show={showCorporateBenefits}
            onClose={() => setShowCorporateBenefits(false)}>
            <CorporateBenefits onClose={() => setShowCorporateBenefits(false)} />
          </OverlayContainer>
        )} */}
      </section>

      {/* <div>
        <ContactSupport />
      </div> */}
    </>
  );
};

// const ContactSupport = () => (
//   <div className={styles.containerContact}>
//     <div className={styles.contentWrapperContact}>
//       <div className={styles.contentContact}>
//         <p className={styles.supportTextContact}>
//           For any assistance please contact UZO ONE Customer Care at
//         </p>

//         <div className={styles.contactItemsContact}>
//           <a href="tel:18002028282" className={styles.contactLinkContact}>
//             <Phone className={styles.iconContact} size={16} />
//             <span>1800 202 8211</span>
//           </a>

//           <span className={styles.separatorContact}>or</span>

//           <a href="mailto:customercare@uzohotels.com" className={styles.contactLinkContact}>
//             <Mail className={styles.iconContact} size={16} />
//             <span>customercare@uzohotels.com</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );

export default BecomeMemberCards;