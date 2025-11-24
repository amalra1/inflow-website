import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logoContainer}>
          <div className={styles.logoCircle}>
            <span className={styles.logoWrapper}>
              <span className={styles.logoTextWrapper}>
                <span className={styles.logoSymbolMain}>{'<'}</span>
                <span className={styles.logoTextDark}>Inflow</span>
                <span className={styles.logoSymbolMain}>{'>'}</span>
              </span>
              <div className={styles.tagline}>Software House</div>
            </span>
          </div>
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
      </div>
    </header>
  );
}
