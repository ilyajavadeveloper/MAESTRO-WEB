import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaArrowDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [wordIndex, setWordIndex] = useState(0);

  const animWords = [
    t("hero_anim_word_1"),
    t("hero_anim_word_2"),
    t("hero_anim_word_3"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % 3);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/bghero1.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-badge-dot" />
        <AnimatePresence mode="wait">
          <motion.span
            key={`${i18n.language}-${wordIndex}`}
            className="hero-badge-word"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {animWords[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <motion.h1
        className="hero-brand"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        MAESTRO <span>WEB</span>
      </motion.h1>

      <motion.h2
        className="hero-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        {t("hero_main_title_part1")}
      </motion.h2>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <span className="highlight">{t("hero_subtitle_core_1")}</span>{" "}
        {t("hero_subtitle_middle")}{" "}
        <span className="emphasis">{t("hero_subtitle_core_2")}</span>{" "}
        {t("hero_subtitle_end")}
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <motion.a
          href="https://wa.me/972524388967"
          className="btn btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 30px rgba(37, 211, 102, 0.65)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <FaWhatsapp className="btn-icon" />
          {t("hero_whatsapp_btn")}
        </motion.a>

        <motion.a
          href="#services"
          className="btn btn-secondary"
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 0px 25px rgba(0, 210, 255, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {t("hero_services_btn")}
          <FaArrowDown className="btn-icon-sm" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
