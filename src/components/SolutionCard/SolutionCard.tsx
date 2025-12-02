import Link from 'next/link';
import Image from 'next/image';
import styles from './SolutionCard.module.css';

type SolutionCardProps = {
  iconPath: string;
  title: string;
  description: string;
  href: string;
};

export default function SolutionCard({
  iconPath,
  title,
  description,
  href,
}: SolutionCardProps) {
  return (
    <div className={styles.card}>
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

      <Link href={href} className={styles.link}>
        Saiba mais →
      </Link>
    </div>
  );
}
