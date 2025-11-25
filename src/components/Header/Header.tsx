import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../Button/Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInnerWrapper}>
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
    </header>
  );
}
