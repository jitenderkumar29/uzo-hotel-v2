import { useState, useEffect, useCallback } from 'react';
import { FiSearch, FiX, FiCopy, FiCheck } from 'react-icons/fi';
import styles from './OfferCards.module.css';
import { FilterCategoryInterface, OfferInterface } from '@/interfaces';
import Image from 'next/image';



interface OfferCardsProps {
  offers: OfferInterface[];
  filterCategories: FilterCategoryInterface[];
}

const OfferCards = ({ offers, filterCategories }: OfferCardsProps) => {
  const [filteredOffers, setFilteredOffers] = useState<OfferInterface[]>(offers);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);


  // useEffect(() => {
  //   filterOffers();
  // }, [searchTerm, activeFilters, offers]);
  // console.log('filterCategories', filterCategories.length);
  const filterOffers = useCallback(() => {
    let result = [...offers];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (offer) =>
          offer.title.toLowerCase().includes(term) ||
          offer.description.toLowerCase().includes(term) ||
          (offer.promoCode && offer.promoCode.toLowerCase().includes(term))
      );
    }

    // Apply category filters
    if (activeFilters.length > 0) {
      result = result.filter((offer) =>
        activeFilters.some((filter) => offer.categories.includes(filter))
      );
    }

    setFilteredOffers(result);
  }, [searchTerm, activeFilters, offers]);

  useEffect(() => {
    filterOffers();
  }, [searchTerm, activeFilters, offers, filterOffers]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const resetFilters = () => {
    setActiveFilters([]);
    setSearchTerm('');
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Amazing Travel Offers and Deals</h1>
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search offers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className={styles.clearSearch}
                onClick={() => setSearchTerm('')}
              >
                <FiX />
              </button>
            )}
          </div>
          {/* <button
            className={styles.filterButton}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
          </button> */}
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Filters sidebar - shown on desktop and when toggled on mobile */}
        {filterCategories.length > 0 && (<div className={`${styles.filtersSidebar} ${showFilters ? styles.showFilters : ''}`}>
          <div className={styles.filtersHeader}>
            <h3>Special offers</h3>
            <button className={styles.resetButton} onClick={resetFilters}>
              Reset
            </button>
            <button
              className={styles.closeFilters}
              onClick={() => setShowFilters(false)}
            >
              <FiX />
            </button>
          </div>

          <div className={styles.filtersList}>
            {filterCategories.map((category) => (
              <div key={category.value} className={styles.filterItem}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={activeFilters.includes(category.value)}
                    onChange={() => toggleFilter(category.value)}
                  />
                  <span className={styles.checkmark}></span>
                  <span className={styles.filterLabel}>{category.label}</span>
                </label>
              </div>
            ))}
          </div>

          <button
            className={styles.applyFilters}
            onClick={() => setShowFilters(false)}
          >
            Apply Filters
          </button>
        </div>)}

        {/* Offers grid */}
        <div className={styles.offersGrid}>
          {filteredOffers.length === 0 ? (
            <div className={styles.noResults}>
              No Special Offers Found. Search Again..!!
            </div>
          ) : (
            filteredOffers.map((offer) => (
              <a
                key={offer.id}
                href={offer.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.offerCard}
              >
                <div className={styles.imageContainer}>
                  <Image src={offer.imageUrl} alt={offer.title} height={400} width={400} />
                </div>
                <div className={styles.offerDetails}>
                  <h3 className={styles.offerTitle}>{offer.title}</h3>
                  <p className={styles.offerDescription}>{offer.description}</p>
                </div>
                <div className={styles.offerMeta}>
                  {offer.bookingPeriod && (
                    <div className={styles.bookingPeriod}>
                      <div>
                        <strong>BOOKING PERIOD</strong>
                      </div>
                      <div>{offer.bookingPeriod}</div>
                    </div>
                  )}
                  {!offer.bookingPeriod && (
                    <div className={styles.bookingPeriod}>
                      <div>
                        <strong>Book Now</strong>
                      </div>
                    </div>
                  )}
                  {offer.promoCode && (
                    <div
                      className={styles.promoCode}
                      onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard(offer.promoCode!);
                      }}
                    >
                      <div className={styles.promoLabel}>Promocode
                        <span className={styles.copyIcon}>
                          {copiedCode === offer.promoCode ? (
                            <FiCheck className={styles.copiedIcon} />
                          ) : (
                            <FiCopy />
                          )}
                        </span>
                      </div>
                      <div className={styles.code}>
                        <span className={styles.codeText}>{offer.promoCode}</span>

                      </div>

                    </div>
                  )}
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default OfferCards;