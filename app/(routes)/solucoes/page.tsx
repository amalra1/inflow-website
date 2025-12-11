import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/src/components/Header/Header';
import Image from 'next/image';
import AlternateSolutionsSection from '@/src/sections/AlternateSolutionsSection/AlternateSolutionsSection';
import ContactSection from '@/src/sections/ContactSection/ContactSection';
import { Suspense } from 'react';
import { getWebsiteText } from '@/src/utils/website-text';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = '4891186726';

export default function SolutionsPage() {
  const websiteText = getWebsiteText();
  const SOLUTIONS_DATA = websiteText.solutionsPage;
  const WHATSAPP_ALT_TEXT = websiteText.homePage.whatsappButton.altText;

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
        title={SOLUTIONS_DATA.contactSection.title}
        subtitle={SOLUTIONS_DATA.contactSection.subtitle}
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
          alt={WHATSAPP_ALT_TEXT}
          width={35}
          height={35}
          className={styles.whatsappIcon}
        />
      </a>
    </main>
  );
}
