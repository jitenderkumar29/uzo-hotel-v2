"use client"
// components/HeaderTop.tsx
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './HeaderTop.module.css';
import logoImage from '@/assets/icons/logo26.png';
import headerTop1 from '@/assets/images/headerTop1.jpg';
import headerTop2 from '@/assets/images/headerTop2.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCalendar, faCreditCard, faFilm, faHotel, faPassport, faPlaneDeparture, faShip, faTasks, faTaxi, faTimes, faTrain, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from '../../LanguageSelector/LanguageSelector';
import { useRouter } from 'next/navigation';

const HeaderTop = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showLogInDropDown, setShowLogInDropDown] = useState(false);
  const [showUserDropDown, setShowUserDropDown] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);
  const [showLanguage, setShowLanguage] = useState(false);
  const [username, setUsername] = useState<string>('');

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsScrolled(!isTop);
    };

    // Initial check in case page loads with scroll position not at top
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside booking dropdown
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (bookingRef.current && !bookingRef.current.contains(event.target as Node)) {
        setShowBooking(false);
      }
    };

    if (showBooking) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showBooking]);



  return (
    <div className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <Image
              src={logoImage}
              alt="Logo"
              className={styles.logoImage}
              priority
            />
          </Link>

          <div
            className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              <li onClick={closeMobileMenu}>
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowBooking((prev) => !prev);
                  }}
                >
                  Book
                </Link>
              </li>
              <li>
                <Link href="/becomeAMember" onClick={closeMobileMenu}>Become a Member</Link>
              </li>
              <li>
                <Link href="/corporateMember" onClick={closeMobileMenu}>Corporate Member</Link>
              </li>
              <li>
                <Link href="/offersUzo" onClick={closeMobileMenu}>Offers</Link>
              </li>
              <li>
                <Link href="/uzoCards" onClick={closeMobileMenu}>UZO Cards</Link>
              </li>
              {/* <li>
                <Link href="/" onClick={closeMobileMenu}>List Your Property</Link>
              </li> */}
              <li>
                <Link href="/" onMouseEnter={closeMobileMenu}
                  onClick={() => setShowLanguage(true)}
                  className={styles.languageButton}
                // className={`${styles.navLink} ${scrolled ? styles.scrolledLink : ''}`}
                >
                  Select Language
                  {/* <LanguageSelector /> */}
                </Link>
                {/* <Link href="/" onClick={closeMobileMenu}><LanguageSelector /></Link> */}
              </li>
            </ul>

            {showLanguage && (
              <div className={styles.loginDropDown} onMouseEnter={() => setShowLanguage(true)}
                onMouseLeave={() => setShowLanguage(false)}
              >
                <LanguageSelector />
              </div>
            )}

            {username ? (<button className={styles.loginBtn}
              onMouseEnter={() => setShowUserDropDown(true)}
              onMouseLeave={() => setShowUserDropDown(false)}>Welcome, {username}!</button>) :
              // {username ? (<button className={styles.loginBtn}>Welcome, {username}!</button>) :
              (<button className={styles.loginBtn} onMouseEnter={() => setShowLogInDropDown(true)}
                onMouseLeave={() => setShowLogInDropDown(false)}
              >Log In/SignUp</button>)}

            {showUserDropDown && (
              <div className={styles.loginDropDown} onMouseEnter={() => setShowUserDropDown(true)}
                onMouseLeave={() => setShowUserDropDown(false)}
              >
                <UserProfileDropDown />
              </div>
            )}
            {showLogInDropDown && (
              <div className={styles.loginDropDown} onMouseEnter={() => setShowLogInDropDown(true)}
                onMouseLeave={() => setShowLogInDropDown(false)}
              >
                <LogInSignUp />
              </div>
            )}
          </nav>

          {showBooking && (
            <div className={styles.bookingDropdown} ref={bookingRef}>
              <div className={styles.containerBooklist}>
                <aside className={styles.sidebarBooklist}>
                  <div className={styles.sideBarHeading}>
                    <h3 className={styles.heading}>Book</h3>
                    <button
                      className={styles.closeModal}
                      onClick={() => setShowBooking(false)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                  <div className={styles.navListParent}>
                    <ul className={styles.navListBooklist}>
                      <li className={styles.navLinkBooklist}>
                        <FontAwesomeIcon icon={faPlaneDeparture} />
                        <Link href="/book?searchMode=Flights" onClick={() => setShowBooking(false)}>
                          Flights
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faHotel} />
                        <Link href="/book?searchMode=Hotels" onClick={() => setShowBooking(false)}>
                          Hotels
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faBus} />
                        <Link href="/book?searchMode=Bus" onClick={() => setShowBooking(false)}>
                          Bus
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faTrain} />
                        <Link href="/book?searchMode=Trains" onClick={() => setShowBooking(false)}>
                          Trains
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUmbrellaBeach} />
                        <Link href="/book?searchMode=Holidays" onClick={() => setShowBooking(false)}>
                          Holidays
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faTaxi} />
                        <Link href="/book?searchMode=Cabs" onClick={() => setShowBooking(false)}>
                          Cabs
                        </Link>
                      </li>
                    </ul>
                    {/* </div>
                  <div > */}
                    <ul className={styles.navListBooklist}>
                      <li>
                        <FontAwesomeIcon icon={faTasks} />
                        <Link href="/book?searchMode=Activities" onClick={() => setShowBooking(false)}>
                          Activities
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCalendar} />
                        <Link href="/book?searchMode=Events" onClick={() => setShowBooking(false)}>
                          Events
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faShip} />
                        <Link href="/book?searchMode=Events" onClick={() => setShowBooking(false)}>
                          Cruise
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faFilm} />
                        <Link href="/book?searchMode=Events" onClick={() => setShowBooking(false)}>
                          Movies
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCreditCard} />
                        <Link href="/book?searchMode=Events" onClick={() => setShowBooking(false)}>
                          Visa
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPassport} />
                        <Link href="/book?searchMode=Events" onClick={() => setShowBooking(false)}>
                          Insurance
                        </Link>
                      </li>
                    </ul>
                  </div>
                </aside>

                <main className={styles.offersBooklist}>
                  <div className={styles.offerCardBooklist}>
                    <Image
                      src={headerTop1}
                      alt='Summer sale'
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                    <div className={styles.offerTextBooklist}>
                      <p>Book domestic flights with fares starting price at ₹1,499</p>
                    </div>
                  </div>
                  <div className={styles.offerCardBooklist}>
                    <Image
                      src={headerTop2}
                      alt='summer sale'
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                    <div className={styles.offerTextBooklist}>
                      <p>Book your stay on uzohotels.com and get up to 25%* off.</p>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          )}
        </header>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
              <Image
                src={logoImage}
                alt="Logo"
                className={styles.logoImage}
              />
            </Link>
            <button
              className={styles.closeBtn}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav>
            <ul className={styles.mobileNavLinks}>
              <li>
                <Link href="/book" onClick={closeMobileMenu}>Book</Link>
              </li>
              <li>
                <Link href="/becomeAMember" onClick={closeMobileMenu}>Become a Member</Link>
              </li>
              <li>
                <Link href="/corporateMember" onClick={closeMobileMenu}>Corporate Member</Link>
              </li>
              <li>
                <Link href="/UzoCards" onClick={closeMobileMenu}>UZO Cards</Link>
              </li>
              <li>
                <Link href="/" onClick={closeMobileMenu}>English</Link>
              </li>
            </ul>
          </nav>
          <button className={styles.mobileLoginBtn}>Log In/SignUp</button>
        </div>

        <div
          className={`${styles.overlay} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

      </div>
    </div >
  );
};

const LogInSignUp = () => {
  return (
    <div className={styles.sideMenuDropdown}>
      <div className={styles.sideMenuDropdown__linksListWrapper}>
        <div className={styles.sideMenuDropdown__linkItem} >
          <Link href="/login" type='button' >
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            UZO Login
          </Link>
        </div>
        <div className={styles.sideMenuDropdown__linkItem}>
          <Link href="/loginOne">
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            UZO ONE Login
          </Link>
        </div>
        <div className={styles.sideMenuDropdown__linkItem}>
          <Link href="/loginPass">
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            UZO PASS Login
          </Link>
        </div>
      </div>
    </div>
  )
}

const UserProfileDropDown = () => {
  const router = useRouter();
  const logOut = () => {
    // 1. Remove user data from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('authToken'); // Remove any auth tokens if you have them

    // 2. Clear any application state (if using React state)
    // setUser(null);
    // setIsAuthenticated(false);

    // 3. Redirect to login page
    router.push('/login');

    // 4. Optional: Force refresh if needed (rarely necessary)
    // window.location.reload();
  };
  return (
    <div className={styles.sideMenuDropdown}>
      <div className={styles.sideMenuDropdown__linksListWrapper}>
        <div className={styles.sideMenuDropdown__linkItem} >
          <Link href="/userProfile" type='button' >
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            My Profile
          </Link>
        </div>
        <div className={styles.sideMenuDropdown__linkItem}>
          <Link href="/">
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            My Wallet
          </Link>
        </div>
        <div className={styles.sideMenuDropdown__linkItem}>
          <Link href="/">
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            My Booking
          </Link>
        </div>
        <div className={styles.sideMenuDropdown__linkItem}>
          <Link href="/">
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            Reward Balance
          </Link>
        </div>
        <div className={styles.sideMenuDropdown__linkItem} onClick={() => logOut()}>
          <Link href="/">
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            LogOut
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;