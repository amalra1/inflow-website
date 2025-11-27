import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../Button/Button';
import Image from 'next/image';

export default function Header() {
  const ICON_BASE_PATH = '/social-networks-logos/';

  return (
    <header className={styles.header}>
      <div className={styles.socialBarWrapper}>
        <div className={styles.socialIconsWrapper}>
          <a
            href="https://www.instagram.com/agencia.inflow/"
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
            href="https://www.threads.com/@agencia.inflow?xmt=AQF0x0BiWIeoRzH8HmczmkbzsxeoMSTz2CLmZnbxvIVL9F4"
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
              <Link href="/" className={styles.navLink}>
                Início
              </Link>
              <Link href="/" className={styles.navLink}>
                Sobre a Inflow
              </Link>
              <Link href="/" className={styles.navLink}>
                Soluções
              </Link>
              <Link href="/" className={styles.navLink}>
                Portfólio
              </Link>
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
