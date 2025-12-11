import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getWebsiteText } from '@/src/utils/website-text';

const INFLOW_LOGO_PATH = '/inflow-logo-2.png';
const INSTAGRAM_ICON_PATH = '/social-networks-logos/instagram.svg';
const THREADS_ICON_PATH = '/social-networks-logos/threads.svg';
const TIKTOK_ICON_PATH = '/social-networks-logos/tiktok.svg';

export default function Footer() {
  const websiteText = getWebsiteText();

  const FOOTER_DATA = websiteText.components.footer;
  const SOCIAL_URLS = websiteText.constants.SOCIAL_MEDIA_URLS;

  const socialItems = [
    {
      url: SOCIAL_URLS.instagram,
      iconPath: INSTAGRAM_ICON_PATH,
      alt: 'Instagram',
    },
    { url: SOCIAL_URLS.threads, iconPath: THREADS_ICON_PATH, alt: 'Threads' },
    { url: SOCIAL_URLS.tiktok, iconPath: TIKTOK_ICON_PATH, alt: 'TikTok' },
  ];

  return (
    <footer className={styles.footerSection}>
      <div className={styles.topFooter}>
        <div className={styles.innerWrapper}>
          <div className={styles.logoColumn}>
            <Image
              src={INFLOW_LOGO_PATH}
              alt={FOOTER_DATA.logoAltText}
              width={500}
              height={180}
              className={styles.logo}
            />
          </div>

          <div className={styles.column}>
            {FOOTER_DATA.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={styles.columnTitle}
              >
                {link.name}
              </Link>
            ))}

            <p className={styles.contactInfo}>
              {FOOTER_DATA.contactInfo.emailTitle}
            </p>
            <p className={styles.contactInfo}>{SOCIAL_URLS.email}</p>
          </div>

          <div className={styles.column}>
            <p className={styles.contactInfo}>
              {FOOTER_DATA.contactInfo.serviceTitle}
            </p>
            <p className={styles.contactInfo}>
              {FOOTER_DATA.contactInfo.serviceDays}
            </p>
            <p className={styles.contactInfo}>
              {FOOTER_DATA.contactInfo.serviceHours}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.socialBarBottom}>
        <div className={styles.socialIconsBottom}>
          {socialItems.map((social) => (
            <a
              key={social.alt}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.iconPath}
                alt={social.alt}
                width={24}
                height={24}
                className={styles.socialIcon}
              />
            </a>
          ))}

          <Link
            href={SOCIAL_URLS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialHandleText}
          >
            {FOOTER_DATA.socialHandle}
          </Link>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <p className={styles.copyright}>{FOOTER_DATA.copyrightText}</p>
      </div>
    </footer>
  );
}
