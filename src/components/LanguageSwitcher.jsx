import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const langs = [
  { code: "en", label: "EN", title: "English" },
  { code: "ru", label: "RU", title: "Русский" },
  { code: "he", label: "עב", title: "עברית" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const handleLanguageChange = (code) => {
    if (code !== currentLang) {
      i18n.changeLanguage(code);
    }
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Language selection">
      <div className="lang-switcher-track">
        {langs.map(({ code, label, title }) => {
          const isActive = currentLang === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => handleLanguageChange(code)}
              className={`lang-btn ${isActive ? "active" : ""}`}
              aria-label={title}
              aria-pressed={isActive}
              title={title}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
