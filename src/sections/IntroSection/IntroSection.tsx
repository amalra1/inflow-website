import Button from '@/src/components/Button/Button';
import styles from './IntroSection.module.css';
import Image from 'next/image';
import { useI18n } from '@/src/context/i18n.context';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AnimateOnView from '@/src/components/AnimateOnView/AnimateOnView';

import {
  standardContainerVariants,
  introImageFloatingVariants,
} from '@/src/utils/animation/animation-variants';

const CIRCLE_IMAGE_PATH = '/circles/intro-large-blue-circle.svg';
const INTRO_IMAGE_PATH = '/intro-image.svg';

export default function IntroSection() {
  const { text: websiteText } = useI18n();
  const INTRO_TEXT = websiteText.sections.introSection;

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 'some' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      className={styles.introSection}
      initial="hidden"
      animate={controls}
    >
      <Image
        src={CIRCLE_IMAGE_PATH}
        alt={INTRO_TEXT.altTexts.designCircles}
        width={500}
        height={500}
        className={styles.circlesDesignImage}
      />

      <motion.div
        className={styles.innerWrapper}
        variants={standardContainerVariants}
      >
        <div className={styles.textColumn}>
          <AnimateOnView direction="left" delay={0}>
            <div className={styles.whiteLine}></div>
          </AnimateOnView>

          <AnimateOnView direction="left" delay={0.2}>
            <h1 className={styles.title}>{INTRO_TEXT.title}</h1>
          </AnimateOnView>

          <AnimateOnView direction="left" delay={0.4}>
            <p className={styles.subtitle}>{INTRO_TEXT.subtitle}</p>
          </AnimateOnView>

          <AnimateOnView direction="left" delay={0.6}>
            <div className={styles.ctaGroup}>
              <Button
                href="/contato"
                backgroundColor="var(--color-dark)"
                textColor="white"
                borderColor="#000000"
              >
                {INTRO_TEXT.ctaContact}
              </Button>
              <Button
                href="/portfolio"
                backgroundColor="transparent"
                textColor="var(--color-main)"
                borderColor="var(--color-main)"
              >
                {INTRO_TEXT.ctaPortfolio}
              </Button>
            </div>
          </AnimateOnView>
        </div>

        <motion.div
          className={styles.imageColumn}
          variants={introImageFloatingVariants}
          animate={controls}
        >
          <Image
            src={INTRO_IMAGE_PATH}
            alt={INTRO_TEXT.altTexts.mainIllustration}
            width={700}
            height={700}
            className={styles.introImage}
            priority
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
