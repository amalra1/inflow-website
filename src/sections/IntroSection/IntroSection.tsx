import Button from '@/src/components/Button/Button';
import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <section className={styles.introSection}>
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
              href="/"
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

        <div className={styles.placeholderColumn}>
          <div className={styles.placeholder}>PLACE HOLDER</div>
          <div className={styles.spiral}></div>
        </div>
      </div>
    </section>
  );
}
