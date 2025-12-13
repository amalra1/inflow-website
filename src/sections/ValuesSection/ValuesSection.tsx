import styles from './ValuesSection.module.css';
import ValueCard from '@/src/components/ValueCard/ValueCard';
import { useI18n } from '@/src/context/i18n.context';

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
        <div className={styles.sectionLine}></div>
        <h2 className={styles.title}>{VALUES_DATA.title}</h2>

        <div className={styles.cardGrid}>
          {values.map((value, index) => (
            <ValueCard key={index} iconPath={value.icon} title={value.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
