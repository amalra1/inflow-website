import styles from './HistorySection.module.css';
import { useI18n } from '@/src/context/i18n.context';

export default function HistorySection() {
  const { text: websiteText } = useI18n();
  const HISTORY_DATA = websiteText.aboutPage.historySection;

  return (
    <section className={styles.historySection}>
      <div className={styles.innerWrapper}>
        <div className={styles.contentBlock}>
          <h2 className={styles.title}>{HISTORY_DATA.aboutUs.title}</h2>
          {HISTORY_DATA.aboutUs.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.contentBlock}>
          <div className={styles.highlightTitleContainer}>
            <div className={styles.blueLine}></div>
            <h2 className={styles.title}>{HISTORY_DATA.ourHistory.title}</h2>
          </div>
          {HISTORY_DATA.ourHistory.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
