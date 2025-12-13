import styles from './TeamSection.module.css';
import TeamMemberCard from '@/src/components/TeamMemberCard/TeamMemberCard';
import { useI18n } from '@/src/context/i18n.context';

const STATIC_TEAM_MEMBERS = [
  {
    name: 'Andrielle Senna',
    roleId: 'DESIGNER',
    photo: 'team-photos/andri.png',
  },
  {
    name: 'Felipe Ribas',
    roleId: 'COMMERCIAL',
    photo: 'team-photos/felipe.jpeg',
  },
  {
    name: 'Gabriel Lima',
    roleId: 'DEVELOPER',
    photo: 'team-photos/gabriel.png',
  },
  {
    name: 'Pedro Amaral',
    roleId: 'DEVELOPER',
    photo: 'team-photos/amaral.jpeg',
  },
];

export default function TeamSection() {
  const { text: websiteText } = useI18n();
  const TEAM_DATA = websiteText.aboutPage.teamSection;
  const ROLES = TEAM_DATA.roles;

  const teamMembers = STATIC_TEAM_MEMBERS.map((member) => ({
    name: member.name,
    photo: member.photo,
    role: ROLES[member.roleId as keyof typeof ROLES],
  }));

  return (
    <section className={styles.teamSection}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.title}>{TEAM_DATA.title}</h2>

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
