export enum ProjectFilter {
  ALL = 'Todos',
  ECOMMERCE = 'E-commerce',
  APP = 'Apps',
  SITES = 'Sites',
}

export interface Project {
  id: string;
  title: string;
  filter: ProjectFilter;
  imageUrl: string;
  projectLink: string;
  descriptionList: string[];
  features: string[];
  usedTechs: string[];
}

export const projectsData: Project[] = [
  {
    id: 'renovaderme',
    title:
      'Renovaderme – Página de Vendas Estratégica para Produto de Skincare',
    filter: ProjectFilter.ECOMMERCE,
    imageUrl: '/portfolio/renovaderme.png',
    projectLink: 'https://www.renovaderme.com.br',

    descriptionList: [
      'Desenvolvimento de uma Landing Page focada em alta conversão e performance, especificamente desenhada para o lançamento de um novo produto de Skincare.',
      'O projeto envolveu a otimização de SEO On-page e a implementação de scripts de rastreamento para campanhas de mídia paga (Facebook Ads e Google Ads).',
      'Foco total na experiência do usuário (UX) e design persuasivo, utilizando princípios de copywritting e escassez para maximizar as vendas diretas.',
    ],

    features: [
      'Design responsivo e mobile-first.',
      'Integração com gateway de pagamento (Checkout transparente).',
      'Configuração de pixel de conversão e eventos de compra.',
      'Estrutura pronta para testes A/B de copy e layout.',
      'Carregamento ultra-rápido (Otimização de performance).',
    ],

    usedTechs: [
      'Next.js (React)',
      'TypeScript',
      'Tailwind CSS / CSS Modules',
      'Vercel (Deployment)',
      'Google Analytics / Meta Pixel',
    ],
  },
];
