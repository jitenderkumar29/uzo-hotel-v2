import Image from "next/image"
import { ExternalLink } from "lucide-react"
import styles from "./explore.module.css"

interface ExploreProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  imageUrl?: string
  imageAlt?: string
}

export default function Explore({
  title = "GIFT AN EXPERIENCE",
  description = "The perfect gift has just arrived. Give a memory-making UZO Hotels Experience, now available at select hotels.",
  buttonText = "Purchase Now",
  buttonLink = "#",
  imageUrl = "/images/explore.jpg",
  imageAlt = "Luxury hotel experience",
}: ExploreProps) {
  return (
    <section className={styles.exploreSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.description}>
              <p>{description}</p>
            </div>
            <div className={styles.ctaWrapper}>
              <a href={buttonLink} className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
                <span>{buttonText}</span>
                <ExternalLink className={styles.icon} size={16} />
              </a>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
