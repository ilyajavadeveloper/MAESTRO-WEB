import React from "react";
import "./GlitchIntro.css";
import { useTranslation } from "react-i18next";

const GlitchIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="glitch-section">
      <div className="glitch-wrapper">
        <p className="glitch-tagline">BY MAESTRO PROD</p>
        <h1 className="glitch-text" data-text={t("glitch_main_title")}>
          {t("glitch_main_title")}
        </h1>
        <p className="glitch-sub">
          {t("glitch_subtitle")}
        </p>
      </div>
    </section>
  );
};

export default GlitchIntro;
