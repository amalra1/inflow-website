import { getWebsiteText } from '@/src/utils/website-text';

const websiteText = getWebsiteText();

const DETAILED_SOLUTIONS_TEXT_DATA =
  websiteText.solutionsPage.detailedSolutions;

export type SolutionDetail = {
  id: string;
  title: string;
  description: string[];
  detailsList: string[];
  imageUrl: string;
  conclusion: string;
};

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

export const detailedSolutions: SolutionDetail[] =
  DETAILED_SOLUTIONS_TEXT_DATA.map((solutionText) => {
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
  }).filter((solution): solution is SolutionDetail => solution !== null);
