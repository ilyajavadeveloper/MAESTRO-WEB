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
      icon: <FaBullseye />,
      titleKey: "our_mission_title",
      textKey: "our_mission_text",
    },
    {
      num: "02",
      icon: <FaLightbulb />,
      titleKey: "our_approach_title",
      textKey: "our_approach_text",
    },
    {
      num: "03",
      icon: <FaUsers />,
      titleKey: "our_team_title",
      textKey: "our_team_text",
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
            <div className="card-top-row">
              <div className="about-icon">{item.icon}</div>
              <span className="card-index" dir="ltr">
                {item.num}
              </span>
            </div>
            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.textKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
