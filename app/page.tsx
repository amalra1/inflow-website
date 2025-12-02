import Header from '@/src/components/Header/Header';
import IntroSection from '@/src/sections/IntroSection/IntroSection';
import SolutionsSection from '@/src/sections/SolutionsSection/SolutionsSection';
import PortfolioSection from '@/src/sections/PortfolioSection/PortfolioSection';
import StepsSection from '@/src/sections/StepsSection/StepsSection';
import ContactSection from '@/src/sections/ContactSection/ContactSection';
import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Image from 'next/image';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = '4891186726';

export default function HomePage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <main className={styles.mainContainer}>
      <Header variant="default" />
      <IntroSection />
      <SolutionsSection />
      <PortfolioSection />
      <StepsSection />
      <ContactSection title="Tem interesse em trabalhar conosco?" />
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
