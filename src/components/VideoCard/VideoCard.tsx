"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './VideoCard.module.css';
import Image from "next/image";
import { StaticImageData } from "next/image";
import plane from "@/assets/images/plane.jpg";
import thumbnail1 from "@/assets/images/thumbnail1.jpg";
import thumbnail2 from "@/assets/images/thumbnail2.jpg";
import thumbnail3 from "@/assets/images/thumbnail3.jpg";
import thumbnail4 from "@/assets/images/thumbnail4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface VideoItem {
  title: string;
  src: string;
  thumbnail: StaticImageData;
}

const defaultVideos = [
  { title: 'Explore Seychelles', src: '/videos/video1.mp4', thumbnail: thumbnail1 },
  { title: 'Visit Goa', src: '/videos/video2.mp4', thumbnail: thumbnail2 },
  { title: 'Magical Maldives', src: '/videos/video3.mp4', thumbnail: thumbnail3 },
  { title: 'Discover Nainital', src: '/videos/video4.mp4', thumbnail: thumbnail4 },
];

const VideoCard = ({ videos = defaultVideos }: { videos?: VideoItem[] }) => {
  // State management
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Refs
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const controlsTimeout = useRef<NodeJS.Timeout | null>(null);

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videos.map((_, i) => videoRefs.current[i] ?? null);
  }, [videos]);

  // Reset controls visibility timer
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  // Toggle mute/unmute
  const toggleMute = useCallback(() => {
    const video = videoRefs.current[activeIndex];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
    resetControlsTimer();
  }, [activeIndex, resetControlsTimer]);

  // Video navigation handler
  const navigateVideo = useCallback((direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (activeIndex - 1 + videos.length) % videos.length
      : (activeIndex + 1) % videos.length;


    setActiveIndex(newIndex);
    setIsPlaying(true);
    resetControlsTimer();
  }, [activeIndex, videos.length, resetControlsTimer]);

  // Play/pause toggle
  const togglePlayPause = useCallback(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(e => console.error("Playback error:", e));
    }
    setIsPlaying(prev => !prev);
    resetControlsTimer();
  }, [activeIndex, isPlaying, resetControlsTimer]);

  // Card click handler
  const handleCardClick = useCallback((index: number) => {
    if (index === activeIndex) {
      togglePlayPause();
    } else {
      setActiveIndex(index);
      setIsPlaying(true);
    }
    resetControlsTimer();
  }, [activeIndex, togglePlayPause, resetControlsTimer]);

  // Initialize and cleanup
  useEffect(() => {
    resetControlsTimer();
    return () => {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    };
  }, [resetControlsTimer]);

  // Video playback management
  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (!currentVideo) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    currentVideo.addEventListener('play', handlePlay);
    currentVideo.addEventListener('pause', handlePause);

    if (isPlaying) {
      currentVideo.play().catch(e => console.error("Autoplay prevented:", e));
    }

    // Pause other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    return () => {
      currentVideo.removeEventListener('play', handlePlay);
      currentVideo.removeEventListener('pause', handlePause);
    };
  }, [activeIndex, isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          navigateVideo('prev');
          break;
        case 'ArrowRight':
          navigateVideo('next');
          break;
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'm':
          toggleMute();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateVideo, togglePlayPause, toggleMute]);

  // Render helpers
  const renderVideoCard = (video: VideoItem, index: number) => {
    const isActive = index === activeIndex;

    // const rotation = isActive ? 0 : index === 1 ? 5 : index === 2 ? 10 : index === 3 ? 15 : 5;

    // const rotation = isActive ? 0 : ((index + 1) * 5);
    // Will log: 0, 5, 10, 15 cyclically
    // const rotation = isActive ? 0 : (index % 4) * 5;
    const rotation = (index - activeIndex + videos.length) % videos.length * 5;
    console.log("rotation", rotation);

    return (
      <div
        key={index}
        className={`${styles.videoCard} ${isActive ? styles.activeCard : styles.inactiveCard}`}
        onClick={() => handleCardClick(index)}
        style={{
          // zIndex: isActive ? 20 : videos.length - index,
          // zIndex: isActive ? 20 : (index - activeIndex + videos.length) % videos.length,
          zIndex: isActive ? 20 : videos.length - ((index - activeIndex + videos.length) % videos.length),
          transform: `rotate(${rotation}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {isActive ? (
          <video
            ref={el => { videoRefs.current[index] = el }}
            src={video.src}
            className={styles.video}
            muted={isMuted}
            playsInline
            loop
          />
        ) : (
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className={styles.thumbnail}
            priority={index < 4}
          />
        )}
        <div className={styles.videoTitle}>{video.title}</div>
        <span onClick={() => navigateVideo('next')}><FontAwesomeIcon className={styles.closeButton} icon={faTimes} /></span>
      </div>
    );
  };

  const renderControls = () => (
    <div className={`${styles.controls} ${showControls ? styles.visible : ''}`}>
      <button
        onClick={() => navigateVideo('prev')}
        className={styles.controlButton}
        aria-label="Previous video"
        disabled={videos.length <= 1}
      >
        <PrevIcon />
      </button>

      <button
        onClick={togglePlayPause}
        className={styles.controlButton}
        aria-label={isPlaying ? "Pause" : "Play"}
        disabled={videos.length === 0}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>


      <button
        onClick={() => navigateVideo('next')}
        className={styles.controlButton}
        aria-label="Next video"
        disabled={videos.length <= 1}
      >
        <NextIcon />
      </button>

      <button
        onClick={toggleMute}
        className={styles.controlButton}
        aria-label={isMuted ? "Unmute" : "Mute"}
        disabled={videos.length === 0}
      >
        {isMuted ? <MuteIcon /> : <UnmuteIcon />}
      </button>
    </div>
  );

  return (
    <>
      <div className={styles.containerBody} >

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
              <h3>UZO Hotels Launches Exclusive Travel Booking Service</h3>
              <p>Domestic and International</p>
              {/* <span className={styles.date}>01-May-25</span> */}
              <a href="#" className={styles.viewMore}>Book Now</a>
            </div>
            <div className={styles.newsImg}>
              <Image
                src={plane}
                alt="Flight route"
                width={125}
                height={125}
                className={styles.newsImage}
                priority
              />
            </div>
          </div>
        </div>

        <div
          className={styles.container}
          onMouseMove={resetControlsTimer}
          onTouchStart={resetControlsTimer}
        >
          {videos.length > 0 ? (
            <div className={styles.videoStackContainer}>
              {videos.map(renderVideoCard)}
              {renderControls()}
            </div>
          ) : (
            <div className={styles.emptyState}>
              No videos available
            </div>
          )}
        </div>
      </div>
    </>);
};

// SVG Icon Components
const PrevIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="6" y="5" width="4" height="14" fill="currentColor" />
    <rect x="14" y="5" width="4" height="14" fill="currentColor" />
  </svg>
);

const NextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const MuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 10V14H7L12 19V5L7 10H3Z" fill="currentColor" />
    <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12Z" fill="currentColor" />
    <path d="M14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="currentColor" />
  </svg>
);

const UnmuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 10V14H7L12 19V5L7 10H3Z" fill="currentColor" />
    <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12Z" fill="currentColor" />
    <path d="M14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="currentColor" />
    <path d="M22 2L2 22" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default VideoCard;