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
      'Desenvolvemos a página de vendas do Renovaderme, um produto de cuidados com a pele, com foco total em conversão.',
      'Nosso trabalho envolveu desde a criação do design completo até a estruturação estratégica dos blocos, seguindo princípios de copy e UX para conduzir o visitante até a compra final.',
      'Criamos uma jornada visual clara, destacando benefícios, diferenciais, provas sociais e chamadas para ação, resultando em uma página moderna, persuasiva e otimizada para vendas.',
    ],

    features: [
      'Design exclusivo focado em conversão;',
      'Construção completa da landing page;',
      'Estrutura estratégica dos blocos para guiar o usuário;',
      'Seções de prova social, benefícios e urgência;',
      'Experiência visual alinhada ao posicionamento da marca.',
    ],

    usedTechs: ['HTML;', 'CSS;', 'Javascript.'],
  },
];
