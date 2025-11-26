import styles from './StepItem.module.css';

type StepItemProps = {
  stepNumber: number;
  title: string;
  description: string;
  titleColor?: string;
};

export default function StepItem({
  stepNumber,
  title,
  description,
  titleColor,
}: StepItemProps) {
  const titleStyle: object = titleColor ? { color: titleColor } : {};

  return (
    <div className={styles.stepItem}>
      <div className={styles.stepNumberCircle}>{stepNumber}</div>

      <div className={styles.content}>
        <h3 className={styles.title} style={titleStyle}>
          {title}
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
