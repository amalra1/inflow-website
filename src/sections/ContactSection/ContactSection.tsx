import styles from './ContactSection.module.css';
import Button from '@/src/components/Button/Button';
import { getWebsiteText } from '@/src/utils/website-text';

type ContactSectionProps = {
  title: string;
  subtitle?: string;
};

export default function ContactSection({
  title,
  subtitle,
}: ContactSectionProps) {
  const websiteText = getWebsiteText();
  const ctaButtonText = websiteText.homePage.contactSection.ctaButtonText;

  return (
    <section className={styles.contactSection}>
      <div className={styles.innerWrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{title}</h2>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <Button
          href="contato"
          backgroundColor="white"
          textColor="#000000"
          borderColor="white"
        >
          {ctaButtonText}
        </Button>
      </div>
    </section>
  );
}
