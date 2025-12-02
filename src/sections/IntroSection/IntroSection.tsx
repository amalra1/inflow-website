import Button from '@/src/components/Button/Button';
import styles from './IntroSection.module.css';
import Image from 'next/image';

const CIRCLE_IMAGE_PATH = '/circles/intro-large-blue-circle.svg';
const INTRO_IMAGE_PATH = '/intro-image.svg';
const WHATSAPP_NUMBER = '4891186726';

export default function IntroSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <section className={styles.introSection}>
      <Image
        src={CIRCLE_IMAGE_PATH}
        alt="Círculos de design de fundo"
        width={500}
        height={500}
        className={styles.circlesDesignImage}
      />

      <div className={styles.innerWrapper}>
        <div className={styles.textColumn}>
          <div className={styles.blueLine}></div>
          <h1 className={styles.title}>Software House</h1>
          <p className={styles.subtitle}>
            Especializada em desenvolvimento sob medida, unindo tecnologia e
            resultado real
          </p>
          <div className={styles.ctaGroup}>
            <Button
              href={whatsappLink}
              backgroundColor="var(--color-main)"
              textColor="white"
              borderColor="var(--color-dark)"
            >
              Contate-nos
            </Button>
            <Button
              href="/"
              backgroundColor="transparent"
              textColor="var(--color-main)"
              borderColor="#07003B17"
            >
              Conheça nossos Cases
            </Button>
          </div>
        </div>

        <div className={styles.imageColumn}>
          {' '}
          <Image
            src={INTRO_IMAGE_PATH}
            alt="Ilustração da Inflow Software House"
            width={700}
            height={700}
            className={styles.introImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
