"use client";
// components/FooterUzo.tsx
import React, { useState } from "react";
import styles from "./FooterUzo.module.css";
import { FaChevronCircleDown, FaChevronCircleUp, FaComments } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
// Import All images
import appStoreImage from "@/assets/icons/appStore.png";
import playStoreImage from "@/assets/icons/playStore.png";
import facebookImage from "@/assets/icons/facebook.png";
import xImage from "@/assets/icons/x.png";
import instagramImage from "@/assets/icons/instagram.png";
import linkedinImage from "@/assets/icons/linkedin.png";
import youtubeImage from "@/assets/icons/youtube.png";
import Link from "next/link";

interface FooterLink {
  text: string;
  url: string;
}

interface FooterLinkSection {
  heading: string;
  links: FooterLink[];
}
// interface FooterLinkSection {
//   heading: string;
//   links: string[];
// }

interface FooterData {
  appSection: {
    title: string;
    storeButtons: (string | StaticImageData)[];
    // storeButtons: string[];
  };
  footerLinks: FooterLinkSection[];
  footerLinks2: FooterLinkSection[];
  footerLinks3: FooterLinkSection[];
  footerLinks4: FooterLinkSection[];
  socialIcons: (string | StaticImageData)[];
  // socialIcons: string[];
  footerBottomLinks: FooterLinkSection[];
  internationalHotelsList: FooterLinkSection[];
  copyright: {
    text: string;
  };
}

const FooterUzo: React.FC = () => {
  const [showTop, setShowTop] = useState(true);
  const [showBottom, setShowBottom] = useState(false);
  const [showInternational, setShowInternational] = useState(false);

  const footerData: FooterData = {
    appSection: {
      title: "Download Our App",
      storeButtons: [appStoreImage, playStoreImage],
    },
    footerLinks: [
      {
        heading: "Information",
        links: [
          { text: "About Us", url: "/aboutUzoHotels" },
          { text: "Investor Relation", url: "/investor-relations" },
          { text: "Careers", url: "/careers" },
          { text: "Blogs", url: "/blog" },
          { text: "Testimonial", url: "/testimonials" },
          // "About Us",
          // "Investor Relation",
          // "Careers",
          // "Blogs",
          // "Testimonial",
        ],
      },
    ],
    footerLinks2: [
      {
        heading: "Support",
        links: [
          { text: "Contact Us", url: "/contact-us" },
          { text: "Travel Tips", url: "/travel-tips" },
          // { text: "FAQ", url: "/faq" },  // commented out as per original
          { text: "Sustainability", url: "/sustainability" },
          { text: "Medical Assistance", url: "/medical-assistance" },
          { text: "Disclaimer", url: "/disclaimer" },
          // "Contact Us",
          // "Travel Tips",
          // // "FAQ",
          // "Sustainability",
          // "Medical Assistance",
          // "Disclaimer",
        ],
      },
    ],
    footerLinks3: [
      {
        heading: "Services",
        links: [
          { text: "Partner with Us", url: "/partner" },
          { text: "Magazines", url: "/magazines" },
          { text: "List Your Property", url: "/list-property" },
          // { text: "Travel Tips", url: "/travel-tips" },  // commented out as per original  
          { text: "Cookies Policy", url: "/cookies-policy" },
          { text: "Advertise Your Hotels", url: "/advertise-hotels" },
          // "Partner with Us",
          // "Magazines",
          // "List Your Property",
          // // "Travel Tips",
          // "Cookies Policy",
          // "Advertise Your Hotels",
        ],
      },
    ],
    footerLinks4: [
      {
        heading: "Legal",
        links: [
          { text: "Terms & Conditions", url: "/terms-and-conditions" },
          { text: "Guest Policy", url: "/guest-policy" },
          { text: "Privacy Policy", url: "/privacy-policy" },
          { text: "Cyber Security", url: "/cyber-security" },
          { text: "Trust & Safety", url: "/trust-and-safety" },
          // "Terms & Conditions",
          // "Guest Policy",
          // "Privacy Policy",
          // "Cyber Security",
          // "Trust & safety",
        ],
      },
    ],

    socialIcons: [
      facebookImage,
      xImage,
      instagramImage,
      linkedinImage,
      youtubeImage,
    ],
    footerBottomLinks: [
      {
        heading: "",
        links: [
          { text: "Hotels Kanpur", url: "/hotels-in-kanpur" },
          { text: "Hotels in Goa", url: "/hotels-in-goa" },
          { text: "Hotels in Puri", url: "/hotels-in-puri" },
          { text: "Hotels in Ghaziabad", url: "/hotels-in-ghaziabad" },
          { text: "Hotels in Jajpur", url: "/hotels-in-jajpur" },
          // "Hotels Kanpur",
          // "Hotels in Goa",
          // "Hotels in Puri",
          // "Hotels in Ghaziabad",
          // "Hotels in Jajpur",
        ],
      },
      {
        heading: "",
        links: [
          { text: "Hotels in Shimla", url: "/hotels/shimla" },
          { text: "Hotels in Manali", url: "/hotels/manali" },
          { text: "Hotels in Udaipur", url: "/hotels/udaipur" },
          { text: "Hotels in Mussoorie", url: "/hotels/mussoorie" },
          { text: "Hotels in Pondicherry", url: "/hotels/pondicherry" },
          // "Hotels in Shimla",
          // "Hotels in Manali",
          // "Hotels in Udaipur",
          // "Hotels in Mussoorie",
          // "Hotels in Pondicherry",
        ],
      },
      {
        heading: "",
        links: [
          { text: "Hotels in Delhi", url: "/delhi-hotels" },
          { text: "Hotels in Mumbai", url: "/mumbai-hotels" },
          { text: "Hotels in Sharjah", url: "/sharjah-hotels" },
          { text: "Hotels in Kannur", url: "/kannur-hotels" },
          { text: "Hotels in Trivandrum", url: "/trivandrum-hotels" },
          // "Hotels in Delhi",
          // "Hotels in Mumbai",
          // "Hotels in Sharjah",
          // "Hotels in Kannur",
          // "Hotels in Trivandrum",
        ],
      },
      {
        heading: "",
        links: [
          { text: "Hotels in Surat", url: "/surat-hotels" },
          { text: "Hotels in Ahmedabad", url: "/ahmedabad-hotels" },
          { text: "Hotels in Kolkata", url: "/kolkata-hotels" },
          { text: "Hotels in Jaipur", url: "/jaipur-hotels" },
          { text: "Hotels in Lucknow", url: "/lucknow-hotels" },
          // "Hotels in Surat",
          // "Hotels in Ahmedabad",
          // "Hotels in Kolkata",
          // "Hotels in Jaipur",
          // "Hotels in Lucknow",
        ],
      },
      {
        heading: "",
        links: [
          { text: "Hotels in Nagpur", url: "/nagpur-hotels" },
          { text: "Hotels in Indore", url: "/indore-hotels" },
          { text: "Hotels in Thane", url: "/thane-hotels" },
          { text: "Hotels in Bhopal", url: "/bhopal-hotels" },
          { text: "Hotels in Noida", url: "/noida-hotels" },
          // "Hotels in Nagpur",
          // "Hotels in Indore",
          // "Hotels in Thane",
          // "Hotels in Bhopal",
          // "Hotels in Noida",
        ],
      },
    ],
    internationalHotelsList: [
      {
        heading: "",
        links: [
          { text: "Hotels in USA", url: "/usa-hotels" },
          { text: "Hotels in Switzerland", url: "/switzerland-hotels" },
          { text: "Hotels in Japan", url: "/japan-hotels" },
          { text: "Hotels in Canada", url: "/canada-hotels" },
          { text: "Hotels in Australia", url: "/australia-hotels" },
          // "Hotels in USA",
          // "Hotels in Switzerland",
          // "Hotels in Japan",
          // "Hotels in Canada",
          // "Hotels in Australia",
        ],
      },
      {
        heading: "",
        links: [
          { text: "Hotels in Sweden", url: "/sweden-hotels" },
          { text: "Hotels in Germany", url: "/germany-hotels" },
          { text: "Hotels in UK", url: "/uk-hotels" },
          { text: "Hotels in New Zealand", url: "/new-zealand-hotels" },
          { text: "Hotels in Denmark", url: "/denmark-hotels" },
          // "Hotels in Sweden",
          // "Hotels in Germany",
          // "Hotels in UK",
          // "Hotels in New Zealand",
          // "Hotels in Denmark",
        ],
      },
      {
        heading: "",
        links: [
          { text: "Hotels in Norway", url: "/norway-hotels" },
          { text: "Hotels in France", url: "/france-hotels" },
          { text: "Hotels in Netherlands", url: "/netherlands-hotels" },
          { text: "Hotels in Singapore", url: "/singapore-hotels" },
          { text: "Hotels in Italy", url: "/italy-hotels" },
          // "Hotels in Norway",
          // "Hotels in France",
          // "Hotels in Netherlands",
          // "Hotels in Singapore",
          // "Hotels in Italy",
        ],
      },
      {
        heading: "",
        links: [
          { text: "Hotels in China", url: "/china-hotels" },
          { text: "Hotels in UAE", url: "/uae-hotels" },
          { text: "Hotels in South Korea", url: "/south-korea-hotels" },
          { text: "Hotels in Spain", url: "/spain-hotels" },
          { text: "Hotels in Finland", url: "/finland-hotels" },
          // "Hotels in China",
          // "Hotels in UAE",
          // "Hotels in South Korea",
          // "Hotels in Spain",
          // "Hotels in Finland",
        ],
      },
      {
        heading: "",
        links: [
          { text: "Hotels in Austria", url: "/austria-hotels" },
          { text: "Hotels in Iceland", url: "/iceland-hotels" },
          { text: "Hotels in Belgium", url: "/belgium-hotels" },
          { text: "Hotels in Ireland", url: "/ireland-hotels" },
          { text: "Hotels in Qatar", url: "/qatar-hotels" },
          // "Hotels in Austria",
          // "Hotels in Iceland",
          // "Hotels in Belgium",
          // "Hotels in Ireland",
          // "Hotels in Qatar",
        ],
      },
    ],
    copyright: {
      text: "Copyright@2025 UZO HOTELS- All Right Reserved",
    },
  };

  return (
    <footer className={styles.footerBox}>
      <div className={styles.footerContainer}>
        {/* Top Section */}
        {showTop && (
          <div className={styles.footerTop}>
            <div className={styles.appSection}>
              <h4 className={`${styles.appSectionHead} ${styles.headingCol}`}>{footerData.appSection.title}</h4>
              <div className={styles.storeButtons}>
                {footerData.appSection.storeButtons.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`store-${idx}`}
                    className={styles.storeButtonImg}
                  />
                ))}
              </div>
              <h4>Customer Care No.</h4>
              <h4>1800 1612 1211</h4>
            </div>

            <div className={styles.footerLinks}>
              {footerData.footerLinks.map((col, idx) => (
                <div key={idx} className={styles.column}>
                  <h4 className={styles.headingCol}>{col.heading}</h4>
                  {col.links.map((link) => (
                    <Link
                      key={link.url} // Better to use URL as key if it's unique
                      href={link.url} // Directly use the url property
                      aria-label={`Browse ${link.text}`} // Accessibility improvement
                    // onClick={(e) => {
                    //   console.log(`Footer link clicked: ${link.text}`);
                    // }}
                    >
                      {link.text}
                    </Link>
                    // <a key={i} href="#">
                    //   {link.text}
                    // </a>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.footerLinks}>
              {footerData.footerLinks2.map((col, idx) => (
                <div key={idx} className={styles.column}>
                  <h4 className={styles.headingCol}>{col.heading}</h4>
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link.text}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.footerLinks}>
              {footerData.footerLinks3.map((col, idx) => (
                <div key={idx} className={styles.column}>
                  <h4 className={styles.headingCol}>{col.heading}</h4>
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link.text}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.footerLinks}>
              {footerData.footerLinks4.map((col, idx) => (
                <div key={idx} className={styles.column}>
                  <h4 className={styles.headingCol}>{col.heading}</h4>
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link.text}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.footerToggleButtons1}>
          <button onClick={() => setShowTop(!showTop)}>
            {showTop ? (
              <FaChevronCircleUp className={styles.toggleIcon} />
            ) : (
              <FaChevronCircleDown className={styles.toggleIcon} />
            )}
          </button>
        </div>

        {/* Domestic Hotels */}
        <h4 className={styles.hotelsInIndia}>Domestic Hotels</h4>
        {showBottom && (
          <div className={styles.footerBottom}>
            {footerData.footerBottomLinks.map((col, idx) => (
              <div key={idx} className={styles.column}>
                {col.links.map((link, i) => (
                  <a key={i} href="#">
                    {link.text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
        <div className={styles.footerToggleButtons2}>
          <button onClick={() => setShowBottom(!showBottom)}>
            {showBottom ? (
              <FaChevronCircleUp className={styles.toggleIcon} />
            ) : (
              <FaChevronCircleDown className={styles.toggleIcon} />
            )}
          </button>
        </div>

        {/* International Hotels */}
        <h4 className={styles.hotelsInInternational}>International Hotels</h4>
        {showInternational && (
          <div className={styles.footerBottom}>
            {footerData.internationalHotelsList.map((col, idx) => (
              <div key={idx} className={styles.column}>
                {col.links.map((link, i) => (
                  <a key={i} href="#">
                    {link.text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
        <div className={styles.footerToggleButtons3}>
          <button onClick={() => setShowInternational(!showInternational)}>
            {showInternational ? (
              <FaChevronCircleUp className={styles.toggleIcon} />
            ) : (
              <FaChevronCircleDown className={styles.toggleIcon} />
            )}
          </button>
        </div>

        {/* Footer Bottom */}
        <div className={styles.customSocials}>
          <div className={styles.customSocialsLeft}>
            <span>{footerData.copyright.text}</span>
          </div>

          <div className={styles.customSocialsMiddle}>
            <div className={styles.socialIcons}>
              <span className={styles.socialIconsHead}>Follow Us:&nbsp;</span>
              {footerData.socialIcons.map((icon, i) => (
                <Image
                  key={i}
                  src={icon}
                  alt={`icon-${i}`}
                  className={styles.socialIcon}
                />
              ))}
            </div>
          </div>

          <div className={styles.customSocialsRight}>
            <div className={styles.connectWhatsapp}>
              +918956231245
              <br />
              Connect with Us on WhatsApp
            </div>
          </div>
        </div>
      </div>

      {/* Chat Icon */}
      <div className={styles.chatIcon} title="Chat with us">
        <FaComments />
      </div>
    </footer>
  );
};

export default FooterUzo;