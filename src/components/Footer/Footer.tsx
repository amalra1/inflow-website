import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
const INFLOW_LOGO_PATH = '/inflow-logo-2.png';
const INSTAGRAM_ICON_PATH = '/social-networks-logos/instagram.svg';

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
            <h3 className={styles.columnTitle}>Soluções</h3>
            <ul className={styles.navList}>
              <li>
                <p className={styles.contactInfo}>APIs</p>
              </li>
              <li>
                <p className={styles.contactInfo}>APPs</p>
              </li>
              <li>
                <p className={styles.contactInfo}>Automações</p>
              </li>
              <li>
                <p className={styles.contactInfo}>CRM</p>
              </li>
              <li>
                <p className={styles.contactInfo}>Consultoria em Tecnologia</p>
              </li>
              <li>
                <p className={styles.contactInfo}>IA</p>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>&nbsp;</h3>{' '}
            <ul className={styles.navList}>
              <li>
                <p className={styles.contactInfo}>Mensalidade</p>
              </li>
              <li>
                <p className={styles.contactInfo}>SAAS</p>
              </li>
              <li>
                <p className={styles.contactInfo}>Serviço de Hospedagem</p>
              </li>
              <li>
                <p className={styles.contactInfo}>Sites</p>
              </li>
              <li>
                <p className={styles.contactInfo}>Sistemas</p>
              </li>
              <li>
                <p className={styles.contactInfo}>Suporte Técnico</p>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <Link href="/" className={styles.columnTitle}>
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

      <div className={styles.bottomFooter}>
        <p className={styles.copyright}>© Inflow, 2025</p>
      </div>
    </footer>
  );
}
