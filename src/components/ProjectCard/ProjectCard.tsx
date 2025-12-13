'use client';

import Image from 'next/image';
import styles from './ProjectCard.module.css';
import Button from '@/src/components/Button/Button';
import { useI18n } from '@/src/context/i18n.context';

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  projectLink: string;
  onDetailsClick: (projectId: string) => void;
  projectId: string;
};

export default function ProjectCard({
  title,
  imageUrl,
  projectLink,
  onDetailsClick,
  projectId,
}: ProjectCardProps) {
  const { text: websiteText } = useI18n();
  const CARD_TEXT = websiteText.components.projectCard;

  const imageAltText = `${CARD_TEXT.imageAltPrefix} ${title}`;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.backgroundSquare} />

      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.twoColumnWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt={imageAltText}
              width={200}
              height={125}
              className={styles.projectImage}
              sizes="(max-width: 600px) 50vw, 30vw"
              quality={80}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              onClick={() => onDetailsClick(projectId)}
              backgroundColor="var(--color-secondary)"
              textColor="var(--color-base)"
              borderColor="var(--color-secondary)"
              className={styles.detailsButton}
            >
              {CARD_TEXT.detailsButtonText}
            </Button>

            <Button
              href={projectLink}
              backgroundColor="var(--color-secondary)"
              textColor="var(--color-base)"
              borderColor="var(--color-secondary)"
              className={styles.visitButton}
            >
              {CARD_TEXT.visitButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
