import styles from './ContactSection.module.css';
import Button from '@/src/components/Button/Button';

type ContactSectionProps = {
  title: string;
  subtitle?: string;
};

const WHATSAPP_NUMBER = '4891186726';

export default function ContactSection({
  title,
  subtitle,
}: ContactSectionProps) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <section className={styles.contactSection}>
      <div className={styles.innerWrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{title}</h2>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <Button
          href={whatsappLink}
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
