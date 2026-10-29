import React from "react";
import "./ContactSection.css";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBolt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

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
      >
        <div className="contact-glow-orb" />

        {/* Studio Window Topbar (Unified with Hero 3D Stage) */}
        <div className="contact-topbar" dir="ltr">
          <div className="contact-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="contact-url">maestroweb.studio // direct-connect</div>
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
              href="https://wa.me/972524388967"
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
