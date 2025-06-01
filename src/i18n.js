// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Изменил на 'en' - лучше иметь 'en' как запасной, если 'ru' не нужен как основной
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    // i18next автоматически определяет dir для известных RTL языков (например, 'he', 'ar')
    // Но если хочешь быть уверенным, можно явно указать языки, для которых есть RTL:
    supportedLngs: ['en', 'ru', 'he'], // Добавь все поддерживаемые языки
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    react: {
        useSuspense: false, // Отключи, если не используешь React.Suspense
    },
    lng: 'en', // Начальный язык
  });

export default i18n;