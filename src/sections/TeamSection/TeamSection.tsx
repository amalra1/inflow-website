import styles from './TeamSection.module.css';
import TeamMemberCard from '@/src/components/TeamMemberCard/TeamMemberCard';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Andrielle Senna',
      role: 'Designer',
      photo: 'https://placehold.co/150x150/d1d1d1/555555?text=ANDRIELLE',
    },
    {
      name: 'Felipe Ribas',
      role: 'Comercial',
      photo: 'https://placehold.co/150x150/d1d1d1/555555?text=FELIPE',
    },
    {
      name: 'Gabriel Lima',
      role: 'Desenvolvedor',
      photo: 'https://placehold.co/150x150/d1d1d1/555555?text=GABRIEL',
    },
    {
      name: 'Pedro Amaral',
      role: 'Desenvolvedor',
      photo: 'team-photos/amaral.jpeg',
    },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>Nossa Equipe</h2>

        <div className={styles.cardGrid}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              photoUrl={member.photo}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
