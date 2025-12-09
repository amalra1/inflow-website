import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/src/components/Header/Header';
import Image from 'next/image';
import ProjectsSection from '@/src/sections/ProjectsSection/ProjectsSection';
import ContactSection from '@/src/sections/ContactSection/ContactSection';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = '4891186726';

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <main className={styles.mainContainer}>
      <div className={styles.gradientWrapper}>
        <Header variant="alternate" />

        <div className={styles.highlightLine}></div>

        <section className={styles.highlightSection}>
          <div className={styles.highlightWrapper}>
            <h2 className={styles.title}>Portfolio</h2>
          </div>
        </section>
      </div>

      <ProjectsSection />
      <ContactSection title="Entre em contato e vamos tirar a sua ideia do papel!" />

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
