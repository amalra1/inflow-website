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
      <div className={styles.iconContainer}>
        <div className={styles.iconBackground}></div>
        <Image
          src={iconPath}
          alt={`Ícone para ${title}`}
          width={70}
          height={70}
          className={styles.iconImage}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <Link href={href} className={styles.link}>
        Saiba mais →
      </Link>
    </div>
  );
}
