import React from "react";
import "./ContactSection.css";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-glow-orb" />

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

        <a
          href="https://wa.me/972524388967"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span>{t("whatsapp_btn")}</span>
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
