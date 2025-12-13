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
import { useI18n } from '@/src/context/i18n.context';
import AnimateOnView from '@/src/components/AnimateOnView/AnimateOnView';
import { STATIC_ICON_PATHS } from '@/src/utils/constants/image-paths';

export default function SolutionsSection() {
  const { text: websiteText } = useI18n();
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
        <AnimateOnView direction="left" delay={0} amount={0.5}>
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
        </AnimateOnView>
      );
    }

    return (
      <div className={styles.cardGrid}>
        {solutions.map((solution, index) => (
          <AnimateOnView key={index} direction="left" delay={0.1} amount={0.3}>
            <SolutionCard
              iconPath={solution.iconPath}
              title={solution.title}
              description={[]}
              solutionId={solution.id}
            />
          </AnimateOnView>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.innerWrapper}>
        <AnimateOnView direction="left" delay={0} amount={0.5}>
          <h2 className={styles.title}>{SOLUTIONS_TEXT.title}</h2>
        </AnimateOnView>

        {renderSolutions()}
      </div>
    </section>
  );
}
