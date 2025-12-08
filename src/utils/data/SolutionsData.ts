export type SolutionDetail = {
  id: string;
  title: string;
  description: string[];
  detailsList: string[];
  imageUrl: string;
  conclusion: string;
};

export const detailedSolutions: SolutionDetail[] = [
  {
    id: 'APIS',
    title: "API's",
    description: [
      'Transforme a comunicação entre sistemas e potencialize seus negócios com nossas soluções de APIs. Desenvolvemos e integramos APIs personalizadas e microsserviços que conectam seus sistemas internos e plataformas externas de forma segura, rápida e escalável.',
    ],
    detailsList: [
      'Criação e integração de links e gateways de pagamento: facilite transações online de forma confiável e eficiente.',
      'Desenvolvimento de APIs e microsserviços sob medida: automatize processos, melhore a performance e garanta integração total entre seus sistemas.',
      'Integração com APIs terceiras (pagamentos, ERPs, CRMs): conecte suas ferramentas favoritas e otimize seu fluxo de trabalho sem complicações.',
      'Conecte suas ferramentas favoritas e otimize seu fluxo de trabalho sem complicações.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/apis.svg',
    conclusion:
      'Com nossas soluções, seu negócio ganha agilidade, segurança e inovação, entregando experiências mais completas para seus clientes e operações mais inteligentes para sua equipe.',
  },
  {
    id: 'AUTOMATIONS',
    title: 'Automações',
    description: [
      'Leve a eficiência do seu negócio a um novo nível com nossas soluções de automação inteligente. Desenvolvemos sistemas que reduzem tarefas manuais, agilizam processos e conectam diferentes plataformas, permitindo que sua equipe foque no que realmente importa: gerar resultados.',
    ],
    detailsList: [
      'Automatização de processos empresariais: elimine retrabalho e ganhe produtividade com fluxos de trabalho otimizados.',
      'Desenvolvimento de software para automação industrial: aumente a performance operacional e reduza erros em processos complexos.',
      'Implementação de soluções fintech: automatize transações financeiras, pagamentos e integrações com plataformas financeiras.',
      'Integração de sistemas legados e novos sistemas: conecte ferramentas antigas e novas sem perda de dados ou produtividade.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/automations.svg',
    conclusion:
      'Com nossas automações, sua empresa alcança agilidade, precisão e inovação, garantindo processos mais inteligentes e resultados mensuráveis.',
  },
  {
    id: 'CRM',
    title: 'CRM',
    description: [
      'Maximize o relacionamento com seus clientes e potencialize suas vendas com nossas soluções de CRM e automação de marketing. Criamos sistemas inteligentes que conectam processos comerciais, marketing e atendimento, garantindo que sua empresa esteja sempre à frente na gestão de clientes e oportunidades.',
    ],
    detailsList: [
      'Automação de marketing e CRM: gerencie campanhas, leads e interações de forma integrada e eficiente.',
      'Desenvolvimento de sistemas ERP, CRM e SCM: soluções completas que centralizam dados, processos e informações estratégicas do seu negócio.',
      'Criação de sistemas para captação e qualificação de leads: transforme oportunidades em clientes reais com processos inteligentes de nutrição e acompanhamento.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/crm.svg',
    conclusion:
      'Com nossas soluções de CRM, sua empresa ganha eficiência operacional, inteligência estratégica e resultados concretos, entregando experiências mais personalizadas para cada cliente.',
  },
  {
    id: 'SITES',
    title: 'Sites',
    description: [
      'Fortaleça sua presença digital com websites e e-commerces modernos, funcionais e atraentes. Desenvolvemos soluções que unem design, performance e experiência do usuário, garantindo que sua marca se destaque e converta visitantes em clientes.',
    ],
    detailsList: [
      'Criação e design de websites institucionais e e-commerces: sites personalizados que refletem a identidade da sua marca e geram resultados.',
      'Otimização SEO para sites e plataformas: melhore seu posicionamento nos motores de busca e aumente o tráfego qualificado.',
      'Web design (UI/UX): experiência do usuário planejada para engajar visitantes e facilitar a navegação.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/sites.svg',
    conclusion:
      'Com nossos serviços de sites, sua empresa conquista visibilidade, credibilidade e performance, entregando experiências digitais que encantam e convertem.',
  },
  {
    id: 'MONTHLY_FEE',
    title: 'Mensalidade',
    description: [
      'Garanta a continuidade, segurança e desempenho dos seus sistemas com nossos serviços de mensalidade. Cuidamos da manutenção e proteção da sua infraestrutura digital para que sua empresa funcione sem interrupções, de forma confiável e segura.',
    ],
    detailsList: [
      'Backup, recuperação de desastres e segurança de dados: proteção completa das suas informações críticas contra perdas e ameaças digitais.',
      'Hospedagem e manutenção de sites: sites sempre disponíveis e atualizados, sem preocupações técnicas.',
      'Monitoramento e gerenciamento de sistemas: supervisão constante para identificar e corrigir problemas antes que impactem o seu negócio.',
      'Suporte técnico contínuo e manutenção preventiva: assistência especializada para garantir que seus sistemas operem com máxima eficiência.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/monthly-fee.svg',
    conclusion:
      'Com nossos serviços de mensalidade, sua empresa conquista tranquilidade operacional, segurança digital e suporte contínuo, permitindo que você foque no crescimento e nos resultados do seu negócio.',
  },
  {
    id: 'SUPPORT',
    title: 'Suporte Técnico',
    description: [
      'Mantenha seus sistemas sempre atualizados, seguros e funcionando com eficiência com nosso serviço de suporte técnico especializado. Garantimos que seus softwares operem sem interrupções, com melhorias contínuas e resolução rápida de problemas.',
    ],
    detailsList: [
      'Atualizações e melhorias evolutivas de software: acompanhe a evolução tecnológica sem perder desempenho ou funcionalidades.',
      'Gestão de incidentes e resolução de bugs: identificação e correção rápida de falhas, garantindo que sua operação siga sem impactos.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/technical-support.svg',
    conclusion:
      'Com nosso suporte técnico, sua empresa ganha continuidade operacional, confiabilidade e tranquilidade, permitindo que sua equipe foque no que realmente importa: entregar resultados.',
  },
  {
    id: 'HOSTING',
    title: 'Serviço de hospedagem',
    description: [
      'Garanta que seus sistemas e aplicações funcionem com desempenho máximo, segurança e escalabilidade com nossas soluções de hospedagem profissional. Cuidamos de toda a infraestrutura para que sua empresa opere de forma confiável, sem interrupções.',
    ],
    detailsList: [
      'Configuração e manutenção de servidores (dedicados, VPS, cloud): ambientes preparados para alta performance e estabilidade.',
      'Migração para nuvem: mova seus sistemas com segurança e sem perda de dados, aproveitando todos os benefícios do cloud computing.',
      'Otimização de performance e escalabilidade de sistemas: prepare sua infraestrutura para crescer junto com sua demanda.',
      'Serviços de cloud computing (AWS, Azure, Google Cloud): aproveite tecnologia de ponta para hospedar, gerenciar e expandir seus sistemas com eficiência.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/hosting.svg',
    conclusion:
      'Com nosso serviço de hospedagem, sua empresa conquista confiabilidade, segurança e flexibilidade, garantindo que suas operações digitais estejam sempre prontas para o futuro.',
  },
  {
    id: 'AI',
    title: 'Inteligência Artificial (IA)',
    description: [
      'Transforme dados em decisões estratégicas e soluções inteligentes com nossas tecnologias de inteligência artificial. Desenvolvemos sistemas que automatizam processos, otimizam resultados e melhoram a experiência do cliente de forma inovadora.',
    ],
    detailsList: [
      'Ciência de dados e predição: análise avançada de dados para orientar decisões e identificar oportunidades de crescimento.',
      'Desenvolvimento de chatbots e assistentes virtuais: automação inteligente de atendimento e suporte, proporcionando respostas rápidas e personalizadas.',
      'Desenvolvimento de soluções de inteligência artificial e machine learning: sistemas que aprendem e evoluem com o tempo, aumentando a eficiência do seu negócio.',
      'Implementação de chatbots para atendimento e vendas: impulsione conversões e melhore a experiência do cliente com interações automatizadas e inteligentes.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/ai.svg',
    conclusion:
      'Com nossas soluções de IA, sua empresa ganha inovação, eficiência operacional e vantagem competitiva, entregando experiências mais rápidas, inteligentes e personalizadas aos seus clientes.',
  },
  {
    id: 'SAAS',
    title: 'SaaS (Software as a Service)',
    description: [
      'Impulsione seu negócio com plataformas SaaS modernas, escaláveis e sob medida. Criamos soluções que tornam o software acessível via nuvem, permitindo que empresas de diferentes setores otimizem processos, ampliem a presença digital e aumentem receita.',
    ],
    detailsList: [
      'Desenvolvimento de plataformas SaaS: soluções completas e personalizadas, acessíveis de qualquer lugar, a qualquer hora.',
      'Sistemas para setores específicos (imobiliário, saúde, educação, varejo): softwares adaptados às necessidades do seu mercado, garantindo máxima eficiência.',
      'Plataformas de marketplace e portais de serviços: conecte usuários e fornecedores em um ecossistema digital inteligente e funcional.',
      'Prospecção e venda de licenças de software: suporte completo para comercialização e gestão de licenças, potencializando sua receita.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/saas.svg',
    conclusion:
      'Com nossas soluções SaaS, sua empresa conquista flexibilidade, escalabilidade e inovação, entregando experiências digitais de alto valor para clientes e usuários.',
  },
  {
    id: 'SYSTEMS',
    title: 'Sistemas',
    description: [
      'Otimize a gestão do seu negócio com nossas soluções completas de desenvolvimento e análise de sistemas. Criamos plataformas que conectam dados, processos e equipes, proporcionando decisões mais rápidas e estratégicas.',
    ],
    detailsList: [
      'Análise e visualização de dados: transforme informações em insights claros para decisões precisas e estratégicas.',
      'Desenvolvimento de dashboards e BI (Business Intelligence): acompanhe indicadores-chave de desempenho de forma prática e interativa.',
      'Desenvolvimento de sistemas ERP, CRM, SCM, API e ONIT: soluções integradas que conectam todos os setores da sua empresa.',
      'Implantação de bancos de dados relacionais e não relacionais: organize e gerencie dados de forma eficiente e segura.',
      'Sistemas para controle e gestão financeira: acompanhe receitas, despesas e fluxo de caixa com sistemas inteligentes e confiáveis.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/systems.svg',
    conclusion:
      'Com nossas soluções de sistemas, sua empresa conquista eficiência operacional, controle estratégico e tecnologia de ponta, entregando mais produtividade e melhores resultados.',
  },
  {
    id: 'CONSULTING',
    title: 'Consultoria em Tecnologia',
    description: [
      'Impulsione a inovação e a eficiência do seu negócio com nossa consultoria especializada em tecnologia. Ajudamos empresas a planejar, implementar e gerenciar soluções digitais de forma estratégica, segura e alinhada aos objetivos do negócio.',
    ],
    detailsList: [
      'Arquitetura de soluções de software: planejamento e estruturação de sistemas escaláveis, seguros e de alta performance.',
      'Auditoria de segurança e conformidade: análise completa para garantir que seus sistemas atendam a padrões de segurança e regulamentações.',
      'Consultoria em análise e levantamento de requisitos: identificamos necessidades e transformamos em soluções tecnológicas eficientes.',
      'Consultoria em transformação digital: guiamos sua empresa na modernização de processos e na adoção de novas tecnologias.',
      'Planejamento e gestão de projetos Agile: acompanhamento de projetos de forma ágil, garantindo entregas dentro do prazo e do orçamento.',
      'Treinamento técnico para equipes e clientes: capacitação prática para maximizar o uso das soluções implementadas.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/consulting.svg',
    conclusion:
      'Com nossas soluções de sistemas, sua empresa conquista eficiência operacional, controle estratégico e tecnologia de ponta, entregando mais produtividade e melhores resultados.',
  },
  {
    id: 'APPS',
    title: 'APPs',
    description: [
      'Conecte sua empresa ao mundo digital com aplicativos e soluções mobile e web personalizados, que oferecem experiências intuitivas e engajam seus usuários de forma eficaz. Desenvolvemos desde aplicativos corporativos até soluções interativas e inovadoras para diferentes plataformas.',
    ],
    detailsList: [
      'Desenvolvimento de aplicativos mobile (iOS, Android): soluções nativas e híbridas para alcance em todas as plataformas.',
      'Desenvolvimento de aplicativos web: aplicações online rápidas, seguras e acessíveis de qualquer dispositivo.',
      'Desenvolvimento de jogos digitais: experiências interativas para entretenimento ou engajamento de usuários.',
      'Desenvolvimento de landing pages e funis de vendas: conversão otimizada de visitantes em clientes.',
      'Desenvolvimento de soluções para e-learning (LMS): plataformas educacionais eficientes e escaláveis.',
      'Desenvolvimento de sistemas embarcados: software integrado a dispositivos físicos para controle e automação.',
      'Desenvolvimento de software para dispositivos wearables: inovação e conectividade em tecnologia vestível.',
      'Implementação e manutenção de blogs e portais de conteúdo: gestão completa de presença digital e publicações.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/apps.svg',
    conclusion:
      'Com nossas soluções de aplicativos, sua empresa ganha inovação, interatividade e presença digital, oferecendo experiências completas e impactantes para clientes, colaboradores e usuários.',
  },
];
