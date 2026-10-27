import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const langs = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "he", label: "עב" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || i18n.language || "en";

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          className={currentLang.startsWith(code) ? "active" : ""}
          aria-pressed={currentLang.startsWith(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
