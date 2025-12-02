import Image from 'next/image';
import styles from './ValueCard.module.css';

type ValueCardProps = {
  iconPath: string;
  title: string;
};

export default function ValueCard({ iconPath, title }: ValueCardProps) {
  return (
    <div className={styles.card}>
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
    </div>
  );
}
