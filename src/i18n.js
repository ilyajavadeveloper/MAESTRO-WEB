import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../public/locales/en/translation.json';
import ru from '../public/locales/ru/translation.json';
import he from '../public/locales/he/translation.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  he: { translation: he },
};

export const applyLanguageDirection = (lng) => {
  if (typeof document === 'undefined') return;
  const safeLng = ['en', 'ru', 'he'].includes(lng) ? lng : 'en';
  const dir = safeLng === 'he' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = safeLng;
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', safeLng);
  document.body.setAttribute('data-lang', safeLng);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'he'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    react: {
      useSuspense: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  applyLanguageDirection(lng);
});

// Initial synchronization
applyLanguageDirection(i18n.resolvedLanguage || i18n.language || 'en');

export default i18n;
