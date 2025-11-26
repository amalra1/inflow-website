import styles from './CircleDesign.module.css';

type CircleDesignProps = {
  color: string;
  visibility: {
    circle1?: boolean;
    circle2?: boolean;
    circle3?: boolean;
  };
  className?: string;
};

export default function CircleDesign({
  color,
  visibility,
  className,
}: CircleDesignProps) {
  const style = {
    borderColor: color,
  };

  const { circle1, circle2, circle3 } = visibility;

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {(circle1 || circle1 === undefined) && (
        <div className={`${styles.base} ${styles['circle-1']}`} style={style} />
      )}

      {(circle2 || circle2 === undefined) && (
        <div className={`${styles.base} ${styles['circle-2']}`} style={style} />
      )}

      {(circle3 || circle3 === undefined) && (
        <div className={`${styles.base} ${styles['circle-3']}`} style={style} />
      )}
    </div>
  );
}
