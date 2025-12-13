import Image from 'next/image';
import styles from './TeamMemberCard.module.css';
import { useI18n } from '@/src/context/i18n.context';

type TeamMemberCardProps = {
  photoUrl: string;
  name: string;
  role: string;
};

export default function TeamMemberCard({
  photoUrl,
  name,
  role,
}: TeamMemberCardProps) {
  const { text: websiteText } = useI18n();
  const altPrefix = websiteText.components.teamMemberCard.photoAltPrefix;

  const altText = `${altPrefix} ${name}`;

  return (
    <div className={styles.card}>
      <div className={styles.photoWrapper}>
        <Image
          src={photoUrl}
          alt={altText}
          width={150}
          height={150}
          className={styles.photo}
        />
      </div>

      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
