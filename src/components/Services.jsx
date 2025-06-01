// src/components/Services.jsx
import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCameraRetro,
  FaQrcode,
  FaAddressCard,
  FaPalette,
  FaCommentDots,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // <-- Добавляем импорт

const Services = () => {
  const { t } = useTranslation(); // <-- Инициализируем хук

  // Теперь данные будут определяться внутри компонента,
  // чтобы использовать функцию t()
  const servicesData = [
    {
      icon: <FaLaptopCode />,
      titleKey: "service_selling_site_title",
      descKey: "service_selling_site_desc",
    },
    {
      icon: <FaCameraRetro />,
      titleKey: "service_portfolio_title",
      descKey: "service_portfolio_desc",
    },
    {
      icon: <FaQrcode />,
      titleKey: "service_qr_price_title",
      descKey: "service_qr_price_desc",
    },
    {
      icon: <FaAddressCard />,
      titleKey: "service_business_card_title",
      descKey: "service_business_card_desc",
    },
    {
      icon: <FaPalette />,
      titleKey: "service_visual_style_title",
      descKey: "service_visual_style_desc",
    },
    {
      icon: <FaCommentDots />,
      titleKey: "service_feedback_title",
      descKey: "service_feedback_desc",
    },
  ];

  const handleMouseMove = (e, i) => {
    const card = document.querySelectorAll(".service-card")[i];
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height - 0.5) * -10).toFixed(2);
    const rotateY = ((x / width - 0.5) * 10).toFixed(2);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const reset = (i) => {
    const card = document.querySelectorAll(".service-card")[i];
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section id="services" className="services">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {t("services_title")}{" "}
        {/* <-- Используем ключ для заголовка секции */}
      </motion.h2>
      <div className="services-grid">
        {servicesData.map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => reset(i)}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{t(s.titleKey)}</h3>{" "}
            {/* <-- Переводим заголовок услуги */}
            <p>{t(s.descKey)}</p>{" "}
            {/* <-- Переводим описание услуги */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;