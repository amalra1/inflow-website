import { CURRENT_LOCALE } from '@/src/i18n.config';
import ptBR from './pt-br.json';
import enUS from './en-us.json';

type Locale = 'pt-br' | 'en-us';
type WebsiteText = typeof ptBR;

const translations: Record<Locale, WebsiteText> = {
  'pt-br': ptBR,
  'en-us': enUS,
};

export function getWebsiteText(): WebsiteText {
  const locale = CURRENT_LOCALE as Locale;

  if (!translations[locale]) {
    console.error(
      `Locale '${locale}' não encontrada. Usando 'pt-br' como fallback.`,
    );
    return ptBR;
  }

  return translations[locale];
}
