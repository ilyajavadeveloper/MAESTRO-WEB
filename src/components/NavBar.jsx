import React, { useState } from "react";
import "./NavBar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo" onClick={closeMenu}>
          MAESTRO<span>WEB</span>
        </a>

        <div className="lang-switcher-center">
          <LanguageSwitcher />
        </div>

        <div className="navbar-right">
          <nav className={`nav-links ${isOpen ? "open" : ""}`} aria-label="Main Navigation">
            <a href="#why" onClick={closeMenu}>{t("nav_why")}</a>
            <a href="#services" onClick={closeMenu}>{t("nav_services")}</a>
            <a href="#about" onClick={closeMenu}>{t("nav_about")}</a>
            <a href="#faq" onClick={closeMenu}>{t("nav_faq")}</a>
            <a href="#contact" onClick={closeMenu}>{t("nav_contacts")}</a>
            <a
              href="https://maestro-studio-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-external"
              onClick={closeMenu}
            >
              {t("nav_maestrostudio")}
            </a>

            <div className="lang-switcher-mobile">
              <LanguageSwitcher />
            </div>
          </nav>

          <button
            type="button"
            className={`burger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
