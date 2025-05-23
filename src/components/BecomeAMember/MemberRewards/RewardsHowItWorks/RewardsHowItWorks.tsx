'use client';
import React, { useState, useEffect } from 'react';
import styles from './RewardsHowItWorks.module.css';
import { RewardStep } from '@/interfaces';
import { HandCoins, Plane, Sparkles, Star } from 'lucide-react';

const RewardsHowItWorks: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps: RewardStep[] = [
    {
      title: "Join for free & enjoy benefits from day 1",
      description: "Enjoy member only benefits right from the first day and get easy access to Premium after only 3 stays/5 nights.",
      icon: "icon-member",
      href: "/en-us/radisson-rewards/join"
    },
    {
      title: "Book and start earning",
      description: "Book your next stay at any of our more than 810 Uzo Hotels in Europe, the Middle East, Africa, or Asia Pacific.",
      icon: "icon-earn",
      href: "/en-us/rewards/earn"
    },
    {
      title: "Elevate your stay",
      description: "Enhance your travel experience with upgrades and exclusive member only discounts.",
      icon: "icon-discount",
      href: "javascript:void(0)"
    },
    {
      title: "Pay with points",
      description: "Use your points to elevate your stay. Paying with points is not only easy and flexible but, ensures you always get the best price.",
      icon: "icon-points",
      href: "/en-us/rewards/redeem"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setActiveSlide(prev => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide(prev => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="rewards-member-benefits" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How it works</h2>
          <p className={styles.description}>
            UZO Rewards members get access to a wide range of truly relevant member only benefits.
            Enjoy easy earning and the flexibility to choose how and when you want to be rewarded.
            Getting rewarded has never been easier!
          </p>
        </div>

        {isMobile ? (
          <div className={styles.mobileCarousel}>
            <div className={styles.carouselContent}>
              <button className={styles.navButton} onClick={handlePrev} aria-label="Previous">
                <span className={`${styles.arrow} ${styles.left}`}></span>
              </button>

              <div className={styles.slide}>
                <a className={styles.card} href={steps[activeSlide].href}>
                  {/* <div className={`${styles.icon} ${styles[steps[activeSlide].icon]}`}></div> */}
                  <h5>{steps[activeSlide].title}</h5>
                  <p>{steps[activeSlide].description}</p>
                </a>
              </div>

              <button className={styles.navButton} onClick={handleNext} aria-label="Next">
                <span className={`${styles.arrow} ${styles.right}`}></span>
              </button>
            </div>
            <div className={styles.dots}>
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeSlide ? styles.active : ''}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className={styles.desktopGrid}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={styles.gridItem}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <a className={styles.card} href={step.href}>
                    {/* <div className={`${styles.icon} ${styles[step.icon]}`}></div> */}
                    {step.icon === "icon-member" && <Star className={styles.iconCard} />}
                    {step.icon === "icon-earn" && <HandCoins className={styles.iconCard} />}
                    {step.icon === "icon-discount" && <Plane className={styles.iconCard} />}
                    {step.icon === "icon-points" && <Sparkles className={styles.iconCard} />}
                    <h5>{step.title}</h5>
                    <p>{step.description}</p>

                  </a>
                  {/* {index < steps.length && (
                    <div className={`${styles.guideLine} ${hoveredCard === index ? styles.active : ''}`}>
                      <div className={styles.line}></div>
                      <div className={styles.dots}></div>
                      <div className={styles.line}></div>
                    </div>
                  )} */}
                </div>
              ))}
            </div>

            <div className={styles.desktopDots}>
              {steps.map((_, index) => (
                <React.Fragment key={index}>
                  <button
                    className={`${styles.desktopDot} ${hoveredCard === index ? styles.active : ''}`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => window.location.href = steps[index].href}
                    aria-label={`View ${steps[index].title}`}
                  />
                  {index < steps.length - 1 && (
                    <span className={styles.dotDivider}></span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* <div className={styles.desktopDots}>
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.desktopDot} ${hoveredCard === index ? styles.active : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => window.location.href = steps[index].href}
                  aria-label={`View ${steps[index].title}`}
                />
              ))}
            </div> */}
          </>
        )}
      </div>
    </section>
  );
};

export default RewardsHowItWorks;