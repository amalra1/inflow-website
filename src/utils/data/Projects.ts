import { getWebsiteText } from '@/src/utils/website-text';

const websiteText = getWebsiteText();
const PROJECTS_TEXT_DATA = websiteText.projects.data;
export const projectFilterTexts = websiteText.projects.filters;

export enum ProjectFilter {
  ALL = 'ALL',
  ECOMMERCE = 'ECOMMERCE',
  SITES = 'SITES',
  OTHER = 'OTHER',
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

const STATIC_PROJECT_DETAILS = {
  renovaderme: {
    filter: ProjectFilter.ECOMMERCE,
    imageUrl: '/portfolio/renovaderme.png',
    projectLink: '#',
    usedTechs: ['HTML;', 'CSS;', 'Javascript.'],
  },
  'metodo-superar-digital': {
    filter: ProjectFilter.ECOMMERCE,
    imageUrl: '/portfolio/metodo-superar.png',
    projectLink: 'https://www.metodosuperar.com.br',
    usedTechs: ['HTML;', 'CSS;', 'Javascript.'],
  },
  'segmentacao-tatuagens': {
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/image-texture-segmentation.png',
    projectLink: 'https://github.com/amalra1/ImageTextureSegmentation',
    usedTechs: ['Python;', 'MediaPipe;', 'TensorFlow;', 'Visão Computacional.'],
  },
  'classificador-poses-fisiculturismo': {
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/bodybuilding-pose-classifier.png',
    projectLink: 'https://github.com/amalra1/BodybuildingPoseClassifier',
    usedTechs: ['MediaPipe;', 'Visão Computacional;', 'Python;', 'TensorFlow;'],
  },
  'sistema-osint': {
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/osint.jpeg',
    projectLink: 'https://hackhunter.com.br/',
    usedTechs: [
      'Back-end: Python (FastAPI);',
      'Front-end: React + Tailwind CSS;',
      'Banco de Dados: PostgreSQL.',
    ],
  },
  'blocks-candy-crush': {
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/blocks.png',
    projectLink: 'https://github.com/amalra1/Blocks',
    usedTechs: ['C;', 'Allegro (Biblioteca Gráfica).'],
  },
  'transformacao-perspectiva': {
    filter: ProjectFilter.OTHER,
    imageUrl: '/portfolio/perspective-transformation.png',
    projectLink: 'https://github.com/amalra1/PerspectiveTransformation',
    usedTechs: ['Visão Computacional;', 'Python.'],
  },
};

export const projectsData: Project[] = PROJECTS_TEXT_DATA.map((projectText) => {
  const staticData =
    STATIC_PROJECT_DETAILS[
      projectText.id as keyof typeof STATIC_PROJECT_DETAILS
    ];

  if (!staticData) {
    console.error(`Missing static config for project ID: ${projectText.id}`);
    return null;
  }

  return {
    ...projectText,
    ...staticData,
  } as Project;
}).filter((project): project is Project => project !== null);
