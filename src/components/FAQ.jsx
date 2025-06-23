import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import "./FAQ.css"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const { t } = useTranslation()

  const questionsData = [
    { qKey: "price_q", aKey: "price_a" },
    { qKey: "time_q", aKey: "time_a" },
    { qKey: "client_needs_q", aKey: "client_needs_a" },
    { qKey: "support_q", aKey: "support_a" },
  ]

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

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
        {questionsData.map((item, i) => (
          <motion.div
            key={i}
            className={`faq-card ${openIndex === i ? "open" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            onClick={() => toggle(i)}
          >
            <div className="faq-question">
              <span>{t(item.qKey)}</span>
              {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {openIndex === i && (
              <motion.div
                className="faq-answer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p>{t(item.aKey)}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
