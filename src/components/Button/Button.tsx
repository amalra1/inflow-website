import Link from 'next/link';
import styles from './Button.module.css';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
};

export default function Button({
  href,
  children,
  backgroundColor,
  textColor,
  borderColor,
}: ButtonProps) {
  const buttonStyle: object = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderColor: borderColor,
  };

  return (
    <Link href={href} className={styles.button} style={buttonStyle}>
      {children}
    </Link>
  );
}
