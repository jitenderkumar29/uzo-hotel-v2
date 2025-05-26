'use client';
import Image from "next/image";
import styles from "./MemberRewards.module.css";
// import RewardsHowItWorks from "./RewardsHowItWorks/RewardsHowItWorks";
// import UzoRewards from "./UzoRewards/UzoRewards";

// interface MemberRewardsProps {
//   onClose: () => void;
// }

const MemberRewards = () => {
  return (
    <div className={styles.memberRewardsContainer}>
      <section className={styles.memberRewards}>
        <div className={styles.container}>
          <header className={styles.heading}>
            <h2 className={styles.title}>What sets us apart?</h2>
            <p className={styles.description}>
              UZO Rewards is designed to guarantee memorable moments by rewarding your loyalty with truly relevant benefits every day. As a UZO Rewards member, you unlock a world of exclusive benefits across a wide range of our hotels and destinations.
            </p>
          </header>

          <div className={styles.cardsWrapper}>
            {/* Card 1 - Bottom half-circle */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/uzoRewards.jpg"
                  alt="Radisson Rewards Brand - Priority Line"
                  width={600}
                  height={600}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlayBottom}>
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className={styles.bottomWave}
                  >
                    <path
                      d="M0,0 A250,100 0 0,0 500,0 L500,150 L0,150 Z"
                      fill="#68478c"
                    />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>Instant benefits from day 1</h5>
                  <p className={styles.cardText}>
                    Enjoy an upgraded experience and a more rewarding stay from the first day.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Top half-circle */}
            <div className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/uzoRewards2.jpg"
                  alt="Couple enjoying Free breakfast"
                  width={600}
                  height={600}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlayTop}>
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className={styles.topWave}
                  >
                    <path
                      d="M0,150 A250,100 0 0,1 500,150 L500,0 L0,0 Z"
                      fill="#000"
                    />
                  </svg>
                </div>
                <div className={styles.cardBodyTop}>
                  <h5 className={styles.cardTitleTop}>
                    Exclusive member rates & flexible redemption
                  </h5>
                  <p className={styles.cardText}>
                    Easy earning, easier redemption - enjoy flexibility like never before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <UzoRewards />
      <RewardsHowItWorks /> */}
    </div>
  );
};

// const JoinUzoCard = () => (
//   <div className={styles.joinUzoCard}>
//     <div className={styles.containerUzoCard}>
//       <div className={styles.textContentUzoCard}>
//         <h2>Join UZO Rewards</h2>
//         <p>
//           Elevate your stay and start enjoying our exclusive member only benefits today!{' '}
//           <a href="/signin" className={styles.signInLinkUzoCard}>Sign in</a>
//         </p>
//       </div>
//       <button className={styles.joinButtonUzoCard}>JOIN US</button>
//     </div>
//   </div>
// );


export default MemberRewards;
