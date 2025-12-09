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
    projectLink: '#',

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
    imageUrl: '/portfolio/image-texture-segmentation.png',
    projectLink: 'https://github.com/amalra1/ImageTextureSegmentation',

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
  {
    id: 'classificador-poses-fisiculturismo',
    title:
      'Classificador de Poses de Fisiculturismo – Análise Automática com MediaPipe',
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/bodybuilding-pose-classifier.png',
    projectLink: 'https://github.com/amalra1/BodybuildingPoseClassifier',

    summary:
      'Desenvolvimento de um classificador de poses de fisiculturismo usando a biblioteca MediaPipe para detectar, analisar e classificar automaticamente posturas clássicas em imagens e vídeos.',

    descriptionList: [
      'Desenvolvemos um classificador de poses de fisiculturismo utilizando a biblioteca MediaPipe, do Google, para detectar, analisar e classificar poses de musculação em imagens e vídeos.',
      'O objetivo do projeto é oferecer uma solução inteligente capaz de reconhecer automaticamente posturas clássicas do fisiculturismo, trazendo precisão, velocidade e padronização para avaliações visuais.',
      'A tecnologia identifica pontos corporais, analisa ângulos, compara padrões e retorna a classificação da pose, permitindo uso em treinamentos, competições, aplicativos fitness e sistemas de acompanhamento físico.',
    ],

    features: [
      'Implementação da biblioteca MediaPipe para detecção corporal;',
      'Classificação automática de poses de fisiculturismo;',
      'Análise de imagens e vídeos em tempo real;',
      'Algoritmo treinado para reconhecer poses específicas da modalidade;',
      'Sistema moderno, rápido e altamente preciso.',
    ],

    usedTechs: ['MediaPipe;', 'Visão Computacional;', 'Python;', 'TensorFlow;'],
  },
  {
    id: 'sistema-osint',
    title:
      'Sistema OSINT – Plataforma de Coleta e Análise de Informações Públicas',
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/placeholder.png',
    projectLink: 'https://hackhunter.com.br/',

    summary:
      'Desenvolvimento de um sistema completo baseado em OSINT (Open Source Intelligence) para coleta, monitoramento e análise de informações disponíveis em fontes abertas, fornecendo insights estratégicos em tempo real.',

    descriptionList: [
      'Estamos desenvolvendo um sistema completo baseado em OSINT (Open Source Intelligence), voltado para coleta, monitoramento e análise de informações disponíveis em fontes abertas.',
      'A solução foi projetada para fornecer dados organizados, em tempo real, permitindo que o usuário tenha insights estratégicos de forma rápida e confiável.',
      'O sistema será lançado junto ao site oficial, proporcionando uma experiência completa: apresentação institucional no site e acesso direto à plataforma no ar, com todas as funcionalidades ativas.',
    ],

    features: [
      'Desenvolvimento completo de sistema baseado em OSINT;',
      'Coleta automatizada de informações de fontes públicas;',
      'Análise e organização inteligente dos dados;',
      'Painéis intuitivos para visualização e acompanhamento;',
      'Lançamento integrado ao site institucional;',
      'Experiência focada em eficiência, clareza e confiabilidade.',
    ],

    usedTechs: [
      'Back-end: Python (FastAPI);',
      'Front-end: React + Tailwind CSS;',
      'Banco de Dados: PostgreSQL.',
    ],
  },
  {
    id: 'blocks-candy-crush',
    title: 'Blocks – Jogo Estilo Candy Crush Desenvolvido em C com Allegro',
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/blocks.png',
    projectLink: 'https://github.com/amalra1/Blocks',

    summary:
      'Criação de um jogo com mecânica de match-3 similar ao Candy Crush, desenvolvido inteiramente em linguagem C com uso da biblioteca Allegro para gráficos e animações, garantindo uma experiência de baixo nível rápida e fluida.',

    descriptionList: [
      'Criamos o Blocks, um jogo inspirado na mecânica de Candy Crush, totalmente desenvolvido em linguagem C utilizando a biblioteca Allegro para gráficos, entrada do usuário e gerenciamento de animações.',
      'O projeto reproduz a lógica clássica de combinar peças, pontuar e avançar fases, oferecendo uma experiência fluida e dinâmica mesmo em um ambiente de baixo nível.',
      'Toda a lógica do jogo — detecção de combinações, queda de blocos, reposicionamento, pontuação e interface — foi implementada manualmente, demonstrando domínio de estruturas de dados, programação procedural e manipulação gráfica.',
    ],

    features: [
      'Desenvolvimento completo do jogo em C;',
      'Uso da biblioteca Allegro para gráficos, sprites e eventos;',
      'Mecânica de match-3 inspirada no Candy Crush;',
      'Sistema de pontuação, detecção de combinações e reposição de blocos, e',
      'Jogo leve, responsivo e com lógica original escrita do zero.',
    ],

    usedTechs: ['C;', 'Allegro (Biblioteca Gráfica).'],
  },
];
