import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/src/components/Header/Header';
import Image from 'next/image';
import Button from '@/src/components/Button/Button';
import HistorySection from '@/src/sections/HistorySection/HistorySection';
import ValuesSection from '@/src/sections/ValuesSection/ValuesSection';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = 'TODO';

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <main className={styles.mainContainer}>
      <Header variant="alternate" />

      <section className={styles.highlightSection}>
        <div className={styles.highlightWrapper}>
          <h2 className={styles.title}>INFLOW</h2>
          <h2 className={styles.title}>Software House</h2>
        </div>
      </section>

      <div className={styles.ctaContainer}>
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

      <HistorySection />
      <ValuesSection />

      <section className={styles.missionSection}>
        <div className={styles.missionWrapper}>
          <h2 className={styles.missionTitle}>Nossa missão</h2>
          <p className={styles.missionSubtitle}>
            Transformar ideias complexas em soluções digitais simples,
            escaláveis e humanas.
          </p>
        </div>
      </section>

      <Footer />
      <a
        href={whatsappLink}
        className={styles.whatsappFixedButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={WHATSAPP_ICON_PATH}
          alt="WhatsApp"
          width={35}
          height={35}
          className={styles.whatsappIcon}
        />
      </a>
    </main>
  );
}
