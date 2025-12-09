export enum ProjectFilter {
  ALL = 'Todos',
  ECOMMERCE = 'E-commerce',
  SITES = 'Sites',
  OTHER = 'Outros',
}

export interface Project {
  id: string;
  title: string;
  filter: ProjectFilter;
  imageUrl: string;
  projectLink: string;
  summary: string;
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

    summary:
      'Página de vendas do Renovaderme, um produto de cuidados com a pele, com foco total em conversão.',

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
  {
    id: 'metodo-superar-digital',
    title: 'Método Superar – Página de Vendas para Produto Digital',
    filter: ProjectFilter.ECOMMERCE,
    imageUrl: '/portfolio/metodo-superar.png',
    projectLink: 'https://www.metodosuperar.com.br',

    summary:
      'Página de vendas do Método Superar, um produto digital voltado para transformação pessoal.',

    descriptionList: [
      'Desenvolvemos a página de vendas do Método Superar, um produto digital voltado para transformação pessoal.',
      'Nossa equipe criou todo o design da landing page e estruturou estrategicamente cada bloco para conduzir o usuário por uma jornada clara, envolvente e orientada à conversão.',
      'Organizamos a página de forma a transmitir autoridade, explicar o método, apresentar resultados reais e incentivar o visitante a tomar a decisão final de compra.',
    ],

    features: [
      'Design exclusivo para produto digital;',
      'Estrutura completa da landing page;',
      'Sequência estratégica de blocos baseada em jornada de decisão;',
      'Seções de benefícios, prova social e autoridade;',
      'Construção orientada à conversão e clareza da oferta.',
    ],

    usedTechs: ['HTML;', 'CSS;', 'Javascript.'],
  },
  {
    id: 'segmentacao-tatuagens',
    title:
      'Segmentação de Texturas em Imagens de Tatuagens – Filtros de Detecção e Análise Visual',
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/bodybuilding-pose-classifier.png',
    projectLink: 'https://github.com/amalra1/BodybuildingPoseClassifier',

    summary:
      'Desenvolvimento de um sistema avançado de segmentação de textura para identificar padrões e delimitar áreas específicas dentro de tatuagens, utilizando filtros de detecção e algoritmos de visão computacional.',

    descriptionList: [
      'Desenvolvemos um sistema de segmentação de textura em imagens de tatuagens, utilizando filtros avançados para detecção de bordas e separação precisa das regiões de interesse.',
      'O objetivo do projeto é identificar padrões, detalhes e delimitar áreas específicas dentro das tatuagens, permitindo análises mais profundas para aplicações como estética, catalogação, identificação e processamento visual.',
      'A solução combina filtros personalizados, técnicas de visão computacional e algoritmos de segmentação para garantir resultados consistentes, mesmo em imagens complexas.',
    ],

    features: [
      'Implementação de filtros avançados de detecção de bordas;',
      'Segmentação precisa de texturas em áreas tatuadas;',
      'Análise e processamento de imagens com alta fidelidade;',
      'Separação automática das regiões de interesse, e',
      'Sistema robusto para uso em estudos visuais e aplicações práticas.',
    ],

    usedTechs: ['Python;', 'MediaPipe;', 'TensorFlow;', 'Visão Computacional.'],
  },
];
