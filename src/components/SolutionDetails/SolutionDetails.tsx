import styles from './SolutionDetails.module.css';
import Image from 'next/image';
import Button from '@/src/components/Button/Button';
import { SolutionDetail } from '@/src/utils/data/SolutionsData';
import { useI18n } from '@/src/context/i18n.context';

type SolutionDetailsProps = {
  solution: SolutionDetail;
};

export default function SolutionDetails({ solution }: SolutionDetailsProps) {
  const { text: websiteText } = useI18n();

  if (!solution) return null;

  const DETAILS_TEXT = websiteText.components.solutionDetails;
  const imageAltText = `${DETAILS_TEXT.imageAltPrefix} ${solution.title}`;

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
            <h3 className={styles.offeringsTitle}>
              {DETAILS_TEXT.offeringsTitle}
            </h3>
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
          <Image
            src={solution.imageUrl}
            alt={imageAltText}
            width={700}
            height={700}
            className={styles.image}
          />
          <div className={styles.buttonWrapper}>
            <Button
              href="/contato"
              backgroundColor="var(--color-dark)"
              textColor="white"
              borderColor="var(--color-dark)"
            >
              {DETAILS_TEXT.ctaButtonText}
            </Button>
          </div>
        </div>
      </div>
      <p className={styles.paragraphBottom}>{solution.conclusion}</p>
    </section>
  );
}
