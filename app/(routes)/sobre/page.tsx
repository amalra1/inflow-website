import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/src/components/Header/Header';
import Image from 'next/image';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = 'TODO';

export default function AboutPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <main className={styles.mainContainer}>
      <Header variant="alternate" />
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
