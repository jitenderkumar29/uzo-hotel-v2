import React, { useState } from 'react';
import styles from './PropertyHotelAddons.module.css';
import Image from 'next/image';

interface AddonItem {
  id: string;
  title: string;
  price: number;
  description: string;
  selected: boolean;
}

const PropertyHotelAddons: React.FC = () => {
  const [addons, setAddons] = useState<AddonItem[]>([
    {
      id: 'Breakfast',
      title: 'Breakfast',
      price: 2511,
      description: 'Includes taxes and fees',
      selected: false,
    },
    {
      id: 'Breakfast-lunch',
      title: 'Breakfast + Lunch',
      price: 3011,
      description: 'Includes taxes and fees',
      selected: false,
    },
    {
      id: 'lunch-dinner',
      title: 'Lunch/Dinner',
      price: 3511,
      description: 'Includes taxes and fees',
      selected: false,
    },

    {
      id: 'All Meals',
      title: 'All Meals',
      price: 5511,
      description: 'Includes taxes and fees',
      selected: false,
    },
    {
      id: 'Cabs',
      title: 'Cabs for pickup and drop',
      price: 4511,
      description: 'Includes taxes and fees',
      selected: false,
    },

    // You can add more addons here if needed
  ]);

  const toggleAddon = (id: string) => {
    setAddons(addons.map(addon =>
      addon.id === id ? { ...addon, selected: !addon.selected } : addon
    ));
  };

  return (
    <>
      <div className={styles.reviewUpsellWrapper}>
        <div className={styles.upSellAddOns}>
          <div className={styles.upSellAddOnHeader}>
            <h2 className={styles.upSellAddOnHeading}>Addons</h2>
            <p className={styles.upSellAddOnSubHeading}>
              Price inclusive of taxes and <span>for all guests</span>
            </p>
          </div>

          <ul className={styles.upSellAddOnBody}>
            {addons.map((addon) => (
              <li key={addon.id} className={styles.addOnItem}>
                <div className={styles.addOnItemTextSection}>
                  <div className={styles.addOnContent}>
                    <p className={styles.addOnTitle}>
                      Add <b>{addon.title}</b> for <b>₹ {addon.price.toLocaleString()}</b> for all guests
                    </p>
                    <p className={styles.addOnDesc}>{addon.description}</p>
                  </div>
                </div>
                <button
                  className={`${styles.addOnPrice} ${addon.selected ? styles.selected : ''}`}
                  onClick={() => toggleAddon(addon.id)}
                >
                  {addon.selected ? 'REMOVE' : 'APPLY'}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <SalesBanner />
      </div>
    </>
  );
};

const SalesBanner: React.FC = () => {
  const [, setIsHovered] = React.useState(false);

  return (
    <div
      className={styles.cardWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <Image
          src="https://promos.makemytrip.com/Hotels_product/GI/big_sale.png"
          alt="Limited Period Offer"
          width={120}
          height={120}
          className={styles.mainImage}
        />
      </div>

      <div className={styles.contentWrapper}>
        <h5 className={styles.header}>Limited Period Offer</h5>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Exclusive discount available on this property. Book now to save BIG!
          </p>
        </div>

        {/* <button
          className={`${styles.ctaButton} ${isHovered ? styles.ctaHover : ''}`}
          aria-label="Book now"
        >
          Book Now
        </button> */}
      </div>
    </div>
  );
};


export default PropertyHotelAddons;