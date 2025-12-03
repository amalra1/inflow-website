import styles from './ContactSection.module.css';
import Button from '@/src/components/Button/Button';

type ContactSectionProps = {
  title: string;
  subtitle?: string;
};

export default function ContactSection({
  title,
  subtitle,
}: ContactSectionProps) {
  return (
    <section className={styles.contactSection}>
      <div className={styles.innerWrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{title}</h2>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <Button
          href="/"
          backgroundColor="white"
          textColor="#000000"
          borderColor="white"
        >
          Entre em contato
        </Button>
      </div>
    </section>
  );
}
