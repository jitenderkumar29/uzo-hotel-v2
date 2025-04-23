"use client"
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// SwiperCore.use([Autoplay]);

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Hero.module.css";
import "swiper/css";
import "swiper/css/autoplay"; // if you're using Autoplay module
import "./Hero.module.css"
// import HotelSearch from "./hotelSearch/HotelSearch";
import Image, { StaticImageData } from "next/image";

import hero1Jpg from "@/assets/images/hero111.jpg";
import hero2Jpg from "@/assets/images/hero222.jpg";
import hero3Jpg from "@/assets/images/hero333.jpg";
import hero4Jpg from "@/assets/images/hero444.jpg";
import hero5Jpg from "@/assets/images/hero555.jpg";
import hero6Jpg from "@/assets/images/hero666.jpg";
import hero7Jpg from "@/assets/images/hero777.jpg";
import hero8Jpg from "@/assets/images/hero888.jpg";
import hero9Jpg from "@/assets/images/hero999.jpg";
import hero10Jpg from "@/assets/images/hero10.jpg";
import HotelSearchBar from "../SearchBarMultiple/HotelSearchBar/HotelSearchBar";



interface HeroProps {
  data?: {
    name?: string;
    // banners?: string[];
    banners?: (string | StaticImageData)[];
  };
}

const defaultPropData = {
  name: "UzoHotels",
  banners: [
    hero1Jpg.src,
    hero2Jpg.src,
    hero3Jpg.src,
    hero4Jpg.src,
    hero5Jpg.src,
    hero6Jpg.src,
    hero7Jpg.src,
    hero8Jpg.src,
    hero9Jpg.src,
    hero10Jpg.src,
  ],
};

const Hero = ({ data = defaultPropData }: HeroProps) => {
  const swiperProps = {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  SwiperCore.use([Autoplay]);
  // useEffect(() => {
  // }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Swiper {...swiperProps} className={styles.swiper}>
          {data?.banners?.map((image, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <Image
                src={image}
                alt="Luxury hotel"
                fill
                priority={index === 0}
                quality={80}
                className={styles.image}
                sizes="100vw"
              />
              <div className={styles.overlay} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          <div className={styles.headingDiv}> Discover Premium Luxury Hotels in 20+ Countries</div>
          <HotelSearchBar />
        </h1>
        <div className={styles.searchContainer}>
          {/* <HotelSearch /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;