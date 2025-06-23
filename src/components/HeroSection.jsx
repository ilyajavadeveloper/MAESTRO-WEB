// src/components/HeroSection.jsx
import React from "react"
import "./HeroSection.css"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/bghero1.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <motion.h1
        className="hero-brand"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MAESTRO <span>WEB</span>
      </motion.h1>

      <motion.h2
        className="hero-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {t("hero_main_title_part1")}
      </motion.h2>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
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
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="https://wa.me/972524388967"
          className="btn btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("hero_whatsapp_btn")}
        </a>
      </motion.div>
    </section>
  )
}

export default HeroSection
