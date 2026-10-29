import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaArrowDown,
  FaBolt,
  FaCheckCircle,
  FaChartLine,
  FaLayerGroup,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [wordIndex, setWordIndex] = useState(0);
  const stageRef = useRef(null);

  const animWords = [
    t("hero_anim_word_1"),
    t("hero_anim_word_2"),
    t("hero_anim_word_3"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleStageMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(y * -12).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const resetStage = () => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };

  return (
    <section className="hero" id="hero">
      {/* Ambient Background Layers */}
      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src="/bghero1.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-cyan" />
      <div className="hero-orb hero-orb-violet" />

      <div className="hero-container">
        {/* Left / Primary Editorial Column */}
        <div className="hero-left">
          <motion.div
            className="hero-pill"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-pill-tag">{t("hero_studio_tag")}</span>
            <span className="hero-pill-divider" />
            <span className="hero-pill-live">
              <span className="hero-pill-dot" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${i18n.language}-${wordIndex}`}
                  className="hero-pill-word"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {animWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.div
            className="hero-heading-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="hero-brand-kicker">
              <span className="kicker-line" />
              <span className="kicker-text">MAESTRO</span>
              <span className="kicker-accent">WEB</span>
            </div>

            <h1 className="hero-title">{t("hero_main_title_part1")}</h1>
          </motion.div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75 }}
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
            transition={{ delay: 0.4, duration: 0.75 }}
          >
            <motion.a
              href="https://wa.me/972524388967"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label={t("hero_whatsapp_btn")}
            >
              <FaWhatsapp className="btn-icon" />
              <span>{t("hero_whatsapp_btn")}</span>
            </motion.a>

            <motion.a
              href="#services"
              className="btn btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label={t("hero_services_btn")}
            >
              <span>{t("hero_services_btn")}</span>
              <FaArrowDown className="btn-icon-sm" />
            </motion.a>
          </motion.div>

          {/* Metrics Strip */}
          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75 }}
          >
            <div className="hero-metric-item">
              <span className="hero-metric-val" dir="ltr">
                {t("hero_stat_speed_val")}
              </span>
              <span className="hero-metric-label">{t("hero_stat_speed_label")}</span>
            </div>
            <div className="hero-metric-sep" />
            <div className="hero-metric-item">
              <span className="hero-metric-val" dir="ltr">
                {t("hero_stat_price_val")}
              </span>
              <span className="hero-metric-label">{t("hero_stat_price_label")}</span>
            </div>
            <div className="hero-metric-sep" />
            <div className="hero-metric-item">
              <span className="hero-metric-val" dir="ltr">
                {t("hero_stat_ai_val")}
              </span>
              <span className="hero-metric-label">{t("hero_stat_ai_label")}</span>
            </div>
          </motion.div>
        </div>

        {/* Right / Interactive 3D Digital Studio Stage */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          <div
            className="hero-stage-wrapper"
            ref={stageRef}
            onMouseMove={handleStageMove}
            onMouseLeave={resetStage}
          >
            <div className="hero-stage-glow" />

            {/* Floating Satellite Card Top */}
            <div className="hero-float-badge hero-float-top">
              <div className="float-icon-wrap cyan">
                <FaBolt />
              </div>
              <div className="float-meta">
                <span className="float-title">{t("hero_floating_1")}</span>
                <span className="float-sub" dir="ltr">99.8% Lighthouse</span>
              </div>
            </div>

            {/* Main 3D Architectural Window */}
            <div className="hero-stage-card">
              <div className="stage-card-shine" />

              {/* Browser / Studio Topbar */}
              <div className="stage-topbar" dir="ltr">
                <div className="stage-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="stage-url">maestroweb.studio // ai-engine</div>
                <div className="stage-status">
                  <span className="status-ping" />
                  <span>{t("hero_card_status")}</span>
                </div>
              </div>

              {/* Inner Visual Canvas */}
              <div className="stage-body">
                {/* Visual Header Preview */}
                <div className="stage-preview-hero">
                  <div className="preview-badge" dir="ltr">
                    <FaCode /> REACT + AI + MOTION
                  </div>
                  <div className="preview-title">
                    MAESTRO <span>ENGINE</span>
                  </div>
                  <div className="preview-wave">
                    <span className="wave-bar b1" />
                    <span className="wave-bar b2" />
                    <span className="wave-bar b3" />
                    <span className="wave-bar b4" />
                    <span className="wave-bar b5" />
                    <span className="wave-bar b6" />
                    <span className="wave-bar b7" />
                  </div>
                </div>

                {/* Live Telemetry Gauges */}
                <div className="stage-gauges">
                  <div className="gauge-row">
                    <div className="gauge-info">
                      <span className="gauge-label">
                        <FaChartLine className="gauge-icon" />
                        {t("hero_card_metric_1")}
                      </span>
                      <span className="gauge-val" dir="ltr">+340%</span>
                    </div>
                    <div className="gauge-track">
                      <div className="gauge-fill fill-cyan" />
                    </div>
                  </div>

                  <div className="gauge-row">
                    <div className="gauge-info">
                      <span className="gauge-label">
                        <FaLayerGroup className="gauge-icon" />
                        {t("hero_card_metric_2")}
                      </span>
                      <span className="gauge-val" dir="ltr">0.4s</span>
                    </div>
                    <div className="gauge-track">
                      <div className="gauge-fill fill-violet" />
                    </div>
                  </div>
                </div>

                {/* Feature Capability Chips */}
                <div className="stage-chips">
                  <span className="stage-chip">
                    <FaCheckCircle className="chip-check" />
                    {t("hero_card_chip_1")}
                  </span>
                  <span className="stage-chip">
                    <FaCheckCircle className="chip-check" />
                    {t("hero_card_chip_2")}
                  </span>
                  <span className="stage-chip">
                    <FaCheckCircle className="chip-check" />
                    {t("hero_card_chip_3")}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Satellite Card Bottom */}
            <div className="hero-float-badge hero-float-bottom">
              <div className="float-icon-wrap violet">
                <FaRocket />
              </div>
              <div className="float-meta">
                <span className="float-title">{t("hero_floating_2")}</span>
                <span className="float-sub" dir="ltr">UI/UX • SEO • AI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#why"
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
      </motion.a>
    </section>
  );
};

export default HeroSection;
