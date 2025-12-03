import Link from 'next/link';
import Image from 'next/image';
import styles from './SolutionCard.module.css';

type SolutionCardProps = {
  iconPath: string;
  title: string;
  description: string;
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
      <div className={styles.headerContent}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.iconContainer}>
          <Image
            src={iconPath}
            alt={`Ícone para ${title}`}
            width={70}
            height={70}
            className={styles.iconImage}
          />
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.link}>Saiba mais →</div>
    </Link>
  );
}
