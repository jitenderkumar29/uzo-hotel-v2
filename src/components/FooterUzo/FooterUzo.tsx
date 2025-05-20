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

interface FooterLinkSection {
  heading: string;
  links: string[];
}

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
          "About Us",
          "Investor Relation",
          "Careers",
          "Blogs",
          "Testimonial",
        ],
      },
    ],
    footerLinks2: [
      {
        heading: "Support",
        links: [
          "Contact Us",
          "FAQ",
          "Sustainability",
          "Medical Assistance",
          "Disclaimer",
        ],
      },
    ],
    footerLinks3: [
      {
        heading: "Services",
        links: [
          "Partner with Us",
          "Magazines",
          "Travel Tips",
          "Cookies Policy",
          "Advertise Your Hotels",
        ],
      },
    ],
    footerLinks4: [
      {
        heading: "Legal",
        links: [
          "Terms & Conditions",
          "Guest Policy",
          "Privacy Policy",
          "Cyber Security",
          "Trust & safety",
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
          "Hotels Kanpur",
          "Hotels in Goa",
          "Hotels in Puri",
          "Hotels in Ghaziabad",
          "Hotels in Jajpur",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Shimla",
          "Hotels in Manali",
          "Hotels in Udaipur",
          "Hotels in Mussoorie",
          "Hotels in Pondicherry",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Delhi",
          "Hotels in Mumbai",
          "Hotels in Sharjah",
          "Hotels in Kannur",
          "Hotels in Trivandrum",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Surat",
          "Hotels in Ahmedabad",
          "Hotels in Kolkata",
          "Hotels in Jaipur",
          "Hotels in Lucknow",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Nagpur",
          "Hotels in Indore",
          "Hotels in Thane",
          "Hotels in Bhopal",
          "Hotels in Noida",
        ],
      },
    ],
    internationalHotelsList: [
      {
        heading: "",
        links: [
          "Hotels near Usa",
          "Hotels in Switzerland",
          "Hotels in Japan",
          "Hotels in Canada",
          "Hotels in Australia",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Sweden",
          "Hotels in Germany",
          "Hotels in UK",
          "Hotels in New Zealand",
          "Hotels in Denmark",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Norway",
          "Hotels in France",
          "Hotels in Netherlands",
          "Hotels in Singapore",
          "Hotels in Italy",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in China",
          "Hotels in UAE",
          "Hotels in South Korea",
          "Hotels in Spain",
          "Hotels in Finland",
        ],
      },
      {
        heading: "",
        links: [
          "Hotels in Austria",
          "Hotels in Iceland",
          "Hotels in Belgium",
          "Hotels in Ireland",
          "Hotels in Qatar",
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
              <h4 className={styles.appSectionHead}>{footerData.appSection.title}</h4>
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
                  <h4>{col.heading}</h4>
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.footerLinks}>
              {footerData.footerLinks2.map((col, idx) => (
                <div key={idx} className={styles.column}>
                  <h4>{col.heading}</h4>
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.footerLinks}>
              {footerData.footerLinks3.map((col, idx) => (
                <div key={idx} className={styles.column}>
                  <h4>{col.heading}</h4>
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.footerLinks}>
              {footerData.footerLinks4.map((col, idx) => (
                <div key={idx} className={styles.column}>
                  <h4>{col.heading}</h4>
                  {col.links.map((link, i) => (
                    <a key={i} href="#">
                      {link}
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
                    {link}
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
                    {link}
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