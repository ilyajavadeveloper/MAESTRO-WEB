import React, { useState, useEffect } from "react";
import "./NavBar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#hero" className="logo" onClick={closeMenu} aria-label="MAESTRO WEB">
          MAESTRO<span>WEB</span>
        </a>

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

          <div className="lang-switcher-desktop">
            <LanguageSwitcher />
          </div>

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
