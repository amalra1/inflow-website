'use client';

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import ptBR from '@/src/utils/website-text/pt-br.json';
import enUS from '@/src/utils/website-text/en-us.json';
import esp from '@/src/utils/website-text/esp.json';
import { WebsiteText } from '@/src/utils/website-text';
import { CURRENT_LOCALE } from '@/src/i18n.config';

type Locale = 'pt-br' | 'en-us' | 'esp';

const locales: Record<Locale, WebsiteText> = {
  'pt-br': ptBR,
  'en-us': enUS,
  esp: esp,
};

interface I18nContextType {
  locale: Locale;
  text: WebsiteText;
  setLocale: (newLocale: Locale) => void;
  availableLocales: Locale[];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'appLocale';
const defaultLocale: Locale = 'pt-br';

const getServerLocale = (): Locale => {
  const serverLocale = CURRENT_LOCALE as Locale;
  if (serverLocale === 'pt-br' || serverLocale === 'en-us' || serverLocale === 'esp') {
    return serverLocale;
  }
  return defaultLocale;
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getServerLocale);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCAL_STORAGE_KEY);
    const persistedLocale =
      savedLocale === 'pt-br' || savedLocale === 'en-us' || savedLocale === 'esp'
        ? savedLocale
        : getServerLocale();

    if (persistedLocale !== locale) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(persistedLocale);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, persistedLocale);

    setIsLoaded(true);
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCAL_STORAGE_KEY, newLocale);
  }, []);

  const availableLocales: Locale[] = Object.keys(locales) as Locale[];

  const websiteText = useMemo(() => {
    return locales[locale] || locales[defaultLocale];
  }, [locale]);

  const value = useMemo(
    () => ({ locale, text: websiteText, setLocale, availableLocales }),
    [locale, websiteText, setLocale, availableLocales],
  );

  if (!isLoaded) {
    return null;
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n deve ser usado dentro de um I18nProvider');
  }
  return context;
}
