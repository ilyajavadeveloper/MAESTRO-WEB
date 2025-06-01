// src/components/GlassCardShowcase.jsx
import React from "react";
import "./GlassCardShowcase.css";
import { motion } from "framer-motion";
import { FaRobot, FaPenNib, FaImages } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // <-- Добавляем импорт

const GlassCardShowcase = () => {
  const { t } = useTranslation(); // <-- Инициализируем хук

  // Теперь данные будут определяться внутри компонента,
  // чтобы использовать функцию t()
  const data = [
    {
      titleKey: "ai_code_title", // Ключ для заголовка
      textKey: "ai_code_text",   // Ключ для текста
      icon: <FaRobot />,
    },
    {
      titleKey: "design_sells_title",
      textKey: "design_sells_text",
      icon: <FaPenNib />,
    },
    {
      titleKey: "content_key_title",
      textKey: "content_key_text",
      icon: <FaImages />,
    },
  ];

  const handleMouseMove = (e, i) => {
    const card = document.querySelectorAll(".glass-card")[i];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height - 0.5) * -10).toFixed(2);
    const ry = ((x / rect.width - 0.5) * 10).toFixed(2);
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
  };

  const reset = (i) => {
    const card = document.querySelectorAll(".glass-card")[i];
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section className="glass-section">
      <motion.h2
        className="glass-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {t("why_maestroweb_title")}{" "}
        {/* <-- Используем ключ для заголовка секции */}
      </motion.h2>
      <div className="glass-grid">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => reset(i)}
          >
            <div className="icon-box">{item.icon}</div>
            <h3>{t(item.titleKey)}</h3> {/* <-- Используем ключ для заголовка карточки */}
            <p>{t(item.textKey)}</p>     {/* <-- Используем ключ для текста карточки */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GlassCardShowcase;