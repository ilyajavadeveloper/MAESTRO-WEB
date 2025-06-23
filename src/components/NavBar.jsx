import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Логотип */}
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          HUDZ<span>AHAV</span>
        </div>

        {/* Навигация */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about">{t("nav_about")}</a>
          <a href="#services">{t("nav_services")}</a>
          <a href="#gallery">{t("nav_gallery")}</a>
          <a href="#faq">{t("nav_faq")}</a>
          <a href="#contact">{t("nav_contact")}</a>
        </div>

        {/* Языки на десктопе */}
        <div className="lang-switcher-desktop">
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("ru")}>RU</button>
          <button onClick={() => changeLanguage("he")}>HE</button>
        </div>

        {/* Бургер */}
        <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>

      {/* Языки снизу navbar на мобилке */}
      <div className="navbar-language-bottom">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("he")}>HE</button>
      </div>
    </nav>
  );
};

export default Navbar;
