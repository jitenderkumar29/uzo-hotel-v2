"use client";
import { useCallback, useEffect, useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Check,
} from "lucide-react"
import styles from "./UserProfile.module.css"
import { MapPin, Globe, Plane, Building, Bus, Car, Train, Palmtree, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import HeaderTop from "../Headers/HeaderTop/HeaderTop"
import { HotelSearchProvider } from "@/app/Context/HotelSearchContext"
import HotelSearchBarTop from "../SearchBarMultiple/HotelSearchBarTop/HotelSearchBarTop"
import UserBooking from "./UserBooking/UserBooking"
import CoTravellers from "./CoTravellers/CoTravellers"
import PromoCodes from "./PromoCodes/PromoCodes"
import CardsCoupons from "./CardsCoupons/CardsCoupons"
import UzoWallet from "./UzoWallet/UzoWallet"
import RewardsBalance from "./RewardsBalance/RewardsBalance"
import { useRouter, useSearchParams } from "next/navigation"
import SettingsUser from "./SettingsUser/SettingsUser";

type NavItem = {
  id: string;
  title: string;
  description: string;
  imgUrl?: string; // Optional for items that don't have an image
  // icon: React.ComponentType<{ size?: number }>;
  active?: boolean;
};

type StatCard = {
  id: string;
  number: number;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  imgUrl: string | undefined;
};


export default function UserProfile() {
  const [activeSection, setActiveSection] = useState<string>("general");
  const [selectedTab, setSelectedTab] = useState<string>("account");
  const router = useRouter();

  const searchParams = useSearchParams();
  // const userMode = searchParams?.get("userMode") ?? "account";
  // setSelectedTab(userMode);
  // console.log("userMode");
  // console.log(userMode);
  useEffect(() => {
    const userMode = searchParams?.get("userMode") ?? "account";
    if (userMode) {
      setSelectedTab(userMode);
    }
    setNavigationItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        active: item.id === userMode
      })))
  }, [searchParams]);

  const [navigationItems, setNavigationItems] = useState<NavItem[]>([
    {
      id: "account",
      title: "Account Information",
      description: "Manage your profile, bookings and more",
      imgUrl: "/icons/userProfile.png",
      // icon: User,
      active: true
    },
    {
      id: "bookings",
      title: "My Bookings",
      description: "Check latest / cancelled / pending bookings",
      imgUrl: "/icons/bookingLogo.png",
      // icon: Ticket,
      active: false
    },
    {
      id: "travelers",
      title: "Co-Travellers",
      description: "Add or delete the respective traveler details",
      imgUrl: "/icons/travellerLogo.png",
      // icon: Users,
      active: false
    },
    {
      id: "promo",
      title: "Promo Codes",
      description: "Refer a Friend and Earn",
      imgUrl: "/icons/promoCode.png",
      // icon: Tag,
      active: false
    },
    {
      id: "gift",
      title: "Cards/Coupons",
      description: "Check savings on your booking",
      imgUrl: "/icons/couponLogo.png",
      // icon: Gift,
      active: false
    },
    {
      id: "wallet",
      title: "UZO Wallet",
      description: "Check & Manage your added wallet balance",
      imgUrl: "/icons/walletLogo.png",
      // icon: Wallet,
      active: false
    },
    {
      id: "reward",
      title: "Rewards Balance",
      description: "Check & Manage your earned reward balance",
      imgUrl: "/icons/rewardsLogo.png",
      // icon: Wallet,
      active: false
    },
    {
      id: "settings",
      title: "Settings",
      description: "Manage Notification, Fare Alert and more",
      imgUrl: "/icons/settings.png",
      // icon: Settings,
      active: false
    },
    {
      id: "logout",
      title: "Log Out",
      description: "",
      imgUrl: "/icons/logoutLogo.png",
      // icon: LogOut,
      active: false
    }
  ]);
  const statsData: StatCard[] = [
    {
      id: "cities",
      number: 5,
      label: "Cities\nVisited",
      icon: MapPin,
      imgUrl: "/images/cityBG.jpg"
    },
    {
      id: "countries",
      number: 1,
      label: "Countries\nVisited",
      icon: Globe,
      imgUrl: "/images/countriesBG.jpg"

    },
    {
      id: "flights",
      number: 15,
      label: "Flight\nBookings",
      icon: Plane,
      imgUrl: "/images/flightsBG.jpg"
    },
    {
      id: "hotels",
      number: 10,
      label: "Hotel\nBookings",
      icon: Building,
      imgUrl: "/images/hotelsBG.jpg"
    },
    {
      id: "bus",
      number: 50,
      label: "Bus\nBookings",
      icon: Bus,
      imgUrl: "/images/busBG.jpg"
    },
    {
      id: "cab",
      number: 20,
      label: "Cab\nBookings",
      icon: Car,
      imgUrl: "/images/cabBG.jpg"
    },
    {
      id: "train",
      number: 25,
      label: "Train\nBookings",
      icon: Train,
      imgUrl: "/images/trainBG.jpg"
    },
    {
      id: "holidays",
      number: 30,
      label: "Holidays\nBookings",
      icon: Palmtree,
      imgUrl: "/images/holidaysBG.jpg"
    }
  ];

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  const handleNavItemClick = (id: string) => {
    setNavigationItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        active: item.id === id
      })))
    setSelectedTab(id);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  // Calculate visible cards based on current index
  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % statsData.length;
    visibleCards.push(statsData[index]);
  }

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % statsData.length);
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + statsData.length) % statsData.length);
  };

  const logOut = useCallback(() => {
    // const logOut = () => {
    // logout logic here
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
  }, [router]);


  useEffect(() => {
    if (selectedTab === "logout") {
      logOut();
    }
  }, [selectedTab, logOut]); // This will run whenever selectedTab changes

  return (
    <>
      <div className={styles.headerTopBody}>
        <HeaderTop />
      </div>
      <div className={styles.HotelSearchBarTopBody}>
        <HotelSearchProvider>
          <HotelSearchBarTop />
        </HotelSearchProvider>
      </div>
      <div className={styles.userProfile}>
        <div className={styles.container}>
          <div className={styles.maincontent}>
            {/* <div className={styles.breadcrumbOverlay}> */}
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbItem}>My Bookings</span>
              <span className={styles.breadcrumbSeparator}>&gt;</span>
              <span className={styles.breadcrumbActive}>Profile</span>
              <span className={styles.breadcrumbSeparator}>&gt;</span>
              <span className={styles.breadcrumbActiveSub}> {navigationItems.find(item => item.id === selectedTab)?.title}</span>
            </div>
            {/* </div> */}

            <div className={styles.profileContainer}>
              {/* Left Panel - Navigation */}
              <div className={styles.leftPanel}>
                <div className={styles.profileHeader}>
                  <div className={styles.profileName}>Mr. Customer</div>
                  <div className={styles.profileJoined}>
                    <span className={styles.joinedText}>Joined Since May, 2020</span>
                  </div>
                  <div className={styles.profileCompletion}>
                    <div className={styles.completionText}>
                      <span className={styles.completionPercentage}>20%</span> Profile Completed
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '20%' }} />
                    </div>
                  </div>
                </div>

                <div className={styles.navItems}>
                  {navigationItems.map((item) => {
                    // const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className={`${styles.navItem} ${item.active ? styles.active : ''}`}
                        onClick={() => handleNavItemClick(item.id)}
                      >
                        {/* <div className={styles.navIcon}>
                        <Icon size={20} />
                      </div> */}
                        <Image src={item.imgUrl || '/default-image.png'} alt={item.title} width={20} height={20} className={styles.imgIcon} />
                        <div className={styles.navContent}>
                          <div className={styles.navTitle}>{item.title}</div>
                          {item.description && (
                            <div className={styles.navDescription}>{item.description}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Panel - Content */}
              {selectedTab === "account" && (<div className={styles.rightPanel}>
                {/* Stats Cards */}
                <div className={styles.statsSection}>
                  <div className={styles.statsContainerWrapper}>
                    <div className={styles.statsContainer}>
                      {visibleCards.map((card) => {
                        const Icon = card.icon;
                        return (
                          <>
                            <div className={styles.cardContainer} key={card.id}>
                              <div className={styles.imageWrapper}>
                                <div className={styles.imageContainer}>
                                  <Image
                                    src={card.imgUrl || '/default-image.png'}
                                    alt={card.label}
                                    width={2417}
                                    height={1500}
                                    className={styles.cardImage}
                                  />
                                </div>
                                <div className={styles.statsCardOverlay}>
                                  <div className={styles.statsNumber}>{card.number}</div>
                                  <div className={styles.statsLabel}>
                                    {card.label.split('\n').map((line, i) => (
                                      <span key={i}>
                                        {line}
                                        {i < card.label.split('\n').length - 1 && <br />}
                                      </span>
                                    ))}
                                  </div>
                                  <div className={styles.statsIcon}>
                                    <Icon size={20} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className={styles.imageContainer} key={card.id}>
                            <Image src={card.imgUrl || '/default-image.png'} alt={card.label} width={2417} height={1500} />
                          </div>
                          <div key={card.id} className={styles.statsCard}>
                            <div className={styles.statsNumber}>{card.number}</div>
                            <div className={styles.statsLabel}>
                              {card.label.split('\n').map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i < card.label.split('\n').length - 1 && <br />}
                                </span>
                              ))}
                            </div>
                            <div className={styles.statsIcon}>
                              <Icon size={20} />
                            </div>
                          </div> */}
                          </>
                        );
                      })}
                    </div>

                    {/* Overlay Navigation Buttons */}
                    <button
                      className={`${styles.navButton} ${styles.navButtonLeft}`}
                      onClick={prevCards}
                      aria-label="Previous cards"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      className={`${styles.navButton} ${styles.navButtonRight}`}
                      onClick={nextCards}
                      aria-label="Next cards"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
                {/* <div className={styles.statsSection}>
            <button
              className={styles.navButton}
              onClick={prevCards}
              aria-label="Previous cards"
            >
              <ChevronLeft size={20} />
            </button>

            <div className={styles.statsContainer}>
              {visibleCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.id} className={styles.statsCard}>
                    <div className={styles.statsNumber}>{card.number}</div>
                    <div className={styles.statsLabel}>
                      {card.label.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.label.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                    <div className={styles.statsIcon}>
                      <Icon size={20} />
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className={styles.navButton}
              onClick={nextCards}
              aria-label="Next cards"
              >
              <ChevronRight size={20} />
            </button>
          </div> */}

                {/* <Icon className={styles.statsIcon} /> */}
                {/* <div className={styles.statsContainer}>
            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>0</div>
              <div className={styles.statsLabel}>
                Cities
                <br />
                Visited
              </div>
              <MapPin className={styles.statsIcon} />
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>0</div>
              <div className={styles.statsLabel}>
                Countries
                <br />
                Visited
              </div>
              <Globe className={styles.statsIcon} />
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>0</div>
              <div className={styles.statsLabel}>
                Flight
                <br />
                Bookings
              </div>
              <Plane className={styles.statsIcon} />
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>0</div>
              <div className={styles.statsLabel}>
                Hotel
                <br />
                Bookings
              </div>
              <Building className={styles.statsIcon} />
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>0</div>
              <div className={styles.statsLabel}>
                Bus
                <br />
                Bookings
              </div>
              <Bus className={styles.statsIcon} />
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>0</div>
              <div className={styles.statsLabel}>
                Cab
                <br />
                Bookings
              </div>
              <Car className={styles.statsIcon} />
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>0</div>
              <div className={styles.statsLabel}>
                Train
                <br />
                Bookings
              </div>
              <Train className={styles.statsIcon} />
            </div>

            <div className={styles.statsCard}>
              <div className={styles.statsNumber}>0</div>
              <div className={styles.statsLabel}>
                Holidays
                <br />
                Bookings
              </div>
              <Palmtree className={styles.statsIcon} />
            </div>
          </div> */}


                {/* Form Sections */}
                <div className={styles.formSections}>
                  {/* General Details */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader} onClick={() => toggleSection("general")}>
                      <h2 className={styles.sectionTitle}>General Details</h2>
                      {activeSection === "general" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {activeSection === "general" && (
                      <div className={styles.sectionContent}>
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Passenger Type <span className={styles.required}>*</span>
                            </label>
                            <select className={styles.formSelect}>
                              <option value="">Select</option>
                              <option value="adult">Adult</option>
                              <option value="child">Child</option>
                              <option value="infant">Infant</option>
                            </select>
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              First Name <span className={styles.required}>*</span>
                            </label>
                            <input type="text" placeholder="First Name" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Last Name</label>
                            <input type="text" placeholder="Last Name" className={styles.formInput} />
                          </div>
                        </div>

                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Date of Birth <span className={styles.required}>*</span>
                            </label>
                            <input type="date" className={styles.formInput} />
                          </div>
                        </div>

                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Address</label>
                            <input type="text" placeholder="Address" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>City</label>
                            <input type="text" placeholder="City" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>State</label>
                            <input type="text" placeholder="State" className={styles.formInput} />
                          </div>
                        </div>

                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>PinCode</label>
                            <input type="text" placeholder="Pincode" className={styles.formInput} maxLength={6} />
                          </div>
                        </div>

                        <div className={styles.formActions}>
                          <button className={styles.updateButton}>Update</button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contact Details */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader} onClick={() => toggleSection("contact")}>
                      <h2 className={styles.sectionTitle}>Contact Details</h2>
                      {activeSection === "contact" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {activeSection === "contact" && (
                      <div className={styles.sectionContent}>
                        <div className={styles.contactRow}>
                          <div className={styles.contactColumn}>
                            <div className={styles.contactHeader}>
                              <h3 className={styles.contactTitle}>Email Id</h3>
                              <button className={styles.addButton}>
                                <Plus size={16} /> Add
                              </button>
                            </div>
                          </div>

                          <div className={styles.contactColumn}>
                            <div className={styles.contactHeader}>
                              <h3 className={styles.contactTitle}>Mobile No</h3>
                              <button className={styles.addButton}>
                                <Plus size={16} /> Add
                              </button>
                            </div>
                            <div className={styles.verifiedContact}>
                              <span>7042341856</span>
                              <span className={styles.verifiedBadge}>
                                <Check size={14} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Passport Details */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader} onClick={() => toggleSection("passport")}>
                      <h2 className={styles.sectionTitle}>Passport Details</h2>
                      {activeSection === "passport" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {activeSection === "passport" && (
                      <div className={styles.sectionContent}>
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Passport Number <span className={styles.required}>*</span>
                            </label>
                            <input type="text" placeholder="Passport Number" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Passport Expiry Date <span className={styles.required}>*</span>
                            </label>
                            <input type="date" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Upload Passport Copy</label>
                            <div className={styles.fileUpload}>
                              <button className={styles.fileButton}>
                                Choose File
                              </button>
                              <input type="file" className={styles.fileInput} />
                            </div>
                          </div>
                        </div>

                        <div className={styles.formActions}>
                          <button className={styles.updateButton}>Update</button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visa Details */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader} onClick={() => toggleSection("visa")}>
                      <h2 className={styles.sectionTitle}>Visa Details</h2>
                      {activeSection === "visa" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {activeSection === "visa" && (
                      <div className={styles.sectionContent}>
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Visa Number <span className={styles.required}>*</span>
                            </label>
                            <input type="text" placeholder="Visa Number" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Visa Expiry Date <span className={styles.required}>*</span>
                            </label>
                            <input type="date" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Upload Visa Copy</label>
                            <div className={styles.fileUpload}>
                              <button className={styles.fileButton}>
                                Choose File
                              </button>
                              <input type="file" className={styles.fileInput} />
                            </div>
                          </div>
                        </div>

                        <div className={styles.formActions}>
                          <button className={styles.updateButton}>Update</button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Frequent Flyer Detail */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader} onClick={() => toggleSection("frequentFlyer")}>
                      <h2 className={styles.sectionTitle}>Frequent Flyer Detail</h2>
                      {activeSection === "frequentFlyer" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {activeSection === "frequentFlyer" && (
                      <div className={styles.sectionContent}>
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Airline Name</label>
                            <select className={styles.formSelect}>
                              <option value="">Select Airline</option>
                              <option value="air_india">Air India</option>
                              <option value="indigo">IndiGo</option>
                              <option value="emirates">Emirates</option>
                              <option value="lufthansa">Lufthansa</option>
                            </select>
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Frequent Flyer No</label>
                            <input type="text" placeholder="Frequent Flyer No" className={styles.formInput} />
                          </div>
                        </div>

                        <div className={styles.formActions}>
                          <button className={styles.updateButton}>Submit</button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Covid-19 Vaccination Certificates */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader} onClick={() => toggleSection("covid")}>
                      <h2 className={styles.sectionTitle}>Covid-19 Vaccination Certificates</h2>
                      {activeSection === "covid" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {activeSection === "covid" && (
                      <div className={styles.sectionContent}>
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              No of Vaccines <span className={styles.required}>*</span>
                            </label>
                            <input type="number" min="1" max="9" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Last Vaccination Date <span className={styles.required}>*</span>
                            </label>
                            <input type="date" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Vaccination Name <span className={styles.required}>*</span>
                            </label>
                            <input type="text" placeholder="Vaccination Name" className={styles.formInput} />
                          </div>
                        </div>

                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Upload Certificate</label>
                            <div className={styles.fileUpload}>
                              <button className={styles.fileButton}>
                                Choose File
                              </button>
                              <input type="file" className={styles.fileInput} />
                            </div>
                          </div>
                        </div>

                        <div className={styles.formActions}>
                          <button className={styles.updateButton}>Update</button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* IRCTC Profile */}
                  <div className={styles.formSection}>
                    <div className={styles.sectionHeader} onClick={() => toggleSection("irctc")}>
                      <h2 className={styles.sectionTitle}>IRCTC Profile</h2>
                      {activeSection === "irctc" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {activeSection === "irctc" && (
                      <div className={styles.sectionContent}>
                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>IRCTC User Name</label>
                            <input type="text" placeholder="IRCTC UserId" className={styles.formInput} />
                          </div>

                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Select Prefered Seat</label>
                            <select className={styles.formSelect}>
                              <option value="">Select Berth Preference</option>
                              <option value="lower">Lower</option>
                              <option value="upper">Upper</option>
                              <option value="middle">Middle</option>
                              <option value="side_lower">Side Lower</option>
                              <option value="side_upper">Side Upper</option>
                            </select>
                          </div>
                        </div>

                        <div className={styles.formActions}>
                          <button className={styles.updateButton}>Update</button>
                        </div>

                        <div className={styles.irctcLinks}>
                          <button className={styles.irctcLink}>
                            Create IRCTC Account
                          </button>
                          <button className={styles.irctcLink}>
                            Forgot IRCTC User ID
                          </button>
                          <button className={styles.irctcLink}>
                            Reset IRCTC Password
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={styles.deactivateAccount}>
                    <button className={styles.deactivateButton}>
                      De-Activate Account
                    </button>
                  </div>
                </div>
              </div>)}

              {selectedTab === "bookings" && (<div className={styles.rightPanel}>
                <UserBooking />
              </div>)}
              {selectedTab === "travelers" && (<div className={styles.rightPanel}>
                <CoTravellers />
              </div>)}
              {selectedTab === "promo" && (<div className={styles.rightPanel}>
                <PromoCodes />
              </div>)}
              {selectedTab === "gift" && (<div className={styles.rightPanel}>
                <CardsCoupons />
              </div>)}
              {selectedTab === "wallet" && (<div className={styles.rightPanel}>
                <UzoWallet />
              </div>)}
              {selectedTab === "reward" && (<div className={styles.rightPanel}>
                <RewardsBalance />
              </div>)}
              {selectedTab === "settings" && (<div className={styles.rightPanel}>
                <SettingsUser />
              </div>)}
              {selectedTab === "logout" && (<div className={styles.rightPanel} onClick={() => logOut()}>
              </div>)}
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.footerBox}>
        <FooterUzo />
      </div> */}
    </>
  )
}