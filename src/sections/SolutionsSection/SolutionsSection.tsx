'use client';

import styles from './SolutionsSection.module.css';
import SolutionCard from '@/src/components/SolutionCard/SolutionCard';
import { useState, useEffect } from 'react'; // Importar useState e useEffect
import {
  // Importar componentes do Carrossel
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function SolutionsSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Lógica para determinar se é mobile (<= 600px)
  useEffect(() => {
    const checkMobile = () => {
      // Usamos 600 como ponto de corte, conforme solicitado
      setIsMobile(window.innerWidth <= 600);
    };

    // Verifica no carregamento
    checkMobile();

    // Adiciona listener para redimensionamento
    window.addEventListener('resize', checkMobile);

    // Limpa o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const solutions = [
    {
      id: 'APIS',
      iconPath: '/solutions-section-icons/apis.svg',
      title: "API's",
      description:
        'Criação e integração de APIs e gateways de pagamento; Desenvolvimento de APIs e microsserviços; Integração de APIs terceiras (pagamentos, ERPs, CRMs).',
    },
    {
      id: 'automacoes',
      iconPath: '/solutions-section-icons/automations.svg',
      title: 'Automações',
      description:
        'Automação de processos empresariais; Desenvolvimento de softwares para otimização de tarefas; Implementação de soluções fintech; Integração de sistemas legados e novos sistemas.',
    },
    {
      id: 'crm',
      iconPath: '/solutions-section-icons/crms.svg',
      title: 'CRM',
      description:
        'Automação de marketing e CRM; Desenvolvimento de sistemas ERP, CRM e SCM; Criação de sistema para captação e qualificação de leads.',
    },
    {
      id: 'sites',
      iconPath: '/solutions-section-icons/sites.svg',
      title: 'Sites',
      description:
        'Criação e design de websites institucionais e e-commerces; Otimização SEO para sites e plataformas; Web design (UI/UX).',
    },
    {
      id: 'mensalidade',
      iconPath: '/solutions-section-icons/mensalidade.svg',
      title: 'Mensalidade',
      description:
        'Backup, recuperação de desastres e segurança de dados; Hospedagem e manutenção de sites; Monitoramento e gerenciamento de sistemas; Suporte técnico contínuo e manutenção preventiva.',
    },
    {
      id: 'suporte-tecnico',
      iconPath: '/solutions-section-icons/technical-support.svg',
      title: 'Suporte Técnico',
      description:
        'Atualizações e melhorias evolutivas de software; Gestão de incidentes e resolução de bugs.',
    },
    {
      id: 'servico-hospedagem',
      iconPath: '/solutions-section-icons/hosting-service.svg',
      title: 'Serviço de Hospedagem',
      description:
        'Configuração e manutenção de servidores (dedicados, VPS, cloud); Migração para nuvem; Otimização de performance e escalabilidade de sistemas; Gerenciamento de cloud computing (AWS, Azure, Google Cloud).',
    },
    {
      id: 'ia',
      iconPath: '/solutions-section-icons/ai.svg',
      title: 'IA',
      description:
        'Ciência de dados e predição; Desenvolvimento de chatbots e assistentes virtuais; Desenvolvimento de soluções de inteligência artificial e machine learning; Criação de bots e chatbots para atendimento e vendas.',
    },
    {
      id: 'saas',
      iconPath: '/solutions-section-icons/saas.svg',
      title: 'SAAS',
      description:
        'Desenvolvimento de plataformas SaaS (Software as a Service); Desenvolvimento de sistemas para setores específicos (imobiliário, saúde, educação, varejo); Plataformas de marketplace e portais de serviços; Prospecção e venda de licenças de software.',
    },
    {
      id: 'sistemas',
      iconPath: '/solutions-section-icons/systems.svg',
      title: 'Sistemas',
      description:
        'Análise e visualização de dados; Desenvolvimento de dashboards e BI (Business Intelligence); Desenvolvimento de sistemas ERP, CRM, SCM, API e ONIT; Implantação de bancos de dados relacionais e não-relacionais; Sistemas para controle e gestão financeira.',
    },
    {
      id: 'consultoria',
      iconPath: '/solutions-section-icons/consultancy.svg',
      title: 'Consultoria em tecnologia',
      description:
        'Arquitetura de soluções de software; Auditoria de segurança e conformidade; Consultoria em análise e levantamento de requisitos; Consultoria em transformação digital; Planejamento e gestão de projetos Agile; Treinamento técnico para equipes e clientes.',
    },
    {
      id: 'apps',
      iconPath: '/solutions-section-icons/apps.svg',
      title: 'APPs',
      description:
        'Desenvolvimento de aplicativos mobile (iOS, Android); Desenvolvimento de aplicativos web; Desenvolvimento de jogos digitais; Desenvolvimento de soluções para e-learning (LMS); Desenvolvimento de sistemas embarcados; Desenvolvimento de software para dispositivos wearables; Implementação e manutenção de blogs e portais de conteúdo.',
    },
  ];

  const renderSolutions = () => {
    // Renderiza o Carrossel para mobile
    if (isMobile) {
      return (
        <Carousel
          className={styles.carouselContainer} // Adiciona classe para estilização específica
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className={styles.carouselContent}>
            {solutions.map((solution, index) => (
              <CarouselItem key={index} className="pl-1">
                <div className="p-3">
                  <SolutionCard
                    iconPath={solution.iconPath}
                    title={solution.title}
                    description={solution.description}
                    solutionId={solution.id}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="-left-4 z-1 w-12 h-12"
            style={{ color: 'var(--color-main)' }}
          />
          <CarouselNext
            className="-right-4 z-1 w-12 h-12"
            style={{ color: 'var(--color-main)' }}
          />
        </Carousel>
      );
    }

    // Renderiza o Grid para desktop e tamanhos maiores
    return (
      <div className={styles.cardGrid}>
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            iconPath={solution.iconPath}
            title={solution.title}
            description={solution.description}
            solutionId={solution.id}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>Soluções</h2>
        {renderSolutions()}
      </div>
    </section>
  );
}
