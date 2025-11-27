import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
const INFLOW_LOGO_PATH = '/inflow-logo-2.png';
const INSTAGRAM_ICON_PATH = '/social-networks-logos/instagram.svg';
const THREADS_ICON_PATH = '/social-networks-logos/threads.svg';
const TIKTOK_ICON_PATH = '/social-networks-logos/tiktok.svg';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.topFooter}>
        <div className={styles.innerWrapper}>
          <div className={styles.logoColumn}>
            <Image
              src={INFLOW_LOGO_PATH}
              alt="Inflow Software House Logo"
              width={500}
              height={180}
              className={styles.logo}
            />
          </div>

          <div className={styles.column}>
            <Link href="/sobre" className={styles.columnTitle}>
              Sobre a Inflow
            </Link>
            <Link href="/" className={styles.columnTitle}>
              Portfólio
            </Link>
            <Link href="/" className={styles.columnTitle}>
              Fale Conosco
            </Link>

            <p className={styles.contactInfo}>Email</p>
            <p className={styles.contactInfo}>inflow.agencia@gmail.com</p>
          </div>

          <div className={styles.column}>
            <p className={styles.contactInfo}>Atendimento</p>
            <p className={styles.contactInfo}>De segunda a sexta</p>
            <p className={styles.contactInfo}>09:00 às 18:00</p>
            <h3 className={styles.columnTitle}>&nbsp;</h3>{' '}
            <div className={styles.socialHandle}>
              <Image
                src={INSTAGRAM_ICON_PATH}
                alt="Instagram Icon"
                width={16}
                height={16}
                className={styles.instagramIcon}
              />
              <p className={styles.contactInfo}>@agencia.inflow</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.socialBarBottom}>
        <div className={styles.socialIconsBottom}>
          <a
            href="https://www.instagram.com/inflow.softwarehouse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={INSTAGRAM_ICON_PATH}
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
              src={THREADS_ICON_PATH}
              alt="Threads"
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
              src={TIKTOK_ICON_PATH}
              alt="TikTok"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </a>

          <Link
            href="https://www.tiktok.com/@inflow.softwarehouse"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialHandleText}
          >
            @inflow.softwarehouse
          </Link>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <p className={styles.copyright}>© Inflow, 2025</p>
      </div>
    </footer>
  );
}
