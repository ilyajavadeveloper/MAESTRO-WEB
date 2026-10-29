import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const items = [
    {
      num: "01",
      tagKey: "our_mission_tag",
      metricKey: "our_mission_metric",
      icon: <FaBullseye />,
      titleKey: "our_mission_title",
      textKey: "our_mission_text",
      accent: "cyan",
      fill: "96%",
    },
    {
      num: "02",
      tagKey: "our_approach_tag",
      metricKey: "our_approach_metric",
      icon: <FaLightbulb />,
      titleKey: "our_approach_title",
      textKey: "our_approach_text",
      accent: "violet",
      fill: "95%",
    },
    {
      num: "03",
      tagKey: "our_team_tag",
      metricKey: "our_team_metric",
      icon: <FaUsers />,
      titleKey: "our_team_title",
      textKey: "our_team_text",
      accent: "cyan",
      fill: "100%",
    },
  ];

  const pipelineSteps = [
    {
      step: "01",
      titleKey: "process_step_1_title",
      descKey: "process_step_1_desc",
    },
    {
      step: "02",
      titleKey: "process_step_2_title",
      descKey: "process_step_2_desc",
    },
    {
      step: "03",
      titleKey: "process_step_3_title",
      descKey: "process_step_3_desc",
    },
    {
      step: "04",
      titleKey: "process_step_4_title",
      descKey: "process_step_4_desc",
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rx = ((y / height - 0.5) * -7).toFixed(2);
    const ry = ((x / width - 0.5) * 7).toFixed(2);
    card.style.transform = `perspective(950px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  const reset = (e) => {
    e.currentTarget.style.transform =
      "perspective(950px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section id="about" className="aboutus">
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
          <span>{t("about_badge")}</span>
        </motion.div>

        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("about_us")}
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          {t("about_subtitle")}
        </motion.p>
      </div>

      <div className="about-grid">
        {items.map((item, i) => (
          <motion.div
            key={item.titleKey}
            className="about-card"
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
                <span className="card-index">CORE // {item.num}</span>
              </div>
            </div>

            <div className="about-icon-row">
              <div className={`about-icon ${item.accent}`}>{item.icon}</div>
            </div>

            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.textKey)}</p>

            <div className="card-telemetry-footer">
              <div className="card-telemetry-meta" dir="ltr">
                <span>STUDIO METRIC</span>
                <span className="card-telemetry-val">{t(item.metricKey)}</span>
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

      {/* 4-Step Studio Execution Pipeline Bar (Unified Hero Window Style) */}
      <motion.div
        className="about-pipeline-console"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.2 }}
      >
        <div className="pipeline-topbar" dir="ltr">
          <div className="studio-card-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="pipeline-url">
            maestroweb.studio // 7-14-day-execution-pipeline
          </span>
          <span className="pipeline-status">
            <span className="status-ping" />
            <span>4-STAGE WORKFLOW</span>
          </span>
        </div>

        <div className="pipeline-steps-grid">
          {pipelineSteps.map((p) => (
            <div className="pipeline-step-card" key={p.step}>
              <div className="pipeline-step-head" dir="ltr">
                <span className="pipeline-step-num">STEP // {p.step}</span>
                <span className="pipeline-step-line" />
              </div>
              <h4>{t(p.titleKey)}</h4>
              <p>{t(p.descKey)}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
