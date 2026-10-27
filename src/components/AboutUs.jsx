import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const items = [
    { icon: <FaBullseye />, titleKey: "our_mission_title", textKey: "our_mission_text" },
    { icon: <FaLightbulb />, titleKey: "our_approach_title", textKey: "our_approach_text" },
    { icon: <FaUsers />, titleKey: "our_team_title", textKey: "our_team_text" },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rx = ((y / height - 0.5) * -8).toFixed(2);
    const ry = ((x / width - 0.5) * 8).toFixed(2);
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
  };

  const reset = (e) => {
    e.currentTarget.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="about" className="aboutus">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t("about_us")}
      </motion.h2>

      <div className="about-grid">
        {items.map((item, i) => (
          <motion.div
            key={item.titleKey}
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
          >
            <div className="about-icon">{item.icon}</div>
            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.textKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
