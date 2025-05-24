'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './MemberNavBar.module.css';
import MemberRewards from '../MemberRewards/MemberRewards';
import MemberBenefits from '../MemberBenefits/MemberBenefits';
import EarnRewards from '../EarnRewards/EarnRewards';

const MemberNavBar = () => {
  const [activeItem, setActiveItem] = useState('uzoRewards');
  const [, setShowRewards] = useState(true); // State to control MemberRewards visibility
  const [, setShowLeftArrow] = useState(false);
  const [, setShowRightArrow] = useState(true);
  const menuRef = useRef<HTMLUListElement>(null);

  const menuItems = [
    { id: 'uzoRewards', label: 'UZO Rewards', href: '/rewards' },
    { id: 'memberBenefits', label: 'Member Benefits', href: '/rewards/benefits' },
    { id: 'earn', label: 'Earn', href: '/rewards/earn' },
    { id: 'eedeem', label: 'Redeem', href: '/rewards/redeem' },
    { id: 'offers', label: 'Offers', href: '/hotel-deals' },
    // { id: 'corporate', label: 'Corporate', href: '/rewards/corporate' },
    { id: 'bookersAndPlanners', label: 'Bookers and Planners', href: '/rewards/business' },
    { id: 'FAQs', label: 'FAQs', href: '/rewards/faq' },
    { id: 'downloadOurApp', label: 'Download our App', href: '/app' },
  ];

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    if (id === 'uzoRewards') {
      setShowRewards(true); // Show MemberRewards when Radisson Rewards is clicked
    } else {
      setShowRewards(false);
    }
  };

  // const closeRewards = () => {
  //   setShowRewards(false); // Function to close the MemberRewards component
  // };

  // const scrollMenu = (direction: 'left' | 'right') => {
  //   if (menuRef.current) {
  //     const scrollAmount = direction === 'left' ? -200 : 200;
  //     menuRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = menuRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const menu = menuRef.current;
    if (menu) {
      menu.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (menu) {
        menu.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.rhgMenuSecondary}>
        <div className={styles.rhgMenuSecondaryContainer}>
          <div className={styles.rhgMenuSecondaryMenu}>
            <ul
              className={styles.rhgMenuSecondaryList}
              ref={menuRef}
              style={{ opacity: 1 }}
            >
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={styles.rhgMenuSecondaryListItem}
                >
                  <a
                    id={item.id}
                    className={`${styles.rhgTextNormal} ${styles.rhgTextMd} ${activeItem === item.id ? styles.active : ''
                      }`}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }}
                    draggable="false"
                    aria-current={activeItem === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rhgMenuSecondaryButton}></div>
        </div>
        <div id="searchbar-inside-menu" className={styles.rhgMenuSecondarySearchbar}></div>
      </div>

      {/* Conditionally render MemberRewards */}
      {activeItem === "uzoRewards" && <MemberRewards />}
      {activeItem === "memberBenefits" && <MemberBenefits />}
      {activeItem === "earn" && <EarnRewards />}
    </>
  );
};

export default MemberNavBar;