// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher"; // Убедись, что путь к LanguageSwitcher правильный
import { useTranslation } from "react-i18next"; // ОБЯЗАТЕЛЬНО ИМПОРТИРУЙ useTranslation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { t } = useTranslation(); // Инициализируем хук для работы с переводами

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">MAESTROWEB</div>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* Используем функцию t() с КЛЮЧАМИ из твоих JSON-файлов */}
          <a href="#services" onClick={() => setIsOpen(false)}>{t("nav_services")}</a>
          <a href="#about" onClick={() => setIsOpen(false)}>{t("nav_about")}</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>{t("nav_faq")}</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>{t("nav_contacts")}</a>
          <a
            href="https://portfolio-ilyajavadevs-projects.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAadxzrIJCGBYEp8_dqk_OeIGgHX2nPhXiP6t3W8AHudmK1E5lI-oVdAz5I4wCA_aem_SiHG7Tif43yhQIkjpLGEQA"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            {t("nav_portfolio")}
          </a>
          <a
            href="https://maestro-studio-landing.vercel.app/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            {t("nav_maestrostudio")}
          </a>
          <LanguageSwitcher /> {/* Твой компонент для переключения языков */}
        </nav>

        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;