'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../Button/Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { getWebsiteText } from '@/src/utils/website-text';

type HeaderProps = {
  variant: 'default' | 'alternate';
};

const ICON_BASE_PATH = '/social-networks-logos/';
const WHATSAPP_NUMBER = '4891186726';

export default function Header({ variant }: HeaderProps) {
  const websiteText = getWebsiteText();
  const { constants, components } = websiteText;
  const HEADER_DATA = components.header;
  const SOCIAL_URLS = constants.SOCIAL_MEDIA_URLS;

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = HEADER_DATA.navItems;

  const isAlternate = variant === 'alternate';

  const mainFontSize = isAlternate ? '30px' : '4rem';
  const taglineFontSize = isAlternate ? '15px' : '28px';

  const contentWrapperClasses = `${styles.contentAndNavWrapper} ${
    isAlternate ? styles.alternateContentWrapper : ''
  }`;

  const getSocialHref = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return SOCIAL_URLS.instagram;
      case 'threads':
        return SOCIAL_URLS.threads;
      case 'tiktok':
        return SOCIAL_URLS.tiktok;
      case 'whatsapp':
        return `https://wa.me/${WHATSAPP_NUMBER}`;
      default:
        return '#';
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.socialBarWrapper}>
        <div className={styles.socialIconsWrapper}>
          {HEADER_DATA.socialMedia.map((social) => (
            <a
              key={social.name}
              href={getSocialHref(social.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`${ICON_BASE_PATH}${social.icon}`}
                alt={social.alt}
                width={24}
                height={24}
                className={styles.socialIcon}
              />
            </a>
          ))}
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
              {HEADER_DATA.contactButtonText}
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
