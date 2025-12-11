'use client';

import styles from './SolutionsSection.module.css';
import SolutionCard from '@/src/components/SolutionCard/SolutionCard';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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

export default function SolutionsSection() {
  const websiteText = getWebsiteText();
  const [isMobile, setIsMobile] = useState(false);

  const SOLUTIONS_TEXT = websiteText.sections.solutionsSection;

  const solutions = SOLUTIONS_TEXT.solutions.map((solution) => ({
    id: solution.id,
    iconPath: STATIC_ICON_PATHS[solution.id as keyof typeof STATIC_ICON_PATHS],
    title: solution.title,
    description: solution.description,
  }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const renderSolutions = () => {
    if (isMobile) {
      return (
        <Carousel
          className={styles.carouselContainer}
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className={styles.carouselContent}>
            {solutions.map((solution, index) => (
              <CarouselItem key={index} className="pl-1">
                <div className="p-3">
                  <SolutionCard
                    iconPath={solution.iconPath}
                    title={solution.title}
                    description={[]}
                    solutionId={solution.id}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="-left-4 z-1 w-12 h-12"
            style={{ color: 'var(--color-main)' }}
          />
          <CarouselNext
            className="-right-4 z-1 w-12 h-12"
            style={{ color: 'var(--color-main)' }}
          />
        </Carousel>
      );
    }

    return (
      <div className={styles.cardGrid}>
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            iconPath={solution.iconPath}
            title={solution.title}
            description={[]}
            solutionId={solution.id}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>{SOLUTIONS_TEXT.title}</h2>
        {renderSolutions()}
      </div>
    </section>
  );
}
