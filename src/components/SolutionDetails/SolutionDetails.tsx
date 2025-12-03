import styles from './SolutionDetails.module.css';
import Image from 'next/image';
import Button from '@/src/components/Button/Button';
import { SolutionDetail } from '@/src/utils/data/SolutionsData';

type SolutionDetailsProps = {
  solution: SolutionDetail;
};

export default function SolutionDetails({ solution }: SolutionDetailsProps) {
  if (!solution) return null;

  return (
    <section className={styles.detailsSection}>
      <div className={styles.innerWrapper}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>{solution.title}</h2>

          {solution.description.map((p, index) => (
            <p key={index} className={styles.paragraph}>
              {p}
            </p>
          ))}

          <div className={styles.offerings}>
            <h3 className={styles.offeringsTitle}>Oferecemos:</h3>
            <ul className={styles.offeringsList}>
              {solution.detailsList.map((item, index) => (
                <li key={index} className={styles.offeringsItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <Button
            href="/"
            backgroundColor="var(--color-dark)"
            textColor="white"
            borderColor="var(--color-dark)"
          >
            Peça um orçamento gratuito
          </Button>
          <Image
            src={solution.imageUrl}
            alt={`Ilustração de ${solution.title}`}
            width={700}
            height={700}
            className={styles.image}
          />
        </div>
      </div>
      <p className={styles.paragraphBottom}>{solution.conclusion}</p>
    </section>
  );
}
