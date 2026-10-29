import React, { useState, useEffect } from "react";
import "./NavBar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const SECTION_IDS = ["hero", "why", "services", "about", "faq", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
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

      const scrollPos = window.scrollY + 220;
      let current = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "why", num: "01", label: t("nav_why") },
    { id: "services", num: "02", label: t("nav_services") },
    { id: "about", num: "03", label: t("nav_about") },
    { id: "faq", num: "04", label: t("nav_faq") },
    { id: "contact", num: "05", label: t("nav_contacts") },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a
          href="#hero"
          className="logo"
          onClick={closeMenu}
          aria-label="MAESTRO WEB"
          dir="ltr"
        >
          <span className="logo-dot" />
          MAESTRO<span className="logo-italic">WEB</span>
        </a>

        <div className="navbar-right">
          <nav
            className={`nav-links ${isOpen ? "open" : ""}`}
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={closeMenu}
              >
                <span className="nav-item-num" dir="ltr">
                  {item.num}
                </span>
                <span>{item.label}</span>
              </a>
            ))}

            <a
              href="https://maestro-studio-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-external"
              onClick={closeMenu}
              dir="ltr"
            >
              <span>{t("nav_maestrostudio")}</span>
              <span className="nav-ext-arrow">↗</span>
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
