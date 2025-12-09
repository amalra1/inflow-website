'use client';

import styles from './PortfolioSection.module.css';
import PortfolioCard from '@/src/components/PortfolioCard/PortfolioCard';
import Button from '@/src/components/Button/Button';
import Image from 'next/image';
import { projectsData, Project } from '@/src/utils/data/Projects';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CIRCLE_BACKGROUND_PATH = '/circles/intro-large-blue-circle.svg';

const FEATURED_PROJECT_IDS = [
  'renovaderme',
  'transformacao-perspectiva',
  'metodo-superar-digital',
  'classificador-poses-fisiculturismo',
  'segmentacao-tatuagens',
];

export default function PortfolioSection() {
  const portfolioItems: Project[] = FEATURED_PROJECT_IDS.map((id) =>
    projectsData.find((project) => project.id === id),
  ).filter((item): item is Project => item !== undefined);

  return (
    <section className={styles.portfolioSection}>
      <Image
        src={CIRCLE_BACKGROUND_PATH}
        alt="Círculos de design de fundo"
        width={350}
        height={350}
        className={styles.circlesDesignImageLeft}
      />

      <div className={styles.blueBackground} />

      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>Portfólio</h2>
        <Carousel
          className="w-full relative"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className="-ml-8">
            {portfolioItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-8 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <PortfolioCard
                    imageUrl={item.imageUrl}
                    description={item.summary}
                    link={item.projectLink}
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

        <div className={styles.ctaWrapper}>
          <Button
            href="/portfolio"
            backgroundColor="var(--color-base)"
            textColor="var(--color-secondary)"
            borderColor="var(--color-secondary)"
          >
            Ver mais
          </Button>
        </div>
      </div>
    </section>
  );
}
