// src/App.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import './i18n'; // Импортируй свою конфигурацию i18n

import "./index.css";
import Navbar from "./components/NavBar";
import Services from "./components/Services.jsx"; // ИСПРАВЛЕНО
import GlassCardShowcase from "./components/GlassCardShowcase.jsx"; // ИСПРАВЛЕНО
import FAQ from "./components/FAQ.jsx"; // ИСПРАВЛЕНО
import ContactSection from "./components/ContactSection.jsx"; // ИСПРАВЛЕНО
import AboutUs from "./components/AboutUs.jsx"; // ИСПРАВЛЕНО
import AccessibilityButton from "./components/AccessibilityButton.jsx"; // ИСПРАВЛЕНО
import Footer from "./components/Footer.jsx"; // Вероятно, тоже .jsx
import HeroSection from "./components/HeroSection.jsx"; // ИСПРАВЛЕНО
import CustomCursor from "./components/CustomCursor.jsx"; // ИСПРАВЛЕНО
import GlitchIntro from "./components/GlitchIntro.jsx"; // ИСПРАВЛЕНО

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n.language, i18n]); // Добавляем i18n в зависимости, если еще не добавлено

  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection/>
      <GlassCardShowcase />
      <Services/>
      <AboutUs/>
      <FAQ />

      <Footer />
 {/* Ты импортировал его, но не использовал в JSX */}
    </>
  );
}

export default App;
