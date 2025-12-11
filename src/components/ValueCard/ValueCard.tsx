import Image from 'next/image';
import styles from './ValueCard.module.css';
import { getWebsiteText } from '@/src/utils/website-text';

type ValueCardProps = {
  iconPath: string;
  title: string;
};

export default function ValueCard({ iconPath, title }: ValueCardProps) {
  const websiteText = getWebsiteText();
  const altPrefix = websiteText.components.valueCard.iconAltPrefix;

  const altText = `${altPrefix} ${title}`;

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <Image
          src={iconPath}
          alt={altText}
          width={120}
          height={120}
          className={styles.iconImage}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
