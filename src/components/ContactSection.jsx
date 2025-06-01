// src/components/ContactSection.jsx
import React from "react";
import "./ContactSection.css";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">{t("contact_title")}</h2>{" "}
        <p>{t("phone_number")}</p>
        <p>{t("address")}</p>
        {/* Ключевое изменение: добавлен класс "contact-btn-whatsapp" для стилизации */}
        <a href="https://wa.me/972524388967" className="contact-btn contact-btn-whatsapp" target="_blank" rel="noopener noreferrer">
          {t("whatsapp_btn")}
        </a>
        {/* Если ты будешь добавлять карту, то вот куда её можно вставить: */}
        {/* <div className="map">
          {/* Здесь будет iframe с картой или компонент карты }
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;