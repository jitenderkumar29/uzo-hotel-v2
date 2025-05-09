'use client';

import { GallerySection, GalleryItem } from '@/app/data/gallery';
import Image from 'next/image';
import styles from './GallerySectionContent.module.css';
import { useRef, useState } from 'react';

interface GallerySectionContentProps {
  section: GallerySection;
}

export default function GallerySectionContent({ section }: GallerySectionContentProps) {
  const [expandedItem, setExpandedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleItemClick = (item: GalleryItem, index: number) => {
    if (item.title?.startsWith('+')) {
      console.log(`Show ${item.title} for ${section.title}`);
    } else {
      setExpandedItem(item);
      setCurrentIndex(index);
    }
  };

  const closeExpandedView = () => {
    setExpandedItem(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const navigateItem = (direction: 'prev' | 'next') => {
    const items = section.items.filter(item => !item.title?.startsWith('+'));
    let newIndex = currentIndex;

    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + items.length) % items.length;
    } else {
      newIndex = (currentIndex + 1) % items.length;
    }

    setCurrentIndex(newIndex);
    setExpandedItem(items[newIndex]);

    // Reset video playback if navigating to a new video
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (items[newIndex].type === 'video') {
        videoRef.current.play();
      }
    }
  };

  const filteredItems = section.items.filter(item => !item.title?.startsWith('+'));

  return (
    <>
      <h2 className={styles.sectionTitle}>{section.title}</h2>

      <div className={styles.galleryGrid}>
        {section.items.map((item, index) => (
          <div
            key={item.id}
            className={styles.galleryItem}
            onClick={() => handleItemClick(item, index)}
          >
            {item.type === 'video' ? (
              <div className={styles.videoContainer}>
                <video
                  src={item.url}
                  poster={item.thumbnail}
                  className={styles.media}
                  muted
                  loop
                />
                <div className={styles.playIcon}>▶</div>
              </div>
            ) : (
              <>
                <Image
                  src={item.url}
                  alt={item.alt || ''}
                  className={styles.media}
                  width={300}
                  height={225}
                  loading="lazy"
                />
                {item.title && (
                  <div className={styles.itemTitle}>{item.title}</div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {expandedItem && (
        <div className={styles.modalOverlay} onClick={closeExpandedView}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeExpandedView}>
              &times;
            </button>

            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={(e) => {
                e.stopPropagation();
                navigateItem('prev');
              }}
            >
              &lt;
            </button>

            {expandedItem.type === 'video' ? (
              <video
                ref={videoRef}
                src={expandedItem.url}
                className={styles.expandedMedia}
                controls
                autoPlay
              />
            ) : (
              <Image
                src={expandedItem.url}
                alt={expandedItem.alt || ''}
                className={styles.expandedMedia}
                width={800}
                height={600}
              />
            )}

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={(e) => {
                e.stopPropagation();
                navigateItem('next');
              }}
            >
              &gt;
            </button>

            <p className={styles.caption}>
              {expandedItem.alt || expandedItem.title}
              <span className={styles.counter}>
                {currentIndex + 1} / {filteredItems.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}