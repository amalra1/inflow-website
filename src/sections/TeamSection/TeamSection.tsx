import styles from './TeamSection.module.css';
import TeamMemberCard from '@/src/components/TeamMemberCard/TeamMemberCard';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Andrielle Senna',
      role: 'Designer',
      photo: 'team-photos/andri.png',
    },
    {
      name: 'Felipe Ribas',
      role: 'Comercial',
      photo: 'team-photos/felipe.jpeg',
    },
    {
      name: 'Gabriel Lima',
      role: 'Desenvolvedor',
      photo: 'team-photos/gabriel.png',
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

        <div className={styles.titleLine}></div>

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
