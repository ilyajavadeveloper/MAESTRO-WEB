// ✅ Footer.jsx (симметрично выровненные иконки + улучшенный стиль)
import React from "react"
import "./Footer.css"
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="footer-wrapper">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>{t("footer_contacts")}</h4>
            <ul className="footer-list">
              <li><FaPhone /><a href="https://wa.me/972524388967" target="_blank" rel="noreferrer">+972 52 438 8967</a></li>
              <li><FaMapMarkerAlt /><a href="https://www.google.com/maps?q=Herzl+St+Tel+Aviv" target="_blank" rel="noreferrer">{t("address")}</a></li>
            </ul>
            <a
              className="whatsapp-btn"
              href="https://wa.me/972524388967"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> {t("whatsapp_btn")}
            </a>
          </div>

          <div className="footer-col">
            <h4>{t("footer_navigation")}</h4>
            <ul className="footer-list">
              <li><a href="#services">{t("footer_services")}</a></li>
              <li><a href="#about">{t("footer_about_us")}</a></li>
              <li><a href="#faq">{t("footer_faq")}</a></li>
              <li><a href="#contact">{t("footer_contacts")}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("portfolio_web_dev")}</h4>
            <a href="https://portfolio-ilyajavadevs-projects.vercel.app/" target="_blank" rel="noreferrer">{t("portfolio_web_dev")}</a>
            <h4>{t("portfolio_maestrostudio")}</h4>
            <a href="https://maestro-studio-phi.vercel.app/" target="_blank" rel="noreferrer">{t("portfolio_studio_site")}</a>
            <h4>{t("footer_social_media")}</h4>
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer_copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
