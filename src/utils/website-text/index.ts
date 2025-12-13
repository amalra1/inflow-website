import { CURRENT_LOCALE } from '@/src/i18n.config';
import ptBR from './pt-br.json';
import enUS from './en-us.json';
import esp from './esp.json';

type Locale = 'pt-br' | 'en-us' | 'esp';
export type WebsiteText = typeof ptBR;

const translations: Record<Locale, WebsiteText> = {
  'pt-br': ptBR,
  'en-us': enUS,
  esp: esp,
};

export function getWebsiteText(
  targetLocale: Locale = CURRENT_LOCALE as Locale,
): WebsiteText {
  const locale = targetLocale;

  if (!translations[locale]) {
    console.error(
      `Locale '${locale}' não encontrada. Usando 'pt-br' como fallback.`,
    );
    return ptBR;
  }

  return translations[locale];
}
