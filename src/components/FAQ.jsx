import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation();

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
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("faq_title")}
      </motion.h2>

      <div className="faq-list">
        {questionsData.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={item.qKey}
              className={`faq-card ${isOpen ? "open" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span>{t(item.qKey)}</span>
                <FaChevronDown className={`faq-chevron ${isOpen ? "rotated" : ""}`} />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{t(item.aKey)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
