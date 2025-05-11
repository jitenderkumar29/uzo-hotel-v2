'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { galleryData, galleryDataTraveller, galleryDataView } from '@/app/data/gallery';
import GallerySectionContent from '../GallerySectionContent/GallerySectionContent';
import styles from './GallaryTabNavHeader.module.css';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const photoTabs = ['Property Photos', 'Traveller Photos', 'View'];

export default function GalleryTabNavHeader() {
  const [selectedPhotoTab, setSelectedPhotoTab] = useState(photoTabs[0]);
  const [selectedContentTab, setSelectedContentTab] = useState(galleryData[0].id);
  const [isScrolling, setIsScrolling] = useState(false);
  const [, setAllSectionsLoaded] = useState(false); // Track if all sections are loaded
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Initialize section refs and mark all sections as loaded
  useEffect(() => {
    sectionRefs.current = galleryData.map(section =>
      document.getElementById(section.id)
    );

    // Mark all sections as loaded after a short delay
    const timer = setTimeout(() => {
      setAllSectionsLoaded(true);
    }, 500); // Short delay to ensure all content is rendered

    return () => clearTimeout(timer);
  }, []);

  const getScrollOffset = () => {
    return headerRef.current?.offsetHeight ?? 100;
  };

  const handleTabClick = (sectionId: string) => {
    // Clear any pending timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Immediately update the active tab
    setSelectedContentTab(sectionId);
    setIsScrolling(true);

    const section = document.getElementById(sectionId);
    if (!section) return;

    const offset = getScrollOffset();
    const sectionTop = section.offsetTop - offset;

    // Scroll to the selected section
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });

    // Reset scrolling flag after animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const updateActiveTab = () => {
    if (isScrolling) return;

    const offset = getScrollOffset();
    const currentPosition = window.scrollY + offset;

    let activeSection = galleryData[0].id;
    let minDistance = Infinity;

    sectionRefs.current.forEach(section => {
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      // If we're within the section bounds
      if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
        activeSection = section.id;
        return;
      }

      // Otherwise, find the closest section
      const distanceFromTop = Math.abs(currentPosition - sectionTop);
      if (distanceFromTop < minDistance) {
        minDistance = distanceFromTop;
        activeSection = section.id;
      }
    });

    if (activeSection !== selectedContentTab) {
      setSelectedContentTab(activeSection);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        updateActiveTab();
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case page loads with hash
    updateActiveTab();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling, selectedContentTab]);

  return (
    <>
      <div className={styles.headerWrapper} ref={headerRef}>
        <div className={styles.headerBody}>
          {/* Top Bar */}
          <div className={styles.topBar}>
            <div className={styles.backAndTitle}>
              {/* <span className={styles.backIcon} onClick={() => router.back()}>&larr;</span> */}
              <FontAwesomeIcon icon={faArrowLeft} className={styles.backIcon} onClick={() => router.back()} />
              <h2 className={styles.title}>Radisson Blu Plaza Delhi Airport</h2>
            </div>
            <button className={styles.selectRoom}>SELECT ROOM</button>
          </div>

          {/* Photo Tabs */}
          <ul className={styles.photoTabs}>
            {photoTabs.map(tab => (
              <li
                key={tab}
                className={`${styles.photoTabItem} ${selectedPhotoTab === tab ? styles.selected : ''}`}
                onClick={() => setSelectedPhotoTab(tab)}
              >
                {tab === 'View' ? (
                  <span className={styles.view360}>
                    {/* <Image src="https://promos.makemytrip.com/Hotels_product/Listing/3603x.png" alt="View" width={30} height={30} /> */}
                    View
                    <Image src="https://promos.makemytrip.com/altaccoimages/newicon3.gif" alt="new" className={styles.newIcon} width={30} height={15} />
                  </span>
                ) : (
                  tab
                )}
              </li>
            ))}
          </ul>

          {/* Content Tabs */}
          <div className={styles.contentTabsWrapper}>
            <ul className={styles.contentTabs}>
              {selectedPhotoTab === "Property Photos" && (
                galleryData.map(section => (
                  <li
                    key={section.id}
                    className={`${styles.contentTabItem} ${selectedContentTab === section.id ? styles.selected : ''}`}
                    onClick={() => handleTabClick(section.id)}
                  >
                    {section.title}
                  </li>
                ))
              )}
              {selectedPhotoTab === "Traveller Photos" && (
                galleryDataTraveller.map(section => (
                  <li
                    key={section.id}
                    className={`${styles.contentTabItem} ${selectedContentTab === section.id ? styles.selected : ''}`}
                    onClick={() => handleTabClick(section.id)}
                  >
                    {section.title}
                  </li>
                ))
              )}
              {selectedPhotoTab === "View" && (
                galleryDataView.map(section => (
                  <li
                    key={section.id}
                    className={`${styles.contentTabItem} ${selectedContentTab === section.id ? styles.selected : ''}`}
                    onClick={() => handleTabClick(section.id)}
                  >
                    {section.title}
                  </li>
                ))
              )}
            </ul>
          </div>

        </div>
      </div>

      {/* Content sections - Always visible for scrolling */}
      {/* <div className={styles.gallerySectionsContainer}>
        {galleryData.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`${styles.gallerySection} ${selectedContentTab === section.id ? styles.activeSection : ''}`}
            ref={el => {
              sectionRefs.current[index] = el;
            }}
            style={{
              scrollMarginTop: `${getScrollOffset()}px`,
              display: 'block'
            }}
            >
            <GallerySectionContent section={section} />
          </section>
        ))}
      </div> */}
      {/* // All sections are always visible for scrolling */}
      {/* <h3 className={styles.sectionTitle}>{section.title}</h3> */}
      {/* {selectedContentTab === section.id && (<GallerySectionContent section={section} />)} */}

      {selectedPhotoTab === "Property Photos" && (
        <div className={styles.gallerySectionsContainer}>
          {galleryData.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={`${styles.gallerySection} ${selectedContentTab === section.id ? styles.activeSection : ''}`}
              ref={el => {
                sectionRefs.current[index] = el;
              }}
              style={{
                scrollMarginTop: `${getScrollOffset()}px`,
                // All sections are always visible for scrolling
                display: 'block'
              }}
            >
              {/* <h3 className={styles.sectionTitle}>{section.title}</h3> */}
              {/* {selectedContentTab === section.id && (<GallerySectionContent section={section} />)} */}
              <GallerySectionContent section={section} />
            </section>
          ))}
        </div>
      )}
      {selectedPhotoTab === "Traveller Photos" && (
        <div className={styles.gallerySectionsContainer}>
          {galleryDataTraveller.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={`${styles.gallerySection} ${selectedContentTab === section.id ? styles.activeSection : ''}`}
              ref={el => {
                sectionRefs.current[index] = el;
              }}
              style={{
                scrollMarginTop: `${getScrollOffset()}px`,
                // All sections are always visible for scrolling
                display: 'block'
              }}
            >
              {/* <h3 className={styles.sectionTitle}>{section.title}</h3> */}
              {/* {selectedContentTab === section.id && (<GallerySectionContent section={section} />)} */}
              <GallerySectionContent section={section} />
            </section>
          ))}
        </div>
      )}
      {selectedPhotoTab === "View" && (
        <div className={styles.gallerySectionsContainer}>
          {galleryDataView.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={`${styles.gallerySection} ${selectedContentTab === section.id ? styles.activeSection : ''}`}
              ref={el => {
                sectionRefs.current[index] = el;
              }}
              style={{
                scrollMarginTop: `${getScrollOffset()}px`,
                // All sections are always visible for scrolling
                display: 'block'
              }}
            >
              {/* <h3 className={styles.sectionTitle}>{section.title}</h3> */}
              {/* {selectedContentTab === section.id && (<GallerySectionContent section={section} />)} */}
              <GallerySectionContent section={section} />
            </section>
          ))}
        </div>
      )}

    </>
  );
}