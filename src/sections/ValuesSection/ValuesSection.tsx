import styles from './ValuesSection.module.css';
import ValueCard from '@/src/components/ValueCard/ValueCard';

export default function ValuesSection() {
  const values = [
    { title: 'Transparência', icon: 'solutions-section-icons/web-site.svg' },
    {
      title: 'Simplicidade Inteligente',
      icon: 'solutions-section-icons/web-site.svg',
    },
    {
      title: 'Obsessão por usabilidade',
      icon: 'solutions-section-icons/web-site.svg',
    },
    {
      title: 'Código com propósito',
      icon: 'solutions-section-icons/web-site.svg',
    },
    {
      title: 'Evolução contínua',
      icon: 'solutions-section-icons/web-site.svg',
    },
    {
      title: 'Performance acima de tudo',
      icon: 'solutions-section-icons/web-site.svg',
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
