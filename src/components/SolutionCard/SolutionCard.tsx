import Link from 'next/link';
import Image from 'next/image';
import styles from './SolutionCard.module.css';
import React from 'react';
type SolutionCardProps = {
  iconPath: string;
  title: string;
  description: string[];
  solutionId: string;
  onClick?: () => void;
  isActive?: boolean;
};

export default function SolutionCard({
  iconPath,
  title,
  description,
  solutionId,
  onClick,
  isActive = false,
}: SolutionCardProps) {
  const destinationHref = `/solucoes?service=${solutionId}`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      href={destinationHref}
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={handleLinkClick}
    >
      <div className={styles.iconContainer}>
        <Image
          src={iconPath}
          alt={`Ícone para ${title}`}
          width={120}
          height={120}
          className={styles.iconImage}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>

      {description.length > 0 && (
        <div className={styles.descriptionContainer}>
          {description.map((line, index) => (
            <p key={index} className={styles.descriptionLine}>
              {line}
            </p>
          ))}
        </div>
      )}
    </Link>
  );
}
