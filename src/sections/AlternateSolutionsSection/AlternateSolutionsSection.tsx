'use client';

import styles from './AlternateSolutionsSection.module.css';
import SolutionCard from '@/src/components/SolutionCard/SolutionCard';
import SolutionDetails from '@/src/components/SolutionDetails/SolutionDetails';
import {
  detailedSolutions,
  SolutionDetail,
} from '@/src/utils/data/SolutionsData';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useCallback } from 'react';
import { getWebsiteText } from '@/src/utils/website-text';

const STATIC_ICON_PATHS = {
  APIS: '/solutions-section-icons/apis.svg',
  AUTOMATIONS: '/solutions-section-icons/automations.svg',
  CRM: '/solutions-section-icons/crms.svg',
  SITES: '/solutions-section-icons/sites.svg',
  MONTHLY_FEE: '/solutions-section-icons/mensalidade.svg',
  SUPPORT: '/solutions-section-icons/technical-support.svg',
  HOSTING: '/solutions-section-icons/hosting-service.svg',
  AI: '/solutions-section-icons/ai.svg',
  SAAS: '/solutions-section-icons/saas.svg',
  SYSTEMS: '/solutions-section-icons/systems.svg',
  CONSULTING: '/solutions-section-icons/consultancy.svg',
  APPS: '/solutions-section-icons/apps.svg',
};

export default function AlternateSolutionSection() {
  const websiteText = getWebsiteText();
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceId = searchParams.get('service');

  const [selectedSolutionId, setSelectedSolutionId] = useState<string | null>(
    serviceId,
  );

  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollToDetails = useCallback(() => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    if (selectedSolutionId) {
      scrollToDetails();
    }

    if (serviceId) {
      setTimeout(() => {
        router.replace('/solucoes', { scroll: false });
      }, 500);
    }
  }, [selectedSolutionId, serviceId, scrollToDetails, router]);

  const handleSelectSolution = (id: string) => {
    setSelectedSolutionId(id);
  };

  const SOLUTIONS_TEXT_DATA = websiteText.sections.solutionsSection.solutions;
  const PAGE_TITLE = websiteText.solutionsPage.sectionTitle;

  const solutions = SOLUTIONS_TEXT_DATA.map((solution) => ({
    id: solution.id,
    title: solution.title,
    iconPath: STATIC_ICON_PATHS[solution.id as keyof typeof STATIC_ICON_PATHS],
  }));

  const selectedSolution: SolutionDetail | undefined = detailedSolutions.find(
    (s) => s.id.toLowerCase() === selectedSolutionId?.toLowerCase(),
  );

  return (
    <section className={styles.altSolutionsSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>{PAGE_TITLE}</h2>

        <div className={styles.cardGrid}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              iconPath={solution.iconPath}
              title={solution.title}
              description={[]}
              solutionId={solution.id}
              isActive={
                selectedSolutionId?.toLowerCase() === solution.id.toLowerCase()
              }
              onClick={() => handleSelectSolution(solution.id)}
            />
          ))}
        </div>

        <div ref={detailsRef} className={styles.detailsContainer}>
          {selectedSolution && <SolutionDetails solution={selectedSolution} />}
        </div>
      </div>
    </section>
  );
}
