'use client';

import Footer from '@/src/components/Footer/Footer';
import styles from './page.module.css';
import Header from '@/src/components/Header/Header';
import Image from 'next/image';
import HistorySection from '@/src/sections/HistorySection/HistorySection';
import ValuesSection from '@/src/sections/ValuesSection/ValuesSection';
import TeamSection from '@/src/sections/TeamSection/TeamSection';
import ContactSection from '@/src/sections/ContactSection/ContactSection';
import { useI18n } from '@/src/context/i18n.context';
import AnimateOnView from '@/src/components/AnimateOnView/AnimateOnView';

const WHATSAPP_ICON_PATH = '/social-networks-logos/whatsapp.svg';
const WHATSAPP_NUMBER = '4891186726';

export default function AboutPage() {
  const { text: websiteText } = useI18n();
  const ABOUT_DATA = websiteText.aboutPage;
  const WHATSAPP_ALT_TEXT = websiteText.homePage.whatsappButton.altText;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <main className={styles.mainContainer}>
      <div className={styles.gradientWrapper}>
        <Header variant="alternate" />

        <div className={styles.highlightLine}></div>

        <section className={styles.highlightSection}>
          <div className={styles.highlightWrapper}>
            <AnimateOnView direction="left" delay={0.3}>
              <h2 className={styles.title}>
                {ABOUT_DATA.highlightSectionTitle}
              </h2>
            </AnimateOnView>
          </div>
        </section>
      </div>

      <HistorySection />
      <ValuesSection />

      <section className={styles.missionSection}>
        <div className={styles.missionWrapper}>
          <AnimateOnView direction="left" delay={0.1} amount={0.5}>
            <h2 className={styles.missionTitle}>
              {ABOUT_DATA.missionSection.title}
            </h2>
          </AnimateOnView>
          <div className={styles.missionDescriptionWrapper}>
            <AnimateOnView direction="left" delay={0.3} amount={0.5}>
              <p className={styles.missionDescription}>
                {ABOUT_DATA.missionSection.description}
              </p>
            </AnimateOnView>
          </div>
        </div>
      </section>

      <section className={styles.visionSection}>
        <div className={styles.visionWrapper}>
          <AnimateOnView direction="right" delay={0.1} amount={0.5}>
            <h2 className={styles.visionTitle}>
              {ABOUT_DATA.visionSection.title}
            </h2>
          </AnimateOnView>
          <div className={styles.visionDescriptionWrapper}></div>
          <AnimateOnView direction="right" delay={0.3} amount={0.5}>
            <p className={styles.visionDescription}>
              {ABOUT_DATA.visionSection.description}
            </p>
          </AnimateOnView>
        </div>
      </section>

      <TeamSection />
      <ContactSection title={ABOUT_DATA.contactSectionTitle} />

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
