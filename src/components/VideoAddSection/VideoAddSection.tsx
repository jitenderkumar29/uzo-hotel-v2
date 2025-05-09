"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './VideoAddSection.module.css';
import Image from "next/image";
import rammandir from "@/assets/images/rammandir.jpg";
import thumbnail1 from "@/assets/images/thumbnail1.jpg";
import thumbnail2 from "@/assets/images/thumbnail2.jpg";
import thumbnail3 from "@/assets/images/thumbnail3.jpg";
import thumbnail4 from "@/assets/images/thumbnail4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const VideoAddSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setIsHovering] = useState(false);

  const videos = [
    { title: 'Explore Seychelles', src: '/videos/video1.mp4', thumbnail: thumbnail1 },
    { title: 'Visit Goa', src: '/videos/video2.mp4', thumbnail: thumbnail2 },
    { title: 'Magical Maldives', src: '/videos/video3.mp4', thumbnail: thumbnail3 },
    { title: 'Discover Nainital', src: '/videos/video4.mp4', thumbnail: thumbnail4 },
  ];

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      setIsPlaying(prev => !prev);
    } else {
      setActiveIndex(index);
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const goToNextVideo = () => {
    const nextIndex = (activeIndex + 1) % videos.length;
    setActiveIndex(nextIndex);
    setIsPlaying(true);
  };

  const goToPrevVideo = () => {
    const prevIndex = (activeIndex - 1 + videos.length) % videos.length;
    setActiveIndex(prevIndex);
    setIsPlaying(true);
  };

  useEffect(() => {
    const activeVideo = videoRefs.current[activeIndex];
    if (!activeVideo) return;

    if (isPlaying) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(error => {
        console.error("Video play failed:", error);
        setIsPlaying(false);
      });
    } else {
      activeVideo.pause();
    }

    return () => {
      activeVideo.pause();
    };
  }, [isPlaying, activeIndex]);

  return (
    <div className={styles.container} >
      <div className={styles.leftContent}>
        <h1>
          Discover luxurious enjoyful journey<br />
          of inspiration with UZO hotels where<br />
          discovery meets your dreams
          <br />
          <button className={styles.exploreBtn}>Explore</button>

        </h1>


        <div className={styles.newsCard}>
          <div className={styles.newsText}>
            <h3>Uzo Hotels launches Exclusive Direct Flights Between</h3>
            <p>Indore and Bhubaneswar</p>
            <span className={styles.date}>01-May-25</span>
            <a href="#" className={styles.viewMore}>View more</a>
          </div>
          <div className={styles.newsImg}>
            <Image
              src={rammandir}
              alt="Flight route"
              width={100}
              height={100}
              className={styles.newsImage}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.videoStackContainer}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={`${styles.videoCard} ${index === activeIndex ? styles.activeCard : styles.inactiveCard}`}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => index === activeIndex && setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              zIndex: index === activeIndex ? 10 : videos.length + index,
              transform: index === activeIndex
                ? 'rotate(0deg) translateX(0) scale(1.05)'
                : index < activeIndex
                  ? 'rotate(5deg) translateX(10px)'
                  : 'rotate(10deg) translateX(20px)'
              // ? 'rotate(0deg) translateX(0) scale(1.05)'
              // : index < activeIndex
              //   ? 'rotate(-6deg) translateX(-20px)'
              //   : 'rotate(6deg) translateX(20px)'
            }}
          >
            <video
              ref={el => { videoRefs.current[index] = el }}
              src={video.src}
              className={styles.video}
              muted
              playsInline
              loop={false}
              onEnded={handleVideoEnd}
              style={{
                opacity: index === activeIndex && isPlaying ? 1 : 0,
                display: 'block'
              }}
            />

            <div className={styles.thumbnailContainer} style={{
              opacity: index !== activeIndex || !isPlaying ? 1 : 0
            }}>
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className={styles.thumbnail}
                priority={index === activeIndex}
              />
              {index === activeIndex && (
                <div className={styles.playButton}>
                  {isPlaying ? '❚❚' : '▶'}
                </div>
              )}
            </div>

            <div className={styles.videoTitle}>{video.title}</div>
            {/* <div className={styles.videoTitle}>X</div> */}
            <span onClick={(e) => {
              e.stopPropagation();
              goToNextVideo();
            }}><FontAwesomeIcon className={styles.closeIcon} icon={faTimes} /></span>

            {index === activeIndex && (
              <div className={styles.videoControls}>
                <button
                  className={styles.navButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevVideo();
                  }}
                  aria-label="Previous video"
                >
                  ◀
                </button>
                <button
                  className={styles.playPauseButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(prev => !prev);
                  }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? '❚❚' : '▶'}
                </button>
                <button
                  className={styles.navButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextVideo();
                  }}
                  aria-label="Next video"
                >
                  ▶
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div >
  );
};

export default VideoAddSection;
{/* <h1>
  Embark on a journey of inspiration<br />
  with <span className={styles.blue}>IndiGo</span>, where discovery meets the sky.
</h1> */}