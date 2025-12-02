import styles from './ValuesSection.module.css';
import ValueCard from '@/src/components/ValueCard/ValueCard';

export default function ValuesSection() {
  const values = [
    { title: 'Transparência', icon: 'values-icons/transparency-icon.svg' },
    {
      title: 'Simplicidade Inteligente',
      icon: 'values-icons/simplicity-icon.svg',
    },
    {
      title: 'Obsessão por usabilidade',
      icon: 'values-icons/usability-icon.svg',
    },
    {
      title: 'Código com propósito',
      icon: 'values-icons/purpouse-icon.svg',
    },
    {
      title: 'Evolução contínua',
      icon: 'values-icons/evolution-icon.svg',
    },
    {
      title: 'Performance acima de tudo',
      icon: 'values-icons/performance-icon.svg',
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.innerWrapper}>
        <div className={styles.sectionLine}></div>
        <h2 className={styles.title}>Nossos valores</h2>

        <div className={styles.cardGrid}>
          {values.map((value, index) => (
            <ValueCard key={index} iconPath={value.icon} title={value.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
