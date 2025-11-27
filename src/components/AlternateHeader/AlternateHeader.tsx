'use client';

import Link from 'next/link';
import styles from './AlternateHeader.module.css';
import Button from '../Button/Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function AlternateHeader() {
  const ICON_BASE_PATH = '/social-networks-logos/';
  const pathname = usePathname();

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre a Inflow', href: '/sobre' },
    { name: 'Soluções', href: '/solucoes' },
    { name: 'Portfólio', href: '/portfolio' },
  ];

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
            href="https://www.threads.com/@inflow.softwarehouse?xmt=AQF0tv1FSWvdOB3V-KuYkLPtkxfHljEyn9qOaHVBSEEBgoA"
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
            href="https://www.tiktok.com/@inflow.softwarehouse?_r=1&_t=ZS-91kWD406Ub3"
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
        <div className={styles.contentAndNavWrapper}>
          <div className={styles.headerLeft}>
            <div className={styles.logoCircle}>
              <span className={styles.logoTextWrapper}>
                <span className={styles.logoSymbolMain}>{'<'}</span>
                <span className={styles.logoTextDark}>Inflow</span>
                <span className={styles.logoSymbolMain}>{'>'}</span>
              </span>
              <div className={styles.tagline}>Software House</div>
            </div>
          </div>

          <div className={styles.headerRight}>
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
