'use client';
import React, { useState } from "react";
import styles from "./HotelCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image, { StaticImageData } from "next/image";
import discountLogo from "@/assets/icons/discountLogo.svg";
import offerBanner from "@/assets/images/offerBanner.jpg";
import Link from "next/link";
import { hotelData } from "@/app/data/hotelData"; // Adjust the import path as necessary
import { RatingCardPropsInterFace } from "@/interfaces";

const HotelCard: React.FC = () => {
  // const {
  //   destination,
  //   checkIn,
  //   checkOut,
  //   roomCount,
  //   guestCount,
  //   childCount
  // } = useHotelSearch();

  // console.log("HotelCard component props:", roomCount,
  //   guestCount,
  //   childCount,
  //   checkIn,
  //   checkOut,
  //   destination)



  // const [isOpenRating, setIsOpenRating] = useState(false);
  const [, setIsOpenMoreTag] = useState(false);
  const [openRatingId, setOpenRatingId] = useState<number | null>(null);
  const [openMoreTagsId, setOpenMoreTagsId] = useState<number | null>(null);
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  const hotelCard1: string | StaticImageData = offerBanner;
  // const hotelCard1: string | StaticImageData = "https://cdn.sanity.io/images/ocl5w36p/prod3/610a3f0fbe68aed8da441b0c8b4597e486990625-5464x2049.jpg?w=1280&auto=format&dpr=2"


  // rating Card
  // type RatingCardProps = {
  //   reviewScore: string;
  //   totalRatings: number;
  //   breakdown: {
  //     stars: number;
  //     count: number;
  //   }[];
  // };
  type MoreTagsProps = {

    moreTags: string[];
  };

  // Hotel data 

  // const options = [
  //   { label: "Popularity", sub: "" },
  //   { label: "Price", sub: "Low to High" },
  //   { label: "Price", sub: "High to Low" },
  //   { label: "User Rating", sub: "Highest First" },
  // ];

  const RatingCard = ({ reviewScore, totalRatings, breakdown }: RatingCardPropsInterFace) => {
    return (
      <div className={styles.cardRating}
        onMouseEnter={() => setOpenRatingId(openRatingId)}
        onMouseLeave={() => setOpenRatingId(null)}
      >
        <div className={styles.leftRating}>
          <div className={styles.scoreRating}>{reviewScore}</div>
          <div className={styles.totalRating}>{totalRatings} Ratings</div>
        </div>
        <div className={styles.rightRating}>
          {breakdown.map((item) => (
            <div key={item.stars} className={styles.ratingRowRating}>
              <span className={styles.starLabelRating}>{item.stars} ★</span>
              <div className={styles.barContainerRating}>
                <div
                  className={styles.barFillRating}
                  style={{ width: `${(item.count / totalRatings) * 100}%` }}
                />
              </div>
              <span className={styles.countRating}>{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const MoreTags = ({ moreTags }: MoreTagsProps) => {
    return (
      <div className={styles.MoreTagsBody} onClick={() => setIsOpenMoreTag(false)}>
        <ul className={styles.twoColumnList}>
          {moreTags.map((moreTag, i) => (
            <li key={i}>
              <a href={`/`}>{moreTag}</a>
            </li>
          ))}
        </ul>
      </div>

      // WorkingExample of MoreTags
      // <div className={styles.MoreTagsBody}
      //   onClick={() => setIsOpenMoreTag(false)}
      // >
      //   {moreTags.map((moreTag, i) => (
      //     <div key={i} className={styles.moreTags}>
      //       <a href={`/`}>{moreTag}</a>
      //     </div>
      //   ))}
      // </div >
    );
  };



  return (
    <>
      {/* <div className={styles.headingSection}>
        <h1 className={styles.hotelCardHeading}>Properties in Delhi </h1>
        <div className={styles.searchBoxSearch}>
          <FaSearch className={styles.searchIconSearch} />
          <input type="text" placeholder="Enter hotel name or location" className={styles.searchInputSearch} />
        </div>
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
      </div> */}
      <div className={styles.hotelCardBody}>
        <div className={styles.cardImageTop}>
          <Image
            src={hotelCard1}
            alt="Hotel card image"
            className={styles.hotelImage}
            width={2048}
            height={768}
          />
          <div className={styles.overlayText}>
            <div>
              <span>Exclusive Offer</span>
              <p>Easy Summer Sale</p>
            </div>
            <div><span>UZO Hotels Sale</span>
              <p>Get Upto 5000 OFF</p>
            </div>
            <div className={styles.bannerOffer}>
              <span><Image src={"/images/offerBanner2.png"} alt="Offer" height={250} width={201} /></span>
            </div>
            {/* <div><span>Book Now</span>
              <p>Pay Later</p>
            </div> */}
            {/* <div><span>Konw More</span>
              <p>T & C apply</p>
            </div> */}
          </div>
        </div>
        {hotelData.map((hotel) => (
          <div key={hotel.id} className={styles.hotelCard}>
            <div className={styles.cardContent}>
              <div className={styles.left}>
                <Image
                  className={styles.mainImg}
                  src={hotel.mainImg}
                  alt={`Main view of ${hotel.name}`}
                  height={350}
                  width={400}
                />
                <div className={styles.thumbnailList} role="list">
                  {hotel.thumbnails.map((thumb, i) => (

                    <Image
                      key={i}
                      src={thumb}
                      alt={`Thumbnail ${i + 1} of ${hotel.name}`}
                      role="listitem"
                      height={80}
                      width={80}
                    />
                  ))}
                  <div className={styles.viewAll} tabIndex={0}>
                    VIEW ALL
                  </div>

                </div>
              </div>

              <div className={styles.right}>

                <div className={styles.hotelInfo}>
                  <div className={styles.hotelInfoLeft}>
                    {/* <div className={styles.badgeRating}> */}
                    {/* <span className={styles.badge}>
                      {hotel.rating}<span className={styles.star}>★</span> · {hotel.category}
                    </span> */}
                    {/* <span className={styles.ratingTotal}>
                      {hotel.totalRatings} Ratings{" "}
                      <span className={styles.rating}>{hotel.reviewScore}</span>
                    </span> */}
                    {/* </div> */}
                    <div className={styles.headingStarHotels}>
                      <Link
                        href={`/hotelDetails/?id=${hotel.id}`}
                      >
                        <h2>{hotel.name} {" "}</h2>
                      </Link>
                      {/* <h2>{hotel.name} {" "} */}
                      {/* {hotel.rating}<span className={styles.star}>★</span> */}
                      {/* {hotel.rating}{" "} */}
                      {/* {Array.from({ length: Number(hotel.rating) }, (_, index) => (
                          <span key={index} className={styles.star}>★</span>
                        ))} */}
                      {/* </h2> */}
                      <span className={styles.badge}>
                        {hotel.rating}<span className={styles.star}> ★</span> {hotel.category}
                      </span>
                      {/* <span >
                      {hotel.rating}<span className={styles.star}>★</span>
                    </span> */}
                    </div>
                    <p className={styles.location}>
                      <FontAwesomeIcon icon={faLocationDot} className={styles.locationIcon} />{" "}
                      {hotel.location}</p>
                    <div className={styles.tags}>
                      {hotel.tags.map((tag, i) => (
                        <>
                          <span key={i} className={styles.tagItem}>
                            {tag}
                          </span>
                        </>
                      ))}
                      <div onMouseEnter={() => setOpenMoreTagsId(openMoreTagsId === hotel.id ? null : hotel.id)}
                        onMouseLeave={() => setOpenMoreTagsId(null)}
                      // onMouseLeave={() => setIsOpenRating(false)}
                      >
                        <span className={styles.tagItem}
                        >
                          & More
                        </span>
                        {openMoreTagsId === hotel.id && (
                          <MoreTags moreTags={hotel.moreTags} />
                        )}
                      </div>

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
                    <div className={styles.uzoStay}>
                      {/* <FontAwesomeIcon className={styles.iconPercent} icon={faPercent} /> */}
                      {/* <img
                        src={discountLogo}
                        alt="discount Logo" /> */}
                      <Image
                        src={discountLogo}
                        alt="discount Logo"
                        width={20} // required
                        height={20} // required
                        className={styles.discountLogo}
                      />
                      UZOSTAY Discount Applied
                    </div>

                  </div>
                  {/* <div className={styles.priceBoxRoom}>
                  <button type="button" className={styles.buttonRoom}>
                    Last 1 Room Left
                  </button>
                </div> */}
                  <div className={styles.priceBox}>

                    <div className={styles.roomLeft}>
                      <div
                        className={styles.ratingWrapper}
                        onMouseEnter={() => setOpenRatingId(hotel.id)}
                        onMouseLeave={() => setOpenRatingId(null)}
                      // onMouseEnter={() => setIsOpenRating(true)}
                      // onMouseLeave={() => setIsOpenRating(false)}
                      >
                        <span className={styles.ratingTotal}
                        // onMouseEnter={() => setIsOpenRating(true)}
                        // onMouseLeave={() => setIsOpenRating(false)}
                        // onClick={() => setIsOpenRating(true)}
                        >
                          {hotel.ratingCategory} <br />
                          {/* Excellent <br /> */}
                          {hotel.totalRatings} Ratings{" "}
                          <span className={styles.rating}>{hotel.reviewScore}</span>
                        </span>
                      </div>
                      {openRatingId === hotel.id &&
                        (<RatingCard reviewScore={hotel.reviewScore} totalRatings={hotel.totalRatings} breakdown={hotel.breakdown} />)}
                      <button type="button" className={styles.buttonRoom}>
                        Last {hotel.leftRoom} Room Left
                      </button>
                    </div>

                    {/* Rating Card component */}

                    {/* <div className={styles.bankOffer}>
                      <button type="button" className={styles.buttonBankOffer}>
                        Bank Offer | ₹637 off
                        <div className={styles.bankOfferApply}>Get Flat 15% off and No Cost <br /> EMI on HSBC Credit Card EMI</div>
                      </button>
                    </div> */}
                    {/* <div>
                    {hotel.totalRatings} Ratings{" "}
                    <span className={styles.rating}>{hotel.reviewScore}</span>
                  </div> */}
                    <div className="priceDetails">
                      <div className={styles.oldPrice}>{hotel.oldPrice}</div>
                      <div className={styles.newPrice}>{hotel.newPrice}</div>
                      <div className={styles.taxes}>{hotel.taxes}</div>
                      {/* <a className={styles.loginMsg} href="#">
                      Login now & save more
                    </a> */}
                      <Link
                        href={`/hotelDetails/?id=${hotel.id}`}
                        // href={{
                        //   pathname: '/detailsHotels',
                        //   query: {
                        //     data: JSON.stringify(hotel) // serialize object
                        //   }
                        // }} 
                        className={styles.buttonBookNow}>
                        Book Now
                      </Link>
                      {/* <Link href={{
                        pathname: '/detailsHotels',
                        query: {
                          data: JSON.stringify(hotel) // serialize object
                        }
                      }} className={styles.buttonBookNow}>
                        Book Now
                      </Link> */}
                      {/* <Link href="`/detailsHotels/${hotel.id}`" className={styles.buttonBookNow}>
                        Book Now
                      </Link> */}
                      {/* <button type="button" className={styles.buttonBookNow}>Book Now</button> */}
                    </div>

                    {/* Bank Offer */}
                    <div className={styles.bankOffer}>
                      <BankOfferCard />
                    </div>
                    {/* <div className={styles.bankOffer}>
                      <button type="button" className={styles.buttonBankOffer}>
                        Bank Offer | ₹637 off
                        <div className={styles.bankOfferApply}>Get Flat 15% off and No Cost <br /> EMI on HSBC Credit Card EMI</div>
                      </button>
                    </div> */}

                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

const BankOfferCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <Image
          src="https://go-assets.ibcdn.com/u/GI/images/1726036804650-BankofferDT.png"
          alt="Bank offer icon"
          width={20}
          height={20}
          className={styles.icon}
        />
        <span className={styles.discountTitle}>Bank offer | ₹891 off</span>
      </div>
      <div className={styles.separator} />
      <div className={styles.description}>
        Get Flat 15% off and No Cost <br /> EMI on HSBC Credit Card EMI
      </div>
    </div>
  );
};

export default HotelCard;
