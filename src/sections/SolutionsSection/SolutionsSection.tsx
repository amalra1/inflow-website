import styles from './SolutionsSection.module.css';
import SolutionCard from '@/src/components/SolutionCard/SolutionCard';

export default function SolutionsSection() {
  const solutions = [
    {
      iconPath: '/solutions-section-icons/web-site.svg',
      title: 'APIs',
      description:
        'Criação e integração de APIs e gateways de pagamento; Desenvolvimento de APIs e microsserviços; Integração de APIs terceiras (pagamentos, ERPs, CRMs).',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/paint-monitor.svg',
      title: 'Automações',
      description:
        'Automação de processos empresariais; Desenvolvimento de softwares para otimização de tarefas; Implementação de soluções fintech; Integração de sistemas legados e novos sistemas.',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/magnifying-glass.svg',
      title: 'CRM',
      description:
        'Automação de marketing e CRM; Desenvolvimento de sistemas ERP, CRM e SCM; Criação de sistema para captação e qualificação de leads.',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/magnifying-glass.svg',
      title: 'Sites',
      description:
        'Criação e design de websites institucionais e e-commerces; Otimização SEO para sites e plataformas; Web design (UI/UX).',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/web-site.svg',
      title: 'Mensalidade',
      description:
        'Backup, recuperação de desastres e segurança de dados; Hospedagem e manutenção de sites; Monitoramento e gerenciamento de sistemas; Suporte técnico contínuo e manutenção preventiva.',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/rocket.svg',
      title: 'Suporte Técnico',
      description:
        'Atualizações e melhorias evolutivas de software; Gestão de incidentes e resolução de bugs.',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/paint-monitor.svg',
      title: 'Serviço de Hospedagem',
      description:
        'Configuração e manutenção de servidores (dedicados, VPS, cloud); Migração para nuvem; Otimização de performance e escalabilidade de sistemas; Gerenciamento de cloud computing (AWS, Azure, Google Cloud).',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/magnifying-glass.svg',
      title: 'IA',
      description:
        'Ciência de dados e predição; Desenvolvimento de chatbots e assistentes virtuais; Desenvolvimento de soluções de inteligência artificial e machine learning; Criação de bots e chatbots para atendimento e vendas.',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/w.svg',
      title: 'SAAS',
      description:
        'Desenvolvimento de plataformas SaaS (Software as a Service); Desenvolvimento de sistemas para setores específicos (imobiliário, saúde, educação, varejo); Plataformas de marketplace e portais de serviços; Prospecção e venda de licenças de software.',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/rocket.svg',
      title: 'Sistemas',
      description:
        'Análise e visualização de dados; Desenvolvimento de dashboards e BI (Business Intelligence); Desenvolvimento de sistemas ERP, CRM, SCM, API e ONIT; Implantação de bancos de dados relacionais e não-relacionais; Sistemas para controle e gestão financeira.',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/magnifying-glass.svg',
      title: 'Consultoria em tecnologia',
      description:
        'Arquitetura de soluções de software; Auditoria de segurança e conformidade; Consultoria em análise e levantamento de requisitos; Consultoria em transformação digital; Planejamento e gestão de projetos Agile; Treinamento técnico para equipes e clientes.',
      href: '/',
    },
    {
      iconPath: '/solutions-section-icons/web-site.svg',
      title: 'APPs',
      description:
        'Desenvolvimento de aplicativos mobile (iOS, Android); Desenvolvimento de aplicativos web; Desenvolvimento de jogos digitais; Desenvolvimento de soluções para e-learning (LMS); Desenvolvimento de sistemas embarcados; Desenvolvimento de software para dispositivos wearables; Implementação e manutenção de blogs e portais de conteúdo.',
      href: '/',
    },
  ];

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>Soluções</h2>
        <div className={styles.cardGrid}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              iconPath={solution.iconPath}
              title={solution.title}
              description={solution.description}
              href={solution.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
