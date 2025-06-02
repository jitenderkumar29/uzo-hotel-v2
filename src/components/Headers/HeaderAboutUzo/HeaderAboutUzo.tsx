"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import styles from "./HeaderAboutUzo.module.css"
import Link from "next/link"
import Image from "next/image"
import logoImage from '@/assets/icons/logo26.png';


interface MenuItem {
  heading: string;
  description: string;
  label: string
  href: string
  sections?: {
    title: string
    href?: string
    items?: { label: string; href: string }[]
  }[]
}

const HeaderAboutUzo: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null)
  const [isMobileMenuOpen,] = useState(false)
  const [activeMobileSection, setActiveMobileSection] = useState<number | null>(null)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [showLogInDropDown, setShowLogInDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false); // New state for scroll detection
  const [hoveredSection, setHoveredSection] = useState<number | null>(0);  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuItems: MenuItem[] = [
    {
      heading: "World Leading Hospitality Group",
      description: "Building on the strength of our teams and of our holistic ecosystem of leading brands, personalized services & expert solutions, we break new ground to reimagine hospitality and inspire new ways to experience the world.",
      label: "GROUP",
      href: "/aboutUzoHotels",
      sections: [
        {
          title: "Who We Are",
          items: [
            { label: "CEO's Editorial", href: "/" },
            { label: "About Accor", href: "/" },
            { label: "Our History", href: "/" },
            { label: "Building for Tomorrow", href: "/" },
          ],

        },
        {
          title: "Global Presence",
          items: [
            { label: "Governance Principles", href: "/" },
            { label: "Board of Directors", href: "/" },
            { label: "Board Committees", href: "/" },
            { label: "Executive Management", href: "/" },
            { label: "Our Ethics & Compliance", href: "/" },
          ],
        },
      ],
    },
    {
      heading: "A Holistic Ecosystem of Brands",
      description: "What we do: elevating life with brands through limitless experiences to Live, Work, Play and Do Business.",
      label: "BRANDS",
      href: "/aboutUzoHotels",
      sections: [
        {
          title: "Luxury",
          items: [
            { label: "Orient Express", href: "/" },
            { label: "Raffles", href: "/" },
            { label: "Banyan Tree", href: "/" },
            { label: "Fairmont", href: "/" },
            { label: "Emblems Collection", href: "/" },
            { label: "Sofitel", href: "/" },
            { label: "MGallery", href: "/" },
          ],
        },
        {
          title: "Ennismore - Lifestyle",
          items: [
            { label: "About Ennismore", href: "/" },
            { label: "21c Museum Hotel", href: "/" },
            { label: "24hours Hotels", href: "/" },
            { label: "Delano", href: "/" },
            { label: "Hyde", href: "/" },
            { label: "JO&JOE", href: "/" },
            { label: "Mama Shelter", href: "/" },
            { label: "Mama Shelter", href: "/" },
            { label: "Mondrian", href: "/" },
            { label: "Morgans Originals", href: "/" },
            // { label: "SLS", href: "/" },
            // { label: "SO/", href: "/" },
            // { label: "Mama Shelter", href: "/" },
            // { label: "The Hoxton", href: "/" },
            // { label: "Working From_", href: "/" },
            // { label: "Our Habitas - Immersive Resorts", href: "/" },
            // { label: "Rixos - Immersive Resorts", href: "/" },
            // { label: "Rikas - Iconic Venues", href: "/" },
          ],
        },
        {
          title: "Premium",
          items: [
            { label: "Mantis", href: "/" },
            { label: "Art Series", href: "/" },
            { label: "Pullman", href: "/" },
            { label: "Swissôtel", href: "/" },
            { label: "Angsana", href: "/" },
            { label: "Mövenpick", href: "/" },
            { label: "Grand Mercure", href: "/" },
            { label: "Peppers", href: "/" },
            { label: "The Sebel", href: "/" },
          ],
        },

        {
          title: "Midscale",
          items: [
            { label: "Mantra", href: "/" },
            { label: "Handwritten Collection", href: "/" },
            { label: "Novotel", href: "/" },
            { label: "Mercure", href: "/" },
            { label: "TRIBE", href: "/" },
            { label: "Adagio", href: "/" },
          ],
        },

        {
          title: "Economy",
          items: [
            { label: "BreakFree", href: "/" },
            { label: "ibis", href: "/" },
            { label: "ibis styles", href: "/" },
            { label: "greet", href: "/" },
            { label: "ibis budget", href: "/" },
            { label: "hotelF1", href: "/" },
          ],
        },
        {
          title: "Workspaces, Entertainment & Experiences",
          items: [
            { label: "Wojo", href: "/" },
            { label: "Worklib", href: "/" },
            { label: "Lido 2 Paris", href: "/" },
            { label: "Potel et Chabot", href: "/" },
            { label: "onefinestay", href: "/" },
            { label: "Thalassa Sea & Spa", href: "/" },
          ],
        },
        {
          title: "Business Boosters",
          items: [
            { label: "Astore", href: "/" },
            { label: "D-EDGE", href: "/" },
            { label: "Gekko Group", href: "/" },
            { label: "John Paul", href: "/" },
            { label: "VeryChic", href: "/" },
          ],
        },
        {
          title: "Booking & Loyalty",
          items: [
            { label: "Mantis", href: "/" },
            { label: "Pullman", href: "/" },
            { label: "Swissôtel", href: "/" },
            { label: "Angsana", href: "/" },
            { label: "Mövenpick", href: "/" },
            { label: "Grand Mercure", href: "/" },
            { label: "Peppers", href: "/" },
            { label: "The Sebel", href: "/" },
          ],
        },
      ],
    },
    {
      heading: "Accor  has developed a unique know-how in boosting hotel’s performance.",
      description: "Benefit from the expertise and support of a major Group to meet your needs and get the best return on your investment.",
      label: "HOTEL DEVELOPMENT",
      href: "/aboutUzoHotels",
      sections: [
        {
          title: "Develop a hotel or a residence",
          items: [
            { label: "Why Accor", href: "/" },
            { label: "Hotel Development", href: "/" },
            { label: "Extended Stay Hotels & Private Rentals", href: "/" },
            { label: "Branded Private Residence", href: "/" },
          ],
        },
        {
          title: "Maximise your revenue",
          items: [
            { label: "ALL: Booking Platform and Loyalty Programme", href: "/" },
            { label: "Distribution", href: "/" },
            { label: "Sales", href: "/" },
            { label: "Revenue Management", href: "/" },
            { label: "Marketing", href: "/" },
            { label: "Food & Beverage", href: "/" },
            { label: "Revenue Management", href: "/" },
            { label: "Food & Beverage", href: "/" },
          ],
        },
        {
          title: "Optimise your costs",
          items: [
            { label: "IT Digital", href: "/" },
            { label: "Procurement", href: "/" },
            { label: "Insurance", href: "/" },
            { label: "People", href: "/" },
            { label: "Environment & CSR", href: "/" },
            { label: "Design & Construction", href: "/" },

          ],
        },
        {
          title: "Secure your design",
          items: [
            { label: "Hotel Performance", href: "/" },
            { label: "Step by step process", href: "/" },
          ],
        },
        {
          title: "Choose your contract",
          items: [
            { label: "Franchise", href: "/" },
            { label: "Management", href: "/" },
            { label: "Owners' support", href: "/" },
          ],
        },
        {
          title: "Choose your contract",
          items: [
            { label: "Franchise", href: "/" },
            { label: "Management", href: "/" },
            { label: "Owners' support", href: "/" },
          ],
        },
        {
          title: "Contact a Luxury & Lifestyle Developer",
          items: [
            { label: "IT Digital", href: "/" },
            { label: "Procurement", href: "/" },
            { label: "Insurance", href: "/" },
            { label: "People", href: "/" },
            { label: "Environment & CSR", href: "/" },
            { label: "Design & Construction", href: "/" },
          ],
        },
        {
          title: "Contact a Premium, Midscale & Economy Developer",
          items: [
            { label: "Europe and North Africa", href: "/" },
            { label: "Americas", href: "/" },
            { label: "Middle East, Africa and Türkiye", href: "/" },
            { label: "Asia", href: "/" },
            { label: "Pacific", href: "/" },
            { label: "Greater China", href: "/" },
          ],
        },
      ],
    },
    {
      heading: "People First, Always.",
      description: "We are more than 360,000 Heartists placing people at the heart of what we do, to create unforgettable experiences.",
      label: "CAREERS",
      href: "/aboutUzoHotels",
      sections: [
        {
          title: "Welcome to Accor",
          items: [
            { label: "Who We Are", href: "/careers/jobs" },
            { label: "Our Philosophy", href: "/careers/internships" },
          ],
        },
        {
          title: "Discover Our Culture of Inclusion",
          items: [
            { label: "Our Commitment", href: "/careers/jobs" },
            { label: "Gender Diversity & Equality", href: "/careers/internships" },
            { label: "Inclusion of People with Disabilities", href: "/careers/internships" },
            { label: "Social, Ethnic, Racial and Cultural Diversity", href: "/careers/internships" },
            { label: "LGBTQI+ Inclusion", href: "/careers/internships" },
          ],
        },
        {
          title: "Join Our Community",
          items: [
            { label: "Learning & Development", href: "/careers/jobs" },
            { label: "Career Growth Opportunities", href: "/careers/jobs" },
            { label: "Benefits", href: "/careers/jobs" },
          ],
        },
      ],
    },
    {
      heading: "We are Paving the Way To a More Sustainable Hospitality",
      description: "At Accor, we believe it’s our role to shape a more sustainable future of travel.",
      label: "COMMITMENT",
      href: "/aboutUzoHotels",
      sections: [
        {
          title: "Our Global Approach",
          items: [
            { label: "Sustainability Strategy", href: "/" },
            { label: "Key Milestones", href: "/" },
            { label: "Tools & Reporting", href: "/" },
          ],
        },
        {
          title: "Our Areas of Focus",
          items: [
            { label: "People", href: "/" },
            { label: "Stay", href: "/" },
            { label: "Food", href: "/" },
            { label: "Explore", href: "/" },
          ],
        },
        {
          title: "Our Collective Force",
          items: [
            { label: "Collective Mobilization", href: "/" },
            { label: "Endowment Fund", href: "/" },
            { label: "Partnerships & Alliances", href: "/" },
          ],
        },
      ],
    },
    {
      heading: "Our transparency is the milestone of your trust",
      description: "All the financial information related to our Group.",
      label: "FINANCE",
      href: "/aboutUzoHotels",
      sections: [
        {
          title: "Accor Share",
          items: [
            { label: "Accor Share Quotation", href: "/" },
            { label: "Dividends", href: "/" },
            { label: "Shareholding Structure", href: "/" },
            { label: "ADR", href: "/" },
            { label: "Analysts Coverage", href: "/" },
          ],
        },
        {
          title: "Results and Publications",
          items: [
            { label: "Financial Result", href: "/finance/board" },
            { label: "Financial Result", href: "/finance/compliance" },
            { label: "Universal Registration Document", href: "/finance/compliance" },
            { label: "Key Indicators", href: "/finance/compliance" },
            { label: "Group Fiscal Policy", href: "/finance/compliance" },
          ],
        },
        {
          title: "Debt Financing",
          items: [
            { label: "Financing Strategy", href: "/" },
            { label: "Debt structure", href: "/" },
            { label: "Credit Rating", href: "/" },
          ],
        },
        {
          title: "Events and Announcements",
          items: [
            { label: "About AGM", href: "/" },
            { label: "2025 Annual General Meeting", href: "/" },
            { label: "Shareholders Meeting records", href: "/" },
          ],
        },
        {
          title: "Annual General Meeting",
          items: [
            { label: "About AGM", href: "/" },
            { label: "2025 Annual General Meeting", href: "/" },
            { label: "Shareholders Meeting records", href: "/" },
          ],
        },
        {
          title: "Individual Shareholders",
          items: [
            { label: "Periodic Information", href: "/" },
            { label: "Permanent Information", href: "/" },
          ],
        },
        {
          title: "Regulated Information",
          items: [
            { label: "Periodic Information", href: "/" },
            { label: "Permanent Information", href: "/" },
          ],
        },
      ],
    },
    {
      heading: "It’s a fast-moving world we live in. And we are moving just as fast.",
      description: "The Group and its brands' latest news.",
      label: "NEWS & MEDIA",
      href: "/aboutUzoHotels",
      sections: [
        {
          title: "News Center",
          items: [
            { label: "Home News Center", href: "/news/press" },
            { label: "Trends & Insights", href: "/news/media-kit" },
            { label: "All News", href: "/news/media-kit" },
          ],
        },
        {
          title: "Press room",
          items: [
            { label: "Home press room", href: "/news/press" },
            { label: "Press releases", href: "/news/media-kit" },
            { label: "Our regions", href: "/news/media-kit" },
            { label: "Gallery", href: "/news/media-kit" },
            { label: "Contacts", href: "/news/media-kit" },
          ],
        },
      ],
    },
  ]

  const handleMouseEnter = (index: number) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setActiveMenuItem(index)
  }

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenuItem(null)
    }, 150)
  }

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen)
  //   setActiveMobileSection(null)
  // }

  const toggleMobileSection = (index: number) => {
    setActiveMobileSection(activeMobileSection === index ? null : index)
  }

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logoImage}
              alt="Logo"
              className={styles.logoImage}
              priority
              height={70}
              width={70}
            />
          </Link>
          {/* <a href="/" aria-label="Accor group – Homepage">
            <div className={styles.logoIcon}>A</div>
            <span className={styles.logoText}>ACCOR</span>
          </a> */}
        </div>

        {/* Top Bar */}
        {/* <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <a href="/booking" className={styles.topBarLink}>
              Book now
              <ExternalLink size={11} />
            </a>
            <a href="/careers" className={styles.topBarLink}>
              Find a job
              <ExternalLink size={11} />
            </a>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.languageSwitch}>
              <span className={styles.currentLang}>EN</span>
              <a href="/fr" className={styles.langLink}>
                FR
              </a>
            </div>
            <button className={styles.iconButton} aria-label="Accessibility settings">
              <Eye size={20} />
            </button>
            <button className={styles.iconButton} aria-label="Search">
              <Search size={20} />
            </button>
            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div> */}

        {/* Desktop Navigation */}
        <nav className={styles.nav}
          onMouseLeave={handleMouseLeave}
        >
          <ul className={styles.navList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink} onMouseEnter={() => handleMouseEnter(index)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Link href={"/"} className={styles.loginBtn}
            >Book a Stay</Link>

            <button className={styles.loginBtn} onMouseEnter={() => setShowLogInDropDown(true)}
              onMouseLeave={() => setShowLogInDropDown(false)}
            >Log In/SignUp</button>

            {showLogInDropDown && (
              <div className={styles.loginDropDown} onMouseEnter={() => setShowLogInDropDown(true)}
                onMouseLeave={() => setShowLogInDropDown(false)}
              >
                <LogInSignUp />
              </div>
            )}
          </ul>
          {/* </nav> */}

          {/* Mega Menu */}
          {activeMenuItem !== null && menuItems[activeMenuItem]?.sections && (
            <div
              className={styles.megaMenu}
              onMouseEnter={() => {
                if (menuTimeoutRef.current) {
                  clearTimeout(menuTimeoutRef.current)
                }
              }}
            // onMouseLeave={() => handleMouseLeave}
            >
              <div className={styles.megaMenuContent}>

                {/* Left Side Content */}
                <div className={styles.megaMenuSidebar}>
                  <div className={styles.featuredContent}>
                    {/* {menuItems[activeMenuItem]?.map((menuItem, index) => ( */}
                    <div className={styles.content}>
                      {/* <h3 className={styles.heading}>Group</h3>
                        <h5 className={styles.subHeading}>World Leading Hospitality Group</h5>
                        <p className={styles.description}> Building on the strength of our teams and of our holistic ecosystem of leading brands, personalized services & expert solutions, we break new ground to reimagine hospitality and inspire new ways to experience the world.
                        </p> */}
                      <h3 className={styles.heading}>{menuItems[activeMenuItem].label}</h3>
                      <h5 className={styles.subHeading}>{menuItems[activeMenuItem].heading}</h5>
                      <p className={styles.description}>{menuItems[activeMenuItem].description}</p>
                    </div>
                    {/* <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Featured content"
                      className={styles.featuredImage}
                    /> */}
                    <div className={styles.featuredText}>
                      <p className={styles.featuredSubtitle}>IN FOCUS</p>
                      <h4 className={styles.featuredTitle}>Latest Updates</h4>
                      <Link href="/news" className={styles.featuredLink}>
                        See more
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Side Content */}
                <div className={styles.megaMenuMain}>
                  {/* <h2 className={styles.megaMenuTitle}>{menuItems[activeMenuItem].label}</h2> */}

                  <div className={styles.megaMenuSectionsRow}>
                    {menuItems[activeMenuItem].sections?.map((section, sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className={styles.megaMenuSectionContainer}
                      // onMouseLeave={() => setHoveredSection(null)}
                      >
                        {/* Section Title (always visible) */}
                        <div className={styles.megaMenuSection}>
                          <h3 className={`${styles.sectionTitle} ${hoveredSection === sectionIndex ? styles.activeTitle : ''
                            }`}
                            onMouseEnter={() => setHoveredSection(sectionIndex)}
                            onMouseLeave={() => setHoveredSection(sectionIndex)}

                          >{section.title}
                          </h3>
                          {hoveredSection === sectionIndex && (<ChevronRight className={styles.chevronIcon} />)}
                        </div>

                        {/* Items Column (appears below on hover) */}
                        {hoveredSection === sectionIndex && (
                          <div className={styles.megaMenuItemsColumn}>
                            {section.items && (
                              <ul className={styles.sectionItems}>
                                {section.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link href={subItem.href} className={styles.sectionLink}>
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className={styles.megaMenuMain}>
                  <h2 className={styles.megaMenuTitle}>{menuItems[activeMenuItem].label}</h2>

                  <div className={styles.megaMenuSections}>
                    {menuItems[activeMenuItem].sections?.map((section, sectionIndex) => (
                      <div className={styles.megaMenuSectionBody}>
                        <div key={sectionIndex} className={styles.megaMenuSectionContainer}>
                          <div key={sectionIndex} className={styles.megaMenuSection}>
                            <h3 className={styles.sectionTitle}>{section.title}</h3>
                          </div>
                          <div className={styles.megaMenuSectionRight}> {section.items && (
                            <ul className={styles.sectionItems}>
                              {section.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link href={subItem.href} className={styles.sectionLink}>
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div> */}



              </div>
            </div>
          )}
        </nav>

        {/* Mobile Navigation */}
        {
          isMobileMenuOpen && (
            <div className={styles.mobileNav}>
              <div className={styles.mobileNavContent}>
                {menuItems.map((item, index) => (
                  <div key={index} className={styles.mobileNavItem}>
                    <div className={styles.mobileNavHeader}>
                      <a href={item.href} className={styles.mobileNavLink}>
                        {item.label}
                      </a>
                      {item.sections && (
                        <button
                          onClick={() => toggleMobileSection(index)}
                          className={styles.mobileNavToggle}
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown size={20} className={activeMobileSection === index ? styles.rotated : ""} />
                        </button>
                      )}
                    </div>
                    {item.sections && activeMobileSection === index && (
                      <div className={styles.mobileSubNav}>
                        {item.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className={styles.mobileSection}>
                            <h4 className={styles.mobileSectionTitle}>{section.title}</h4>
                            {section.items && (
                              <ul className={styles.mobileSectionItems}>
                                {section.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link href={subItem.href} className={styles.mobileSectionLink}>
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </div >
    </header >
  )
}


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
          <Link href="/LoginOne">
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            UZO ONE Login
          </Link>
        </div>
        <div className={styles.sideMenuDropdown__linkItem}>
          <Link href="/LoginPass">
            {/* <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} /> */}
            UZO PASS Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderAboutUzo
