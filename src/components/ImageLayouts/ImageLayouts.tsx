"use client";
import React from "react";
import styles from "./ImageLayouts.module.css";
import Image, { StaticImageData } from "next/image";
import imageLayout1 from "@/assets/images/imageLayout1.jpg";
import imageLayout2 from "@/assets/images/imageLayout2.jpg";
import imageLayout3 from "@/assets/images/imageLayout3.jpg";
import imageLayout4 from "@/assets/images/imageLayout4.jpg";
import imageLayout5 from "@/assets/images/imageLayout5.jpg";
import imageLayout6 from "@/assets/images/imageLayout6.jpg";
import imageLayout7 from "@/assets/images/imageLayout7.jpg";
import imageLayout8 from "@/assets/images/imageLayout8.jpg";
import imageLayout9 from "@/assets/images/imageLayout9.jpg";
import imageLayout10 from "@/assets/images/imageLayout10.jpg";

interface DestinationImage {
  url: string | StaticImageData;
  name: string;
  description: string;
  label: string;
}

interface ImageLayout {
  large?: DestinationImage;
  middle?: DestinationImage[];
  right?: DestinationImage[];
  left?: DestinationImage[];
}

interface ImageLayoutsData {
  layoutA: ImageLayout;
  layoutB: ImageLayout;
}

const images: ImageLayoutsData = {
  layoutA: {
    large: {
      url: imageLayout1,
      name: "Ho Chi Minh",
      description: "Economical, historical and entertainment centre of Vietnam",
      label: "Large - Left",
    },
    middle: [
      {
        url: imageLayout2,
        name: "Paris",
        description: "The City of Light",
        label: "Small Middle 1",
      },
      {
        url: imageLayout3,
        name: "Krabi",
        description: "A quaint destination featuring endless natural beauty",
        label: "Small Middle 2",
      },
    ],
    right: [
      {
        url: imageLayout4,
        name: "Maldives",
        description: "An ultimate luxurious and romantic holiday destination",
        label: "Small Right 1",
      },
      {
        url: imageLayout5,
        name: "Phuket",
        description: "A tropical paradise boasting of stunning beaches",
        label: "Small Right 2",
      },
    ],
  },
  layoutB: {
    left: [
      {
        url: imageLayout6,
        name: "Hyderabad",
        description: "The glorious city of Nizams known for radiant pearls",
        label: "Small Left 1",
      },
      {
        url: imageLayout7,
        name: "Udaipur",
        description: "Crowned as India's most romantic city",
        label: "Small Left 2",
      },
    ],
    middle: [
      {
        url: imageLayout8,
        name: "Ooty",
        description: "Endless natural beauty of the Nilgiris",
        label: "Small Middle 1",
      },
      {
        url: imageLayout9,
        name: "Manali",
        description:
          "Panoramic views of snow-laden mountains and dense deodar trees",
        label: "Small Middle 2",
      },
    ],
    large: {
      url: imageLayout10,
      name: "Amsterdam",
      description: "Venice of the North",
      label: "Large - Right",
    },
  },
};

const ImageCard: React.FC<{ image: DestinationImage; size: "large" | "small" }> = ({
  image,
  size
}) => {
  return (
    <div className={`${styles.imageContainer} ${styles[size]}`}>
      <Image
        src={image.url}
        alt={image.name}
        fill
        className={styles.image}
        sizes={size === "large" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
        priority={false}
      />
      <div className={styles.overlayText}>
        <h3>{image.name}</h3>
        <p className={styles.overlayTextDesc}>{image.description}</p>
      </div>
    </div>
  );
};

const ImageLayouts: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Holiday Destinations</h1>
      <p className={styles.subtitle}>
        We have selected some best locations around the world for you.
      </p>

      {/* Layout A */}
      <div className={styles.layout}>
        <div className={styles.column}>
          {images.layoutA.large && (
            <ImageCard image={images.layoutA.large} size="large" />
          )}
        </div>
        <div className={styles.column2}>
          {images.layoutA.middle?.map((img, index) => (
            <ImageCard key={`middle-${index}`} image={img} size="small" />
          ))}
        </div>
        <div className={styles.column3}>
          {images.layoutA.right?.map((img, index) => (
            <ImageCard key={`right-${index}`} image={img} size="small" />
          ))}
        </div>
      </div>

      {/* Layout B */}
      <div className={styles.layout}>
        <div className={styles.column}>
          {images.layoutB.left?.map((img, index) => (
            <ImageCard key={`left-${index}`} image={img} size="small" />
          ))}
        </div>
        <div className={styles.column2}>
          {images.layoutB.middle?.map((img, index) => (
            <ImageCard key={`middle-b-${index}`} image={img} size="small" />
          ))}
        </div>
        <div className={styles.column2}>
          {images.layoutB.large && (
            <ImageCard image={images.layoutB.large} size="large" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageLayouts;