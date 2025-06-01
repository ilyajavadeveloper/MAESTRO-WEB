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

      <motion.span
        className="hero-credit"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
      >
        {t("hero_credit")}
      </motion.span>

      <motion.h1 className="hero-title">
        <motion.span
          className="hero-block"
          whileHover={{ scale: 1.03, letterSpacing: "1.5px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {t("hero_main_title_part1")}{" "}
        </motion.span>
        <br />
        <motion.span
          className="hero-word"
          whileHover={{ scale: 1.2, color: "#00d2ff" }}
          transition={{ duration: 0.8, ease: "anticipate" }}
        >
          {t("hero_main_title_part2_1")}{" "}
        </motion.span>
        <motion.span
          className="hero-word"
          whileHover={{ scale: 1.2, color: "#00d2ff" }}
          transition={{ duration: 0.8, ease: "anticipate" }}
        >
          {t("hero_main_title_part2_2")}{" "}
        </motion.span>
        <motion.span
          className="hero-word"
          whileHover={{ scale: 1.2, color: "#00d2ff" }}
          transition={{ duration: 0.8, ease: "anticipate" }}
        >
          {t("hero_main_title_part2_3")}{" "}
        </motion.span>
        <motion.span
          className="hero-word"
          whileHover={{ scale: 1.2, color: "#00d2ff" }}
          transition={{ duration: 0.8, ease: "anticipate" }}
        >
          {t("hero_main_title_part2_4")}{" "}
        </motion.span>
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
      >
        {t("hero_subtitle_part1")}{" "}
        <b>{t("hero_subtitle_part2_1")}</b>{" "}
        {t("hero_subtitle_part2_2")}{" "}
        <b>{t("hero_subtitle_part2_3")}</b>.{" "}
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
      >
        {/* Ключевое изменение здесь: добавлен класс "btn-whatsapp" */}
        <a href="https://wa.me/972524388967" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
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