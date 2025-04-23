'use client';
import React, { useState } from "react";
import styles from "./HotelCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HotelCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  interface HotelData {
    id: number;
    name: string;
    rating: string;
    category: string;
    location: string;
    tags: string[];
    commonFeature: string,
    features: string[];
    mainImg: string;
    thumbnails: string[];
    totalRatings: number;
    reviewScore: string;
    leftRoom: number;
    oldPrice: string;
    newPrice: string;
    taxes: string;
  }

  const hotelData: HotelData[] = [
    {
      id: 1,
      name: "Pride Plaza Hotel Aerocity New Delhi",
      rating: "5",
      category: "Hotel",
      location: "Aerocity | 4 km drive to Indira Gandhi International Airport",
      tags: ["Gym", "Restaurant", "& more"],
      commonFeature: "👫 Couple Friendly",
      features: [
        // "👫 Couple Friendly",
        "Free Cancellation",
        "Book @ $0 Available",
        "Breakfast available at extra charges",
      ],
      mainImg: "https://www.ahstatic.com/photos/9470_roskc_01_p_1024x768.jpg",
      thumbnails: [
        "https://www.ahstatic.com/photos/a248_ho_00_p_2048x1536.jpg",
        "https://www.ahstatic.com/photos/a248_ro_01_p_2048x1536.jpg",
        "https://www.ahstatic.com/photos/a248_rs_00_p_2048x1536.jpg",
        "https://www.ahstatic.com/photos/a248_rs_03_p_2048x1536.jpg",
        "https://www.ahstatic.com/photos/a248_ho_05_p_2048x1536.jpg",
      ],
      totalRatings: 3145,
      reviewScore: "4/5",
      leftRoom: 1,
      oldPrice: "₹4,000",
      newPrice: "₹3,600",
      taxes: "+₹432 taxes & fees per night",
    },
    {
      id: 2,
      name: "Hotel The Ventus Near Delhi Airport",
      rating: "4",
      category: "Hotel",
      location: "Mahipalpur | 4.4 km drive to Indira Gandhi International Airport",
      tags: ["Gym", "Restaurant", "& more"],
      commonFeature: "👫 Couple Friendly",
      features: [
        // "👫 Couple Friendly",
        "Free Cancellation",
        "Book @ $0 Available",
        "Breakfast available at extra charges",
      ],
      mainImg: "https://r1imghtlak.ibcdn.com/c8a6cdc8-2d3b-429d-a051-37246dddef53.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=webp",
      thumbnails: [
        "https://r1imghtlak.ibcdn.com/0293a1f7-484c-4df3-951b-334e521c9cae.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201101271518485411-53c781c41e5d11eabdba0242ac110002.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r1imghtlak.ibcdn.com/7ec7b94f-fa51-4096-bfe6-52fe3b2db6ce.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r1imghtlak.ibcdn.com/5d30d0e6-1761-4cd4-99d2-2ac229519ebb.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r1imghtlak.ibcdn.com/973585b0-6ed7-443f-b41e-c4f573bac446.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
      ],
      totalRatings: 5145,
      reviewScore: "4/5",
      leftRoom: 2,
      oldPrice: "₹6,999",
      newPrice: "₹2865",
      taxes: "+₹716 taxes & fees per night",
    },
    {
      id: 3,
      name: "Hotel ALL IZ WELL By Haveliya Hotels",
      rating: "4",
      category: "Hotel",
      location: "Paharganj | 7 minutes walk to New Delhi Railway Station",
      tags: ["Gym", "Restaurant", "& more"],
      commonFeature: "👫 Couple Friendly",
      features: [
        // "👫 Couple Friendly",
        "Free Cancellation",
        "Book @ $0 Available",
        "Breakfast available at extra charges",
      ],
      mainImg: "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201407242019374758-f2b4ed59-462d-4852-8965-714b6b1b9dd7.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
      thumbnails: [
        "https://r1imghtlak.ibcdn.com/77e0ce4e32da11eaaef30242ac110004.jpeg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201407242019374758-a90aeda2797811eba4e00242ac110002.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201407242019374758-308f563a-dc1a-4e9d-bce8-b4e8c1993c18.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201802231746016635-33a78654c72011ed952b0a58a9feac02.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r1imghtlak.ibcdn.com/f56160302c6511e9a4210242ac110004.jfif?&downsize=245:152&crop=245:152;25,0&output-format=webp",
      ],
      totalRatings: 50,
      reviewScore: "4/5",
      leftRoom: 1,
      oldPrice: "₹3050",
      newPrice: "₹869",
      taxes: "+₹204 taxes & fees per night",
    },
    {
      id: 4,
      name: "Staybook - Hotel Jai Balaji @ New Delhi Railway Station",
      rating: "5",
      category: "Hotel",
      location: "Paharganj | 6 minutes walk to New Delhi Railway Station",
      tags: ["Gym", "Restaurant", "& more"],
      commonFeature: "👫 Couple Friendly",
      features: [
        // "👫 Couple Friendly",
        "Free Cancellation",
        "Book @ $0 Available",
        "Breakfast available at extra charges",
      ],
      mainImg: "https://r1imghtlak.ibcdn.com/a4b4abb0-5fb0-43cc-acc7-e7c28affe7b2.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
      thumbnails: [
        "https://r1imghtlak.ibcdn.com/77e0ce4e32da11eaaef30242ac110004.jpeg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201407242019374758-a90aeda2797811eba4e00242ac110002.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201407242019374758-308f563a-dc1a-4e9d-bce8-b4e8c1993c18.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201802231746016635-33a78654c72011ed952b0a58a9feac02.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r1imghtlak.ibcdn.com/f56160302c6511e9a4210242ac110004.jfif?&downsize=245:152&crop=245:152;25,0&output-format=webp",
      ],
      totalRatings: 1310,
      reviewScore: "4/5",
      oldPrice: "₹1999",
      leftRoom: 3,
      newPrice: "₹768",
      taxes: "+₹223 taxes & fees per night",
    },
    {
      id: 5,
      name: "Hotel SB Inn @ New Delhi",
      rating: "5",
      category: "Hotel",
      location: "Paharganj | 7 minutes walk to New Delhi Railway Station",
      tags: ["Gym", "Restaurant", "& more"],
      commonFeature: "👫 Couple Friendly",
      features: [
        // "👫 Couple Friendly",
        "Free Cancellation",
        "Book @ $0 Available",
        "Breakfast available at extra charges",
      ],
      mainImg: "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202304121711397953-2f87ced8cbef11eeac400a58a9feac02.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
      thumbnails: [
        "https://r1imghtlak.ibcdn.com/77e0ce4e32da11eaaef30242ac110004.jpeg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201407242019374758-a90aeda2797811eba4e00242ac110002.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201407242019374758-308f563a-dc1a-4e9d-bce8-b4e8c1993c18.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201802231746016635-33a78654c72011ed952b0a58a9feac02.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
        "https://r1imghtlak.ibcdn.com/f56160302c6511e9a4210242ac110004.jfif?&downsize=245:152&crop=245:152;25,0&output-format=webp",
      ],
      totalRatings: 1310,
      reviewScore: "4/5",
      leftRoom: 1,
      oldPrice: "₹1999",
      newPrice: "₹768",
      taxes: "+₹223 taxes & fees per night",
    },
  ];

  const options = [
    { label: "Popularity", sub: "" },
    { label: "Price", sub: "Low to High" },
    { label: "Price", sub: "High to Low" },
    { label: "User Rating", sub: "Highest First" },
  ];


  return (
    <>
      <div className={styles.headingSection}>
        <h1 className={styles.hotelCardHeading}>Properties in Delhi </h1>
        <div className={styles.dropdown}>
          <button
            className={styles.dropdownToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            {options[selectedIndex].label}
            {!isOpen && (<FaChevronDown className={styles.chevron} />)}
            {isOpen && (<FaChevronUp className={styles.chevron} />)}
          </button>

          {isOpen && (
            <div className={styles.dropdownMenu}>
              {options.map((opt, index) => (
                <label
                  key={index}
                  className={`${styles.option} ${selectedIndex === index ? styles.active : ""}`}
                >
                  <input
                    type="radio"
                    name="sortOption"
                    value={index}
                    checked={selectedIndex === index}
                    onChange={() => {
                      setSelectedIndex(index);
                      setIsOpen(false);
                    }}
                  />
                  <div>
                    {opt.label}
                    {opt.sub && <br />}
                    {opt.sub && <small>{opt.sub}</small>}
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {hotelData.map((hotel) => (
        <div key={hotel.id} className={styles.hotelCard}>
          <div className={styles.cardContent}>
            <div className={styles.left}>
              <img
                className={styles.mainImg}
                src={hotel.mainImg}
                alt={`Main view of ${hotel.name}`}
              />
              <div className={styles.thumbnailList} role="list">
                {hotel.thumbnails.map((thumb, i) => (
                  <img
                    key={i}
                    src={thumb}
                    alt={`Thumbnail ${i + 1} of ${hotel.name}`}
                    role="listitem"
                  />
                ))}
                <div className={styles.viewAll} tabIndex={0}>
                  VIEW ALL
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.hotelInfo}>
                <div>
                  <div className={styles.badgeRating}>
                    <span className={styles.badge}>
                      {hotel.rating}<span className={styles.star}>★</span> · {hotel.category}
                    </span>
                    <span className={styles.ratingTotal}>
                      {hotel.totalRatings} Ratings{" "}
                      <span className={styles.rating}>{hotel.reviewScore}</span>
                    </span>
                  </div>

                  <h2>{hotel.name}</h2>
                  <p className={styles.location}>{hotel.location}</p>
                  <div className={styles.tags}>
                    {hotel.tags.map((tag, i) => (
                      <span key={i} className={styles.tagItem}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.labelsCommon}>

                    <p className={styles.featureCommon}>
                      {hotel.commonFeature}
                    </p>

                  </div>
                  <div className={styles.freatureLabels}>
                    <div className={styles.labels}>
                      {hotel.features.map((feature, i) => (

                        <p key={i} className={styles.feature}>
                          <FontAwesomeIcon className={styles.iconCheck} icon={faCheck} />
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>

                </div>
                {/* <div className={styles.priceBoxRoom}>
                  <button type="button" className={styles.buttonRoom}>
                    Last 1 Room Left
                  </button>
                </div> */}
                <div className={styles.priceBox}>
                  <div className="roomLeft">
                    <button type="button" className={styles.buttonRoom}>
                      Last {hotel.leftRoom} Room Left
                    </button>
                  </div>
                  {/* <div>
                    {hotel.totalRatings} Ratings{" "}
                    <span className={styles.rating}>{hotel.reviewScore}</span>
                  </div> */}
                  <div className="priceDetails">
                    <div className={styles.oldPrice}>{hotel.oldPrice}</div>
                    <div className={styles.newPrice}>{hotel.newPrice}</div>
                    <div className={styles.taxes}>{hotel.taxes}</div>
                    <a className={styles.loginMsg} href="#">
                      Login now & save more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HotelCard;
