import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/src/components/Header/Header';
import Image from 'next/image';
import AlternateSolutionsSection from '@/src/sections/AlternateSolutionsSection/AlternateSolutionsSection';
import ContactSection from '@/src/sections/ContactSection/ContactSection';
import { Suspense } from 'react';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = '4891186726';

export default function SolutionsPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <main className={styles.mainContainer}>
      <div className={styles.gradientWrapper}>
        <Header variant="alternate" />

        <div className={styles.highlightLine}></div>

        <Suspense>
          <AlternateSolutionsSection />
        </Suspense>
      </div>
      <ContactSection
        title="Vamos marcar uma conversa?"
        subtitle="Peça um orçamento sem compromisso"
      />
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
