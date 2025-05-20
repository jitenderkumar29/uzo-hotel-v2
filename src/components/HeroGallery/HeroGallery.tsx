"use client";
import React from "react";
import styles from "./HeroGallery.module.css";
import Image, { StaticImageData } from "next/image";
import heroGallarySwim from "@/assets/images/heroGallarySwim.jpg";
import heroShopping from "@/assets/images/heroShopping.jpg";
import villabangla from "@/assets/images/premiumResort.jpg";
// import villabangla from "@/assets/images/villabangla.jpg";
import heroGallaryCard from "@/assets/images/heroGallaryCard.jpg";
import premiumhome from "@/assets/images/premiumhome.jpg";


interface GalleryItemProps {
  imageUrl: string | StaticImageData;
  altText: string;
  title: string;
  subtitle: string;
  link?: string;
  linkText?: string;
  target?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  imageUrl,
  altText,
  title,
  subtitle = "_self",
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.imgContainer}>
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className={styles.titleOverlay}>
          <h3>{title}</h3>
        </div>
        <div className={styles.caption}>
          <h4>{subtitle}</h4>
        </div>
      </div>
    </li>
  );
};

const HeroGallery: React.FC = () => {
  const galleryItems: GalleryItemProps[] = [
    {
      imageUrl:
        heroGallarySwim,
      altText: "Star Hotels",
      title: "Premium Star Hotels",
      subtitle: "Enjoy Luxury Stays In Star Hotels",
      link: "/in/en/destinations/newlaunch/mumbai-to-new-york.html",
      linkText: "View Route Details",
    },
    {
      imageUrl:
        heroShopping,
      altText: "Resorts",
      title: "Premium Resorts",
      subtitle: "Enjoy Your Holiday Stay With Loved One",
      link: "/in/en/maharaja-club/about.html",
      linkText: "Find Out More",
    },
    {
      imageUrl: villabangla,
      altText: "Villa bungalows",
      title: "Premium Villa & Bungalows",
      subtitle: "Enjoy Your Villa Stay & Red Fine Space In Luxury",
      link: "https://www.staralliance.com/en/frequent-flyers",
      linkText: "Learn More",
      target: "_blank",
    },
    {
      imageUrl: heroGallaryCard,
      altText: "Apart Hotels & Suites",
      title: "Premium Apart Hotels & Suites",
      subtitle: "Best For Business Professional Equiped Rooms & Suites",
      link: "/in/en/book/e-store.html",
      linkText: "Shop Now",
    },
    {
      imageUrl: premiumhome,
      altText: "Homes",
      title: "Premium Homes",
      subtitle: "Discover The Finest Private holiday Homes & Long Stay",
      link: "/in/en/contact-us.html",
      linkText: "Discover",
    },
  ];

  return (
    <div className={styles.heroGal}>
      <div className={styles.galleryContainer}>
        <header className={styles.topbar}>
          <h1>UZO - A&nbsp;&nbsp;Global Premium Luxury Hospitality Chain</h1>
          {/* <h1>UZO - A Premium Luxury Hotels Chain in The World</h1> */}
          <p>
            Discover our world of exclusive offers and services that change the
            way you travel.
          </p>
        </header>

        <section className={styles.gallerySec}>
          <ul className={styles.gallery}>
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} {...item} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HeroGallery;