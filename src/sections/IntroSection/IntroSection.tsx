import Button from '@/src/components/Button/Button';
import styles from './IntroSection.module.css';
import Image from 'next/image';
import { useI18n } from '@/src/context/i18n.context';

const CIRCLE_IMAGE_PATH = '/circles/intro-large-blue-circle.svg';
const INTRO_IMAGE_PATH = '/intro-image.svg';

export default function IntroSection() {
  const { text: websiteText } = useI18n();
  const INTRO_TEXT = websiteText.sections.introSection;

  return (
    <section className={styles.introSection}>
      <Image
        src={CIRCLE_IMAGE_PATH}
        alt={INTRO_TEXT.altTexts.designCircles}
        width={500}
        height={500}
        className={styles.circlesDesignImage}
      />

      <div className={styles.innerWrapper}>
        <div className={styles.textColumn}>
          <div className={styles.whiteLine}></div>
          <h1 className={styles.title}>{INTRO_TEXT.title}</h1>
          <p className={styles.subtitle}>{INTRO_TEXT.subtitle}</p>
          <div className={styles.ctaGroup}>
            <Button
              href="/contato"
              backgroundColor="var(--color-dark)"
              textColor="white"
              borderColor="#000000"
            >
              {INTRO_TEXT.ctaContact}
            </Button>
            <Button
              href="/portfolio"
              backgroundColor="transparent"
              textColor="var(--color-main)"
              borderColor="var(--color-main)"
            >
              {INTRO_TEXT.ctaPortfolio}
            </Button>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <Image
            src={INTRO_IMAGE_PATH}
            alt={INTRO_TEXT.altTexts.mainIllustration}
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
