import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation();

  const questionsData = [
    { num: "01", qKey: "price_q", aKey: "price_a" },
    { num: "02", qKey: "time_q", aKey: "time_a" },
    { num: "03", qKey: "client_needs_q", aKey: "client_needs_a" },
    { num: "04", qKey: "support_q", aKey: "support_a" },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="faq-section">
      <div className="section-orb section-orb-right" />

      <div className="section-header">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge-dot" />
          <span>{t("faq_badge")}</span>
        </motion.div>

        <motion.h2
          className="faq-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t("faq_title")}
        </motion.h2>
      </div>

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
                <span className="faq-question-left">
                  <span className="faq-num" dir="ltr">
                    {item.num}
                  </span>
                  <span className="faq-question-text">{t(item.qKey)}</span>
                </span>
                <span className={`faq-chevron-wrap ${isOpen ? "rotated" : ""}`}>
                  <FaChevronDown className="faq-chevron" />
                </span>
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
