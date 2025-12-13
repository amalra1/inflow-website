// src/utils/data/SolutionsData.ts

// 1. Importa o tipo WebsiteText
import { WebsiteText } from '@/src/utils/website-text';

// --- Tipos e Estruturas ---

// Interface para a parte traduzível que vem do JSON (usada no map)
export interface SolutionTextData {
  id: string;
  title: string;
  description: string[];
  detailsList: string[];
  conclusion: string;
}

export type SolutionDetail = {
  id: string;
  title: string;
  description: string[];
  detailsList: string[];
  imageUrl: string; // Estático
  conclusion: string;
};

// --- Dados Estáticos (URLs) ---

const STATIC_SOLUTION_DETAILS = {
  APIS: {
    imageUrl: '/solutions-section-icons/big-icons/apis.svg',
  },
  AUTOMATIONS: {
    imageUrl: '/solutions-section-icons/big-icons/automations.svg',
  },
  CRM: {
    imageUrl: '/solutions-section-icons/big-icons/crm.svg',
  },
  SITES: {
    imageUrl: '/solutions-section-icons/big-icons/sites.svg',
  },
  MONTHLY_FEE: {
    imageUrl: '/solutions-section-icons/big-icons/monthly-fee.svg',
  },
  SUPPORT: {
    imageUrl: '/solutions-section-icons/big-icons/technical-support.svg',
  },
  HOSTING: {
    imageUrl: '/solutions-section-icons/big-icons/hosting.svg',
  },
  AI: {
    imageUrl: '/solutions-section-icons/big-icons/ai.svg',
  },
  SAAS: {
    imageUrl: '/solutions-section-icons/big-icons/saas.svg',
  },
  SYSTEMS: {
    imageUrl: '/solutions-section-icons/big-icons/systems.svg',
  },
  CONSULTING: {
    imageUrl: '/solutions-section-icons/big-icons/consulting.svg',
  },
  APPS: {
    imageUrl: '/solutions-section-icons/big-icons/apps.svg',
  },
};

// --- Função Principal de Exportação ---

/**
 * Constrói e retorna a lista completa de soluções, mesclando dados estáticos (URLs)
 * com dados traduzidos (títulos, descrições) fornecidos pelo Contexto.
 * @param websiteText O objeto de tradução atual.
 */
export function getDetailedSolutions(
  websiteText: WebsiteText,
): SolutionDetail[] {
  // ⚠️ Acesso ao JSON via argumento
  const DETAILED_SOLUTIONS_TEXT_DATA: SolutionTextData[] =
    websiteText.solutionsPage.detailedSolutions;

  const detailedSolutions: SolutionDetail[] = DETAILED_SOLUTIONS_TEXT_DATA.map(
    (solutionText: SolutionTextData) => {
      const staticData =
        STATIC_SOLUTION_DETAILS[
          solutionText.id as keyof typeof STATIC_SOLUTION_DETAILS
        ];

      if (!staticData) {
        console.error(
          `Missing static config for solution ID: ${solutionText.id}`,
        );
        return null;
      }

      return {
        ...solutionText,
        ...staticData,
      } as SolutionDetail;
    },
  ).filter((solution): solution is SolutionDetail => solution !== null);

  return detailedSolutions;
}

// ⚠️ REMOVA export const detailedSolutions = ... no final do arquivo!
