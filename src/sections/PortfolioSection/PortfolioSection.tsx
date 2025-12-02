import styles from './PortfolioSection.module.css';
import PortfolioCard from '@/src/components/PortfolioCard/PortfolioCard';
import Button from '@/src/components/Button/Button';
import Image from 'next/image';

const CIRCLE_BACKGROUND_PATH = '/circles/intro-large-blue-circle.svg';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      imageUrl: 'placeholder.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum',
      link: '/',
    },
    {
      imageUrl: 'placeholder.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum',
      link: '/',
    },
    {
      imageUrl: 'placeholder.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum',
      link: '/',
    },
  ];

  return (
    <section className={styles.portfolioSection}>
      <Image
        src={CIRCLE_BACKGROUND_PATH}
        alt="Círculos de design de fundo"
        width={350}
        height={350}
        className={styles.circlesDesignImageLeft}
      />

      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>Portfólio</h2>

        <div className={styles.cardContainer}>
          <div className={styles.arrowLeft}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>

          <div className={styles.carouselWrapper}>
            <div className={styles.cardGrid}>
              {portfolioItems.map((item, index) => (
                <PortfolioCard
                  key={index}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  link={item.link}
                />
              ))}
            </div>
          </div>

          <div className={styles.arrowRight}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <Button
            href="/"
            backgroundColor="var(--color-dark)"
            textColor="white"
            borderColor="var(--color-dark)"
          >
            Ver mais
          </Button>
        </div>
      </div>
    </section>
  );
}
