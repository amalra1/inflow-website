import styles from './HistorySection.module.css';
import { useI18n } from '@/src/context/i18n.context';
import AnimateOnView from '@/src/components/AnimateOnView/AnimateOnView';

export default function HistorySection() {
  const { text: websiteText } = useI18n();
  const HISTORY_DATA = websiteText.aboutPage.historySection;

  return (
    <section className={styles.historySection}>
      <div className={styles.innerWrapper}>
        <div className={styles.contentBlock}>
          <AnimateOnView direction="left" delay={0.1} amount={0.5}>
            <h2 className={styles.title}>{HISTORY_DATA.aboutUs.title}</h2>
          </AnimateOnView>

          {HISTORY_DATA.aboutUs.paragraphs.map((paragraph, index) => (
            <AnimateOnView
              key={index}
              direction="left"
              delay={0.2}
              amount={0.5}
            >
              <p className={styles.paragraph}>{paragraph}</p>
            </AnimateOnView>
          ))}
        </div>

        <div className={styles.contentBlock}>
          <AnimateOnView direction="left" delay={0.5} amount={0.5}>
            <div className={styles.highlightTitleContainer}>
              <div className={styles.blueLine}></div>
              <h2 className={styles.title}>{HISTORY_DATA.ourHistory.title}</h2>
            </div>
          </AnimateOnView>

          {HISTORY_DATA.ourHistory.paragraphs.map((paragraph, index) => (
            <AnimateOnView
              key={index}
              direction="left"
              delay={0.7 + index * 0.1}
              amount={0.5}
            >
              <p className={styles.paragraph}>{paragraph}</p>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
