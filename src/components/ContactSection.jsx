import React, { useState } from "react";
import "./ContactSection.css";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBolt,
  FaCheck,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const projectTopics = [
    t("service_selling_site_title"),
    t("service_portfolio_title"),
    t("service_qr_price_title"),
    t("service_business_card_title"),
    t("service_visual_style_title"),
    t("service_feedback_title"),
  ];

  const handleMouseMove = (e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    box.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    box.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const whatsappMessage = selectedTopic
    ? `${t("contact_whatsapp_prefill")}: ${selectedTopic}`
    : t("contact_whatsapp_prefill");

  const whatsappHref = `https://wa.me/972524388967?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contact" className="contact">
      <div className="section-orb section-orb-left" />
      <div className="section-orb section-orb-right" />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        onMouseMove={handleMouseMove}
      >
        <div className="contact-spotlight" />
        <div className="contact-glow-orb" />

        {/* Studio Window Topbar (Unified with Hero 3D Stage) */}
        <div className="contact-topbar" dir="ltr">
          <div className="contact-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="contact-url">
            maestroweb.studio // direct-connect
          </div>
          <div className="contact-live-status">
            <span className="status-ping" />
            <span>{t("contact_status")}</span>
          </div>
        </div>

        <div className="contact-body">
          <div className="section-badge contact-badge">
            <span className="section-badge-dot" />
            <span>{t("contact_badge")}</span>
          </div>

          <h2 className="contact-title">{t("contact_title")}</h2>
          <p className="contact-subtitle">{t("contact_subtitle")}</p>

          {/* Interactive Project Configurator Chips */}
          <div className="contact-configurator">
            <span className="configurator-label">
              {t("contact_select_label")}
            </span>
            <div className="configurator-chips">
              {projectTopics.map((topic) => {
                const isSelected = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    className={`configurator-chip ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() =>
                      setSelectedTopic(isSelected ? null : topic)
                    }
                    aria-pressed={isSelected}
                  >
                    {isSelected && <FaCheck className="chip-check-icon" />}
                    <span>{topic}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="contact-details">
            <a href="tel:+972524388967" className="contact-chip">
              <FaPhoneAlt className="contact-chip-icon" />
              <span dir="ltr">{t("phone_number")}</span>
            </a>

            <a
              href="https://www.google.com/maps?q=Sderot+Yerushalayim+18+Ashdod"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip"
            >
              <FaMapMarkerAlt className="contact-chip-icon" />
              <span>{t("address")}</span>
            </a>
          </div>

          <div className="contact-cta-group">
            <a
              href={whatsappHref}
              className="contact-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="whatsapp-icon" />
              <span>{t("whatsapp_btn")}</span>
            </a>

            <span className="contact-response-pill">
              <FaBolt className="response-bolt" />
              <span>{t("contact_response_time")}</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
