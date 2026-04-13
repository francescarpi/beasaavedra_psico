import ca from './ca.json';
import es from './es.json';

export type Lang = 'ca' | 'es';
export type TranslationKey = keyof typeof ca;

const translations: Record<Lang, Record<string, string>> = { ca, es };

/**
 * Translate a key to the given language (or detect from DOM if not provided).
 * Falls back to Catalan, then returns the bare key if missing.
 */
export function t(key: string, lang?: Lang): string {
  const currentLang: Lang =
    lang ||
    (typeof document !== 'undefined'
      ? (document.documentElement.lang as Lang)
      : 'ca');
  return translations[currentLang]?.[key] ?? translations.ca[key] ?? key;
}

/**
 * Read the user's preferred language from localStorage (client-side only).
 * Defaults to 'ca'.
 */
export function getLang(): Lang {
  if (typeof localStorage !== 'undefined') {
    return (localStorage.getItem('lang') as Lang) || 'ca';
  }
  return 'ca';
}

/**
 * Switch the active language, persist the preference in localStorage,
 * and swap every data-i18n* element in the DOM.
 */
export function switchLang(lang: Lang): void {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Swap text content
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key, lang);
    }
  });

  // Swap img alt attributes
  document.querySelectorAll<HTMLElement>('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (key) {
      el.setAttribute('alt', t(key, lang));
    }
  });

  // Swap aria-label attributes
  document
    .querySelectorAll<HTMLElement>('[data-i18n-aria], [data-i18n-aria-label]')
    .forEach((el) => {
      const key =
        el.getAttribute('data-i18n-aria') ||
        el.getAttribute('data-i18n-aria-label');
      if (key) {
        el.setAttribute('aria-label', t(key, lang));
      }
    });

  // Swap href attributes (tel: / mailto: links that vary by language)
  document.querySelectorAll<HTMLAnchorElement>('[data-i18n-href]').forEach(
    (el) => {
      const key = el.getAttribute('data-i18n-href');
      if (key) {
        el.setAttribute('href', t(key, lang));
      }
    },
  );
}
