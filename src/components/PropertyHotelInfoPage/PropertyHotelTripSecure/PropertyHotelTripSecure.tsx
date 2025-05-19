'use client';
import React, { useState } from 'react';
import styles from './PropertyHotelTripSecure.module.css';
import { CircleAlert, Star } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import OverlayContainer from '@/components/OverlayContainer/OverlayContainer';
import PropertyHotelTripSecureMore from '../PropertyHotelTripSecureMore/PropertyHotelTripSecureMore';

interface BenefitItem {
  icon: string;
  title: string;
  subtitle: string;
  selected?: boolean;
}

const PropertyHotelTripSecure: React.FC = () => {
  const [isTripSecured, setIsTripSecured] = useState<boolean>(true);
  const [showTripSecured, setShowTripSecured] = useState<boolean>(false);
  const [benefits,] = useState<BenefitItem[]>([
    {
      icon: 'https://tripmoneycmsimgak.mmtcdn.com/img/Frame_1244833940_a6954650a7.png',
      title: 'Medical Assistance',
      subtitle: '24*7 SUPPORT',
      selected: false
    },
    {
      icon: 'https://tripmoneycmsimgak.mmtcdn.com/img/Frame_1244832945_2x_246407b009.png',
      title: 'Hotel Cancellation Refund',
      subtitle: 'Rs 10,000',
      selected: false
    },
    {
      icon: 'https://tripmoneycmsimgak.mmtcdn.com/img/Frame_1244832943_2x_9e9ab55fd4.png',
      title: 'Loss of Laptop/Tablet',
      subtitle: 'Rs 20,000',
      selected: true
    }
  ]);

  // const toggleBenefitSelection = (index: number) => {
  //   const updatedBenefits = [...benefits];
  //   updatedBenefits[index].selected = !updatedBenefits[index].selected;
  //   setBenefits(updatedBenefits);
  // };

  const handleTripSecureChange = (secure: boolean) => {
    setIsTripSecured(secure);
  };

  return (
    <div className={styles.widget} data-theme="insurance_widget_gi">
      <div className={styles.banner}>
        <Star />
        {/* <img
          src="https://tripmoneycmsimgak.mmtcdn.com/img/star_animation_6fe858c822.gif"
          width={44}
          height={44}
          alt="banner"
        /> */}
        <p className={styles.bannerText}>Over 1 million travellers secured in the last month</p>
      </div>

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Trip Secure</h1>
          <p className={styles.subtitle}>Worry Free Hotel stay</p>
        </div>
        <div className={styles.vendorLogos}>
          <Image
            src="/icons/acrossAssist.png"
            alt="vendor logo"
            className={styles.vendorLogo}
            height={50}
            width={50}
          />
          <Image
            src="/icons/tataAig.png"
            alt="vendor logo"
            className={styles.vendorLogo}
            height={50}
            width={50}
          />

        </div>
      </div>

      <div className={styles.benefitsCard}>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={styles.benefitItem}
          // className={`${styles.benefitItem} ${benefit.selected ? styles.selected : ''}`}
          // onClick={() => toggleBenefitSelection(index)}
          >
            <div className={styles.benefitIcon}>
              {/* <img src={benefit.icon} alt="benefit icon" width={16} height={16} /> */}
              <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
            </div>
            <p className={styles.benefitTitle}>{benefit.title}</p>
            <p className={styles.benefitSubtitle}>{benefit.subtitle}</p>
            {/* <div className={styles.checkbox}>
              {benefit.selected ? (
                <span className={styles.checked}>✓</span>
              ) : (
                <span className={styles.unchecked}></span>
              )}
            </div> */}
          </div>
        ))}
        <button className={styles.viewMoreBtn} onClick={() => setShowTripSecured(true)}>11 more benefits</button>
      </div>

      (showTripSecured && {
        <OverlayContainer
          show={showTripSecured}
          onClose={() => setShowTripSecured(false)}>
          <PropertyHotelTripSecureMore onClose={() => setShowTripSecured(false)} />
        </OverlayContainer>
      })

      <div className={styles.priceSection}>
        <div className={styles.priceDetails}>
          <p className={styles.price}>₹59</p>
          <p className={styles.priceLabel}>per person per night</p>
          <p className={styles.gstLabel}>18% GST Included</p>
        </div>
      </div>

      <div className={styles.selectionCard}>
        <ul className={styles.options}>
          <li className={styles.optionItem}>
            <input
              type="radio"
              id="SELECTED"
              name="tripSecure"
              checked={isTripSecured}
              onChange={() => handleTripSecureChange(true)}
              className={styles.radioInput}
            />
            <label htmlFor="SELECTED" className={styles.radioLabel}>
              <b>Yes,</b> secure my trip.
            </label>
          </li>
          <li className={styles.optionItem}>
            <input
              type="radio"
              id="NOT_SELECTED"
              name="tripSecure"
              checked={!isTripSecured}
              onChange={() => handleTripSecureChange(false)}
              className={styles.radioInput}
            />
            <label htmlFor="NOT_SELECTED" className={styles.radioLabel}>
              <b>No,</b> I will book without trip secure.
            </label>
          </li>
        </ul>

        {isTripSecured && (
          <div className={styles.successBanner}>
            <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
            {/* <img
              src="https://tripmoneycmsimgak.mmtcdn.com/img/green_Tick_Gradient_c107068118.png"
              width={20}
              height={20}
              alt="success"
            /> */}
            <p className={styles.successText}>
              Great! Your trip to Delhi is <span className={styles.highlight}>secured for 2 days & 2 travellers!</span>
            </p>
          </div>
        )}
        {!isTripSecured && (
          <div className={styles.notSecureBanner}>
            {/* <img
              src="https://tripmoneycmsimgak.mmtcdn.com/img/green_Tick_Gradient_c107068118.png"
              width={20}
              height={20}
              alt="success"
            /> */}
            <CircleAlert className={styles.notSecureIcon} />
            <p className={styles.notSecure}>
              Explore the benefits before making your final decision! Secure your trip and travel worry-free.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyHotelTripSecure;