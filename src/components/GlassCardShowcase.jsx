import React from "react";
import "./GlassCardShowcase.css";
import { motion } from "framer-motion";
import { FaRobot, FaPenNib, FaImages } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const GlassCardShowcase = () => {
  const { t } = useTranslation();

  const data = [
    {
      num: "01",
      tagKey: "ai_code_tag",
      statKey: "ai_code_stat",
      titleKey: "ai_code_title",
      textKey: "ai_code_text",
      icon: <FaRobot />,
      fill: "94%",
      accent: "cyan",
    },
    {
      num: "02",
      tagKey: "design_sells_tag",
      statKey: "design_sells_stat",
      titleKey: "design_sells_title",
      textKey: "design_sells_text",
      icon: <FaPenNib />,
      fill: "98%",
      accent: "violet",
    },
    {
      num: "03",
      tagKey: "content_key_tag",
      statKey: "content_key_stat",
      titleKey: "content_key_title",
      textKey: "content_key_text",
      icon: <FaImages />,
      fill: "100%",
      accent: "cyan",
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height - 0.5) * -7).toFixed(2);
    const ry = ((x / rect.width - 0.5) * 7).toFixed(2);
    card.style.transform = `perspective(950px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  const reset = (e) => {
    e.currentTarget.style.transform =
      "perspective(950px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section className="glass-section" id="why">
      <div className="section-orb section-orb-left" />
      <div className="section-orb section-orb-right" />

      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge-dot" />
          <span>{t("why_badge")}</span>
        </motion.div>

        <motion.h2
          className="glass-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("why_maestroweb_title")}
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          {t("why_subtitle")}
        </motion.p>
      </div>

      <div className="glass-grid">
        {data.map((item, i) => (
          <motion.div
            key={item.titleKey}
            className="glass-card"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.14, duration: 0.6 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
          >
            <div className="card-spotlight" />

            {/* Studio OS Window Bar */}
            <div className="studio-card-topbar" dir="ltr">
              <div className="studio-card-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="card-meta-group">
                <span className="card-telemetry-pill">{t(item.tagKey)}</span>
                <span className="card-index">SYS // {item.num}</span>
              </div>
            </div>

            <div className="card-icon-row">
              <div className={`icon-box ${item.accent}`}>{item.icon}</div>
            </div>

            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.textKey)}</p>

            <div className="card-telemetry-footer">
              <div className="card-telemetry-meta" dir="ltr">
                <span>BENCHMARK // ACTIVE</span>
                <span className="card-telemetry-val">{t(item.statKey)}</span>
              </div>
              <div className="card-gauge-bar">
                <div
                  className={`card-gauge-fill ${item.accent}`}
                  style={{ width: item.fill }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GlassCardShowcase;
