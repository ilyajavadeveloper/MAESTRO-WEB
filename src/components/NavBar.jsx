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
        {/* Слева логотип */}
        <div className="logo">MAESTROWEB</div>

        {/* Справа навигация и языки */}
        <div className="navbar-right">
          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="#services" onClick={() => setIsOpen(false)}>{t("nav_services")}</a>
            <a href="#about" onClick={() => setIsOpen(false)}>{t("nav_about")}</a>
            <a href="#faq" onClick={() => setIsOpen(false)}>{t("nav_faq")}</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>{t("nav_contacts")}</a>
          </nav>

          {/* Языки справа от ссылок (только на десктопе) */}
          <div className="lang-switcher-desktop">
            <LanguageSwitcher />
          </div>

          {/* Бургер */}
          <div className="burger" onClick={toggleMenu}>
            <div className={`line ${isOpen ? "open" : ""}`}></div>
            <div className={`line ${isOpen ? "open" : ""}`}></div>
            <div className={`line ${isOpen ? "open" : ""}`}></div>
          </div>
        </div>
      </div>

      {/* Языки внутри меню (мобилка) */}
      {isOpen && (
        <div className="lang-switcher-mobile">
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
};

export default Navbar;
