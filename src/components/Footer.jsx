import React from "react";
import "./Footer.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Top Studio Identity Bar */}
        <div className="footer-brand-bar">
          <div className="footer-brand-info">
            <a href="#hero" className="footer-logo" aria-label="MAESTRO WEB">
              MAESTRO<span>WEB</span>
            </a>
            <p className="footer-tagline">{t("footer_tagline")}</p>
          </div>

          <div className="footer-status-pill" dir="ltr">
            <span className="status-ping" />
            <span>{t("footer_status")}</span>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>{t("footer_contacts")}</h4>

            <ul className="footer-list">
              <li>
                <span className="footer-icon-box">
                  <FaPhone className="footer-icon" />
                </span>
                <a href="tel:+972524388967" dir="ltr">
                  +972 52 438 8967
                </a>
              </li>

              <li>
                <span className="footer-icon-box">
                  <FaMapMarkerAlt className="footer-icon" />
                </span>
                <a
                  href="https://www.google.com/maps?q=Sderot+Yerushalayim+18+Ashdod"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("address")}
                </a>
              </li>
            </ul>

            <a
              className="whatsapp-btn"
              href="https://wa.me/972524388967"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              <span>{t("whatsapp_btn")}</span>
            </a>
          </div>

          <div className="footer-col">
            <h4>{t("footer_navigation")}</h4>

            <ul className="footer-list footer-nav-list">
              <li>
                <a href="#why">{t("nav_why")}</a>
              </li>
              <li>
                <a href="#services">{t("footer_services")}</a>
              </li>
              <li>
                <a href="#about">{t("footer_about_us")}</a>
              </li>
              <li>
                <a href="#faq">{t("footer_faq")}</a>
              </li>
              <li>
                <a href="#contact">{t("footer_contacts")}</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("portfolio_web_dev")}</h4>

            <div className="footer-projects-group">
              <a
                className="footer-project-card"
                href="https://portfolio-ilyajavadevs-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t("portfolio_web_dev")}</span>
                <FaExternalLinkAlt />
              </a>

              <a
                className="footer-project-card"
                href="https://maestro-studio-phi.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t("portfolio_maestrostudio")} — {t("portfolio_studio_site")}</span>
                <FaExternalLinkAlt />
              </a>
            </div>

            <h4 className="footer-subtitle">{t("footer_social_media")}</h4>

            <div className="socials">
              <a
                href="https://www.facebook.com/ilya.hvostenko/?locale=ru_RU"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/ilyahvostenko?igsh=Y3ZseWc2c2ViMG41"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer_copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
