import styles from './StepsSection.module.css';
import StepItem from '@/src/components/StepItem/StepItem';

export default function StepsSection() {
  const steps = [
    {
      title: 'Sua Ideia',
      description:
        'Para que nós da Inflow saibamos se somos uma boa opção para o seu projeto, sempre começamos com perguntas de triagem para garantir que somos a escolha certa para a sua empresa.',
    },
    {
      title: 'Reunião Inicial',
      description:
        'Nesta reunião, discutiremos juntos a estratégia que propomos para alcançar os objetivos do seu website ou sistema. Estabeleceremos um canal de comunicação para manter a atualização do projeto, onde você poderá acompanhar todo o processo do início ao fim.',
    },
    {
      title: 'Metodologia Ágil e Scrum',
      description:
        'Nesta etapa, teremos uma reunião de equipe com o gerente de projeto, o desenvolvedor líder e o designer. Em seguida, trabalharemos utilizando a metodologia Ágil Scrum para garantir a entrega do seu projeto dentro do prazo e do orçamento previstos.',
    },
    {
      title: 'Seu site ou sistema vai ao ar',
      description:
        'As verificações finais do site ou sistema serão realizadas, garantindo que todos os pixels de rastreamento, links e a interface do usuário sejam compatíveis com todos os dispositivos. Também realizaremos alguns testes para assegurar que o site esteja otimizado para a experiência do usuário.',
    },
  ];

  return (
    <section className={styles.stepsSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.sectionTitle}>
          Transforme sua ideia em
          <span className={styles.highlight}> realidade</span>
        </h2>

        <div className={styles.contentGrid}>
          <div className={styles.stepsColumn}>
            {steps.map((step, index) => (
              <StepItem
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                titleColor={index === 0 ? '#60E1CB' : undefined}
              />
            ))}
          </div>

          <div className={styles.placeholderColumn}>
            <div className={styles.placeholder}>PLACE HOLDER</div>
          </div>
        </div>
      </div>
    </section>
  );
}
