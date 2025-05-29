'use client';
import styles from './WellnessUzoHotels.module.css';
import WellnessLatestNews from './WellnessLatestNews/WellnessLatestNews';

export default function WellnessUzoHotels() {
  return (
    <>
      {/* <div className={styles.headerTopBody}>
        <HeaderTop />
      </div>
      <div className={styles.HotelSearchBarTopBody}>
        <HotelSearchProvider>
          <HotelSearchBarTop />
        </HotelSearchProvider>
      </div> */}
      <BannerSection />
      <WellnessLatestNews />
    </>
  );
}

const BannerSection = () => (
  <div className={styles.container}>
    <section className={styles.masthead}>
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.videoBackground}
        >
          <source
            src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJzaXRlY29yZSJ9LCJwYXRoIjoibWFuZGFyaW4tb3JpZW50YWwtaG90ZWwtZ3JvdXBcL2ZpbGVcL3VKOU1hVUt2UTF2Mm14RkdVMkdDLm1wNCJ9:mandarin-oriental-hotel-group:CpljMIp8WPWOSSkzhJ2WJbUDB6Q3tABNMY-q6qf8mRE?format=mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <button className={styles.videoButton} aria-label="Pause video">
            <LucidePauseCircle size={32} color="#ffffff" />
          </button> */}
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Wellness & Spa</h1>
      </div>
    </section>
    <section className={styles.textBody}>
      <div className={styles.descConstainer}>
        <p className={styles.description}>
          UZO Oriental’s award-winning spa and wellness facilities are
          dedicated to providing an exceptional experience. Rooted in oriental
          philosophy and authentic rituals, our serene sanctuaries combine
          ancient techniques with modern innovations to create a personalised
          journey of renewal and tranquillity.
        </p>
      </div>
    </section>
  </div>
)