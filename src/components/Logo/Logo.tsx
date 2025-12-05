// components/Logo/Logo.tsx
import Link from 'next/link';
import React from 'react';
import styles from './Logo.module.css';

type LogoProps = {
  variant: 'default' | 'alternate';
  mainFontSize: string;
  taglineFontSize: string;
};

export default function Logo({
  variant,
  mainFontSize,
  taglineFontSize,
}: LogoProps) {
  const isAlternate = variant === 'alternate';

  const wrapperClass = isAlternate
    ? styles.alternateLogoWrapper
    : styles.defaultLogoWrapper;
  const symbolClass = isAlternate
    ? styles.alternateSymbol
    : styles.defaultSymbol;
  const textClass = isAlternate ? styles.alternateText : styles.defaultText;
  const taglineClass = isAlternate
    ? styles.alternateTagline
    : styles.defaultTagline;

  const logoStyles = {
    '--logo-main-font-size': mainFontSize,
    '--logo-tagline-font-size': taglineFontSize,
  } as React.CSSProperties;

  return (
    <div className={wrapperClass} style={logoStyles}>
      <Link href="/">
        <div className={styles.textWrapper}>
          <span className={symbolClass}>{'<'}</span>
          <span className={textClass}>Inflow</span>
          <span className={symbolClass}>{'>'}</span>
        </div>
        <div className={taglineClass}>Software House</div>
      </Link>
    </div>
  );
}
