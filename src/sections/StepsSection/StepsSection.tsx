import styles from './StepsSection.module.css';
import StepItem from '@/src/components/StepItem/StepItem';
import Image from 'next/image';
import { useI18n } from '@/src/context/i18n.context';
import AnimateOnView from '@/src/components/AnimateOnView/AnimateOnView';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { introImageFloatingVariants } from '@/src/utils/animation/animation-variants';

const STEPS_IMAGE_PATH = '/steps-image.png';
const BLUE_CIRCLE_IMAGE_PATH = '/circles/intro-large-blue-circle.svg';
const GREY_CIRCLE_IMAGE_PATH = '/circles/grey-circle.svg';

export default function StepsSection() {
  const { text: websiteText } = useI18n();
  const STEPS_CONTENT = websiteText.sections.stepsSection;
  const steps = STEPS_CONTENT.steps;

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 'some' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('reset');
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      className={styles.stepsSection}
      initial="hidden"
      animate={controls}
    >
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
        <AnimateOnView direction="left" delay={0} amount={0.7}>
          <h2 className={styles.sectionTitle}>
            {STEPS_CONTENT.titlePart1}
            <span className={styles.highlight}>
              {STEPS_CONTENT.titlePart2Highlight}
            </span>
          </h2>
        </AnimateOnView>

        <div className={styles.contentGrid}>
          <div className={styles.stepsColumn}>
            {steps.map((step, index) => (
              <AnimateOnView
                key={index}
                direction="left"
                delay={0.4 + index * 0.05}
                amount={0.5}
              >
                <StepItem
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                  titleColor={index === 0 ? '#60E1CB' : undefined}
                />
              </AnimateOnView>
            ))}
          </div>

          <motion.div
            className={styles.imageColumn}
            variants={introImageFloatingVariants}
            animate={controls}
          >
            <Image
              src={STEPS_IMAGE_PATH}
              alt={STEPS_CONTENT.altTexts.mainIllustration}
              width={1200}
              height={1200}
              className={styles.stepsImage}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
