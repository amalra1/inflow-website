import Link from 'next/link';
import styles from './Button.module.css';
import { ReactNode } from 'react';

type ButtonProps = {
  href?: string;
  children: ReactNode;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  href,
  children,
  backgroundColor,
  textColor,
  borderColor,
  onClick,
  className,
}: ButtonProps) {
  const buttonStyle: object = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderColor: borderColor,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${className || ''}`}
        style={buttonStyle}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${styles.button} ${className || ''}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
