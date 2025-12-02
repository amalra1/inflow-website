'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../Button/Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type HeaderProps = {
  variant: 'default' | 'alternate';
};

const Logo = ({ variant }: { variant: 'default' | 'alternate' }) => {
  const isDefault = variant === 'default';

  const logoClasses = isDefault ? styles.logoCircle : styles.alternateLogo;
  const logoWrapperClasses = isDefault
    ? styles.logoTextWrapper
    : styles.alternateLogoTextWrapper;

  const symbolClasses = isDefault
    ? styles.logoSymbolMain
    : styles.alternateLogoSymbolMain;
  const textClasses = isDefault
    ? styles.logoTextDark
    : styles.alternateLogoTextDark;
  const taglineClasses = isDefault ? styles.tagline : styles.alternateTagline;

  return (
    <div className={logoClasses}>
      <Link href="/">
        <div className={logoWrapperClasses}>
          <span className={symbolClasses}>{'<'}</span>
          <span className={textClasses}>Inflow</span>
          <span className={symbolClasses}>{'>'}</span>
        </div>
        <div className={taglineClasses}>Software House</div>
      </Link>
    </div>
  );
};

export default function Header({ variant }: HeaderProps) {
  const ICON_BASE_PATH = '/social-networks-logos/';
  const pathname = usePathname();

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre a Inflow', href: '/sobre' },
    { name: 'Soluções', href: '/solucoes' },
    { name: 'Portfólio', href: '/portfolio' },
  ];

  const isAlternate = variant === 'alternate';
  const headerRightClasses = `${styles.headerRight} ${
    isAlternate ? styles.alternateHeaderRight : ''
  }`;

  const contentWrapperClasses = `${styles.contentAndNavWrapper} ${
    isAlternate ? styles.alternateContentWrapper : ''
  }`;

  return (
    <header className={styles.header}>
      <div className={styles.socialBarWrapper}>
        <div className={styles.socialIconsWrapper}>
          <a
            href="https://www.instagram.com/inflow.softwarehouse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${ICON_BASE_PATH}instagram.svg`}
              alt="Instagram"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.threads.com/@inflow.softwarehouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${ICON_BASE_PATH}threads.svg`}
              alt="Threads"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src={`${ICON_BASE_PATH}whatsapp.svg`}
              alt="WhatsApp"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.tiktok.com/@inflow.softwarehouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${ICON_BASE_PATH}tiktok.svg`}
              alt="TikTok"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>
        </div>
      </div>

      <div className={styles.headerInnerWrapper}>
        <div className={contentWrapperClasses}>
          <div className={styles.headerLeft}>
            <Logo variant={variant} />
          </div>

          <div className={headerRightClasses}>
            <nav className={styles.nav}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.active : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <Button
              href="/"
              backgroundColor="white"
              textColor="var(--color-main)"
              borderColor="#07003B17"
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
