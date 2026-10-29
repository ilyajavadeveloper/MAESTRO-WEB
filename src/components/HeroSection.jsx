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
  FaPalette,
  FaGem,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [wordIndex, setWordIndex] = useState(0);
  const [activeMode, setActiveMode] = useState(0);
  const [isStageHovered, setIsStageHovered] = useState(false);
  const stageRef = useRef(null);

  const animWords = [
    t("hero_anim_word_1"),
    t("hero_anim_word_2"),
    t("hero_anim_word_3"),
  ];

  const studioModes = [
    {
      id: "ai-engine",
      num: "01",
      tabLabel: t("hero_tab_1"),
      urlPath: "maestroweb.studio // ai-engine",
      icon: <FaCode />,
      badge: t("hero_mode_1_badge"),
      title: t("hero_mode_1_title"),
      accent: t("hero_mode_1_accent"),
      sub: t("hero_mode_1_sub"),
      theme: "cyan",
      metrics: [
        {
          label: t("hero_card_metric_1"),
          val: "+340%",
          fill: "94%",
          tone: "cyan",
        },
        {
          label: t("hero_card_metric_2"),
          val: "0.4s",
          fill: "98%",
          tone: "violet",
        },
      ],
    },
    {
      id: "ui-ux-system",
      num: "02",
      tabLabel: t("hero_tab_2"),
      urlPath: "maestroweb.studio // ui-ux-craft",
      icon: <FaPalette />,
      badge: t("hero_mode_2_badge"),
      title: t("hero_mode_2_title"),
      accent: t("hero_mode_2_accent"),
      sub: t("hero_mode_2_sub"),
      theme: "violet",
      metrics: [
        {
          label: t("hero_card_metric_3"),
          val: "100%",
          fill: "100%",
          tone: "violet",
        },
        {
          label: t("hero_card_metric_4"),
          val: "60 FPS",
          fill: "96%",
          tone: "cyan",
        },
      ],
    },
    {
      id: "turnkey-launch",
      num: "03",
      tabLabel: t("hero_tab_3"),
      urlPath: "maestroweb.studio // turnkey-deploy",
      icon: <FaRocket />,
      badge: t("hero_mode_3_badge"),
      title: t("hero_mode_3_title"),
      accent: t("hero_mode_3_accent"),
      sub: t("hero_mode_3_sub"),
      theme: "cyan",
      metrics: [
        {
          label: t("hero_card_metric_5"),
          val: "100/100",
          fill: "100%",
          tone: "cyan",
        },
        {
          label: t("hero_card_metric_6"),
          val: "7–14d",
          fill: "95%",
          tone: "violet",
        },
      ],
    },
  ];

  const tickerItems = [
    t("hero_ticker_1"),
    t("hero_ticker_2"),
    t("hero_ticker_3"),
    t("hero_ticker_4"),
    t("hero_ticker_5"),
    t("hero_ticker_6"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isStageHovered) return;
    const modeTimer = setInterval(() => {
      setActiveMode((prev) => (prev + 1) % 3);
    }, 4200);
    return () => clearInterval(modeTimer);
  }, [isStageHovered]);

  const handleStageMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(y * -10).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const resetStage = () => {
    setIsStageHovered(false);
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };

  const currentMode = studioModes[activeMode];

  return (
    <section className="hero" id="hero">
      {/* Ambient Background Layers */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
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
            <div className="hero-brand-kicker" dir="ltr">
              <span className="kicker-line" />
              <span className="kicker-text">MAESTRO</span>
              <span className="kicker-accent">WEB</span>
              <span className="kicker-sys-chip">SYS // 2.5</span>
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

          {/* Architectural Telemetry Metrics Console */}
          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75 }}
          >
            <div className="hero-metric-item">
              <div className="hero-metric-top" dir="ltr">
                <span className="hero-metric-idx">01</span>
                <span className="hero-metric-val">
                  {t("hero_stat_speed_val")}
                </span>
              </div>
              <span className="hero-metric-label">
                {t("hero_stat_speed_label")}
              </span>
            </div>

            <div className="hero-metric-sep" />

            <div className="hero-metric-item">
              <div className="hero-metric-top" dir="ltr">
                <span className="hero-metric-idx">02</span>
                <span className="hero-metric-val">
                  {t("hero_stat_price_val")}
                </span>
              </div>
              <span className="hero-metric-label">
                {t("hero_stat_price_label")}
              </span>
            </div>

            <div className="hero-metric-sep" />

            <div className="hero-metric-item">
              <div className="hero-metric-top" dir="ltr">
                <span className="hero-metric-idx">03</span>
                <span className="hero-metric-val">{t("hero_stat_ai_val")}</span>
              </div>
              <span className="hero-metric-label">
                {t("hero_stat_ai_label")}
              </span>
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
            onMouseEnter={() => setIsStageHovered(true)}
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
                <span className="float-sub" dir="ltr">
                  99.8% Lighthouse
                </span>
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
                <div className="stage-url">{currentMode.urlPath}</div>
                <div className="stage-status">
                  <span className="status-ping" />
                  <span>{t("hero_card_status")}</span>
                </div>
              </div>

              {/* Interactive Studio Mode Tabs */}
              <div className="stage-tabs" role="tablist">
                {studioModes.map((mode, idx) => {
                  const isActive = activeMode === idx;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`stage-tab-btn ${isActive ? "active" : ""}`}
                      onClick={() => setActiveMode(idx)}
                    >
                      <span className="stage-tab-num" dir="ltr">
                        {mode.num}
                      </span>
                      <span className="stage-tab-text">{mode.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Inner Visual Canvas */}
              <div className="stage-body">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${i18n.language}-${currentMode.id}`}
                    className="stage-mode-content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28 }}
                  >
                    {/* Visual Header Preview */}
                    <div className={`stage-preview-hero ${currentMode.theme}`}>
                      <div className="preview-top-line" dir="ltr">
                        <div className="preview-badge">
                          {currentMode.icon}
                          <span>{currentMode.badge}</span>
                        </div>
                        <span className="preview-sys-id">
                          MOD // {currentMode.num}
                        </span>
                      </div>

                      <div className="preview-title" dir="ltr">
                        {currentMode.title} <span>{currentMode.accent}</span>
                      </div>

                      <p className="preview-sub">{currentMode.sub}</p>

                      <div className="preview-wave" dir="ltr">
                        <span className="wave-bar b1" />
                        <span className="wave-bar b2" />
                        <span className="wave-bar b3" />
                        <span className="wave-bar b4" />
                        <span className="wave-bar b5" />
                        <span className="wave-bar b6" />
                        <span className="wave-bar b7" />
                        <span className="wave-bar b8" />
                        <span className="wave-bar b9" />
                      </div>
                    </div>

                    {/* Live Telemetry Gauges */}
                    <div className="stage-gauges">
                      {currentMode.metrics.map((m, idx) => (
                        <div className="gauge-row" key={m.label}>
                          <div className="gauge-info">
                            <span className="gauge-label">
                              {idx === 0 ? (
                                <FaChartLine className="gauge-icon" />
                              ) : (
                                <FaLayerGroup className="gauge-icon" />
                              )}
                              {m.label}
                            </span>
                            <span className="gauge-val" dir="ltr">
                              {m.val}
                            </span>
                          </div>
                          <div className="gauge-track">
                            <motion.div
                              className={`gauge-fill fill-${m.tone}`}
                              initial={{ width: "0%" }}
                              animate={{ width: m.fill }}
                              transition={{ duration: 0.65, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

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
                <FaGem />
              </div>
              <div className="float-meta">
                <span className="float-title">{t("hero_floating_2")}</span>
                <span className="float-sub" dir="ltr">
                  UI/UX • SEO • AI
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Architectural Bottom Capabilities Ticker */}
      <div className="hero-ticker-bar">
        <div className="hero-ticker-track" dir="ltr">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span className="hero-ticker-item" key={idx}>
              <span className="ticker-dot" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      <motion.a
        href="#why"
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
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
