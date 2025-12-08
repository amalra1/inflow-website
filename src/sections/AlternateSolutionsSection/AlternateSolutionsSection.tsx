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

export default function AlternateSolutionSection() {
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

  const selectedSolution: SolutionDetail | undefined = detailedSolutions.find(
    (s) => s.id.toLowerCase() === selectedSolutionId?.toLowerCase(),
  );

  const solutions = [
    {
      id: 'APIS',
      title: "API's",
      iconPath: '/solutions-section-icons/apis.svg',
    },
    {
      id: 'AUTOMATIONS',
      title: 'Automações',
      iconPath: '/solutions-section-icons/automations.svg',
    },
    { id: 'CRM', title: 'CRM', iconPath: '/solutions-section-icons/crms.svg' },
    {
      id: 'SITES',
      title: 'Sites',
      iconPath: '/solutions-section-icons/sites.svg',
    },
    {
      id: 'MONTHLY_FEE',
      title: 'Mensalidade',
      iconPath: '/solutions-section-icons/mensalidade.svg',
    },
    {
      id: 'SUPPORT',
      title: 'Suporte Técnico',
      iconPath: '/solutions-section-icons/technical-support.svg',
    },
    {
      id: 'HOSTING',
      title: 'Serviço de hospedagem',
      iconPath: '/solutions-section-icons/hosting-service.svg',
    },
    { id: 'AI', title: 'IA', iconPath: '/solutions-section-icons/ai.svg' },
    {
      id: 'SAAS',
      title: 'SAAS',
      iconPath: '/solutions-section-icons/saas.svg',
    },
    {
      id: 'SYSTEMS',
      title: 'Sistemas',
      iconPath: '/solutions-section-icons/systems.svg',
    },
    {
      id: 'CONSULTING',
      title: 'Consultoria em tecnologia',
      iconPath: '/solutions-section-icons/consultancy.svg',
    },
    {
      id: 'APPS',
      title: 'APPS',
      iconPath: '/solutions-section-icons/apps.svg',
    },
  ];

  return (
    <section className={styles.altSolutionsSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>Conheça nossas soluções</h2>

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
