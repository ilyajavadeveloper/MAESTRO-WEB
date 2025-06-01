// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // <-- Добавляем импорт

const Footer = () => {
  const { t } = useTranslation(); // <-- Инициализируем хук
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>{t("footer_contacts")}</h4>{" "}
          {/* <-- Переводим заголовок колонки */}
          <p>
            <FaPhone /> {t("phone_number")}
          </p>{" "}
          {/* <-- Переводим номер телефона */}
          <p>
            <FaMapMarkerAlt /> {t("address")}
          </p>{" "}
          {/* <-- Переводим адрес */}
          <a href="https://wa.me/972524388967" className="footer-btn">
            <FaWhatsapp /> {t("whatsapp_btn")}
          </a>{" "}
          {/* <-- Переводим текст кнопки WhatsApp */}
        </div>
        <div className="footer-col">
          <h4>{t("footer_navigation")}</h4>{" "}
          {/* <-- Переводим заголовок колонки */}
          <ul>
            <li>
              <a href="#services">{t("footer_services")}</a>
            </li>{" "}
            {/* <-- Переводим ссылку */}
            <li>
              <a href="#about">{t("footer_about_us")}</a>
            </li>{" "}
            {/* <-- Переводим ссылку */}
            <li>
              <a href="#faq">{t("footer_faq")}</a>
            </li>{" "}
            {/* <-- Переводим ссылку */}
            <li>
              <a href="#contact">{t("footer_contacts")}</a>
            </li>{" "}
            {/* <-- Переводим ссылку */}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t("footer_social_media")}</h4>{" "}
          {/* <-- Переводим заголовок колонки */}
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>{" "}
            {/* <-- Добавил target="_blank" и rel="noreferrer" */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        {/*
          Для перевода текста с переменными используем синтаксис {{year}}
          i18next автоматически заменит его на значение
        */}
        <p>{t("footer_copyright", { year: currentYear })}</p>{" "}
        {/* <-- Переводим копирайт */}
      </div>
    </footer>
  );
};

export default Footer;