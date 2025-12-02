import Image from 'next/image';
import styles from './TeamMemberCard.module.css';

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
  return (
    <div className={styles.card}>
      <div className={styles.photoWrapper}>
        <Image
          src={photoUrl}
          alt={`Foto de ${name}`}
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
