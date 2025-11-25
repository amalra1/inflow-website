import Image from 'next/image';
import styles from './PortfolioCard.module.css';

type PortfolioCardProps = {
  imageUrl: string;
  description: string;
  link: string;
};

export default function PortfolioCard({
  imageUrl,
  description,
  link,
}: PortfolioCardProps) {
  return (
    <a
      href={link}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt="Project Image"
          width={400}
          height={250}
          className={styles.image}
          quality={85}
        />
      </div>

      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
}
