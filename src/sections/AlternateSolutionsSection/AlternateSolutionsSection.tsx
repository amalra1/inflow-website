import styles from './AlternateSolutionsSection.module.css';
import SolutionCard from '@/src/components/SolutionCard/SolutionCard';

export default function AlternateSolutionSection() {
  const solutions = [
    { title: "API's", icon: '/solutions-section-icons/apis.svg' },
    { title: 'Automações', icon: '/solutions-section-icons/automations.svg' },
    { title: 'CRM', icon: '/solutions-section-icons/crms.svg' },
    { title: 'Sites', icon: '/solutions-section-icons/sites.svg' },

    { title: 'Mensalidade', icon: '/solutions-section-icons/mensalidade.svg' },
    { title: 'Suporte Técnico', icon: '/solutions-section-icons/technical-support.svg' },
    {
      title: 'Serviço de hospedagem',
      icon: '/solutions-section-icons/hosting-service.svg',
    },
    { title: 'IA', icon: '/solutions-section-icons/ai.svg' },

    { title: 'SAAS', icon: '/solutions-section-icons/saas.svg' },
    { title: 'Sistemas', icon: '/solutions-section-icons/systems.svg' },
    {
      title: 'Consultoria em tecnologia',
      icon: '/solutions-section-icons/consultancy.svg',
    },
    { title: 'APPS', icon: '/solutions-section-icons/apps.svg' },
  ];

  return (
    <section className={styles.altSolutionsSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>Conheça nossas soluções</h2>

        <div className={styles.cardGrid}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              iconPath={solution.icon}
              title={solution.title}
              description={''}
              href={'/'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
