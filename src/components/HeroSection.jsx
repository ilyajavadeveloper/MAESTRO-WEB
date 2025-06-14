// src/components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-bg-overlay" />

      <motion.div
        className="hero-brand"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      >
        MAESTRO <span>WEB</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.1 }}
      >
        {t("hero_main_title_part1")}
      </motion.h1>

      <motion.div
        className="hero-words-line"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {[1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="hero-word"
            whileHover={{ scale: 1.15, color: "#00d2ff" }}
            transition={{ duration: 0.3 }}
          >
            {t(`hero_main_title_part2_${i}`)}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
  className="hero-subtitle improved"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
>
  <span className="highlight">{t("hero_subtitle_core_1")}</span>
  {t("hero_subtitle_middle")}{" "}
  <span className="emphasis">{t("hero_subtitle_core_2")}</span>{" "}
  {t("hero_subtitle_end")}
</motion.p>
      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <a
          href="https://wa.me/972524388967"
          className="btn btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("hero_whatsapp_btn")}
        </a>
        <a href="#services" className="btn btn-outline">
          {t("hero_services_btn")}
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
