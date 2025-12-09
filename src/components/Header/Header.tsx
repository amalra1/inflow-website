'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../Button/Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '../Logo/Logo';

type HeaderProps = {
  variant: 'default' | 'alternate';
};

export default function Header({ variant }: HeaderProps) {
  const ICON_BASE_PATH = '/social-networks-logos/';
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre a Inflow', href: '/sobre' },
    { name: 'Soluções', href: '/solucoes' },
    { name: 'Portfólio', href: '/portfolio' },
  ];

  const isAlternate = variant === 'alternate';

  const mainFontSize = isAlternate ? '30px' : '4rem';
  const taglineFontSize = isAlternate ? '15px' : '28px';

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
              src={`${ICON_BASE_PATH}instagram-white.svg`}
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
              src={`${ICON_BASE_PATH}threads-white.svg`}
              alt="Threads"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://wa.me/4891186726"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${ICON_BASE_PATH}whatsapp-white.svg`}
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
              src={`${ICON_BASE_PATH}tiktok-white.svg`}
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
            <Logo
              variant={variant}
              mainFontSize={mainFontSize}
              taglineFontSize={taglineFontSize}
            />
          </div>
          <div className={styles.headerRight}>
            <nav
              className={`${styles.nav} ${
                isMenuOpen ? styles.mobileNavOpen : ''
              }`}
              id="mobile-navigation"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.active : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <Button
              href="/contato"
              backgroundColor="transparent"
              textColor="var(--color-main)"
              borderColor="var(--color-main)"
            >
              Fale conosco
            </Button>
            <button
              className={styles.hamburgerMenu}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <div className={styles.hamburgerIcon} />
              <div className={styles.hamburgerIcon} />
              <div className={styles.hamburgerIcon} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
