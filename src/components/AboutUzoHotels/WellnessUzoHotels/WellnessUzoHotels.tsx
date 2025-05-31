"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import styles from "./WellnessUzoHotels.module.css"

interface WellnessExpert {
  id: number
  name: string
  image: string
  description: string
  link: string
}

const wellnessExperts: WellnessExpert[] = [
  {
    id: 1,
    name: "Jimmy Jarnet",
    image: "https://images.pexels.com/photos/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      'Jimmy Jarnet is a renowned wellness designer celebrated for his personalized and intuitive approach to well-being. Originally trained as a nurse and podiatrist, he developed a passion for massage and the transformative power of touch, inspired by his early experiences in healthcare. Drawing on global influences, including Thai techniques, Jimmy has created a unique methodology called "Wellness Design," which combines massage, fitness coaching, and wellness consulting to provide holistic, tailored experiences.',
    // \n\nHis accolades include being named Best Masseur in France (2016) and earning a bronze medal at the World Massage Championship (2022). Jimmy\'s work emphasizes mindfulness, intention, and living in the moment, aiming to help clients unlock their full potential and embrace sustainable balance. His bespoke treatments, offered in exclusive settings worldwide, focus on creating meaningful, transformative experiences.
    link: "/aboutUzoHotels",
  },
  {
    id: 2,
    name: "Laura Dodd",
    image: "https://images.pexels.com/photos/460307/pexels-photo-460307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Laura Dodd is the founder of The Yoga Class, an award-winning digital platform offering yoga, Pilates, and meditation classes. With a vision of making wellness accessible and transformative, she created a space where individuals can find physical movement, mental stillness, and holistic well-being at their own pace and convenience. Her approach emphasizes inclusivity, tailoring sessions for all levels, and blending mindfulness with dynamic physical practices.",
    // \n\nIn addition to her online platform, Laura curates luxurious wellness retreats in stunning locations worldwide. These retreats combine yoga, meditation, nutritious food, and activities like hiking and wild swimming, creating immersive experiences that rejuvenate both body and mind. Recognized by Country & Townhouse Magazine and Hip & Healthy for excellence in wellness, Laura's retreats reflect her commitment to meaningful and enriching connections with oneself and nature.\n\nHer passion for wellness and expertise in guiding transformative experiences have made Laura Dodd a leading figure in modern yoga and holistic living.
    link: "/aboutUzoHotels",
  },
  {
    id: 3,
    name: "Master Hu",
    image: "https://images.pexels.com/photos/3527074/pexels-photo-3527074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Master Hu is a highly accomplished Shaolin martial arts expert with over 20 years of rigorous training at the Shaolin Martial Arts Training Centre near the Shaolin Temple in Henan, China. His expertise spans Shaolin Kung Fu, Tai Chi, and Qi Gong, disciplines in which he has trained hundreds of students worldwide. Recognized for his skill, he has represented China's Shaolin tradition internationally in countries like Canada, Sweden, Germany, and South Korea.",
    // \n\nMaster Hu integrates martial arts with wellness practices, emphasizing the physical, mental, and spiritual benefits of traditional techniques. His teaching often includes Tai Chi for balance and stress relief, Qi Gong for energy flow and relaxation, and meditation for mental clarity. Additionally, he is skilled in the Zen Tea Ceremony, an art form combining mindfulness and harmony, offering participants a meditative experience through tea preparation and enjoyment.\n\nMaster Hu has led specialized workshops and private sessions at prestigious venues such as the Mandarin Oriental hotels in Sanya, Macau, and Milan. His teachings provide a unique blend of martial arts and holistic wellness, inspiring guests to explore deeper aspects of Shaolin culture and achieve personal harmony.
    link: "/aboutUzoHotels",
  },
]


export default function WellnessUzoHotels() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxSlide = Math.max(0, wellnessExperts.length - slidesToShow)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  // const goToSlide = (index: number) => {
  //   setCurrentSlide(Math.min(index, maxSlide))
  // }

  // const totalDots = Math.ceil(wellnessExperts.length / slidesToShow)

  return (
    <section className={styles.wellnessSection}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            <span>Wellness Experts</span>
          </h2>
        </div>

        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft className={styles.navIcon} />
          </button>

          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
                width: `${Math.ceil((wellnessExperts.length * 100) / slidesToShow)}%`
                // width: `${(wellnessExperts.length * 100) / slidesToShow}%`,
              }}
            >
              {wellnessExperts.map((expert) => (
                <div key={expert.id} className={styles.slide} style={{ width: `${100 / wellnessExperts.length}%` }}>
                  <div className={styles.slideContent}>
                    <div className={styles.slideImage}>
                      <Image
                        src={expert.image || "/placeholder.svg"}
                        alt={`${expert.name} - Wellness Expert`}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className={styles.slideInfo}>
                      <div className={styles.slideTitle}>
                        <h3>{expert.name}</h3>
                      </div>

                      <div className={styles.slideDescription}>
                        {expert.description.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>

                      <div className={styles.slideUtility}>
                        {expert.link !== "#" && (
                          <a
                            href={expert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.seeMoreButton}
                          >
                            See More
                            <ExternalLink className={styles.linkIcon} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            aria-label="Next slide"
          >
            <ChevronRight className={styles.navIcon} />
          </button>
        </div>

        <div className={styles.dots}>
          {/* {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === Math.floor(currentSlide / slidesToShow) ? styles.activeDot : ""}`}
              onClick={() => goToSlide(index * slidesToShow)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))} */}
        </div>
      </div>
    </section>
  )
}