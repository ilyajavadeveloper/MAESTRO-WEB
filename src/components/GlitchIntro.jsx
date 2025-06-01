// src/components/GlitchIntro.jsx
import React from "react";
import "./GlitchIntro.css";
import { useTranslation } from "react-i18next"; // <-- Добавляем импорт useTranslation

const GlitchIntro = () => {
  const { t } = useTranslation(); // <-- Инициализируем хук для работы с переводами

  return (
    <section className="glitch-section">
      <div className="glitch-wrapper">
        <h1 className="glitch-text" data-text={t("glitch_main_title")}>
          {t("glitch_main_title")}{" "}
          {/* Используем ключ для "MAESTROWEB" */}
        </h1>
        <p className="glitch-sub">
          {t("glitch_subtitle")}{" "}
          {/* Используем ключ для "AI, дизайн, скорость..." */}
        </p>
      </div>
    </section>
  );
};

export default GlitchIntro;