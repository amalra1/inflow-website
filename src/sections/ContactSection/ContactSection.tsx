import styles from './ContactSection.module.css';
import Button from '@/src/components/Button/Button';

type ContactSectionProps = {
  title: string;
};

export default function ContactSection({ title }: ContactSectionProps) {
  return (
    <section className={styles.contactSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>{title}</h2>

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
