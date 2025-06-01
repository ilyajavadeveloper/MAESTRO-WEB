// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // <-- Добавляем импорт

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation(); // <-- Инициализируем хук

  // Вопросы теперь будут браться из переводов по ключам
  const questionsData = [
    { qKey: "price_q", aKey: "price_a" },
    { qKey: "time_q", aKey: "time_a" },
    { qKey: "client_needs_q", aKey: "client_needs_a" },
    { qKey: "support_q", aKey: "support_a" },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="faq-section">
      <motion.h2
        className="faq-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {t("faq_title")}{" "}
        {/* <-- Используем ключ для заголовка секции */}
      </motion.h2>
      <div className="faq-list">
        {questionsData.map((item, i) => (
          <motion.div
            key={i}
            className={`faq-item ${openIndex === i ? "open" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => toggle(i)}
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const { left, top, width, height } = el.getBoundingClientRect();
              const x = e.clientX - left;
              const y = e.clientY - top;
              const rx = ((y / height - 0.5) * -8).toFixed(2);
              const ry = ((x / width - 0.5) * 8).toFixed(2);
              el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
            }}
          >
            <div className="faq-question">
              <span>{t(item.qKey)}</span>{" "}
              {/* <-- Переводим вопрос */}
              {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === i && (
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p>{t(item.aKey)}</p>{" "}
                {/* <-- Переводим ответ */}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;