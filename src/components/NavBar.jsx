// src/components/Navbar.jsx
import React, { useState } from "react";
import "./NavBar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Логотип */}
        <div className="logo">MAESTRO<span>WEB</span></div>

        {/* Языки по центру (только на десктопе) */}
        <div className="lang-switcher-center">
          <LanguageSwitcher />
        </div>

        {/* Ссылки и бургер */}
        <div className="navbar-right">
          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="#services" onClick={() => setIsOpen(false)}>{t("nav_services")}</a>
            <a href="#about" onClick={() => setIsOpen(false)}>{t("nav_about")}</a>
            <a href="#faq" onClick={() => setIsOpen(false)}>{t("nav_faq")}</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>{t("nav_contacts")}</a>
            {/* Языки только в бургер-режиме */}
            <div className="lang-switcher-mobile">
              <LanguageSwitcher />
            </div>
          </nav>

          <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
