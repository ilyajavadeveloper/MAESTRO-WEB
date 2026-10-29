import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCameraRetro,
  FaQrcode,
  FaAddressCard,
  FaPalette,
  FaCommentDots,
  FaArrowRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      num: "01",
      tagKey: "service_selling_site_tag",
      icon: <FaLaptopCode />,
      titleKey: "service_selling_site_title",
      descKey: "service_selling_site_desc",
      accent: "cyan",
    },
    {
      num: "02",
      tagKey: "service_portfolio_tag",
      icon: <FaCameraRetro />,
      titleKey: "service_portfolio_title",
      descKey: "service_portfolio_desc",
      accent: "violet",
    },
    {
      num: "03",
      tagKey: "service_qr_price_tag",
      icon: <FaQrcode />,
      titleKey: "service_qr_price_title",
      descKey: "service_qr_price_desc",
      accent: "cyan",
    },
    {
      num: "04",
      tagKey: "service_business_card_tag",
      icon: <FaAddressCard />,
      titleKey: "service_business_card_title",
      descKey: "service_business_card_desc",
      accent: "violet",
    },
    {
      num: "05",
      tagKey: "service_visual_style_tag",
      icon: <FaPalette />,
      titleKey: "service_visual_style_title",
      descKey: "service_visual_style_desc",
      accent: "cyan",
    },
    {
      num: "06",
      tagKey: "service_feedback_tag",
      icon: <FaCommentDots />,
      titleKey: "service_feedback_title",
      descKey: "service_feedback_desc",
      accent: "violet",
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height - 0.5) * -7).toFixed(2);
    const rotateY = ((x / width - 0.5) * 7).toFixed(2);
    card.style.transform = `perspective(950px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  const reset = (e) => {
    e.currentTarget.style.transform =
      "perspective(950px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section className="services" id="services">
      <div className="section-orb section-orb-right" />
      <div className="section-orb section-orb-left" />

      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge-dot" />
          <span>{t("services_badge")}</span>
        </motion.div>

        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("services_title")}
        </motion.h2>
      </div>

      <div className="services-grid">
        {servicesData.map((s, i) => (
          <motion.div
            key={s.titleKey}
            className="service-card"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
          >
            <div className="card-spotlight" />

            <div className="card-top-row">
              <div className={`service-icon ${s.accent}`}>{s.icon}</div>
              <div className="card-meta-group">
                <span className="card-telemetry-pill" dir="ltr">
                  {t(s.tagKey)}
                </span>
                <span className="card-index" dir="ltr">
                  {s.num}
                </span>
              </div>
            </div>

            <h3>{t(s.titleKey)}</h3>
            <p>{t(s.descKey)}</p>

            <div className="service-card-footer">
              <a
                href="https://wa.me/972524388967"
                target="_blank"
                rel="noopener noreferrer"
                className="service-action-link"
              >
                <span>{t("service_cta")}</span>
                <FaArrowRight className="service-action-arrow" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
