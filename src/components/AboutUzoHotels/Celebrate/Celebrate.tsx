import Image from "next/image";
import styles from "./Celebrate.module.css";
import { FaCheck } from "react-icons/fa";

const Celebrate = () => {
  return (
    <section className={styles.celebrateSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>THE PERFECT HONEYMOON</h2>
          <p className={styles.description}>
            We invite couples who book their wedding reception at a UZO Hotels property to enjoy a complimentary honeymoon night at another one of our hotels and resorts worldwide. Couples will also receive a host of other benefits to use whether they honeymoon with us for only one night, or several. These benefits include:
          </p>
          <ul className={styles.benefits}>
            <li><FaCheck className={styles.icon} /> A complimentary honeymoon night</li>
            <li><FaCheck className={styles.icon} /> A complimentary upgrade <em>(subject to availability)</em></li>
            <li><FaCheck className={styles.icon} /> Full breakfast for two daily</li>
            <li><FaCheck className={styles.icon} /> VIP status</li>
            <li><FaCheck className={styles.icon} /> Early check-in and late check-out</li>
            <li><FaCheck className={styles.icon} /> A complimentary welcome drink upon arrival</li>
            <li><FaCheck className={styles.icon} /> USD 100 spa voucher</li>
          </ul>
          <p className={styles.bookInfo}>
            To book, simply speak to the wedding coordinator during the wedding planning process.
          </p>
          {/* <p className={styles.terms}>
            <em>
              Terms & Conditions: <br />
              Weddings and Honeymoons by Mandarin Oriental is not available at Mandarin Oriental, Bodrum, Mandarin Oriental Jumeira, Dubai, Mandarin Oriental, Hong Kong, Mandarin Oriental Ritz, Madrid, Mandarin Oriental, Singapore and Mandarin Oriental, Taipei. Certain restrictions apply. Please check with your wedding hotel for details.
            </em>
          </p> */}
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="https://images.pexels.com/photos/5085332/pexels-photo-5085332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="The perfect honeymoon"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Celebrate;
