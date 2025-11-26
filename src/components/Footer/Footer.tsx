import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
const INFLOW_LOGO_PATH = '/inflow-logo-2.png';

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
                <Link href="/">APIs</Link>
              </li>
              <li>
                <Link href="/">APPs</Link>
              </li>
              <li>
                <Link href="/">Automações</Link>
              </li>
              <li>
                <Link href="/">CRM</Link>
              </li>
              <li>
                <Link href="/">Consultoria em Tecnologia</Link>
              </li>
              <li>
                <Link href="/">IA</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>&nbsp;</h3>{' '}
            <ul className={styles.navList}>
              <li>
                <Link href="/">Mensalidade</Link>
              </li>
              <li>
                <Link href="/">SAAS</Link>
              </li>
              <li>
                <Link href="/">Serviço de Hospedagem</Link>
              </li>
              <li>
                <Link href="/">Sites</Link>
              </li>
              <li>
                <Link href="/">Sistemas</Link>
              </li>
              <li>
                <Link href="/">Suporte Técnico</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Sobre a Inflow</h3>
            <h3 className={styles.columnTitle}>Portfólio</h3>
            <h3 className={styles.columnTitle}>Fale Conosco</h3>
            <p className={styles.contactInfo}>Email</p>
            <p className={styles.contactInfo}>inflow.agencia@gmail.com</p>
          </div>

          <div className={styles.column}>
            <p className={styles.contactInfo}>Atendimento</p>
            <p className={styles.contactInfo}>De segunda a sexta</p>
            <p className={styles.contactInfo}>09:00 às 18:00</p>
            <h3 className={styles.columnTitle}>&nbsp;</h3>{' '}
            <p className={styles.contactInfo}>@agencia.inflow</p>{' '}
          </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <p className={styles.copyright}>© Inflow, 2025</p>
      </div>
    </footer>
  );
}
