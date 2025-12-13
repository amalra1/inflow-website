import styles from './ValuesSection.module.css';
import ValueCard from '@/src/components/ValueCard/ValueCard';
import { useI18n } from '@/src/context/i18n.context';
import AnimateOnView from '@/src/components/AnimateOnView/AnimateOnView';

const STATIC_ICON_PATHS = {
  TRANSPARENCY: 'values-icons/transparency-icon.svg',
  SIMPLICITY: 'values-icons/simplicity-icon.svg',
  USABILITY: 'values-icons/usability-icon.svg',
  PURPOSE: 'values-icons/purpouse-icon.svg',
  EVOLUTION: 'values-icons/evolution-icon.svg',
  PERFORMANCE: 'values-icons/performance-icon.svg',
};

export default function ValuesSection() {
  const { text: websiteText } = useI18n();
  const VALUES_DATA = websiteText.aboutPage.valuesSection;

  const values = VALUES_DATA.values.map((value) => ({
    title: value.title,
    icon: STATIC_ICON_PATHS[value.id as keyof typeof STATIC_ICON_PATHS],
  }));

  return (
    <section className={styles.valuesSection}>
      <div className={styles.innerWrapper}>
        <AnimateOnView direction="left" delay={0.1} amount={0.5}>
          <div className={styles.sectionLine}></div>
        </AnimateOnView>

        <AnimateOnView direction="left" delay={0.3} amount={0.5}>
          <h2 className={styles.title}>{VALUES_DATA.title}</h2>
        </AnimateOnView>

        <div className={styles.cardGrid}>
          {values.map((value, index) => (
            <AnimateOnView
              key={index}
              direction="left"
              delay={0.3}
              amount={0.5}
            >
              <ValueCard iconPath={value.icon} title={value.title} />
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
