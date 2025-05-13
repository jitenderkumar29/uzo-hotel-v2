import React, { useState } from 'react';
import styles from './PropertyHotelAddons.module.css';

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
      id: 'lunch-dinner',
      title: 'Lunch/Dinner',
      price: 3511,
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
    </div>
  );
};

export default PropertyHotelAddons;