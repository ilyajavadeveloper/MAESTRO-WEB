// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const animatedWords = [
  "hero_anim_word_1",
  "hero_anim_word_2",
  "hero_anim_word_3"
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

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

      <div className="hero-animated-line">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="hero-anim-word"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {t(animatedWords[index])}
          </motion.span>
        </AnimatePresence>
      </div>

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
