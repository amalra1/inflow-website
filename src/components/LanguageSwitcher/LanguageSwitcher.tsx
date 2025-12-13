'use client';

import { useI18n } from '@/src/context/i18n.context';
import styles from './LanguageSwitcher.module.css';

const LOCALE_NAMES: Record<string, string> = {
  'pt-br': 'PT',
  'en-us': 'EN',
  esp: 'ES',
};

export default function LanguageSwitcher() {
  const { locale, setLocale, availableLocales } = useI18n();

  return (
    <div className={styles.languageSwitcher}>
      {availableLocales.map((localeKey: 'pt-br' | 'en-us' | 'esp') => (
        <button
          key={localeKey}
          onClick={() => setLocale(localeKey)}
          className={`${styles.langButton} ${
            locale === localeKey ? styles.active : ''
          }`}
          disabled={locale === localeKey}
        >
          {LOCALE_NAMES[localeKey]}
        </button>
      ))}
    </div>
  );
}
