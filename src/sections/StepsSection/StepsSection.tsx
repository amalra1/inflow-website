import styles from './StepsSection.module.css';
import StepItem from '@/src/components/StepItem/StepItem';
import Image from 'next/image';
import { getWebsiteText } from '@/src/utils/website-text';

const STEPS_IMAGE_PATH = '/steps-image.png';
const BLUE_CIRCLE_IMAGE_PATH = '/circles/intro-large-blue-circle.svg';
const GREY_CIRCLE_IMAGE_PATH = '/circles/grey-circle.svg';

export default function StepsSection() {
  const websiteText = getWebsiteText();
  const STEPS_CONTENT = websiteText.sections.stepsSection;
  const steps = STEPS_CONTENT.steps;

  return (
    <section className={styles.stepsSection}>
      <Image
        src={BLUE_CIRCLE_IMAGE_PATH}
        alt={STEPS_CONTENT.altTexts.designCircles}
        width={300}
        height={300}
        className={styles.blueCircle}
      />

      <Image
        src={BLUE_CIRCLE_IMAGE_PATH}
        alt={STEPS_CONTENT.altTexts.designCircles}
        width={300}
        height={300}
        className={styles.blueCircleRight}
      />

      <Image
        src={GREY_CIRCLE_IMAGE_PATH}
        alt={STEPS_CONTENT.altTexts.designCircles}
        width={400}
        height={400}
        className={styles.greyCircle}
      />

      <div className={styles.innerWrapper}>
        <h2 className={styles.sectionTitle}>
          {STEPS_CONTENT.titlePart1}
          <span className={styles.highlight}>
            {STEPS_CONTENT.titlePart2Highlight}
          </span>
        </h2>

        <div className={styles.contentGrid}>
          <div className={styles.stepsColumn}>
            {steps.map((step, index) => (
              <StepItem
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                titleColor={index === 0 ? '#60E1CB' : undefined}
              />
            ))}
          </div>

          <div className={styles.imageColumn}>
            <Image
              src={STEPS_IMAGE_PATH}
              alt={STEPS_CONTENT.altTexts.mainIllustration}
              width={1200}
              height={1200}
              className={styles.stepsImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
